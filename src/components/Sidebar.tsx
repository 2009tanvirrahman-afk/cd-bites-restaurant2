import { Truck, Banknote, CreditCard, Headphones, ChevronRight, Quote, Send, MapPin } from "lucide-react";
import { sideCategories } from "../data";

export function Sidebar() {
  return (
    <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-8 pb-8">
      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-[#f36b21] text-white font-bold px-5 py-4 text-xs tracking-wider uppercase">
          Food Categories
        </div>
        <ul className="text-sm text-gray-700">
          {sideCategories.map((cat, idx) => (
            <li key={idx} className="border-b border-gray-50 last:border-0 hover:bg-orange-50 cursor-pointer group transition-colors">
              <a href="#products" className="flex justify-between items-center px-5 py-4">
                <span className="font-medium group-hover:text-[#f36b21] group-hover:pl-1 transition-all">{cat}</span>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-[#f36b21] transition-colors" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Deal of The Days */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative">
        <div className="bg-[#f36b21] text-white font-bold px-5 py-4 text-xs tracking-wider uppercase">
          Chef's Special
        </div>
        <div className="p-6 text-center relative group">
          <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider rounded-sm z-10">Limited</div>
          <div className="flex justify-center mb-5 relative">
            <div className="absolute inset-0 bg-orange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 origin-center"></div>
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Special Pizza" className="w-40 h-40 object-cover rounded-full z-10 shadow-lg group-hover:rotate-3 transition-transform duration-500" />
          </div>
          
          <h4 className="font-bold text-gray-800 text-lg mb-2">Spicy Chicken Pizza</h4>
          <div className="flex justify-center gap-1 mb-3">
            {[1,2,3,4,5].map(star => <span key={star} className="text-[#f36b21] text-xs">★</span>)}
          </div>
          <div className="flex justify-center gap-2 items-center mb-4">
            <span className="font-bold text-gray-900 text-xl">৳250.00</span>
            <span className="text-sm text-gray-400 line-through">৳350.00</span>
          </div>
          <a href="#products">
             <button className="w-full bg-gray-900 text-white text-xs font-bold py-3 uppercase tracking-wider rounded border border-gray-900 hover:bg-transparent hover:text-gray-900 transition-colors">
               Order Now
             </button>
          </a>
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-900 text-white font-bold px-5 py-4 text-xs tracking-wider uppercase">
          Why Choose Us
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-start gap-4 group">
            <div className="text-[#f36b21] p-3 rounded-full bg-orange-50 group-hover:bg-[#f36b21] group-hover:text-white transition-colors"><MapPin size={22} /></div>
            <div>
              <h5 className="font-bold text-sm text-gray-800 tracking-tight mb-1">Prime Location</h5>
              <p className="text-xs text-gray-500">JRXX+73 Chuadanga</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="text-[#f36b21] p-3 rounded-full bg-orange-50 group-hover:bg-[#f36b21] group-hover:text-white transition-colors"><Truck size={22} /></div>
            <div>
              <h5 className="font-bold text-sm text-gray-800 tracking-tight mb-1">Fast Delivery</h5>
              <p className="text-xs text-gray-500">Free over ৳500</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="text-[#f36b21] p-3 rounded-full bg-orange-50 group-hover:bg-[#f36b21] group-hover:text-white transition-colors"><Banknote size={22} /></div>
            <div>
              <h5 className="font-bold text-sm text-gray-800 tracking-tight mb-1">Cash on Delivery</h5>
              <p className="text-xs text-gray-500">Pay at your doorstep</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="text-[#f36b21] p-3 rounded-full bg-orange-50 group-hover:bg-[#f36b21] group-hover:text-white transition-colors"><Headphones size={22} /></div>
            <div>
              <h5 className="font-bold text-sm text-gray-800 tracking-tight mb-1">Always Open</h5>
              <p className="text-xs text-gray-500">24/7 Service Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
         <div className="bg-[#f36b21] text-white font-bold px-5 py-4 text-xs tracking-wider uppercase">
          Reviews
        </div>
        <div className="p-8 text-center bg-orange-50/30">
          <div className="flex justify-center mb-6 text-[#f36b21]/40">
            <Quote size={48} fill="currentColor" />
          </div>
          <p className="text-sm text-gray-600 italic mb-8 leading-relaxed font-medium">
            "The food here is absolutely fantastic. Best cafe in Chuadanga by far! Highly recommended for their pizzas."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Donia Lauren" className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-white" />
            <div className="text-left">
              <h5 className="font-bold text-sm text-gray-800">Sarah Ahmed</h5>
              <p className="text-xs text-[#f36b21] font-medium">Local Guide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="relative h-[320px] bg-cover bg-center overflow-hidden rounded-xl shadow-lg border border-gray-100" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556881286-fc6915169721?w=600)'}}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group hover:opacity-90 transition-all duration-500 cursor-pointer"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white pointer-events-none pb-10">
          <h3 className="font-bold text-3xl mb-1 text-white tracking-tighter">Fresh Drinks</h3>
          <p className="text-sm text-gray-300 font-medium mb-6">Summer special refreshing mocktails</p>
          <a href="#products" className="pointer-events-auto">
             <span className="inline-block border-b-2 border-[#f36b21] text-xs font-bold pb-1 cursor-pointer hover:text-[#f36b21] hover:tracking-widest transition-all uppercase tracking-wider">Explore Menu</span>
          </a>
        </div>
      </div>
      
    </div>
  );
}
