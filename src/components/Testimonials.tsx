import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Local Guide",
    content: "The best dining experience in Chuadanga! The spicy pizza is an absolute must-try. Consistent quality and amazing friendly service.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80"
  },
  {
    name: "Kamrul Hasan",
    role: "Regular Customer",
    content: "I've been ordering their rice bowls for lunch every week. The delivery is incredibly fast, and the food always arrives hot and fresh.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80"
  },
  {
    name: "Nusrat Jahan",
    role: "Food Blogger",
    content: "Absolutely love the vibe! We booked a table for my daughter's birthday and the staff went out of their way to make it special.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="mb-12" id="reviews">
      <div className="text-center md:text-left mb-8">
        <span className="text-[#f36b21] font-extrabold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 block">Customer Voices</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight flex items-center justify-center md:justify-start gap-3">
          What They Say
        </h2>
        <div className="w-12 h-1.5 bg-[#f36b21] my-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-6 right-6 text-orange-100 group-hover:text-orange-200 transition-colors">
              <Quote size={40} className="transform rotate-180" />
            </div>
            
            <div className="flex items-center gap-1 mb-4 text-[#f36b21]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-gray-300" : ""} />
              ))}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium italic relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
