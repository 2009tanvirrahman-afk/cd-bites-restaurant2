import { Check, ShieldCheck, MapPin, Clock, Coffee, Car, Wifi, Heart, Users, Calendar } from "lucide-react";

export function RestaurantInfo() {
  const features = [
    { title: "Service Options", items: ["No-contact delivery", "Delivery", "Drive-through", "Takeaway", "Dine-in"], icon: <ShieldCheck className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Highlights", items: ["Fireplace", "Great coffee", "Great dessert"], icon: <Coffee className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Atmosphere", items: ["Casual", "Cosy", "Quiet", "Romantic", "Trendy", "Upmarket"], icon: <Heart className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Offerings", items: ["All you can eat", "Coffee", "Halal food", "Happy-hour food", "Private dining room", "Quick bite", "Salad bar", "Small plates"], icon: <Check className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Dining Options", items: ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert", "Seating", "Table service"], icon: <Coffee className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Amenities", items: ["Toilet", "Wheelchair-accessible toilet", "Wi-Fi", "Free Wi-Fi"], icon: <Wifi className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Crowd", items: ["Family friendly", "Groups", "Tourists", "University students"], icon: <Users className="w-5 h-5 text-[#f36b21]" /> },
    { title: "Parking & Payments", items: ["Free street parking", "NFC mobile payments"], icon: <Car className="w-5 h-5 text-[#f36b21]" /> },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10" id="about-section">
      <div className="text-center md:text-left mb-10">
        <span className="text-[#f36b21] font-extrabold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 block">Our Story & Ambience</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight uppercase">About CD Bites Cafe</h2>
        <div className="w-12 h-1.5 bg-[#f36b21] my-4 mx-auto md:mx-0 rounded-full"></div>
        <p className="text-gray-500 max-w-3xl text-sm md:text-base leading-relaxed font-medium">
          Experience the best dining at Swarganga's premier spot. Whether you're here for a quick bite, a romantic dinner, or an all-you-can-eat feast, our cosy and upmarket atmosphere is perfect for families, tourists, and students alike.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {features.map((feature, idx) => (
          <div key={idx} className="group">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-2">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-sm text-gray-800 uppercase tracking-wide">{feature.title}</h3>
            </div>
            <ul className="space-y-2">
              {feature.items.map((item, idy) => (
                <li key={idy} className="text-xs text-gray-500 font-medium flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#f36b21] mt-1.5 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
         <div className="flex flex-col items-center md:items-start">
             <Calendar className="w-8 h-8 text-[#f36b21] mb-3" />
             <h4 className="font-bold text-gray-800 mb-1">Planning Ahead?</h4>
             <p className="text-xs text-gray-500 mb-2">Reservations recommended for lunch, brunch, and dinner.</p>
             <a href="#booking-section" className="text-[#f36b21] hover:underline font-bold text-xs">Book a Table Now &rarr;</a>
         </div>
         <div className="flex flex-col items-center md:items-start">
             <Clock className="w-8 h-8 text-[#f36b21] mb-3" />
             <h4 className="font-bold text-gray-800 mb-1">Opening Hours</h4>
             <p className="text-xs text-gray-500">Mon - Thu: 10:00 AM - 8:30 PM<br/>Fri: 3:00 PM - 8:30 PM<br/>Sat - Sun: 10:00 AM - 8:30 PM</p>
         </div>
         <div className="flex flex-col items-center md:items-start">
             <MapPin className="w-8 h-8 text-[#f36b21] mb-3" />
             <h4 className="font-bold text-gray-800 mb-1">Location Contact</h4>
             <p className="text-xs text-gray-500">JRXX+73 Chuadanga, Bangladesh<br/>Tel: 01829473901</p>
         </div>
      </div>
    </div>
  );
}
