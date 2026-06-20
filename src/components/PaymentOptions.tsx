import React from 'react';

interface PaymentOptionsProps {
  selectedPayment: string;
  onPaymentChange: (method: string) => void;
}

export function PaymentOptions({ selectedPayment, onPaymentChange }: PaymentOptionsProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Payment Method</label>
      <div className="flex flex-col gap-2">
        <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${selectedPayment === 'cod' ? 'border-[#f36b21] bg-orange-50/50' : 'border-gray-200 hover:border-[#f36b21]'}`}>
          <input 
            type="radio" 
            name="payment" 
            value="cod" 
            checked={selectedPayment === 'cod'} 
            onChange={() => onPaymentChange('cod')}
            className="accent-[#f36b21] w-4 h-4" 
          />
          <span className="font-bold text-sm text-gray-800">Cash on Delivery / Pay at Counter</span>
        </label>
        <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${selectedPayment === 'bkash' ? 'border-[#f36b21] bg-orange-50/50' : 'border-gray-200 hover:border-[#f36b21]'}`}>
          <input 
            type="radio" 
            name="payment" 
            value="bkash" 
            checked={selectedPayment === 'bkash'} 
            onChange={() => onPaymentChange('bkash')}
            className="accent-[#f36b21] w-4 h-4" 
          />
          <div className="flex items-center justify-between flex-1">
            <span className="font-bold text-sm text-gray-800">bKash</span>
            <span className="bg-[#DF146E] text-white text-[10px] px-2 py-0.5 rounded font-bold tracking-wide">bKash</span>
          </div>
        </label>
        <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${selectedPayment === 'nagad' ? 'border-[#f36b21] bg-orange-50/50' : 'border-gray-200 hover:border-[#f36b21]'}`}>
          <input 
            type="radio" 
            name="payment" 
            value="nagad" 
            checked={selectedPayment === 'nagad'} 
            onChange={() => onPaymentChange('nagad')}
            className="accent-[#f36b21] w-4 h-4" 
          />
          <div className="flex items-center justify-between flex-1">
            <span className="font-bold text-sm text-gray-800">Nagad</span>
            <span className="bg-[#F7941D] text-white text-[10px] px-2 py-0.5 rounded font-bold tracking-wide">Nagad</span>
          </div>
        </label>
        <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${selectedPayment === 'card' ? 'border-[#f36b21] bg-orange-50/50' : 'border-gray-200 hover:border-[#f36b21]'}`}>
          <input 
            type="radio" 
            name="payment" 
            value="card" 
            checked={selectedPayment === 'card'} 
            onChange={() => onPaymentChange('card')}
            className="accent-[#f36b21] w-4 h-4" 
          />
          <div className="flex items-center justify-between flex-1">
            <span className="font-bold text-sm text-gray-800">Credit / Debit Card</span>
            <div className="flex gap-1">
              <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">Visa</span>
              <span className="bg-orange-600 text-white text-[10px] px-1.5 py-0.5 rounded">MC</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
