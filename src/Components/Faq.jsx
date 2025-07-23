import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = Array(10).fill({
  question: "Lorem ipsum , dolor sit amet consectetur adipisicing?",
  answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam.",
});

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-3">You ask, we answer</h2>
        <p className="text-sm sm:text-base text-[#d1b3ff]">
          Lorem ipsum, dolor sit amet consecteur
        </p>
      </div>

      <div className="max-w-4xl mx-auto border border-[#885fe7] rounded-xl p-4 sm:p-6 space-y-2 sm:space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="relative border-b border-[#885fe7]/50 pb-3 sm:pb-4 group transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between py-3 sm:py-4 px-2 sm:px-4 rounded-lg hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="text-sm sm:text-base lg:text-lg font-medium pr-4 sm:pr-8">
                  {faq.question}
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${isOpen
                    ? "max-h-40 sm:max-h-48 mt-2 sm:mt-3 opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="text-xs sm:text-sm lg:text-base text-[#e2d3ff] px-2 sm:px-4 pb-2 sm:pb-3 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
