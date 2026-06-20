import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 font-sans">
      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:min-h-[480px]">
        {/* Main Banner */}
        <div className="relative flex-1 bg-black overflow-hidden group min-h-[420px] sm:min-h-[460px] lg:min-h-0 rounded-2xl shadow-xl flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80" 
            alt="Spicy Food" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="relative z-10 w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 text-center md:text-left items-center md:items-start py-8">
             <span className="text-[#f36b21] font-extrabold tracking-[0.2em] text-[10px] sm:text-xs mb-3 uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">Welcome to our</span>
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tighter leading-[1.1] break-words max-w-full">
               CD Bites<br /> Special
             </h2>
             <p className="text-gray-100 text-xs sm:text-sm md:text-base font-medium mb-8 leading-relaxed max-w-xs sm:max-w-sm drop-shadow-md">
               Step into our world. Enjoy premium coffee, mouth-watering gourmet dishes, and an unforgettable dining experience.
             </p>
             <div className="w-full sm:w-auto">
                <a href="#products">
                  <button className="bg-[#f36b21] hover:bg-orange-600 w-full sm:w-auto text-white font-bold px-8 py-4 text-xs sm:text-sm uppercase tracking-wider transition-all rounded-xl shadow-[0_8px_30px_rgba(243,107,33,0.3)] hover:shadow-[0_8px_30px_rgba(243,107,33,0.5)] active:scale-95 hover:-translate-y-1">
                    Explore Menu
                  </button>
                </a>
             </div>
          </div>
          
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-[#f36b21] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 z-10">
             <ChevronLeft size={24} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-[#f36b21] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 z-10">
             <ChevronRight size={24} />
          </button>
        </div>

        {/* Side Banners Stack */}
        <div className="w-full lg:w-[320px] flex flex-col sm:flex-row lg:flex-col gap-6">
          {/* Top Side Banner */}
          <div className="relative flex-1 bg-gray-900 overflow-hidden group h-[200px] lg:h-full rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" 
              alt="Mouth Watering Pizzas" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700 ease-out"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white z-10">
                <span className="text-[#f36b21] font-bold text-[10px] tracking-widest uppercase mb-1">Featured</span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Mouth Watering</h3>
                <p className="text-sm text-gray-300 font-medium mb-4">Delicious Pizzas</p>
                <div>
                   <a href="#products"><span className="inline-block border-b-2 border-[#f36b21] text-[11px] font-bold pb-1 cursor-pointer hover:text-[#f36b21] hover:tracking-widest transition-all uppercase">Order Now</span></a>
                </div>
             </div>
          </div>

          {/* Bottom Side Banner */}
          <div className="relative flex-1 bg-gray-900 overflow-hidden group h-[200px] lg:h-full rounded-2xl shadow-lg">
             <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80" 
              alt="Restaurant Interior" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white z-10">
                <span className="text-[#f36b21] font-bold text-[10px] tracking-widest uppercase mb-1">Premium</span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Reserve Table</h3>
                <p className="text-sm text-gray-300 font-medium mb-4">Book your experience</p>
                <div>
                   <a href="#booking-section"><span className="inline-block border-b-2 border-[#f36b21] text-[11px] font-bold pb-1 cursor-pointer hover:text-[#f36b21] hover:tracking-widest transition-all uppercase">Book Now</span></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
