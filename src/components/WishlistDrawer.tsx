import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export function WishlistDrawer() {
  const { isWishlistOpen, closeWishlist, wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity"
        onClick={closeWishlist}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[90%] md:w-[400px] bg-white z-[110] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-5 md:p-6 flex justify-between items-center border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 text-gray-800">
            <Heart size={24} className="text-[#f36b21] fill-current" />
            <h2 className="text-xl font-bold tracking-tight">Your Wishlist</h2>
          </div>
          <button 
            onClick={closeWishlist}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 md:p-6 scrollbar-hide">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
                <Heart size={48} className="text-gray-200" />
              </div>
              <p className="text-lg font-medium text-gray-500">Your wishlist is empty</p>
              <button 
                onClick={closeWishlist}
                className="text-[#f36b21] font-bold text-sm tracking-wide py-2 px-6 rounded-full border border-[#f36b21] hover:bg-[#f36b21] hover:text-white transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm relative group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex-1 flex flex-col py-1">
                    <div className="flex justify-between items-start gap-2">
                       <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight line-clamp-2">{item.name}</h3>
                       <button 
                         onClick={() => removeFromWishlist(item.id)}
                         className="text-gray-400 hover:text-red-500 transition-colors p-1"
                         title="Remove from wishlist"
                       >
                         <Trash2 size={16} />
                       </button>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between">
                       <span className="font-bold text-[#f36b21] text-sm md:text-base">৳{item.price.toFixed(2)}</span>
                       <button 
                         onClick={() => {
                           addToCart(item);
                           removeFromWishlist(item.id);
                         }}
                         className="bg-gray-900 hover:bg-[#f36b21] text-white p-2 rounded-lg transition-colors flex items-center gap-2"
                         title="Move to cart"
                       >
                          <ShoppingCart size={16} />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
