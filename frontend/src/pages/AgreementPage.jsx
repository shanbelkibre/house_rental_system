import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { confirmAgreement, getHouse, getMyAgreements } from "../services/api";
import { Alert, Button, Modal, Spinner } from "../components/UI";
import OwnerReliabilityCard from "../components/OwnerReliabilityCard";
import AgreementCard from "../components/AgreementCard";

export default function AgreementPage() {
  const { id } = useParams();
  const [agreement, setAgreement] = useState(null);
  const [agreements, setAgreements] = useState([]);
  const [owner, setOwner] = useState(null);
  const [house, setHouse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const selectedAgreement = useMemo(() => agreement, [agreement]);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchAgreement = async () => {
    setLoading(true);
    try {
      const { data } = await getMyAgreements();
      const list = data.data || [];
      setAgreements(list);
      const found = list.find((a) => String(a.id) === String(id));
      if (!found) {
        setError("Agreement not found.");
        setAgreement(null);
        return;
      }
      setAgreement(found);

      if (found.house?.id) {
        const houseRes = await getHouse(found.house.id);
        const houseData = houseRes.data?.data || houseRes.data;
        setHouse(houseData);
        setOwner(houseData?.owner || houseData?.user || null);
        if (houseData?.owner?.id) {
          const reviewRes = await api.get(
            `/users/${houseData.owner.id}/reviews`,
          );
          const reviewData = reviewRes.data?.data || reviewRes.data || [];
          setReviews(Array.isArray(reviewData) ? reviewData : []);
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load agreement.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgreement();
  }, [id]);

  const handleConfirm = async () => {
    if (!selectedAgreement) return;
    try {
      await confirmAgreement(selectedAgreement.id);
      showToast("success", "Agreement confirmed successfully.");
      setConfirmModalOpen(false);
      fetchAgreement();
    } catch (err) {
      showToast(
        "error",
        err.response?.data?.message || "Failed to confirm agreement.",
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size={12} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Alert type="error" message={error} />
      </div>
    );
  }

  if (!selectedAgreement) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      {toast && (
        <div className="fixed top-24 right-6 z-50 w-80">
          <Alert type={toast.type} message={toast.message} />
        </div>
      )}

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Agreement Details
            </h1>
            <p className="text-gray-500">
              Review all details before confirming.
            </p>
          </div>

          <AgreementCard agreement={selectedAgreement} showLink={false} />

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 space-y-4 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Confirmation
              </h2>
              <span className="text-sm text-gray-500">
                Status: {selectedAgreement.status}
              </span>
            </div>

            <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={confirmChecked}
                onChange={(event) => setConfirmChecked(event.target.checked)}
                disabled={selectedAgreement.status === "confirmed"}
              />
              I agree to rent from {owner?.name || "the owner"}.
            </label>

            <p className="text-sm text-amber-600">
              By confirming, you are entering a legally binding agreement.
            </p>

            <Button
              variant="primary"
              className="w-full"
              disabled={
                !confirmChecked || selectedAgreement.status === "confirmed"
              }
              onClick={() => setConfirmModalOpen(true)}
            >
              Confirm agreement
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent reviews
            </h2>
            {reviews.length === 0 ? (
              <p className="text-sm text-gray-500">No reviews yet.</p>
            ) : (
              <div className="space-y-3">
                {reviews.slice(0, 3).map((review) => (
                  <div
                    key={review.id}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 p-4 bg-white dark:bg-gray-900"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {review.comment || "No comment provided."}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Rating: {review.rating || "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Agreement history
            </h2>
            {agreements.length === 0 ? (
              <p className="text-sm text-gray-500">No agreements yet.</p>
            ) : (
              <div className="space-y-3">
                {agreements.map((item) => (
                  <AgreementCard key={item.id} agreement={item} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <OwnerReliabilityCard
            owner={owner}
            reviews={reviews}
            onReport={() => setReportOpen(true)}
          />

          {house && (
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-gray-900 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                House
              </h3>
              <p className="text-sm text-gray-500">{house.title}</p>
              <p className="text-sm text-gray-500">
                Location: {house.location}
              </p>
            </div>
          )}
        </div>
      </div>

      <Modal
        open={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        title="Confirm agreement"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            This will confirm the agreement and mark the house as rented.
          </p>
          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setConfirmModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="success" onClick={handleConfirm}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        title="Report owner"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Reporting is coming soon. Please contact support for urgent issues.
          </p>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setReportOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
