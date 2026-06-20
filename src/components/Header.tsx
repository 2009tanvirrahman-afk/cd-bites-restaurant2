import { ChevronDown, Search, User, ShoppingCart, MapPin, Phone, Bell, Heart, Package } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";
import { TrackOrderModal } from "./TrackOrderModal";

export function Header() {
  const { cartCount, cartTotal, openCart } = useCart();
  const { wishlistItems, openWishlist } = useWishlist();
  const { user, openAuthModal, logout } = useAuth();
  const { addToast } = useToast();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTrackOrder, setShowTrackOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      addToast(
        "Search Initiated",
        `Looking up results for "${searchQuery}"...`,
        "info"
      );
      setSearchQuery("");
    }
  };
  
  return (
    <header className="w-full font-sans shadow-sm z-40 bg-white relative">
      {/* Top Bar */}
      <div className="bg-[#f36b21] text-white text-xs md:text-sm py-2.5 px-4 md:px-8 flex flex-col sm:flex-row justify-center items-center gap-2 font-medium shadow-inner tracking-wide">
        <div className="flex items-center gap-1.5 text-center">
          <MapPin size={14} className="opacity-80 flex-shrink-0" /> 
          <span className="truncate">JRXX+73 Chuadanga, Bangladesh</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 md:py-6 px-4 md:px-8 bg-white border-b border-gray-100 relative">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 relative">
          {/* Logo */}
          <a href="#top" className="flex items-center w-full md:w-auto justify-between md:justify-start group cursor-pointer">
            <div className="font-bold text-2xl md:text-3xl tracking-tighter text-gray-800 leading-none">
              <span className="text-[#f36b21] group-hover:text-orange-600 transition-colors">CD Bites</span><br/>
              <span className="text-[10px] md:text-sm font-semibold tracking-wide text-gray-500 uppercase">Cafe & Restaurant</span>
            </div>
            
            <div className="md:hidden flex gap-4 text-gray-700 items-center">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)} 
                  className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:scale-110 active:scale-95 transition-all relative"
                >
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">1</span>
                </button>
              </div>

              <button 
                onClick={() => setShowTrackOrder(true)} 
                className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:scale-110 active:scale-95 transition-all"
              >
                 <Package size={20} />
               </button>

              <button 
                onClick={user ? logout : openAuthModal} 
                className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:scale-110 active:scale-95 transition-all"
              >
                 <User size={20} />
               </button>
               <button 
                 onClick={openWishlist} 
                 className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:scale-110 active:scale-95 transition-all"
               >
                 <div className="relative">
                   <Heart size={20} className={wishlistItems.length > 0 ? "fill-current text-[#f36b21]" : ""} />
                   {wishlistItems.length > 0 && (
                     <span className="absolute -top-1 -right-1 bg-[#f36b21] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">{wishlistItems.length}</span>
                   )}
                 </div>
               </button>
               <button 
                 onClick={openCart} 
                 className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:scale-110 active:scale-95 transition-all"
               >
                 <div className="relative">
                   <ShoppingCart size={22} />
                   <span className="absolute -top-2 -right-2 bg-[#f36b21] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                 </div>
               </button>
            </div>
          </a>

          {/* Search Box */}
          <div className="relative flex w-full md:w-[400px] md:flex-1 max-w-lg">
            <div className="flex w-full h-11 border-2 border-gray-100 bg-gray-50 rounded-full overflow-hidden focus-within:border-[#f36b21] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(243,107,33,0.1)] transition-all">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, desserts, coffee..." 
                className="flex-1 px-6 text-sm text-gray-900 focus:outline-none placeholder-gray-400 min-w-0 bg-transparent"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
              />
              <button 
                className="text-gray-500 px-6 flex items-center justify-center hover:text-[#f36b21] hover:bg-orange-50 transition-colors"
                onClick={handleSearch}
              >
                <Search size={18} />
              </button>
            </div>
            
            {/* Predictive Search Suggestions */}
            {searchQuery.length > 1 && (
              <div className="absolute top-14 left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-3 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Results for "{searchQuery}"</span>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Main Course</div>
                  <button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#f36b21] transition-colors flex items-center gap-3">
                    <Search size={14} className="text-gray-400" />
                    <span className="text-sm font-medium">Spicy Burger Combos</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#f36b21] transition-colors flex items-center gap-3">
                    <Search size={14} className="text-gray-400" />
                    <span className="text-sm font-medium">Chicken Pizza</span>
                  </button>
                  <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Drinks</div>
                  <button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#f36b21] transition-colors flex items-center gap-3">
                    <Search size={14} className="text-gray-400" />
                    <span className="text-sm font-medium">Cold Coffee</span>
                  </button>
                </div>
                <button 
                  onClick={handleSearch}
                  className="w-full p-3 bg-gray-50 text-sm font-bold text-[#f36b21] hover:bg-orange-50 transition-colors text-center border-t border-gray-100"
                >
                  View all results
                </button>
              </div>
            )}
          </div>

          {/* Account & Cart Desktop */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-bold text-gray-700 items-center uppercase tracking-wide">
             
             {/* Notification Desktop */}
             <div className="relative">
               <button 
                 onClick={() => setShowNotifications(!showNotifications)}
                 className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:-translate-y-0.5 active:translate-y-0 transition-all relative"
               >
                 <Bell size={20} />
                 <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
               </button>
             </div>

             <button 
               onClick={() => setShowTrackOrder(true)} 
               className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:-translate-y-0.5 active:translate-y-0 transition-all font-medium text-gray-600"
               title="Track Order"
             >
               <Package size={20} />
             </button>

             <button 
               onClick={user ? logout : openAuthModal} 
               className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:-translate-y-0.5 active:translate-y-0 transition-all"
             >
               <User size={18} /> {user ? user.name.split(' ')[0] : 'Log In'}
             </button>

             <button 
               onClick={openWishlist}
               className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:-translate-y-0.5 active:translate-y-0 transition-all font-medium text-gray-600"
             >
               <div className="relative">
                 <Heart size={20} className={wishlistItems.length > 0 ? "fill-current text-[#f36b21]" : ""} />
                 {wishlistItems.length > 0 && (
                   <span className="absolute -top-2 -right-3 bg-[#f36b21] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">{wishlistItems.length}</span>
                 )}
               </div>
             </button>

             <button onClick={openCart} className="flex items-center gap-2 cursor-pointer hover:text-[#f36b21] hover:-translate-y-0.5 active:translate-y-0 transition-all">
               <div className="relative">
                 <ShoppingCart size={20} />
                 <span className="absolute -top-2 -right-3 bg-[#f36b21] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">{cartCount}</span>
               </div>
               <span className="ml-1">৳{(cartTotal).toFixed(2)}</span>
             </button>
          </div>
        </div>

        {/* Global Notifications Dropdown (Mobile & Desktop) */}
        {showNotifications && (
          <div className="absolute top-full mt-2 right-4 md:right-8 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 p-5 z-50 text-left normal-case animate-in slide-in-from-top-4 duration-300">
            <h4 className="font-bold text-gray-800 border-b border-gray-100 pb-3 mb-4 flex justify-between items-center">
              <span>Notifications</span>
              <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full uppercase tracking-wider">1 New</span>
            </h4>
            <div className="space-y-4">
              <div className="text-sm bg-orange-50/50 p-3 rounded-xl border border-orange-100/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f36b21]"></div>
                <p className="font-bold text-gray-800 mb-1">Welcome to CD Bites!</p>
                <p className="text-xs text-gray-500 leading-relaxed">Enjoy our exclusive offers and fresh coffee today.</p>
                <span className="text-[10px] font-medium text-orange-400 mt-2 block">Just now</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <TrackOrderModal isOpen={showTrackOrder} onClose={() => setShowTrackOrder(false)} orderId="2481" />
    </header>
  );
}
