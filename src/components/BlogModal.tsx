import { X, Calendar } from 'lucide-react';

export type BlogPost = {
  id: number;
  image: string;
  date: string;
  title: string;
  text: string;
};

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 bg-black/50 text-white rounded-full p-2 hover:bg-[#f36b21] transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        <div className="w-full h-64 md:h-80 relative flex-shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-[#f36b21] font-bold text-xs tracking-widest uppercase mb-2">
              <Calendar size={14} /> {post.date}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{post.title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="prose prose-sm md:prose-base prose-orange max-w-none text-gray-600">
            <p className="text-lg text-gray-800 font-medium leading-relaxed mb-6">
              {post.text}
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Premium ingredients selected daily</li>
              <li>Trained and passionate culinary team</li>
              <li>Commitment to excellence and customer satisfaction</li>
            </ul>
            <p>
              Join us at CD Bites to experience the difference. Our doors are always open for those who appreciate fine dining and a warm atmosphere.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 pb-2">
             <button 
               onClick={onClose}
               className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-3 rounded-xl transition-colors text-sm"
             >
               Close Article
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
