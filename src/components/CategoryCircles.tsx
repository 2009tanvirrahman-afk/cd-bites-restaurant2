export function CategoryCircles() {
  const cats = [
    { name: "Pizza", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" },
    { name: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80" },
    { name: "Tacos", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=200&q=80" },
    { name: "Salads", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80" },
    { name: "Fast Food", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&q=80" },
    { name: "Drinks", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80" }
  ];

  return (
    <div className="bg-white border text-center border-gray-200 py-8 px-4 flex justify-between overflow-x-auto gap-4" style={{ scrollbarWidth: 'none' }}>
      {cats.map(cat => (
        <a href="#products" key={cat.name} className="flex flex-col items-center gap-4 min-w-[80px] flex-shrink-0 cursor-pointer group hover:-translate-y-1 transition-transform">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-100 shadow-sm p-1 overflow-hidden group-hover:border-[#f36b21] group-hover:shadow-md transition-all">
             <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="text-xs font-bold text-gray-700 group-hover:text-[#f36b21] hover:tracking-wide transition-all">{cat.name}</span>
        </a>
      ))}
    </div>
  );
}
