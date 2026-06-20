export function PromoBanners() {
  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6" id="offers">
      <div className="flex-1 relative h-48 md:h-56 bg-gray-900 overflow-hidden rounded-2xl group shadow-sm">
         <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80" alt="Healthy Food" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" />
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
         <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-center text-white">
           <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 tracking-tight">Healthy Food</h3>
           <p className="text-xs md:text-sm font-medium text-gray-200 mb-4 md:mb-6 leading-relaxed break-words max-w-[85%]">Save up to 30% off</p>
           <div>
             <a href="#products">
               <button className="bg-[#f36b21] text-white text-[10px] md:text-xs font-bold px-4 md:px-6 py-2.5 uppercase rounded-lg hover:bg-orange-600 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-orange-500/30">
                 Shop Now
               </button>
             </a>
           </div>
         </div>
      </div>
      <div className="flex-1 relative h-48 md:h-56 bg-gray-900 overflow-hidden rounded-2xl group shadow-sm">
         <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="Delicious Food" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" />
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
         <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-center text-white">
           <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 tracking-tight">Delicious Food</h3>
           <p className="text-xs md:text-sm font-medium text-gray-200 mb-4 md:mb-6 leading-relaxed break-words max-w-[85%]">20% Cashback on First Order</p>
           <div>
             <a href="#products">
               <button className="bg-[#f36b21] text-white text-[10px] md:text-xs font-bold px-4 md:px-6 py-2.5 uppercase rounded-lg hover:bg-orange-600 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-orange-500/30">
                 Shop Now
               </button>
             </a>
           </div>
         </div>
      </div>
    </div>
  );
}
