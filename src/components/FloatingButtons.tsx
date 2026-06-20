import { MessageCircle, Bot, PhoneCall } from "lucide-react";
import { useState } from "react";
import { AIChatModal } from "./AIChatModal";

export function FloatingButtons() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:01829473901";
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-[90] flex flex-col gap-4">
        {/* AI Button */}
        <button 
          className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(147,51,234,0.5)] hover:bg-purple-700 hover:scale-110 active:scale-95 transition-all group relative"
          onClick={() => setIsAIChatOpen(true)}
        >
          <Bot className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute left-14 md:left-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Ask AI Assistant
          </span>
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-4">
        {/* Phone Call Button */}
        <button 
          onClick={handleCall}
          className="w-12 h-12 md:w-14 md:h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(220,38,38,0.5)] hover:bg-red-700 hover:scale-110 active:scale-95 transition-all group relative"
        >
          <PhoneCall className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute right-14 md:right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Call Now
          </span>
        </button>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/01829473901" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all group relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8 fill-current stroke-none"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.18.196-.3.296-.51.1-.21.046-.39-.031-.54-.075-.15-.672-1.62-.922-2.206-.24-.579-.492-.501-.672-.51-.174-.009-.374-.009-.574-.009-.2 0-.527.075-.802.375-.274.3-1.046 1.02-1.046 2.49 0 1.47 1.072 2.88 1.22 3.075.15.196 2.096 3.2 5.077 4.485.709.301 1.262.48 1.694.615.711.225 1.359.195 1.871.12.576-.09 1.767-.721 2.016-1.426.246-.705.246-1.305.174-1.425-.075-.12-.275-.195-.576-.345z"></path><path d="M20.52 3.449A11.96 11.96 0 0012 0C5.385 0 0 5.384 0 12.001c0 2.12.553 4.195 1.603 6.015L.145 24l6.14-1.611a11.933 11.933 0 005.715 1.446h.005c6.613 0 12-5.385 12-12.002 0-3.21-1.248-6.22-3.485-8.384zm-8.52 18.256c-1.802 0-3.565-.48-5.111-1.395l-.366-.211-3.799.996.996-3.705-.241-.375A9.972 9.972 0 012.003 12c0-5.505 4.496-10 10.005-10 2.671 0 5.176 1.036 7.065 2.925A9.957 9.957 0 0122.002 12c0 5.505-4.496 10-10.003 10z"></path></svg>
          <span className="absolute right-14 md:right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Message us on WhatsApp
          </span>
        </a>
      </div>
      
      <AIChatModal 
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
      />
    </>
  );
}
