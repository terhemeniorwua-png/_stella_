import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";

function SidebarFilter() {
  return (
    <aside className="w-72 rounded-xl border bg-white p-5 shadow-sm">
      <BrandFilter />
      <PriceFilter />
      <SizeFilter />
      <ColorFilter />
    </aside>
  );
}

export default SidebarFilter