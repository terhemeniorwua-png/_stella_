import { ChevronUp } from "lucide-react";
import { useState } from "react";

const sizes = [
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL"
];

export default function SizeFilter() {
  const [selected, setSelected] = useState("XXS");

  return (
    <div className="border-b py-5">
      <div className="mb-4 flex justify-between">
        <h3 className="font-semibold">Size</h3>
        <ChevronUp size={18} />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`rounded border py-2 transition
            ${
              selected === size
                ? "border-cyan-500 bg-cyan-50"
                : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}