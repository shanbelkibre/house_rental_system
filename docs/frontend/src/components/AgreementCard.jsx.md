# AgreementCard.jsx

## Code (numbered)

```jsx
     1	import { Link } from "react-router-dom";
     2	import { Badge, Card } from "./UI";
     3	
     4	const statusColor = {
     5	  pending: "yellow",
     6	  confirmed: "green",
     7	  terminated: "red",
     8	};
     9	
    10	export default function AgreementCard({
    11	  agreement,
    12	  showLink = true,
    13	  compact = false,
    14	}) {
    15	  if (!agreement) return null;
    16	
    17	  const houseTitle = agreement.house?.title || agreement.house_title || "House";
    18	  const ownerName =
    19	    agreement.owner?.name ||
    20	    agreement.house?.owner?.name ||
    21	    agreement.owner_name;
    22	  const renterName = agreement.renter?.name || agreement.renter_name;
    23	  const start = agreement.start_date
    24	    ? new Date(agreement.start_date).toLocaleDateString()
    25	    : "N/A";
    26	  const end = agreement.end_date
    27	    ? new Date(agreement.end_date).toLocaleDateString()
    28	    : "N/A";
    29	  const price = agreement.agreed_price
    30	    ? Number(agreement.agreed_price).toLocaleString()
    31	    : "0";
    32	
    33	  return (
    34	    <Card className={compact ? "p-4" : ""}>
    35	      <div className="flex items-start justify-between gap-4">
    36	        <div className="space-y-1">
    37	          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    38	            {houseTitle}
    39	          </h3>
    40	          {ownerName && (
    41	            <p className="text-sm text-gray-500">Owner: {ownerName}</p>
    42	          )}
    43	          {renterName && (
    44	            <p className="text-sm text-gray-500">Renter: {renterName}</p>
    45	          )}
    46	          <p className="text-sm text-gray-500">
    47	            {start} to {end}
    48	          </p>
    49	          <p className="text-sm font-semibold text-blue-600">ETB {price}/mo</p>
    50	        </div>
    51	        <div className="flex flex-col items-end gap-3">
    52	          <Badge
    53	            label={agreement.status || "pending"}
    54	            color={statusColor[agreement.status] || "gray"}
    55	          />
    56	          {showLink && agreement.id && (
    57	            <Link
    58	              to={`/agreements/${agreement.id}`}
    59	              className="text-sm text-blue-600 hover:underline"
    60	            >
    61	              View details
    62	            </Link>
    63	          )}
    64	        </div>
    65	      </div>
    66	    </Card>
    67	  );
    68	}
```

## Line-by-line explanation

- Line 1: import { Link } from "react-router-dom";
- Line 2: import { Badge, Card } from "./UI";
- Line 3: 
- Line 4: const statusColor = {
- Line 5:   pending: "yellow",
- Line 6:   confirmed: "green",
- Line 7:   terminated: "red",
- Line 8: };
- Line 9: 
- Line 10: export default function AgreementCard({
- Line 11:   agreement,
- Line 12:   showLink = true,
- Line 13:   compact = false,
- Line 14: }) {
- Line 15:   if (!agreement) return null;
- Line 16: 
- Line 17:   const houseTitle = agreement.house?.title || agreement.house_title || "House";
- Line 18:   const ownerName =
- Line 19:     agreement.owner?.name ||
- Line 20:     agreement.house?.owner?.name ||
- Line 21:     agreement.owner_name;
- Line 22:   const renterName = agreement.renter?.name || agreement.renter_name;
- Line 23:   const start = agreement.start_date
- Line 24:     ? new Date(agreement.start_date).toLocaleDateString()
- Line 25:     : "N/A";
- Line 26:   const end = agreement.end_date
- Line 27:     ? new Date(agreement.end_date).toLocaleDateString()
- Line 28:     : "N/A";
- Line 29:   const price = agreement.agreed_price
- Line 30:     ? Number(agreement.agreed_price).toLocaleString()
- Line 31:     : "0";
- Line 32: 
- Line 33:   return (
- Line 34:     <Card className={compact ? "p-4" : ""}>
- Line 35:       <div className="flex items-start justify-between gap-4">
- Line 36:         <div className="space-y-1">
- Line 37:           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
- Line 38:             {houseTitle}
- Line 39:           </h3>
- Line 40:           {ownerName && (
- Line 41:             <p className="text-sm text-gray-500">Owner: {ownerName}</p>
- Line 42:           )}
- Line 43:           {renterName && (
- Line 44:             <p className="text-sm text-gray-500">Renter: {renterName}</p>
- Line 45:           )}
- Line 46:           <p className="text-sm text-gray-500">
- Line 47:             {start} to {end}
- Line 48:           </p>
- Line 49:           <p className="text-sm font-semibold text-blue-600">ETB {price}/mo</p>
- Line 50:         </div>
- Line 51:         <div className="flex flex-col items-end gap-3">
- Line 52:           <Badge
- Line 53:             label={agreement.status || "pending"}
- Line 54:             color={statusColor[agreement.status] || "gray"}
- Line 55:           />
- Line 56:           {showLink && agreement.id && (
- Line 57:             <Link
- Line 58:               to={`/agreements/${agreement.id}`}
- Line 59:               className="text-sm text-blue-600 hover:underline"
- Line 60:             >
- Line 61:               View details
- Line 62:             </Link>
- Line 63:           )}
- Line 64:         </div>
- Line 65:       </div>
- Line 66:     </Card>
- Line 67:   );
- Line 68: }

