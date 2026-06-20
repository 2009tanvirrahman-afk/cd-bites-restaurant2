import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BlogModal, BlogPost } from "./BlogModal";

export function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      date: "05 August 2024",
      title: "The Art of Roasting: Perfect Coffee Beans",
      text: "Discover how we select and roast our coffee beans to create the perfect cup you enjoy every morning at CD Bites."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      date: "12 September 2024",
      title: "5 Secret Spices in Our Signature Dishes",
      text: "Take a peek behind the kitchen doors as our head chef reveals the secret spices that make our dishes truly memorable."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      date: "28 October 2024",
      title: "Why Our Wood-Fired Pizza is Different",
      text: "It takes more than just heat to make a great pizza. Learn about our traditional wood-fired technique and artisan dough."
    }
  ];

  return (
    <div className="text-center md:text-left" id="blogs">
      <div className="border-b border-gray-200 flex justify-between items-center bg-transparent mb-6 pb-4">
        <h3 className="text-gray-900 font-extrabold uppercase text-xl sm:text-2xl tracking-tight flex flex-wrap items-center gap-2 sm:gap-3">
           <span>Latest News</span> <span className="bg-[#f36b21] text-white font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-sm tracking-wider uppercase whitespace-nowrap">Blog</span>
        </h3>
        <div className="flex gap-2 hidden sm:flex">
          <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-[#f36b21] hover:text-white hover:border-[#f36b21] transition-all">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-[#f36b21] hover:border-[#f36b21] transition-all shadow-md">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <div key={blog.id} className="p-6 md:p-8 flex flex-col group hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="overflow-hidden mb-6 rounded-lg shadow-md aspect-[4/3] relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <div className="text-left flex flex-col flex-grow">
               <div className="text-xs text-[#f36b21] font-bold tracking-widest uppercase mb-3">{blog.date}</div>
               <h4 className="font-bold text-gray-800 text-lg sm:text-xl mb-3 group-hover:text-[#f36b21] transition-colors leading-tight">{blog.title}</h4>
               <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
                 {blog.text}
               </p>
               <button 
                 className={`text-xs font-bold px-8 py-3 w-max uppercase rounded transition-all hover:scale-105 active:scale-95 tracking-wide ${idx === 0 ? 'bg-[#f36b21] text-white shadow-md shadow-orange-500/30 hover:bg-orange-600' : 'bg-transparent text-gray-800 border-2 border-gray-900 hover:bg-gray-900 hover:text-white'}`}
                 onClick={() => setSelectedPost(blog)}
               >
                 Read More
               </button>
            </div>
          </div>
        ))}
      </div>

      <BlogModal 
        post={selectedPost}
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
