import { useState, FormEvent } from 'react';
import { X, CheckCircle2, ShoppingBag, MapPin, Phone, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { OrderTracker } from './OrderTracker';
import { PaymentOptions } from './PaymentOptions';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartTotal, items, clearCart, closeCart } = useCart();
  const { addToast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info, 2: Address, 3: Success
  const [loading, setLoading] = useState(false);
  const [orderType, setOrderType] = useState<'delivery' | 'dinein'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'nagad' | 'card'>('cod');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
    }, 1500);
  };

  const handleFinish = () => {
    setStep(1);
    onClose();
    closeCart(); // Close the drawer too
    addToast('Order Placed', 'Your food will arrive shortly!', 'success');
  };

  const handleClose = () => {
    if (step === 3) {
      handleFinish();
    } else {
      setStep(1);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-6 md:p-8 flex flex-col h-full">
             <div className="flex items-center gap-3 mb-6">
               <div className="bg-[#f36b21]/10 p-3 rounded-full text-[#f36b21]">
                 <ShoppingBag size={24} />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Order Review</h2>
                 <p className="text-gray-500 text-sm font-medium">Verify your items</p>
               </div>
             </div>

             <div className="flex-1 overflow-y-auto pr-2 mb-6 space-y-4 min-h-[50px]">
               {items.map(item => (
                 <div key={item.id} className="flex gap-4">
                   <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1">
                     <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h4>
                     <p className="text-xs text-gray-500 mt-0.5">৳{item.price} x {item.quantity}</p>
                     <p className="text-[#f36b21] font-bold text-sm mt-1">৳{(item.price * item.quantity).toFixed(2)}</p>
                   </div>
                 </div>
               ))}
             </div>

             <div className="border-t border-gray-100 pt-4 mt-auto">
               <div className="flex justify-between items-center mb-6">
                 <span className="text-gray-600 font-medium">Total Amount</span>
                 <span className="text-2xl font-bold text-gray-800">৳{cartTotal.toFixed(2)}</span>
               </div>

               <button 
                 onClick={() => setStep(2)}
                 className="w-full bg-[#f36b21] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/30 active:scale-[0.98] flex justify-center items-center gap-2 uppercase tracking-wide text-sm"
               >
                 Continue to Delivery <ArrowRight size={18} />
               </button>
             </div>
          </div>
        ) : step === 2 ? (
          <div className="p-6 md:p-8 overflow-y-auto">
             <div className="flex items-center gap-3 mb-6">
               <button onClick={() => setStep(1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors -ml-2 mr-1">
                  <ArrowLeft size={20} className="text-gray-600" />
               </button>
               <div>
                 <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Checkout Details</h2>
                 <p className="text-gray-500 text-sm font-medium">Complete your order</p>
               </div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Order Type</label>
                 <div className="grid grid-cols-2 gap-3">
                   <label className="border border-gray-200 rounded-xl p-3 cursor-pointer flex items-center justify-center gap-2 hover:border-[#f36b21] transition-all relative">
                     <input type="radio" name="orderType" value="delivery" checked={orderType === 'delivery'} onChange={() => setOrderType('delivery')} className="peer sr-only" />
                     <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-[#f36b21] pointer-events-none transition-all"></div>
                     <span className="font-bold text-sm peer-checked:text-[#f36b21]">Home Delivery</span>
                   </label>
                   <label className="border border-gray-200 rounded-xl p-3 cursor-pointer flex items-center justify-center gap-2 hover:border-[#f36b21] transition-all relative">
                     <input type="radio" name="orderType" value="dinein" checked={orderType === 'dinein'} onChange={() => setOrderType('dinein')} className="peer sr-only" />
                     <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-[#f36b21] pointer-events-none transition-all"></div>
                     <span className="font-bold text-sm peer-checked:text-[#f36b21]">Dine-In</span>
                   </label>
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                 <div className="relative">
                   <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input type="text" required placeholder="John Doe" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f36b21] focus:ring-2 focus:ring-orange-500/20 text-sm transition-all bg-gray-50 focus:bg-white" />
                 </div>
               </div>
               
               <div>
                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                 <div className="relative">
                   <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input type="tel" required placeholder="01XXX-XXXXXX" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f36b21] focus:ring-2 focus:ring-orange-500/20 text-sm transition-all bg-gray-50 focus:bg-white" />
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                   {orderType === 'delivery' ? 'Delivery Address' : 'Table Number'}
                 </label>
                 <div className="relative">
                   <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                   <textarea required rows={2} placeholder={orderType === 'delivery' ? "Enter full delivery address..." : "Enter your table number (e.g. Table 5)"} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f36b21] focus:ring-2 focus:ring-orange-500/20 text-sm transition-all resize-none bg-gray-50 focus:bg-white"></textarea>
                 </div>
               </div>

               <PaymentOptions selectedPayment={paymentMethod} onPaymentChange={(method) => setPaymentMethod(method as any)} />

               <div className="pt-4 border-t border-gray-100 mt-6">
                 <div className="flex justify-between items-center mb-4">
                   <span className="text-gray-600 font-medium text-sm">To Pay</span>
                   <span className="font-bold text-[#f36b21] text-xl">৳{cartTotal.toFixed(2)}</span>
                 </div>
                 <button 
                   type="submit" 
                   disabled={loading}
                   className="w-full bg-[#f36b21] hover:bg-orange-600 disabled:bg-opacity-70 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/30 active:scale-[0.98] flex justify-center items-center gap-2 uppercase tracking-wide text-sm"
                 >
                   {loading ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   ) : "Confirm Order"}
                 </button>
               </div>
             </form>
          </div>
        ) : (
          <div className="p-6 md:p-8 flex flex-col h-full bg-gray-50/50">
             <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4 shadow-sm animate-in zoom-in duration-500">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-xl font-bold text-gray-800 tracking-tight">Order Confirmed!</h2>
                <p className="text-gray-500 text-sm mt-1">We've started working on your order.</p>
             </div>

             <div className="flex-1 overflow-y-auto w-full mb-6 max-h-[50vh] scrollbar-hide">
               <OrderTracker />
             </div>

             <button 
               onClick={handleFinish}
               className="w-full mt-auto bg-gray-900 border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all py-4"
             >
               Back to Menu
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
