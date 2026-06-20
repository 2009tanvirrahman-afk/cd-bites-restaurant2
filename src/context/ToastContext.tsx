import { createContext, useContext, useState, ReactNode, useRef, useCallback } from 'react';
import { CheckCircle2, Info, XCircle, X } from 'lucide-react';

type ToastType = 'success' | 'info' | 'error';
type Toast = { id: number; title: string; message: string; type: ToastType };

interface ToastContextType {
  addToast: (title: string, message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const lastToastRef = useRef<number>(0);

  const addToast = useCallback((title: string, message: string, type: ToastType = 'info') => {
    // Debounce: prevent adding same/any toast if last one was < 500ms ago
    const now = Date.now();
    if (now - lastToastRef.current < 300) return;
    lastToastRef.current = now;

    const id = Date.now();
    setToasts(prev => {
      // prevent duplicate messages
      if (prev.some(t => t.message === message)) return prev;
      return [...prev, { id, title, message, type }];
    });

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, []);

  const closeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const closeAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.length > 0 && (
        <div className="fixed bottom-4 right-4 z-[250] flex flex-col items-end gap-2 pointer-events-none">
          {toasts.length > 1 && (
            <button 
              onClick={closeAll}
              className="text-xs bg-gray-800 text-white px-3 py-1.5 rounded-full shadow-md hover:bg-gray-700 pointer-events-auto transition-colors z-[251]"
            >
              Clear All
            </button>
          )}
          <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-1 pb-1 scrollbar-hide pointer-events-auto w-80">
            {toasts.map(toast => (
              <div key={toast.id} className="bg-white border border-gray-100 shadow-xl p-4 rounded-xl flex gap-3 items-start animate-in fade-in slide-in-from-bottom-5 w-full relative group">
                <div className={`p-2 rounded-full flex-shrink-0 ${toast.type === 'success' ? 'text-green-500 bg-green-50' : toast.type === 'error' ? 'text-red-500 bg-red-50' : 'text-[#f36b21] bg-orange-50'}`}>
                  {toast.type === 'success' ? <CheckCircle2 size={24} /> : toast.type === 'error' ? <XCircle size={24} /> : <Info size={24} />}
                </div>
                <div className="flex-1 pt-1 overflow-hidden">
                  <h4 className="font-bold text-gray-800 text-sm tracking-tight truncate">{toast.title}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2 md:line-clamp-3 mt-1">{toast.message}</p>
                </div>
                <button 
                  onClick={() => closeToast(toast.id)}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity rounded-md hover:bg-gray-100"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
