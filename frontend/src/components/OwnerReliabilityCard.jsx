import { Badge, Card, StarRating, Button } from "./UI";

function formatCount(value, fallback = "0") {
  if (value === null || value === undefined) return fallback;
  return String(value);
}

export default function OwnerReliabilityCard({
  owner,
  reviews = [],
  onReport,
}) {
  const ratingFromOwner = Number(owner?.average_rating || owner?.rating || 0);
  const ratingFromReviews = reviews.length
    ? reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
      reviews.length
    : 0;
  const rating = ratingFromReviews || ratingFromOwner;
  const reviewCount = Number(owner?.review_count || reviews.length || 0);
  const isVerified = Boolean(owner?.is_verified || owner?.verified);

  const rentals = formatCount(
    owner?.successful_rentals || owner?.successfulRentals,
    "0",
  );
  const responseRate = formatCount(
    owner?.response_rate || owner?.responseRate,
    "N/A",
  );
  const responseRateLabel = responseRate === "N/A" ? "N/A" : `${responseRate}%`;
  const responseTime = owner?.response_time || owner?.responseTime || "N/A";

  return (
    <Card className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">Owner</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {owner?.name || "Owner"}
          </p>
        </div>
        <Badge
          label={isVerified ? "Verified" : "Unverified"}
          color={isVerified ? "green" : "yellow"}
        />
      </div>

      <div className="flex items-center gap-2">
        <StarRating value={Math.round(rating)} />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {rating ? rating.toFixed(1) : "0.0"} ({reviewCount} reviews)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
          <span className="text-gray-500">Successful rentals</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {rentals}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
          <span className="text-gray-500">Response rate</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {responseRateLabel}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
          <span className="text-gray-500">Avg response time</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {responseTime}
          </span>
        </div>
      </div>

      <div>
        <Button variant="outline" className="w-full" onClick={onReport}>
          Report Owner
        </Button>
      </div>
    </Card>
  );
}
