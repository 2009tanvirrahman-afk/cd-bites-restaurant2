import { useState, FormEvent } from "react";
import { Calendar, Users, Clock, CheckCircle } from "lucide-react";

export function TableBooking() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]" id="booking-section">
         <div className="flex justify-center mb-6 text-green-500 bg-green-50 p-6 rounded-full">
           <CheckCircle size={64} />
         </div>
         <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">Booking Confirmed!</h3>
         <p className="text-gray-500 mb-10 max-w-md text-base leading-relaxed">
           Your table reservation request has been successfully received. We will contact you shortly to confirm your booking.
         </p>
         <button 
           onClick={() => setStatus("idle")} 
           className="bg-[#f36b21] hover:bg-orange-600 text-white px-10 py-4 uppercase text-xs font-bold rounded-md transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 active:bg-orange-700 tracking-wider"
         >
           Book Another Table
         </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row relative z-10" id="booking-section">
      <div className="hidden lg:block lg:w-2/5 relative">
        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" alt="Restaurant interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-10">
          <h3 className="text-white text-3xl font-bold mb-3 tracking-tighter">Reserve Your Spot</h3>
          <p className="text-gray-200 font-medium text-sm leading-relaxed max-w-xs">Experience the perfect dining atmosphere with our premium service and delicious menu.</p>
        </div>
      </div>
      
      <div className="flex-1 p-8 md:p-12 bg-white">
        <div className="mb-8">
          <span className="text-[#f36b21] font-extrabold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 block">Secure Your Experience</span>
          <h3 className="text-gray-900 font-extrabold text-2xl sm:text-3xl tracking-tight mb-3">Book A Table</h3>
          <div className="w-12 h-1.5 bg-[#f36b21] rounded-full"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2"><Calendar size={14} className="text-[#f36b21]" /> Date</label>
              <input required type="date" className="w-full border-b-2 border-gray-200 bg-gray-50/50 p-3 text-sm focus:bg-white focus:outline-none focus:border-[#f36b21] transition-all rounded-t-md" />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2"><Clock size={14} className="text-[#f36b21]" /> Time</label>
              <input required type="time" className="w-full border-b-2 border-gray-200 bg-gray-50/50 p-3 text-sm focus:bg-white focus:outline-none focus:border-[#f36b21] transition-all rounded-t-md" />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2"><Users size={14} className="text-[#f36b21]" /> Guests</label>
              <select required className="w-full border-b-2 border-gray-200 bg-gray-50/50 p-3 text-sm focus:bg-white focus:outline-none focus:border-[#f36b21] transition-all rounded-t-md appearance-none">
                <option value="">Select Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6+ People</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full border border-gray-200 p-3.5 text-sm rounded-md focus:ring-2 focus:ring-[#f36b21]/20 focus:border-[#f36b21] outline-none transition-all" />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Phone / Email</label>
              <input required type="text" placeholder="+123 456 7890" className="w-full border border-gray-200 p-3.5 text-sm rounded-md focus:ring-2 focus:ring-[#f36b21]/20 focus:border-[#f36b21] outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Special Requests (Optional)</label>
            <textarea rows={3} placeholder="Any dietary requirements or special occasions?" className="w-full border border-gray-200 p-3.5 text-sm rounded-md focus:ring-2 focus:ring-[#f36b21]/20 focus:border-[#f36b21] outline-none transition-all resize-none"></textarea>
          </div>

          <div className="mt-4 pt-6 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={status === "submitting"}
              className={`w-full md:w-auto px-12 py-4 font-bold uppercase tracking-wider text-xs text-white rounded-md transition-all flex justify-center items-center gap-2 ${status === "submitting" ? "bg-gray-400 cursor-not-allowed" : "bg-[#f36b21] hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 active:translate-y-0"}`}
            >
              {status === "submitting" ? (
                <>Processing...</>
              ) : (
                <>Confirm Booking <CheckCircle size={16} /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
