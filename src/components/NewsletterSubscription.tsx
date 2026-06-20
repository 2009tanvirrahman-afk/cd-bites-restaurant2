import { useState, FormEvent } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "../context/ToastContext";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const { addToast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      addToast("Subscribed!", "You have successfully subscribed to our newsletter.", "success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-6 md:p-10 mb-12 shadow-xl border border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f36b21] opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center justify-center bg-gray-800 p-3 rounded-full mb-4 text-[#f36b21] shadow-inner">
            <Mail size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">Subscribe for Offers</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Get exclusive deals, new menu updates, and special discounts delivered straight to your inbox.
          </p>
        </div>
        
        <div className="w-full md:flex-1 max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full bg-gray-800/80 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-5 py-4 focus:outline-none focus:border-[#f36b21] focus:ring-1 focus:ring-[#f36b21] transition-all text-sm font-medium"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#f36b21] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_8px_30px_rgba(243,107,33,0.3)] active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
            >
              <span>Subscribe</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
            We promise not to spam. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
