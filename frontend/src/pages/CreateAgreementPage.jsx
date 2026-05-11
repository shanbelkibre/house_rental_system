import { useEffect, useMemo, useState } from "react";
import {
  createAgreement,
  getMyAgreements,
  getMyHouses,
  getOwnerRequests,
} from "../services/api";
import { Alert, Button, Modal, Select, Input, Spinner } from "../components/UI";
import AgreementCard from "../components/AgreementCard";

export default function CreateAgreementPage() {
  const [houses, setHouses] = useState([]);
  const [requests, setRequests] = useState([]);
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);

  const [houseId, setHouseId] = useState("");
  const [requestId, setRequestId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [agreedPrice, setAgreedPrice] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [housesRes, requestsRes, agreementsRes] = await Promise.all([
        getMyHouses(),
        getOwnerRequests(),
        getMyAgreements(),
      ]);
      setHouses(housesRes.data?.data || housesRes.data || []);
      setRequests(requestsRes.data?.data || requestsRes.data || []);
      setAgreements(agreementsRes.data?.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const acceptedRequests = useMemo(
    () => requests.filter((req) => req.status === "accepted"),
    [requests],
  );

  const requestsForHouse = useMemo(() => {
    if (!houseId) return [];
    return acceptedRequests.filter(
      (req) => String(req.house?.id) === String(houseId),
    );
  }, [acceptedRequests, houseId]);

  useEffect(() => {
    if (requestsForHouse.length > 0) {
      setRequestId(String(requestsForHouse[0].id));
    } else {
      setRequestId("");
    }
  }, [requestsForHouse]);

  const selectedRequest = requestsForHouse.find(
    (req) => String(req.id) === String(requestId),
  );
  const selectedHouse = houses.find(
    (house) => String(house.id) === String(houseId),
  );

  const previewAgreement = {
    id: "preview",
    status: "pending",
    house: selectedHouse,
    renter: selectedRequest?.renter,
    start_date: startDate,
    end_date: endDate,
    agreed_price: agreedPrice || 0,
  };

  const canSubmit =
    houseId && startDate && endDate && agreedPrice && selectedRequest;

  const handleSubmit = async () => {
    try {
      await createAgreement({
        house_id: houseId,
        start_date: startDate,
        end_date: endDate,
        agreed_price: agreedPrice,
      });
      showToast("success", "Agreement created successfully.");
      setConfirmOpen(false);
      setHouseId("");
      setRequestId("");
      setStartDate("");
      setEndDate("");
      setAgreedPrice("");
      fetchData();
    } catch (err) {
      showToast(
        "error",
        err.response?.data?.message || "Failed to create agreement.",
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      {toast && (
        <div className="fixed top-24 right-6 z-50 w-80">
          <Alert type={toast.type} message={toast.message} />
        </div>
      )}

      <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Create agreement
            </h1>
            <p className="text-gray-500">
              Fill in the rental details and preview before sending.
            </p>
          </div>

          {error && <Alert type="error" message={error} />}

          <div className="grid sm:grid-cols-2 gap-4">
            <Select
              label="House"
              value={houseId}
              onChange={(event) => setHouseId(event.target.value)}
            >
              <option value="">Select house</option>
              {houses.map((house) => (
                <option key={house.id} value={house.id}>
                  {house.title}
                </option>
              ))}
            </Select>

            <Select
              label="Renter request"
              value={requestId}
              onChange={(event) => setRequestId(event.target.value)}
              disabled={!houseId || requestsForHouse.length === 0}
            >
              {!houseId && <option value="">Select house first</option>}
              {houseId && requestsForHouse.length === 0 && (
                <option value="">No accepted requests</option>
              )}
              {requestsForHouse.map((req) => (
                <option key={req.id} value={req.id}>
                  {req.renter?.name || "Renter"}
                </option>
              ))}
            </Select>

            <Input
              label="Start date"
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />

            <Input
              label="End date"
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />

            <Input
              label="Agreed price (ETB/month)"
              type="number"
              min="0"
              value={agreedPrice}
              onChange={(event) => setAgreedPrice(event.target.value)}
            />
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-5 space-y-2">
            <p className="text-sm text-gray-500">Renter</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {selectedRequest?.renter?.name || "Select a request"}
            </p>
          </div>

          <Button
            variant="primary"
            disabled={!canSubmit}
            onClick={() => setConfirmOpen(true)}
          >
            Send agreement
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Renter preview
          </h2>
          <AgreementCard
            agreement={previewAgreement}
            showLink={false}
            compact
          />
        </div>
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

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Send agreement"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            This will create a new agreement and notify the renter to confirm.
          </p>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Send agreement
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
