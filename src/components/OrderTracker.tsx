import { useState, useEffect } from 'react';
import { Check, ChefHat, Bike, PackageCheck } from 'lucide-react';

const steps = [
  { id: 1, name: 'Received', icon: Check, description: 'We have received your order' },
  { id: 2, name: 'Preparing', icon: ChefHat, description: 'Your food is being prepared' },
  { id: 3, name: 'Out for Delivery', icon: Bike, description: 'Your order is out for delivery' },
  { id: 4, name: 'Delivered', icon: PackageCheck, description: 'Enjoy your meal!' }
];

export function OrderTracker() {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderId] = useState(`CDB-${Math.floor(1000 + Math.random() * 9000)}`);

  // Simulate order progression
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 4000); // Progress every 4 seconds for demo purposes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full p-2">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Status</h3>
        <span className="text-[#f36b21] font-bold text-sm bg-orange-50 px-3 py-1 rounded-full">#{orderId}</span>
      </div>
      
      <div className="relative pl-2">
        {/* Vertical Line */}
        <div className="absolute left-[1.35rem] top-4 bottom-6 w-[2px] bg-gray-100" />
        
        {/* Progress Line */}
        <div 
          className="absolute left-[1.35rem] top-4 w-[2px] bg-[#f36b21] transition-all duration-700 ease-in-out"
          style={{ height: `${((currentStep - 1) / (steps.length - 1)) * 100}%`, maxHeight: 'calc(100% - 1.5rem)' }}
        />
        
        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;
            const isPending = currentStep < step.id;
            
            return (
              <div key={step.id} className="relative flex items-start group">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors duration-500
                    ${isCompleted ? 'bg-[#f36b21] text-white shadow-md shadow-orange-500/20' : 
                      isCurrent ? 'bg-white border-2 border-[#f36b21] text-[#f36b21] shadow-[0_0_15px_rgba(243,107,33,0.3)] scale-110' : 
                      'bg-white border-2 border-gray-200 text-gray-300'}`}
                >
                  <Icon size={18} className={isCurrent ? 'animate-pulse' : ''} />
                </div>
                
                <div className="ml-5 flex-1 pt-2">
                  <h4 className={`text-sm md:text-base font-bold transition-colors duration-300 ${isCurrent ? 'text-gray-900' : isCompleted ? 'text-gray-700' : 'text-gray-400'}`}>
                    {step.name}
                  </h4>
                  <p className={`text-xs mt-1 transition-colors duration-300 ${isCurrent || isCompleted ? 'text-gray-500' : 'text-gray-300'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
