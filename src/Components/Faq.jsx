import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = Array(10).fill({
  question: "Lorem ipsum , dolor sit amet consectetur adipisicing?",
  answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam.",
});

const FAQ = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-16 px-4 md:px-10">
      <div className=" mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">You ask, we answer</h2>
        <p className="text-[#d1b3ff] mt-2">
          Lorem ipsum, dolor sit amet consecteur
        </p>
      </div>

      <div className="max-w-7xl mx-auto border border-[#885fe7] rounded-xl px-6 py-6 space-y-4">
        {faqData.map((faq, index) => {
          const isHovered = hoverIndex === index;

          return (
            <div
              key={index}
              className="relative border-b border-[#885fe7]/50 pb-4 group transition-all duration-300"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Arrow Button */}
              <button
                className="absolute top-2 right-2 text-white transition-transform duration-300 z-10"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "rotate-[180deg]" : "rotate-0"
                  }`}
                />
              </button>

              {/* Question */}
              <div className="text-2xl font-medium pr-8">{faq.question}</div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isHovered ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                } text-sm text-[#e2d3ff]`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
