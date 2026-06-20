import { useState, useRef, useEffect, FormEvent } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<{sender: 'ai' | 'user', text: string}[]>([
    { sender: 'ai', text: 'Hello! I am your CD Bites assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const currentInput = input;
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let reply = "I'm a smart assistant working on learning all about our menu! For now, try asking me about our pizzas, coffee, or booking a table.";
      
      const lower = currentInput.toLowerCase();
      if (lower.includes('pizza')) reply = "Our Spicy Chicken Pizza is a fan favorite! Check out the Chef's Special on the menu.";
      if (lower.includes('coffee') || lower.includes('drink')) reply = "We have an excellent selection of freshly roasted coffee and summer mocktails. You can find them in the drinks section.";
      if (lower.includes('book') || lower.includes('table')) reply = "You can easily book a table right here on our website. Just head to the 'Book a Table' section and fill in your details.";
      if (lower.includes('hello') || lower.includes('hi')) reply = "Hi there! Ready to order something delicious?";
      
      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-300 flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center flex-shrink-0 shadow-md z-10">
          <div className="flex items-center gap-3">
             <div className="bg-[#f36b21] p-2 rounded-full">
               <Bot size={20} />
             </div>
             <div>
               <h3 className="font-bold tracking-wide">AI Assistant</h3>
               <p className="text-[10px] text-green-400 flex items-center gap-1">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
               </p>
             </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
               <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-gray-200 text-gray-700' : 'bg-[#f36b21] text-white'}`}>
                 {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
               </div>
               <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-gray-900 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                 {msg.text}
               </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
          <form onSubmit={handleSend} className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f36b21] focus:ring-2 focus:ring-orange-500/20 text-sm transition-all bg-gray-50 focus:bg-white"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="bg-[#f36b21] hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <Send size={20} className={input.trim() ? "ml-1" : ""} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
