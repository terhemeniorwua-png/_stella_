import { ChevronUp } from "lucide-react";
import { useState } from "react";

const colors = [
  "#000",
  "#ffffff",
  "#ff5a5f",
  "#ffc107",
  "#7ed957",
  "#c5e4f3",
  "#9b87f5",
  "#4a90e2",
  "#ff914d",
  "#d8f7ff"
];

export default function ColorFilter() {

  return (
    <div className="pt-5">
      <div className="mb-4 flex justify-between">
        <h3 className="font-semibold">Color</h3>
        <ChevronUp size={18} />
      </div>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            // onClick={() => setSelected(color)}
            className={`h-6 w-6 rounded-full border-0`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}