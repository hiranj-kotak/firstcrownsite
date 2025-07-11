import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = Array(10).fill({
  question: "Lorem ipsum , dolor sit amet consectetur adipisicing?",
  answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam.",
});

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#2a015b] text-white py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">You ask, we answer</h2>
        <p className="text-[#d1b3ff] mt-2">
          Lorem ipsum, dolor sit amet consecteur
        </p>
      </div>

      <div className="max-w-4xl mx-auto border border-[#885fe7] rounded-xl p-6 space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-[#885fe7]/50 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center font-medium text-left text-white text-lg"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-[#e2d3ff]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
