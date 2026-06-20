/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { CategoryCircles } from "./components/CategoryCircles";
import { ProductTabs } from "./components/ProductTabs";
import { PromoBanners } from "./components/PromoBanners";
import { SpecialProducts } from "./components/SpecialProducts";
import { TableBooking } from "./components/TableBooking";
import { RestaurantInfo } from "./components/RestaurantInfo";
import { Blogs } from "./components/Blogs";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CartDrawer } from "./components/CartDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { AuthModal } from "./components/AuthModal";
import { X, ChevronRight } from "lucide-react";
import { LocationMap } from "./components/LocationMap";
import { FAQs } from "./components/FAQs";
import { Testimonials } from "./components/Testimonials";
import { NewsletterSubscription } from "./components/NewsletterSubscription";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ToastProvider>
    <AuthProvider>
      <WishlistProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-800 relative select-none">
        {/* Mobile Menu Drawer Overlay */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Drawer */}
        <div className={`fixed inset-y-0 left-0 w-[300px] sm:w-[350px] bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-6 bg-gray-900 text-white flex-shrink-0 shadow-md">
            <span className="font-bold tracking-widest text-[#f36b21] uppercase text-lg">Navigation</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#f36b21] hover:rotate-90 transition-all duration-300 bg-gray-800 p-2 rounded-full">
              <X size={20} />
            </button>
          </div>
          <div className="p-6 flex-1 overflow-y-auto w-full">
             {/* Navigation Items for Mobile */}
             <div className="flex flex-col gap-3 mb-8 border-b border-gray-100 pb-8">
                {[
                  { label: "Home", href: "#top" },
                  { label: "Food Menu", href: "#products" },
                  { label: "Special Offers", href: "#offers" },
                  { label: "Book a Table", href: "#booking-section" },
                  { label: "About Us", href: "#about-section" },
                  { label: "Our Blog", href: "#blogs" }
                ].map(item => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="flex justify-between items-center font-bold text-gray-700 text-base py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-[#f36b21] active:bg-orange-100 transition-colors group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#f36b21] transition-colors" />
                  </a>
                ))}
             </div>
             
             {/* Sidebar Content for Mobile */}
             <Sidebar />
          </div>
        </div>

        <Header />
        <Navigation onMenuClick={() => setIsMobileMenuOpen(true)} />
        
        <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col lg:flex-row gap-8 md:gap-10">
          <aside className="hidden lg:block w-[280px] flex-shrink-0 order-2 lg:order-1">
            <Sidebar />
          </aside>
          
          <div className="flex-1 flex flex-col gap-10 md:gap-14 overflow-hidden order-1 lg:order-2">
            <Hero />
            
            <div id="booking-highlight">
              <TableBooking />
            </div>

            <CategoryCircles />
            <ProductTabs />
            <PromoBanners />
            <SpecialProducts />
            <RestaurantInfo />
            <LocationMap />
            <FAQs />
            <Blogs />
            <Testimonials />
            <NewsletterSubscription />
          </div>
        </main>

        <Footer />
        <FloatingButtons />
        
        <CartDrawer />
        <WishlistDrawer />
        <AuthModal />
      </div>
    </CartProvider>
    </WishlistProvider>
    </AuthProvider>
    </ToastProvider>
  );
}
