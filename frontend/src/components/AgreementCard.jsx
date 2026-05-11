import { Link } from "react-router-dom";
import { Badge, Card } from "./UI";

const statusColor = {
  pending: "yellow",
  confirmed: "green",
  terminated: "red",
};

export default function AgreementCard({
  agreement,
  showLink = true,
  compact = false,
}) {
  if (!agreement) return null;

  const houseTitle = agreement.house?.title || agreement.house_title || "House";
  const ownerName =
    agreement.owner?.name ||
    agreement.house?.owner?.name ||
    agreement.owner_name;
  const renterName = agreement.renter?.name || agreement.renter_name;
  const start = agreement.start_date
    ? new Date(agreement.start_date).toLocaleDateString()
    : "N/A";
  const end = agreement.end_date
    ? new Date(agreement.end_date).toLocaleDateString()
    : "N/A";
  const price = agreement.agreed_price
    ? Number(agreement.agreed_price).toLocaleString()
    : "0";

  return (
    <Card className={compact ? "p-4" : ""}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {houseTitle}
          </h3>
          {ownerName && (
            <p className="text-sm text-gray-500">Owner: {ownerName}</p>
          )}
          {renterName && (
            <p className="text-sm text-gray-500">Renter: {renterName}</p>
          )}
          <p className="text-sm text-gray-500">
            {start} to {end}
          </p>
          <p className="text-sm font-semibold text-blue-600">ETB {price}/mo</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <Badge
            label={agreement.status || "pending"}
            color={statusColor[agreement.status] || "gray"}
          />
          {showLink && agreement.id && (
            <Link
              to={`/agreements/${agreement.id}`}
              className="text-sm text-blue-600 hover:underline"
            >
              View details
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
