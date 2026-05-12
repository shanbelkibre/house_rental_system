# OwnerReliabilityCard.jsx

## Code (numbered)

```jsx
     1	import { Badge, Card, StarRating, Button } from "./UI";
     2	
     3	function formatCount(value, fallback = "0") {
     4	  if (value === null || value === undefined) return fallback;
     5	  return String(value);
     6	}
     7	
     8	export default function OwnerReliabilityCard({
     9	  owner,
    10	  reviews = [],
    11	  onReport,
    12	}) {
    13	  const ratingFromOwner = Number(owner?.average_rating || owner?.rating || 0);
    14	  const ratingFromReviews = reviews.length
    15	    ? reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
    16	      reviews.length
    17	    : 0;
    18	  const rating = ratingFromReviews || ratingFromOwner;
    19	  const reviewCount = Number(owner?.review_count || reviews.length || 0);
    20	  const isVerified = Boolean(owner?.is_verified || owner?.verified);
    21	
    22	  const rentals = formatCount(
    23	    owner?.successful_rentals || owner?.successfulRentals,
    24	    "0",
    25	  );
    26	  const responseRate = formatCount(
    27	    owner?.response_rate || owner?.responseRate,
    28	    "N/A",
    29	  );
    30	  const responseRateLabel = responseRate === "N/A" ? "N/A" : `${responseRate}%`;
    31	  const responseTime = owner?.response_time || owner?.responseTime || "N/A";
    32	
    33	  return (
    34	    <Card className="space-y-4">
    35	      <div className="flex items-start justify-between gap-3">
    36	        <div>
    37	          <p className="text-sm text-gray-500">Owner</p>
    38	          <p className="text-lg font-semibold text-gray-900 dark:text-white">
    39	            {owner?.name || "Owner"}
    40	          </p>
    41	        </div>
    42	        <Badge
    43	          label={isVerified ? "Verified" : "Unverified"}
    44	          color={isVerified ? "green" : "yellow"}
    45	        />
    46	      </div>
    47	
    48	      <div className="flex items-center gap-2">
    49	        <StarRating value={Math.round(rating)} />
    50	        <span className="text-sm text-gray-600 dark:text-gray-300">
    51	          {rating ? rating.toFixed(1) : "0.0"} ({reviewCount} reviews)
    52	        </span>
    53	      </div>
    54	
    55	      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
    56	        <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
    57	          <span className="text-gray-500">Successful rentals</span>
    58	          <span className="font-medium text-gray-900 dark:text-white">
    59	            {rentals}
    60	          </span>
    61	        </div>
    62	        <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
    63	          <span className="text-gray-500">Response rate</span>
    64	          <span className="font-medium text-gray-900 dark:text-white">
    65	            {responseRateLabel}
    66	          </span>
    67	        </div>
    68	        <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
    69	          <span className="text-gray-500">Avg response time</span>
    70	          <span className="font-medium text-gray-900 dark:text-white">
    71	            {responseTime}
    72	          </span>
    73	        </div>
    74	      </div>
    75	
    76	      <div>
    77	        <Button variant="outline" className="w-full" onClick={onReport}>
    78	          Report Owner
    79	        </Button>
    80	      </div>
    81	    </Card>
    82	  );
    83	}
```

## Line-by-line explanation

- Line 1: import { Badge, Card, StarRating, Button } from "./UI";
- Line 2: 
- Line 3: function formatCount(value, fallback = "0") {
- Line 4:   if (value === null || value === undefined) return fallback;
- Line 5:   return String(value);
- Line 6: }
- Line 7: 
- Line 8: export default function OwnerReliabilityCard({
- Line 9:   owner,
- Line 10:   reviews = [],
- Line 11:   onReport,
- Line 12: }) {
- Line 13:   const ratingFromOwner = Number(owner?.average_rating || owner?.rating || 0);
- Line 14:   const ratingFromReviews = reviews.length
- Line 15:     ? reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
- Line 16:       reviews.length
- Line 17:     : 0;
- Line 18:   const rating = ratingFromReviews || ratingFromOwner;
- Line 19:   const reviewCount = Number(owner?.review_count || reviews.length || 0);
- Line 20:   const isVerified = Boolean(owner?.is_verified || owner?.verified);
- Line 21: 
- Line 22:   const rentals = formatCount(
- Line 23:     owner?.successful_rentals || owner?.successfulRentals,
- Line 24:     "0",
- Line 25:   );
- Line 26:   const responseRate = formatCount(
- Line 27:     owner?.response_rate || owner?.responseRate,
- Line 28:     "N/A",
- Line 29:   );
- Line 30:   const responseRateLabel = responseRate === "N/A" ? "N/A" : `${responseRate}%`;
- Line 31:   const responseTime = owner?.response_time || owner?.responseTime || "N/A";
- Line 32: 
- Line 33:   return (
- Line 34:     <Card className="space-y-4">
- Line 35:       <div className="flex items-start justify-between gap-3">
- Line 36:         <div>
- Line 37:           <p className="text-sm text-gray-500">Owner</p>
- Line 38:           <p className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 39:             {owner?.name || "Owner"}
- Line 40:           </p>
- Line 41:         </div>
- Line 42:         <Badge
- Line 43:           label={isVerified ? "Verified" : "Unverified"}
- Line 44:           color={isVerified ? "green" : "yellow"}
- Line 45:         />
- Line 46:       </div>
- Line 47: 
- Line 48:       <div className="flex items-center gap-2">
- Line 49:         <StarRating value={Math.round(rating)} />
- Line 50:         <span className="text-sm text-gray-600 dark:text-gray-300">
- Line 51:           {rating ? rating.toFixed(1) : "0.0"} ({reviewCount} reviews)
- Line 52:         </span>
- Line 53:       </div>
- Line 54: 
- Line 55:       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
- Line 56:         <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
- Line 57:           <span className="text-gray-500">Successful rentals</span>
- Line 58:           <span className="font-medium text-gray-900 dark:text-white">
- Line 59:             {rentals}
- Line 60:           </span>
- Line 61:         </div>
- Line 62:         <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
- Line 63:           <span className="text-gray-500">Response rate</span>
- Line 64:           <span className="font-medium text-gray-900 dark:text-white">
- Line 65:             {responseRateLabel}
- Line 66:           </span>
- Line 67:         </div>
- Line 68:         <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-white/10 px-3 py-2">
- Line 69:           <span className="text-gray-500">Avg response time</span>
- Line 70:           <span className="font-medium text-gray-900 dark:text-white">
- Line 71:             {responseTime}
- Line 72:           </span>
- Line 73:         </div>
- Line 74:       </div>
- Line 75: 
- Line 76:       <div>
- Line 77:         <Button variant="outline" className="w-full" onClick={onReport}>
- Line 78:           Report Owner
- Line 79:         </Button>
- Line 80:       </div>
- Line 81:     </Card>
- Line 82:   );
- Line 83: }

