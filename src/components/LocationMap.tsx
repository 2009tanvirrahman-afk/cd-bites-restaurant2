import { Navigation } from "lucide-react";

export function LocationMap() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 mb-12" id="map">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div className="text-center md:text-left">
          <span className="text-[#f36b21] font-extrabold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 block">Your Neighborhood Retreat</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">Find Your Way To<br/>CD Bites</h2>
          <div className="w-12 h-1.5 bg-[#f36b21] my-4 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-500 max-w-lg text-sm md:text-base leading-relaxed font-medium">
            Step away from the rush. Join us at our cozy corner in Chuadanga, Bangladesh for remarkable flavors and a warm ambiance.
          </p>
        </div>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Chuadanga,Bangladesh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-[#f36b21] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 text-sm"
        >
          <Navigation size={18} />
          <span>Get Directions</span>
        </a>
      </div>
      <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-100 shadow-sm relative z-0 bg-gray-50 flex items-center justify-center">
        <iframe
          title="Google Maps Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Chuadanga,Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
