import { useState, useEffect } from "react";
import api from "../api/axios";
import { Spinner, Alert, Button, Modal } from "../components/UI";

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedNotif, setSelectedNotif] = useState(null);

  const fetchNotifs = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/notifications");
      setNotifs(data.data || []);
    } catch {
      setError("Failed to load notifications");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotifs();
  }, []);

  const markRead = async (id) => {
    try {
      await api.put(`/notifications/${id}/read`);
      fetchNotifs();
    } catch {}
  };

  const markAll = async () => {
    try {
      await api.put("/notifications/read-all");
      fetchNotifs();
    } catch {}
  };

  const deleteNotif = async (id) => {
    try {
      await api.delete(`/notifications/${id}`);
      fetchNotifs();
    } catch {}
  };

  const unread = notifs.filter((n) => !n.is_read).length;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Notifications
            </h1>
            {unread > 0 && (
              <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
                {unread} unread message{unread > 1 ? "s" : ""}
              </p>
            )}
          </div>
          {unread > 0 && (
            <button
              onClick={markAll}
              className="px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              Mark all as read
            </button>
          )}
        </div>

        {error && <Alert type="error" message={error} />}

        {loading ? (
          <div className="flex justify-center py-20">
            <Spinner size={12} />
          </div>
        ) : notifs.length === 0 ? (
          <div className="text-center py-24 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30 rounded-3xl border border-gray-200 dark:border-white/5">
            <div className="text-6xl mb-4">🔔</div>
            <p className="text-lg">You're all caught up!</p>
            <p className="text-sm mt-2 opacity-60">
              No new notifications at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifs.map((n) => (
              <div
                key={n.id}
                onClick={() => {
                  setSelectedNotif(n);
                  if (!n.is_read) markRead(n.id);
                }}
                className={`rounded-2xl border p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 ${n.is_read ? "bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-800" : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/30"}`}
              >
                <div className="mt-1 flex-shrink-0">
                  <span className="text-2xl">{n.is_read ? "📭" : "📬"}</span>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-medium mb-1 text-lg ${n.is_read ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white font-semibold"}`}
                  >
                    {n.message.length > 60
                      ? n.message.substring(0, 60) + "..."
                      : n.message}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(n.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2 flex-shrink-0 items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotif(n.id);
                    }}
                    className="p-2 rounded-xl text-gray-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-400/10 transition-colors"
                    title="Delete"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detail Modal */}
        <Modal
          open={!!selectedNotif}
          onClose={() => setSelectedNotif(null)}
          title="Message Details"
        >
          {selectedNotif && (
            <div className="space-y-5">
              <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-5">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center text-2xl">
                  🔔
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                    Received
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {new Date(selectedNotif.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed text-[15px]">
                  {selectedNotif.message}
                </p>
              </div>
              <div className="flex justify-end pt-2">
                <Button onClick={() => setSelectedNotif(null)}>Close</Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
