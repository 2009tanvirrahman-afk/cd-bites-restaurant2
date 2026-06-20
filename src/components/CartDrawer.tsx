import { useCart } from '../context/CartContext';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight, Clock, Info } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';
import { useState, useEffect } from 'react';

export function CartDrawer() {
  const { items, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [deliveryEstimate, setDeliveryEstimate] = useState({ min: 30, max: 45, status: 'Normal' });

  useEffect(() => {
    // Simulate dynamic delivery time based on current time and "volume"
    const calculateDeliveryTime = () => {
      const hour = new Date().getHours();
      let min = 30;
      let max = 45;
      let status = 'Normal';

      // Simulate busy hours (lunch and dinner)
      if ((hour >= 12 && hour <= 14) || (hour >= 19 && hour <= 21)) {
        min = 45;
        max = 60;
        status = 'High Volume';
      } else if (hour >= 22 || hour <= 6) {
        min = 20;
        max = 35;
        status = 'Fast Preparation';
      }

      // Add extra time based on cart size
      const itemToExtraTimeRatio = Math.floor(items.length / 3) * 5; 
      min += itemToExtraTimeRatio;
      max += itemToExtraTimeRatio;

      setDeliveryEstimate({ min, max, status });
    };

    calculateDeliveryTime();
    const interval = setInterval(calculateDeliveryTime, 60000); // Recalculate every minute
    return () => clearInterval(interval);
  }, [items.length]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] transition-opacity"
        onClick={closeCart}
      />
      
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-[160] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-[#f36b21]/10 p-2 rounded-full text-[#f36b21]">
              <ShoppingCart size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
              <ShoppingCart size={64} className="text-gray-300" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="text-[#f36b21] hover:underline font-bold"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm line-clamp-1 mb-1">{item.name}</h4>
                    <div className="text-[#f36b21] font-bold">৳{item.price.toFixed(2)}</div>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-gray-100">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm rounded transition-all"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm rounded transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors ml-auto"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50/50">
            {/* Delivery Estimate */}
            <div className="mb-6 p-4 bg-orange-50/50 border border-orange-100 rounded-xl flex items-start gap-3">
              <Clock className="text-[#f36b21] shrink-0 mt-0.5" size={18} />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-bold text-gray-800 text-sm">Estimated Delivery</h5>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm ${
                    deliveryEstimate.status === 'High Volume' ? 'bg-orange-100 text-orange-700' : 
                    deliveryEstimate.status === 'Fast Preparation' ? 'bg-green-100 text-green-700' : 
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {deliveryEstimate.status}
                  </span>
                </div>
                <p className="text-[#f36b21] font-bold text-lg">{deliveryEstimate.min} - {deliveryEstimate.max} <span className="text-sm font-medium text-gray-600">mins</span></p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  <Info size={12} />
                  <span>Based on current kitchen volume</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-gray-900">৳{cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#f36b21] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/30 active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              Checkout <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </>
  );
}
