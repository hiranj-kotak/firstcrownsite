import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = Array(10).fill({
    question: "Lorem ipsum , dolor sit amet consectetur adipisicing?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam."
});

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F5EFFF] py-16 px-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
                {/* FAQ Content */}
                <div className="md:col-span-3">
                    <h2 className="text-3xl font-bold text-center md:text-left">You ask, we answer</h2>
                    <p className="text-gray-500 text-center md:text-left mt-2 mb-6">
                        Lorem ipsum, dolor sit amet consecteur
                    </p>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b border-black/40 pb-2">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center font-semibold text-left"
                                >
                                    {faq.question}
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {activeIndex === index && (
                                    <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Box */}
                <div className="bg-[#6B21A8] text-white rounded-lg p-5 flex flex-col justify-between h-full max-h-[320px]">
                    <div className="space-y-3">
                        <button className="bg-[#D8B4FE] text-[10px] text-black font-medium  px-2 py-1 rounded ">
                            KEEP IN TOUCH
                        </button>
                        <h3 className="text-3xl font-bold leading-tight">Ready to Get Started?</h3>
                        <p className="text-sm text-white/90 leading-snug">
                            Take the First Step Towards Digital Marketing Success
                        </p>
                        <button className="border border-white text-white text-sm px-3 py-1.5 rounded-full hover:bg-white hover:text-[#6B21A8] transition w-fit">
                            Get Started
                        </button>
                    </div>
                    <div className="text-xs mt-4 text-white/80 flex items-center justify-between">
                        <span>Prefer to email?<br />hello@email.com</span>
                        <span className="text-xl ml-2">→</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
