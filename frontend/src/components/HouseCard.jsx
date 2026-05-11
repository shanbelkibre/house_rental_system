import { Link } from "react-router-dom";
import { Badge } from "./UI";
import { toStorageUrl } from "../utils/media";

export default function HouseCard({ house }) {
  const imgSrc = toStorageUrl(house.images?.[0]?.image_path);

  return (
    <div className="bg-white dark:bg-gray-800/20 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={house.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl text-gray-400 dark:text-gray-500">
            🏠
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge
            label={house.status === "available" ? "Available" : "Rented"}
            color={house.status === "available" ? "green" : "red"}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-800 dark:text-white text-base line-clamp-1">
          {house.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <span>📍</span> {house.location}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
            ETB {Number(house.price).toLocaleString()}
            <span className="text-gray-400 dark:text-gray-500 font-normal text-sm">
              /mo
            </span>
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            🛏 {house.rooms} room{house.rooms !== 1 ? "s" : ""}
          </span>
        </div>

        {house.owner && (
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Owner: {house.owner.name}
          </p>
        )}

        <Link
          to={`/houses/${house.id}`}
          className="block mt-2 text-center bg-blue-600/80 dark:bg-blue-500/50 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700/90 dark:hover:bg-blue-600/60 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
