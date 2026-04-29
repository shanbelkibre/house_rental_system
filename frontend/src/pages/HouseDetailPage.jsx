import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import {
  Spinner,
  Alert,
  Button,
  Badge,
  StarRating,
  Card,
  Modal,
  Input,
} from "../components/UI";
import { toStorageUrl } from "../utils/media";

export default function HouseDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [house, setHouse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Request modal
  const [reqModal, setReqModal] = useState(false);
  const [reqMsg, setReqMsg] = useState("");

  // Visit modal
  const [visitModal, setVisitModal] = useState(false);
  const [visitDate, setVisitDate] = useState("");

  // Review modal
  const [revModal, setRevModal] = useState(false);
  const [revRating, setRevRating] = useState(5);
  const [revComment, setRevComment] = useState("");

  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const [hRes, rRes] = await Promise.all([
          api.get(`/houses/${id}`),
          api.get(`/houses/${id}/reviews`),
        ]);
        setHouse(hRes.data);
        setReviews(rRes.data.reviews?.data || []);
        setAvgRating(rRes.data.average_rating || 0);
      } catch {
        setError("House not found");
      }
      setLoading(false);
    })();
  }, [id]);

  const sendRequest = async () => {
    try {
      await api.post("/requests", { house_id: id, message: reqMsg });
      setSuccess("Rental request sent!");
      setReqModal(false);
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
    }
  };

  const scheduleVisit = async () => {
    try {
      await api.post("/visits", { house_id: id, visit_date: visitDate });
      setSuccess("Visit scheduled!");
      setVisitModal(false);
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
    }
  };

  const submitReview = async () => {
    try {
      await api.post("/reviews", {
        house_id: id,
        rating: revRating,
        comment: revComment,
      });
      setSuccess("Review submitted!");
      setRevModal(false);
      const { data } = await api.get(`/houses/${id}/reviews`);
      setReviews(data.reviews?.data || []);
      setAvgRating(data.average_rating || 0);
    } catch (e) {
      setError(e.response?.data?.message || "Failed");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <Spinner size={12} />
      </div>
    );

  if (error && !house)
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <Alert type="error" message={error} />
        <Button
          onClick={() => navigate("/houses")}
          variant="outline"
          className="mt-4"
        >
          ← Back to listings
        </Button>
      </div>
    );

  const images = house.images || [];
  const currentImg = toStorageUrl(images[imgIdx]?.image_path);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {success && <Alert type="success" message={success} />}
      {error && <Alert type="error" message={error} />}

      {/* Images */}
      <div className="rounded-2xl overflow-hidden bg-gray-100 h-72 relative">
        {currentImg ? (
          <img
            src={currentImg}
            alt={house.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-7xl text-gray-300">
            🏠
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {house.title}
              </h1>
              <p className="text-gray-500 mt-1">📍 {house.location}</p>
            </div>
            <Badge
              label={house.status === "available" ? "Available" : "Rented"}
              color={house.status === "available" ? "green" : "red"}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-blue-600">
              ETB {Number(house.price).toLocaleString()}
              <span className="text-base font-normal text-gray-400">/mo</span>
            </span>
            <span className="text-gray-500">
              🛏 {house.rooms} room{house.rooms !== 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1">
              <StarRating value={Math.round(avgRating)} />
              <span className="text-sm text-gray-500">({avgRating})</span>
            </span>
          </div>

          <Card>
            <h2 className="font-semibold text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
              {house.description}
            </p>
          </Card>

          {/* Reviews */}
          <Card>
            <h2 className="font-semibold text-gray-700 mb-3">
              Reviews ({reviews.length})
            </h2>
            {reviews.length === 0 ? (
              <p className="text-sm text-gray-400">No reviews yet.</p>
            ) : (
              reviews.map((r) => (
                <div
                  key={r.id}
                  className="border-b border-gray-50 pb-3 mb-3 last:border-0 last:mb-0"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {r.renter?.name}
                    </span>
                    <StarRating value={r.rating} />
                  </div>
                  <p className="text-sm text-gray-600">{r.comment}</p>
                </div>
              ))
            )}
          </Card>
        </div>

        {/* Sidebar actions */}
        <div className="space-y-4">
          <Card>
            <p className="text-sm font-medium text-gray-500 mb-1">Owner</p>
            <p className="font-semibold text-gray-800">{house.owner?.name}</p>
            {house.owner?.phone && (
              <p className="text-sm text-gray-500 mt-1">
                📞 {house.owner.phone}
              </p>
            )}
          </Card>

          {user?.role === "renter" && house.status === "available" && (
            <Card className="space-y-3">
              <Button onClick={() => setReqModal(true)} className="w-full">
                📋 Request to Rent
              </Button>
              <Button
                onClick={() => setVisitModal(true)}
                variant="outline"
                className="w-full"
              >
                📅 Schedule Visit
              </Button>
              <Button
                onClick={() => setRevModal(true)}
                variant="secondary"
                className="w-full"
              >
                ⭐ Leave Review
              </Button>
            </Card>
          )}

          {!user && (
            <Card>
              <p className="text-sm text-gray-500 text-center mb-2">
                Login to rent or visit
              </p>
              <Button onClick={() => navigate("/login")} className="w-full">
                Login
              </Button>
            </Card>
          )}
        </div>
      </div>

      {/* Request modal */}
      <Modal
        open={reqModal}
        onClose={() => setReqModal(false)}
        title="Send Rental Request"
      >
        <div className="space-y-4">
          <textarea
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
            placeholder="Optional message to the owner..."
            value={reqMsg}
            onChange={(e) => setReqMsg(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setReqModal(false)}>
              Cancel
            </Button>
            <Button onClick={sendRequest}>Send Request</Button>
          </div>
        </div>
      </Modal>

      {/* Visit modal */}
      <Modal
        open={visitModal}
        onClose={() => setVisitModal(false)}
        title="Schedule a Visit"
      >
        <div className="space-y-4">
          <Input
            label="Visit Date & Time"
            type="datetime-local"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setVisitModal(false)}>
              Cancel
            </Button>
            <Button onClick={scheduleVisit}>Schedule</Button>
          </div>
        </div>
      </Modal>

      {/* Review modal */}
      <Modal
        open={revModal}
        onClose={() => setRevModal(false)}
        title="Leave a Review"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRevRating(n)}
                  className={`text-2xl ${n <= revRating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comment
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
              value={revComment}
              onChange={(e) => setRevComment(e.target.value)}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setRevModal(false)}>
              Cancel
            </Button>
            <Button onClick={submitReview}>Submit Review</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
