import { X } from 'lucide-react';
import { OrderTracker } from './OrderTracker';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
}

export function TrackOrderModal({ isOpen, onClose, orderId }: TrackOrderModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-[210] p-4 pointer-events-none">
        <div className="bg-gray-50 md:bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden pointer-events-auto animate-in zoom-in-95 duration-200">
          <div className="p-5 md:p-6 flex justify-between items-center border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm flex-shrink-0">
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Track Your Order</h2>
              {orderId && <p className="text-sm font-medium text-gray-500 mt-1">Order #{orderId}</p>}
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-5 md:p-8 flex-1 overflow-y-auto scrollbar-hide bg-gray-50">
            <OrderTracker />
          </div>

          <div className="p-5 border-t border-gray-100 bg-white flex-shrink-0">
            <button 
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-[#f36b21] hover:border-[#f36b21] text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-auto"
            >
              Close Tracker
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
