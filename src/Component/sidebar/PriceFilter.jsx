import { ChevronUp } from "lucide-react";
import { useState } from "react";

export default function PriceFilter() {
  const [price, setPrice] = useState(30000);

  return (
    <div className="border-b py-5">
      <div className="mb-5 flex justify-between">
        <h3 className="font-semibold">Price</h3>
        <ChevronUp size={18} />
      </div>

      <input
        type="range"
        min="2900"
        max="300000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full accent-cyan-500"
      />

      <div className="mt-5 flex gap-3">
        <input
          value="2900"
          readOnly
          className="w-full rounded border p-2"
        />

        <input
          value={price}
          readOnly
          className="w-full rounded border p-2"
        />
      </div>
    </div>
  );
}