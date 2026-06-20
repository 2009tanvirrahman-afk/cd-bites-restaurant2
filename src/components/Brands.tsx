import { ChevronLeft, ChevronRight } from "lucide-react";

export function Brands() {
  const brands = [
    { id: 1, name: "Hombre" },
    { id: 2, name: "Golden" },
    { id: 3, name: "Classic" },
    { id: 4, name: "Hipster" },
    { id: 5, name: "Brandt" },
    { id: 6, name: "Code" }
  ];

  return (
    <div className="bg-white border border-gray-200 mt-6">
      <div className="border-b border-gray-200 flex justify-between items-center px-6 py-4">
        <h3 className="text-gray-800 font-bold uppercase text-sm tracking-tight text-center sm:text-left">LATEST BRANDS</h3>
        <div className="flex gap-1 hidden sm:flex">
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-[#f36b21] hover:text-white hover:border-[#f36b21] transition">
            <ChevronLeft size={14} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-[#f36b21] hover:text-white hover:border-[#f36b21] transition">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-8 overflow-x-auto gap-8">
        {brands.map(brand => (
           <div key={brand.id} className="text-xl font-serif text-gray-300 font-bold opacity-60 hover:opacity-100 transition cursor-pointer min-w-max">
             {brand.name.toUpperCase()}
           </div>
        ))}
      </div>
    </div>
  );
}
