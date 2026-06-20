import { Phone, Menu } from "lucide-react";

export function Navigation({ onMenuClick }: { onMenuClick?: () => void }) {
  const navItems = [
    { label: "HOME", href: "#top" },
    { label: "FOOD MENU", href: "#products" },
    { label: "OFFERS", href: "#offers" },
    { label: "ABOUT", href: "#about-section" },
    { label: "BOOKING", href: "#booking-section" },
    { label: "BLOG", href: "#blogs" }
  ];

  return (
    <nav className="bg-gray-900 border-t border-gray-800 text-white sticky top-0 z-40 shadow-sm" id="top">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-14 px-4 md:px-8">
        
        {/* Mobile menu toggle */}
        <div 
          onClick={onMenuClick}
          className="lg:hidden flex items-center h-full text-white cursor-pointer hover:text-[#f36b21] active:text-orange-600 transition-colors"
        >
           <Menu size={24} />
           <span className="ml-2 text-sm font-bold tracking-wider uppercase text-gray-200">Navigation</span>
        </div>

        <div className="hidden lg:flex h-full overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {navItems.map((item, idx) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`px-4 md:px-6 h-full flex items-center text-[13px] tracking-wide font-bold transition-all hover:bg-[#f36b21] hover:text-white whitespace-nowrap active:bg-orange-700 ${idx === 0 ? 'bg-[#f36b21] shadow-inner' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm font-bold md:px-4 text-[#f36b21]">
          <Phone fill="currentColor" size={16} className="hidden sm:block" />
          <span className="text-xs sm:text-sm whitespace-nowrap tracking-wide">Call us: 01829473901</span>
        </div>
      </div>
    </nav>
  );
}
