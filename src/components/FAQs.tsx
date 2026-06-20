import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What are your delivery hours and locations?",
    answer: "We deliver across Chuadanga city limits and surrounding areas from 10:00 AM to 11:30 PM, seven days a week. Average delivery time is 30-45 minutes depending on traffic."
  },
  {
    question: "Do you offer vegetarian, vegan, or gluten-free options?",
    answer: "Yes! We have a dedicated section for vegetarian meals. While we don't have a separate gluten-free kitchen, many of our rice bowls and salads can be made gluten-free upon request."
  },
  {
    question: "How do I book a table in advance?",
    answer: "You can book a table directly through our 'Book a Table' section on the website, or call us directly at 01829473901. We recommend booking at least 2 hours in advance for weekends."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major methods including Cash on Delivery, bKash, Nagad, and credit/debit cards (Visa, Mastercard) for online orders."
  },
  {
    question: "Can I host a party or private event at the cafe?",
    answer: "Absolutely! We can accommodate private parties of up to 40 guests. Please contact our management team with your requirements and we'll arrange a special menu for you."
  }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mb-12" id="faqs">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-[#f36b21] bg-orange-50 px-3 py-1 rounded-full text-sm font-bold mb-4">
            <HelpCircle size={16} />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight uppercase">FAQs</h2>
          <div className="w-16 h-1 bg-[#f36b21] my-4 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
            Everything you need to know about our services, dining, and delivery.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen ? "border-[#f36b21] bg-orange-50/30 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#f36b21] focus:ring-opacity-50"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <span className={`font-bold transition-colors duration-300 ${isOpen ? "text-[#f36b21]" : "text-gray-800"}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-[#f36b21] text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
