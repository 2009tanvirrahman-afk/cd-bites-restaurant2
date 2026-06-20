import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { products } from "../data";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import React, { useState, useEffect } from "react";
import { ProductSkeleton } from "./ProductSkeleton";

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="bg-white p-5 md:p-6 text-center group hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 relative h-full flex flex-col overflow-hidden border border-gray-100 rounded-2xl shadow-sm">
       {/* Badges */}
       {product.sale && (
         <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider rounded-sm shadow-sm z-10">
           Sale
         </div>
       )}

       {/* Wishlist Button */}
       <button 
         onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
         className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full text-gray-400 hover:text-[#f36b21] transition-colors"
       >
         <Heart size={18} className={inWishlist ? "fill-[#f36b21] text-[#f36b21]" : ""} />
       </button>
       
       {/* Image */}
       <div className="flex-grow flex items-center justify-center mb-6 relative">
         <div className="absolute inset-0 bg-orange-50 rounded-full scale-0 group-hover:scale-[1.2] transition-transform duration-500 ease-out origin-center"></div>
         <img 
           src={product.image} 
           alt={product.name} 
           className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out z-10 drop-shadow-xl" 
         />
       </div>

       {/* Details */}
       <h4 className="font-bold text-gray-800 text-sm md:text-base mb-2 group-hover:text-[#f36b21] transition-colors line-clamp-1">{product.name}</h4>
       <div className="flex justify-center gap-1 mb-3">
         {[1,2,3,4,5].map(star => <span key={star} className="text-[#f36b21] text-xs">★</span>)}
       </div>
       <div className="flex justify-center items-center gap-2 mb-6">
         <span className="font-bold text-gray-900 text-lg">৳{product.price.toFixed(2)}</span>
         {product.oldPrice && (
           <span className="text-xs text-gray-400 line-through">৳{product.oldPrice.toFixed(2)}</span>
         )}
       </div>

       {/* Add to Cart Button (Always visible but enhances on hover) */}
       <button 
         onClick={() => addToCart(product)}
         className="w-full bg-[#f36b21] hover:bg-orange-600 text-white text-xs font-bold py-3 md:py-3.5 flex items-center justify-center gap-2 rounded-md transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-95 mt-auto"
       >
         <ShoppingCart size={16} /> <span>ADD TO CART</span>
       </button>
    </div>
  );
}

export function ProductTabs() {
  const tabs = ["FEATURED", "LATEST", "BESTSELLERS"];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="text-center md:text-left" id="products">
      <div className="border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center bg-transparent mb-6">
        <div className="flex gap-6 overflow-x-auto w-full sm:w-auto" style={{scrollbarWidth: 'none'}}>
          {tabs.map((tab, idx) => (
             <button key={tab} className={`py-5 text-xs font-bold tracking-wider transition-colors relative whitespace-nowrap ${idx === 0 ? 'text-[#f36b21]' : 'text-gray-500 hover:text-[#f36b21]'}`}>
               {tab}
               {idx === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f36b21]"></div>}
             </button>
          ))}
        </div>
        <div className="hidden sm:flex gap-2 py-4">
          <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-[#f36b21] hover:text-white hover:border-[#f36b21] transition-all">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-[#f36b21] transition-all shadow-md">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
         {loading ? (
             [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
         ) : (
             products.slice(0, 4).map(product => (
               <ProductCard key={product.id} product={product} />
             ))
         )}
      </div>
    </div>
  );
}
