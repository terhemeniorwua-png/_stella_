import { useState } from "react";
import {
  ChevronUp,
  Search,
  Check
} from "lucide-react";

const brands = [
  {
    id: 1,
    name: "Nike",
    count: 123,
    logo: "https://cdn.simpleicons.org/nike"
  },
  {
    id: 2,
    name: "Adidas",
    count: 55,
    logo: "https://cdn.simpleicons.org/adidas"
  },
  {
    id: 3,
    name: "Apple",
    count: 65,
    logo: "https://cdn.simpleicons.org/apple"
  },
  {
    id: 4,
    name: "New Balance",
    count: 99,
    logo: "https://cdn.simpleicons.org/newbalance"
  },
  {
    id: 5,
    name: "Puma",
    count: 325,
    logo: "https://cdn.simpleicons.org/puma"
  },
  {
    id: 6,
    name: "Uniqlo",
    count: 61,
    logo: "https://cdn.simpleicons.org/uniqlo"
  }
];

export default function BrandFilter() {
  const [selected, setSelected] = useState("Nike");

  return (
    <div className="border-b pb-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">Brand</h3>
        <ChevronUp size={18} />
      </div>

      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          placeholder="Search brand..."
          className="w-full rounded-md border py-2 pl-10 outline-none"
        />
      </div>

      <div className="space-y-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => setSelected(brand.name)}
            className="flex cursor-pointer items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={brand.logo}
                className="h-6 w-6 object-contain"
              />

              <span>{brand.name}</span>

              <span className="text-xs text-gray-400">
                {brand.count}
              </span>
            </div>

            {selected === brand.name && (
              <Check
                size={18}
                className="text-cyan-500"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}