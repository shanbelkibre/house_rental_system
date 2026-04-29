import { useEffect, useMemo, useState } from "react";
import {
  approveHouseAdmin,
  createSubscriptionPlan,
  deleteAdminUser,
  deleteSubscriptionPlan,
  getAdminReport,
  getAdminUsers,
  getAllHousesAdmin,
  getPendingHouses,
  getSavedAdminReport,
  listSavedAdminReports,
  listSubscriptionPlans,
  rejectHouseAdmin,
  removeHouseAdmin,
  saveAdminReport,
  suspendAdminUser,
  updateSubscriptionPlan,
  verifyAdminUser,
} from "../services/api";

import {
  Alert,
  Badge,
  Button,
  Card,
  Input,
  Modal,
  Pagination,
  Select,
  Spinner,
} from "../components/UI";

const SECTIONS = [
  { key: "revenue", label: "Revenue Report" },
  { key: "view_reports", label: "View Reports" },
  { key: "plans", label: "Manage Subscription Plans" },
  { key: "verify_owner", label: "Verify House Owner" },
  { key: "users", label: "Manage Users" },
  { key: "approve_listing", label: "Approve House Listing" },
  { key: "remove_listing", label: "Remove House Listing" },
];

function toIsoDateInput(v) {
  if (!v) return "";
  // Accept either Date, ISO string, or 'YYYY-MM-DD'
  const d = typeof v === "string" ? new Date(v) : v;
  if (Number.isNaN(d.getTime())) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
import { toStorageUrl } from "../utils/media";

function money(v) {
  const n = Number(v || 0);
  return Number.isFinite(n) ? n.toLocaleString() : "0";
}

export default function AdminPage() {
  const [section, setSection] = useState("revenue");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Revenue report
  const [reportStart, setReportStart] = useState(() =>
    toIsoDateInput(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)),
  );
  const [reportEnd, setReportEnd] = useState(() => toIsoDateInput(new Date()));
  const [report, setReport] = useState(null);
  const [saveReportOpen, setSaveReportOpen] = useState(false);
  const [saveReportName, setSaveReportName] = useState("");

  // Saved reports
  const [savedReports, setSavedReports] = useState(null);
  const [savedReportsPage, setSavedReportsPage] = useState(1);
  const [viewReportId, setViewReportId] = useState(null);
  const [viewReportData, setViewReportData] = useState(null);

  // Subscription plans
  const [plansRes, setPlansRes] = useState(null);
  const [plansPage, setPlansPage] = useState(1);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [planEditing, setPlanEditing] = useState(null);
  const [planForm, setPlanForm] = useState({
    name: "",
    price: "",
    duration_days: 30,
    is_active: true,
  });

  // Verify owner
  const [verifyOwnersRes, setVerifyOwnersRes] = useState(null);
  const [verifyOwnersPage, setVerifyOwnersPage] = useState(1);
  const [verifyOwnersQ, setVerifyOwnersQ] = useState("");

  // Manage users
  const [usersRes, setUsersRes] = useState(null);
  const [usersPage, setUsersPage] = useState(1);
  const [usersQ, setUsersQ] = useState("");
  const [usersRole, setUsersRole] = useState("");

  // Approve listing
  const [pendingRes, setPendingRes] = useState(null);
  const [pendingPage, setPendingPage] = useState(1);

  // Remove listing
  const [allHousesRes, setAllHousesRes] = useState(null);
  const [allHousesPage, setAllHousesPage] = useState(1);
  const [removeModal, setRemoveModal] = useState({ open: false, house: null });
  const [removeReason, setRemoveReason] = useState("");

  const sidebarItems = useMemo(() => SECTIONS, []);

  const flash = (msg) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 2500);
  };

  const fail = (e, fallback = "Something went wrong") => {
    setError(e?.response?.data?.message || fallback);
  };

  // Load data based on active section
  useEffect(() => {
    (async () => {
      setError("");
      setSuccess("");
      setLoading(true);
      try {
        if (section === "revenue") {
          const { data } = await getAdminReport({
            start_date: reportStart,
            end_date: reportEnd,
          });
          setReport(data);
        }

        if (section === "view_reports") {
          const { data } = await listSavedAdminReports({
            page: savedReportsPage,
            per_page: 20,
          });
          setSavedReports(data);
        }

        if (section === "plans") {
          const { data } = await listSubscriptionPlans({
            page: plansPage,
            per_page: 20,
          });
          setPlansRes(data);
        }

        if (section === "verify_owner") {
          const { data } = await getAdminUsers({
            page: verifyOwnersPage,
            per_page: 20,
            role: "owner",
            verified: false,
            q: verifyOwnersQ || undefined,
          });
          setVerifyOwnersRes(data);
        }

        if (section === "users") {
          const { data } = await getAdminUsers({
            page: usersPage,
            per_page: 20,
            role: usersRole || undefined,
            q: usersQ || undefined,
          });
          setUsersRes(data);
        }

        if (section === "approve_listing") {
          const { data } = await getPendingHouses({ page: pendingPage });
          setPendingRes(data);
        }

        if (section === "remove_listing") {
          const { data } = await getAllHousesAdmin({ page: allHousesPage });
          setAllHousesRes(data);
        }
      } catch (e) {
        fail(e, "Failed to load data");
      } finally {
        setLoading(false);
      }
    })();
  }, [
    section,
    reportStart,
    reportEnd,
    savedReportsPage,
    plansPage,
    verifyOwnersPage,
    verifyOwnersQ,
    usersPage,
    usersQ,
    usersRole,
    pendingPage,
    allHousesPage,
  ]);

  // ===== Actions =====
  const onGenerateReport = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await getAdminReport({
        start_date: reportStart,
        end_date: reportEnd,
      });
      setReport(data);
      flash("Report generated");
    } catch (e) {
      fail(e, "Failed to generate report");
    } finally {
      setLoading(false);
    }
  };

  const onSaveReport = async () => {
    setLoading(true);
    setError("");
    try {
      await saveAdminReport({
        name: saveReportName,
        start_date: reportStart,
        end_date: reportEnd,
      });
      setSaveReportOpen(false);
      setSaveReportName("");
      flash("Report saved");
    } catch (e) {
      fail(e, "Failed to save report");
    } finally {
      setLoading(false);
    }
  };

  const onOpenSavedReport = async (id) => {
    setViewReportId(id);
    setViewReportData(null);
    setLoading(true);
    setError("");
    try {
      const { data } = await getSavedAdminReport(id);
      setViewReportData(data);
    } catch (e) {
      fail(e, "Failed to load report");
    } finally {
      setLoading(false);
    }
  };

  const onVerifyUser = async (id) => {
    setLoading(true);
    setError("");
    try {
      await verifyAdminUser(id);
      flash("Owner verified");
      // reload current list
      const { data } = await getAdminUsers({
        page: verifyOwnersPage,
        per_page: 20,
        role: "owner",
        verified: false,
        q: verifyOwnersQ || undefined,
      });
      setVerifyOwnersRes(data);
    } catch (e) {
      fail(e, "Failed to verify user");
    } finally {
      setLoading(false);
    }
  };

  const onToggleSuspend = async (u) => {
    setLoading(true);
    setError("");
    try {
      await suspendAdminUser(u.id, !u.is_suspended);
      flash(u.is_suspended ? "User unsuspended" : "User suspended");
      const { data } = await getAdminUsers({
        page: usersPage,
        per_page: 20,
        role: usersRole || undefined,
        q: usersQ || undefined,
      });
      setUsersRes(data);
    } catch (e) {
      fail(e, "Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  const onDeleteUser = async (u) => {
    if (!confirm(`Delete user ${u.name}?`)) return;
    setLoading(true);
    setError("");
    try {
      await deleteAdminUser(u.id);
      flash("User deleted");
      const { data } = await getAdminUsers({
        page: usersPage,
        per_page: 20,
        role: usersRole || undefined,
        q: usersQ || undefined,
      });
      setUsersRes(data);
    } catch (e) {
      fail(e, "Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  const onApproveHouse = async (id) => {
    setLoading(true);
    setError("");
    try {
      await approveHouseAdmin(id);
      flash("House approved");
      const { data } = await getPendingHouses({ page: pendingPage });
      setPendingRes(data);
    } catch (e) {
      fail(e, "Failed to approve house");
    } finally {
      setLoading(false);
    }
  };

  const onRejectHouse = async (id) => {
    if (!confirm("Reject and remove this listing?")) return;
    setLoading(true);
    setError("");
    try {
      await rejectHouseAdmin(id);
      flash("House rejected");
      const { data } = await getPendingHouses({ page: pendingPage });
      setPendingRes(data);
    } catch (e) {
      fail(e, "Failed to reject house");
    } finally {
      setLoading(false);
    }
  };

  const onRemoveHouse = async () => {
    const house = removeModal.house;
    if (!house) return;
    setLoading(true);
    setError("");
    try {
      await removeHouseAdmin(house.id, removeReason || undefined);
      setRemoveModal({ open: false, house: null });
      setRemoveReason("");
      flash("Listing removed");
      const { data } = await getAllHousesAdmin({ page: allHousesPage });
      setAllHousesRes(data);
    } catch (e) {
      fail(e, "Failed to remove house");
    } finally {
      setLoading(false);
    }
  };

  const openCreatePlan = () => {
    setPlanEditing(null);
    setPlanForm({ name: "", price: "", duration_days: 30, is_active: true });
    setPlanModalOpen(true);
  };

  const openEditPlan = (p) => {
    setPlanEditing(p);
    setPlanForm({
      name: p.name || "",
      price: String(p.price ?? ""),
      duration_days: Number(p.duration_days ?? 30),
      is_active: !!p.is_active,
    });
    setPlanModalOpen(true);
  };

  const onSavePlan = async () => {
    setLoading(true);
    setError("");
    try {
      const payload = {
        name: planForm.name,
        price: Number(planForm.price),
        duration_days: Number(planForm.duration_days),
        is_active: !!planForm.is_active,
      };
      if (planEditing) {
        await updateSubscriptionPlan(planEditing.id, payload);
        flash("Plan updated");
      } else {
        await createSubscriptionPlan(payload);
        flash("Plan created");
      }
      setPlanModalOpen(false);
      const { data } = await listSubscriptionPlans({
        page: plansPage,
        per_page: 20,
      });
      setPlansRes(data);
    } catch (e) {
      fail(e, "Failed to save plan");
    } finally {
      setLoading(false);
    }
  };

  const onDeletePlan = async (p) => {
    if (!confirm(`Delete plan ${p.name}?`)) return;
    setLoading(true);
    setError("");
    try {
      await deleteSubscriptionPlan(p.id);
      flash("Plan deleted");
      const { data } = await listSubscriptionPlans({
        page: plansPage,
        per_page: 20,
      });
      setPlansRes(data);
    } catch (e) {
      fail(e, "Failed to delete plan");
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = report?.payment_methods || [];
  const dailyRevenue = report?.daily_revenue || [];


  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-white/70 text-sm">Manage system operations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-4">
            <p className="text-xs font-semibold text-gray-500 mb-3">
              ADMIN FUNCTIONS
            </p>
            <div className="space-y-1">
              {sidebarItems.map((it) => (
                <button
                  key={it.key}
                  onClick={() => setSection(it.key)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    section === it.key
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {it.label}
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-9 space-y-4">
          {success && <Alert type="success" message={success} />}
          {error && <Alert type="error" message={error} />}

          {loading ? (
            <div className="flex justify-center py-20">
              <Spinner size={12} />
            </div>
          ) : (
            <>
              {/* Revenue Report */}
              {section === "revenue" && (
                <Card>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Revenue Report
                      </h2>
                      <p className="text-sm text-gray-500">
                        Generate report by date range
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setSaveReportOpen(true)}
                        disabled={!report}
                      >
                        Save Report
                      </Button>
                      <Button onClick={onGenerateReport}>Generate</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <Input
                      label="Start Date"
                      type="date"
                      value={reportStart}
                      onChange={(e) => setReportStart(e.target.value)}
                    />
                    <Input
                      label="End Date"
                      type="date"
                      value={reportEnd}
                      onChange={(e) => setReportEnd(e.target.value)}
                    />
                  </div>

                  {!report ? (
                    <p className="text-sm text-gray-400 mt-4">
                      No report loaded.
                    </p>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                        <div className="rounded-2xl p-4 bg-blue-50 text-blue-800">
                          <p className="text-xs font-semibold">Revenue (ETB)</p>
                          <p className="text-2xl font-bold mt-1">
                            {money(report.subscription_revenue)}
                          </p>
                        </div>
                        <div className="rounded-2xl p-4 bg-green-50 text-green-800">
                          <p className="text-xs font-semibold">
                            Users Registered
                          </p>
                          <p className="text-2xl font-bold mt-1">
                            {report.users_registered}
                          </p>
                        </div>
                        <div className="rounded-2xl p-4 bg-purple-50 text-purple-800">
                          <p className="text-xs font-semibold">Houses Listed</p>
                          <p className="text-2xl font-bold mt-1">
                            {report.houses_listed}
                          </p>
                        </div>
                        <div className="rounded-2xl p-4 bg-yellow-50 text-yellow-800">
                          <p className="text-xs font-semibold">Requests Made</p>
                          <p className="text-2xl font-bold mt-1">
                            {report.requests_made}
                          </p>
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-50 text-gray-800">
                          <p className="text-xs font-semibold">Active Users</p>
                          <p className="text-2xl font-bold mt-1">
                            {report.active_users}
                          </p>
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-50 text-gray-800">
                          <p className="text-xs font-semibold">Total Houses</p>
                          <p className="text-2xl font-bold mt-1">
                            {report.total_houses}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div>
                          <h3 className="font-semibold text-gray-700 mb-2">
                            Payment Methods
                          </h3>
                          <div className="border rounded-xl overflow-hidden">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                  <th className="text-left px-3 py-2">
                                    Method
                                  </th>
                                  <th className="text-right px-3 py-2">
                                    Total (ETB)
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {paymentMethods.length === 0 ? (
                                  <tr>
                                    <td
                                      className="px-3 py-3 text-gray-400"
                                      colSpan={2}
                                    >
                                      No payments in range
                                    </td>
                                  </tr>
                                ) : (
                                  paymentMethods.map((p, idx) => (
                                    <tr key={idx} className="border-t">
                                      <td className="px-3 py-2 text-gray-700">
                                        {p.payment_method || "—"}
                                      </td>
                                      <td className="px-3 py-2 text-right text-gray-700">
                                        {money(p.total)}
                                      </td>
                                    </tr>
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-700 mb-2">
                            Daily Revenue
                          </h3>
                          <div className="border rounded-xl overflow-hidden">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                  <th className="text-left px-3 py-2">Date</th>
                                  <th className="text-right px-3 py-2">
                                    Total (ETB)
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {dailyRevenue.length === 0 ? (
                                  <tr>
                                    <td
                                      className="px-3 py-3 text-gray-400"
                                      colSpan={2}
                                    >
                                      No payments in range
                                    </td>
                                  </tr>
                                ) : (
                                  dailyRevenue.map((d, idx) => (
                                    <tr key={idx} className="border-t">
                                      <td className="px-3 py-2 text-gray-700">
                                        {d.date}
                                      </td>
                                      <td className="px-3 py-2 text-right text-gray-700">
                                        {money(d.total)}
                                      </td>
                                    </tr>
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Card>
              )}

              {/* View Reports */}
              {section === "view_reports" && (
                <Card>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Saved Reports
                      </h2>
                      <p className="text-sm text-gray-500">
                        View previously generated reports
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSection("revenue")}
                    >
                      Generate New
                    </Button>
                  </div>

                  <div className="mt-4 space-y-3">
                    {(savedReports?.data || []).length === 0 ? (
                      <p className="text-sm text-gray-400">No saved reports.</p>
                    ) : (
                      (savedReports?.data || []).map((r) => (
                        <div
                          key={r.id}
                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {r.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {r.start_date
                                ? toIsoDateInput(r.start_date)
                                : "—"}{" "}
                              → {r.end_date ? toIsoDateInput(r.end_date) : "—"}
                              {r.user?.name ? ` · by ${r.user.name}` : ""}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            onClick={() => onOpenSavedReport(r.id)}
                          >
                            View
                          </Button>
                        </div>
                      ))
                    )}
                  </div>

                  <Pagination
                    meta={savedReports}
                    onPage={setSavedReportsPage}
                  />
                </Card>
              )}

              {/* Manage Subscription Plans */}
              {section === "plans" && (
                <Card>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Subscription Plans
                      </h2>
                      <p className="text-sm text-gray-500">
                        Create, edit, and remove plans
                      </p>
                    </div>
                    <Button onClick={openCreatePlan}>Add Plan</Button>
                  </div>

                  <div className="mt-4 space-y-3">
                    {(plansRes?.data || []).length === 0 ? (
                      <p className="text-sm text-gray-400">No plans created.</p>
                    ) : (
                      (plansRes?.data || []).map((p) => (
                        <div
                          key={p.id}
                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {p.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              ETB {money(p.price)} · {p.duration_days} days
                            </p>
                            <div className="mt-1">
                              <Badge
                                label={p.is_active ? "Active" : "Inactive"}
                                color={p.is_active ? "green" : "gray"}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              onClick={() => openEditPlan(p)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => onDeletePlan(p)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <Pagination meta={plansRes} onPage={setPlansPage} />
                </Card>
              )}

              {/* Verify House Owner */}
              {section === "verify_owner" && (
                <Card>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Verify House Owners
                      </h2>
                      <p className="text-sm text-gray-500">
                        Approve owner accounts for posting listings
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <Input
                      label="Search"
                      placeholder="Name or email"
                      value={verifyOwnersQ}
                      onChange={(e) => {
                        setVerifyOwnersPage(1);
                        setVerifyOwnersQ(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    {(verifyOwnersRes?.data || []).length === 0 ? (
                      <p className="text-sm text-gray-400">
                        No unverified owners.
                      </p>
                    ) : (
                      (verifyOwnersRes?.data || []).map((u) => (
                        <div
                          key={u.id}
                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {u.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {u.email} · {u.phone || "No phone"}
                            </p>
                            <div className="flex gap-2 mt-1 flex-wrap">
                              <Badge label="owner" color="blue" />
                              <Badge
                                label={
                                  u.is_verified ? "Verified" : "Unverified"
                                }
                                color={u.is_verified ? "green" : "yellow"}
                              />
                              <Badge
                                label={`Houses: ${u.houses_count ?? 0}`}
                                color="gray"
                              />
                            </div>
                          </div>
                          <Button
                            variant="success"
                            onClick={() => onVerifyUser(u.id)}
                          >
                            Verify
                          </Button>
                        </div>
                      ))
                    )}
                  </div>

                  <Pagination
                    meta={verifyOwnersRes}
                    onPage={setVerifyOwnersPage}
                  />
                </Card>
              )}

              {/* Manage Users */}
              {section === "users" && (
                <Card>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Manage Users
                      </h2>
                      <p className="text-sm text-gray-500">
                        Search, suspend, or delete users
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <Input
                      label="Search"
                      placeholder="Name or email"
                      value={usersQ}
                      onChange={(e) => {
                        setUsersPage(1);
                        setUsersQ(e.target.value);
                      }}
                    />
                    <Select
                      label="Role"
                      value={usersRole}
                      onChange={(e) => {
                        setUsersPage(1);
                        setUsersRole(e.target.value);
                      }}
                    >
                      <option value="">All</option>
                      <option value="owner">Owner</option>
                      <option value="renter">Renter</option>
                      <option value="admin">Admin</option>
                    </Select>
                  </div>

                  <div className="mt-4 space-y-3">
                    {(usersRes?.data || []).length === 0 ? (
                      <p className="text-sm text-gray-400">No users found.</p>
                    ) : (
                      (usersRes?.data || []).map((u) => (
                        <div
                          key={u.id}
                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {u.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {u.email} · {u.phone || "No phone"}
                            </p>
                            <div className="flex gap-2 mt-1 flex-wrap">
                              <Badge
                                label={u.role}
                                color={
                                  u.role === "admin"
                                    ? "gray"
                                    : u.role === "owner"
                                      ? "blue"
                                      : "green"
                                }
                              />
                              <Badge
                                label={
                                  u.is_verified ? "Verified" : "Unverified"
                                }
                                color={u.is_verified ? "green" : "yellow"}
                              />
                              {u.is_suspended && (
                                <Badge label="Suspended" color="red" />
                              )}
                              <Badge
                                label={`Houses: ${u.houses_count ?? 0}`}
                                color="gray"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap justify-end">
                            {u.role !== "admin" && (
                              <Button
                                variant="outline"
                                onClick={() => onToggleSuspend(u)}
                              >
                                {u.is_suspended ? "Unsuspend" : "Suspend"}
                              </Button>
                            )}
                            {u.role !== "admin" && (
                              <Button
                                variant="danger"
                                onClick={() => onDeleteUser(u)}
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <Pagination meta={usersRes} onPage={setUsersPage} />
                </Card>
              )}

              {/* Approve House Listing */}
              {section === "approve_listing" && (
                <Card>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Pending House Listings
                    </h2>
                    <p className="text-sm text-gray-500">
                      Approve or reject new listings
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    {(pendingRes?.data || []).length === 0 ? (
                      <div className="text-center py-12 text-gray-400">
                        <div className="text-5xl mb-3">🎉</div>
                        <p>No pending listings.</p>
                      </div>
                    ) : (
                      (pendingRes?.data || []).map((h) => {
                        const img = toStorageUrl(h.images?.[0]?.image_path);
                        return (
                          <div
                            key={h.id}
                            className="border border-gray-100 rounded-2xl p-4 flex items-start justify-between gap-4"
                          >
                            <div className="flex gap-4">
                              <div className="w-20 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                {img ? (
                                  <img
                                    src={img}
                                    alt=""
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
                                    🏠
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  {h.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                  📍 {h.location} · ETB {money(h.price)}/mo · 🛏{" "}
                                  {h.rooms} rooms
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  Owner: {h.owner?.name}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                              <Button
                                variant="success"
                                onClick={() => onApproveHouse(h.id)}
                              >
                                Approve
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => onRejectHouse(h.id)}
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <Pagination meta={pendingRes} onPage={setPendingPage} />
                </Card>
              )}

              {/* Remove House Listing */}
              {section === "remove_listing" && (
                <Card>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Remove House Listing
                    </h2>
                    <p className="text-sm text-gray-500">
                      Remove listings that violate policies
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    {(allHousesRes?.data || []).length === 0 ? (
                      <p className="text-sm text-gray-400">No houses found.</p>
                    ) : (
                      (allHousesRes?.data || []).map((h) => {
                        const img = toStorageUrl(h.images?.[0]?.image_path);
                        return (
                          <div
                            key={h.id}
                            className="border border-gray-100 rounded-2xl p-4 flex items-start justify-between gap-4"
                          >
                            <div className="flex gap-4">
                              <div className="w-20 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                {img ? (
                                  <img
                                    src={img}
                                    alt=""
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
                                    🏠
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  {h.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                  📍 {h.location} · ETB {money(h.price)}/mo
                                </p>
                                <div className="flex gap-2 mt-1 flex-wrap">
                                  <Badge
                                    label={h.status}
                                    color={
                                      h.status === "available" ? "green" : "red"
                                    }
                                  />
                                  <Badge
                                    label={
                                      h.is_approved ? "Approved" : "Pending"
                                    }
                                    color={h.is_approved ? "blue" : "yellow"}
                                  />
                                  {h.owner?.name && (
                                    <Badge
                                      label={`Owner: ${h.owner.name}`}
                                      color="gray"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="danger"
                              onClick={() => {
                                setRemoveModal({ open: true, house: h });
                                setRemoveReason("");
                              }}
                            >
                              Remove
                            </Button>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <Pagination meta={allHousesRes} onPage={setAllHousesPage} />
                </Card>
              )}
            </>
          )}
        </div>
      </div>

      {/* Save report modal */}
      <Modal
        open={saveReportOpen}
        onClose={() => setSaveReportOpen(false)}
        title="Save Report"
      >
        <div className="space-y-4">
          <Input
            label="Report Name"
            placeholder="e.g. April Revenue"
            value={saveReportName}
            onChange={(e) => setSaveReportName(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setSaveReportOpen(false)}>
              Cancel
            </Button>
            <Button onClick={onSaveReport} disabled={!saveReportName.trim()}>
              Save
            </Button>
          </div>
        </div>
      </Modal>

      {/* View report modal */}
      <Modal
        open={!!viewReportId}
        onClose={() => {
          setViewReportId(null);
          setViewReportData(null);
        }}
        title="Saved Report"
      >
        {!viewReportData ? (
          <div className="flex justify-center py-10">
            <Spinner size={10} />
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-gray-800">{viewReportData.name}</p>
            <p className="text-xs text-gray-500">
              {viewReportData.start_date
                ? toIsoDateInput(viewReportData.start_date)
                : "—"}{" "}
              →{" "}
              {viewReportData.end_date
                ? toIsoDateInput(viewReportData.end_date)
                : "—"}
            </p>
            <div className="border rounded-xl p-3 bg-gray-50 text-xs text-gray-700 overflow-auto max-h-72">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(viewReportData.payload, null, 2)}
              </pre>
            </div>
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setViewReportId(null);
                  setViewReportData(null);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Plan modal */}
      <Modal
        open={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
        title={planEditing ? "Edit Plan" : "Create Plan"}
      >
        <div className="space-y-3">
          <Input
            label="Name"
            value={planForm.name}
            onChange={(e) =>
              setPlanForm((s) => ({ ...s, name: e.target.value }))
            }
          />
          <Input
            label="Price (ETB)"
            type="number"
            min="0"
            value={planForm.price}
            onChange={(e) =>
              setPlanForm((s) => ({ ...s, price: e.target.value }))
            }
          />
          <Input
            label="Duration (days)"
            type="number"
            min="1"
            value={planForm.duration_days}
            onChange={(e) =>
              setPlanForm((s) => ({ ...s, duration_days: e.target.value }))
            }
          />
          <Select
            label="Status"
            value={planForm.is_active ? "active" : "inactive"}
            onChange={(e) =>
              setPlanForm((s) => ({
                ...s,
                is_active: e.target.value === "active",
              }))
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>

          <div className="flex gap-2 justify-end pt-2">
            <Button variant="outline" onClick={() => setPlanModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={onSavePlan}
              disabled={!planForm.name.trim() || planForm.price === ""}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>

      {/* Remove listing modal */}
      <Modal
        open={removeModal.open}
        onClose={() => setRemoveModal({ open: false, house: null })}
        title="Remove Listing"
      >
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            Remove:{" "}
            <span className="font-semibold">{removeModal.house?.title}</span>
          </p>
          <Input
            label="Reason (optional)"
            placeholder="Reason shown to owner"
            value={removeReason}
            onChange={(e) => setRemoveReason(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <Button
              variant="outline"
              onClick={() => setRemoveModal({ open: false, house: null })}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={onRemoveHouse}>
              Remove
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
