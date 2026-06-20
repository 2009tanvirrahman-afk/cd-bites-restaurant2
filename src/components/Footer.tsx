import { Twitter, Facebook, Dribbble, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#222222] border-t-4 border-[#f36b21]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-between">
        
        {/* About */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2">
          <div className="font-bold text-3xl tracking-tighter text-white mb-6">
            <span className="text-[#f36b21]">CD Bites</span>
          </div>
          <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
            CD Bites Cafe and Restaurant offers a cosy, trendy atmosphere for breakfast, brunch, lunch, and dinner. 
            Enjoy great coffee, delicious desserts, and halal food with top-tier service.
          </p>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/CDBitesChuadanga/menu/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-[#f36b21] text-white flex justify-center items-center hover:bg-orange-600 transition"><Facebook size={14} fill="currentColor" /></a>
            <a href="https://wa.me/01829473901" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 text-white flex justify-center items-center hover:bg-[#25D366] transition">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current stroke-none"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.18.196-.3.296-.51.1-.21.046-.39-.031-.54-.075-.15-.672-1.62-.922-2.206-.24-.579-.492-.501-.672-.51-.174-.009-.374-.009-.574-.009-.2 0-.527.075-.802.375-.274.3-1.046 1.02-1.046 2.49 0 1.47 1.072 2.88 1.22 3.075.15.196 2.096 3.2 5.077 4.485.709.301 1.262.48 1.694.615.711.225 1.359.195 1.871.12.576-.09 1.767-.721 2.016-1.426.246-.705.246-1.305.174-1.425-.075-.12-.275-.195-.576-.345z"></path><path d="M20.52 3.449A11.96 11.96 0 0012 0C5.385 0 0 5.384 0 12.001c0 2.12.553 4.195 1.603 6.015L.145 24l6.14-1.611a11.933 11.933 0 005.715 1.446h.005c6.613 0 12-5.385 12-12.002 0-3.21-1.248-6.22-3.485-8.384zm-8.52 18.256c-1.802 0-3.565-.48-5.111-1.395l-.366-.211-3.799.996.996-3.705-.241-.375A9.972 9.972 0 012.003 12c0-5.505 4.496-10 10.005-10 2.671 0 5.176 1.036 7.065 2.925A9.957 9.957 0 0122.002 12c0 5.505-4.496 10-10.003 10z"></path></svg>
            </a>
            <a href="#top" className="w-8 h-8 rounded bg-gray-800 text-white flex justify-center items-center hover:bg-[#f36b21] transition"><Twitter size={14} /></a>
            <a href="#top" className="w-8 h-8 rounded bg-gray-800 text-white flex justify-center items-center hover:bg-[#f36b21] transition"><Dribbble size={14} /></a>
            <a href="#top" className="w-8 h-8 rounded bg-gray-800 text-white flex justify-center items-center hover:bg-[#f36b21] transition"><Youtube size={14} /></a>
          </div>
        </div>

        {/* Information */}
        <div className="col-span-1">
          <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Features</h4>
          <ul className="text-[13px] text-gray-400 flex flex-col gap-3">
            <li><span className="text-gray-400">Free Wi-Fi</span></li>
            <li><span className="text-gray-400">Kids' Menu</span></li>
            <li><span className="text-gray-400">Dine-in & Takeaway</span></li>
            <li><span className="text-gray-400">Delivery Options</span></li>
            <li><span className="text-gray-400">Wheelchair Accessible</span></li>
          </ul>
        </div>

        {/* Hours */}
        <div className="col-span-1">
          <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Opening Hours</h4>
          <ul className="text-[13px] text-gray-400 flex flex-col gap-3">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>10:00 AM - 8:30 PM</span></li>
            <li className="flex justify-between"><span>Friday</span> <span>3:00 PM - 8:30 PM</span></li>
            <li className="flex justify-between"><span>Sat - Sun</span> <span>10:00 AM - 8:30 PM</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 sm:col-span-2 md:col-span-5 lg:col-span-1 mt-6 md:mt-0">
          <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Contact Info</h4>
          <ul className="text-[13px] text-gray-400 flex flex-col gap-4">
            <li className="flex gap-3">
              <span className="font-bold text-white w-20">Address:</span> 
              <span>JRXX+73<br/>Chuadanga,<br/>Bangladesh</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-white w-20">Phone:</span> 
              <span>01829473901</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-white w-20">Email:</span> 
              <span className="hover:text-[#f36b21] transition cursor-pointer">info@cdbites.com</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-xs text-gray-500">
            Copyright © 2026 CD Bites Cafe and Restaurant. All rights reserved.
          </div>
          <div className="flex gap-2">
             {/* Payment Icons placehoder */}
             <div className="bg-gray-800 w-10 h-6 rounded flex justify-center items-center text-[8px] text-white font-bold">VISA</div>
             <div className="bg-gray-800 w-10 h-6 rounded flex justify-center items-center text-[8px] text-white font-bold">MC</div>
             <div className="bg-gray-800 w-10 h-6 rounded flex justify-center items-center text-[8px] text-white font-bold">AMEX</div>
             <div className="bg-gray-800 w-10 h-6 rounded flex justify-center items-center text-[8px] text-white font-bold">DISC</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
