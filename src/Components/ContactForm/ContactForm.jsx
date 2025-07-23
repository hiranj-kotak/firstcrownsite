import React from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Building } from 'lucide-react';
import { section } from 'motion/react-client';

const ContactForm = () => {
    return (
        <section className='py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8'>
            <div className="flex flex-col lg:flex-row rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto bg-theme-bg text-theme-text">
                {/* Left Section */}
                <div className="bg-theme-bg text-theme-text p-6 sm:p-8 lg:p-10 lg:w-1/2 space-y-6 sm:space-y-8">
                    <div>
                        <button className="bg-theme-card text-theme-secondary text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                            KEEP IN TOUCH
                        </button>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold space-y-1">
                        <p>Looking for help?</p>
                        <p>Ready to help!</p>
                    </div>
                    <div className="divide-y divide-gray-300 space-y-0">
                        <div className="flex items-start gap-3 sm:gap-4 py-4">
                            <Phone className="mt-1 flex-shrink-0" size={18} />
                            <div className="min-w-0 flex-1">
                                <p className="text-xs sm:text-sm text-gray-600">Feel free to get in touch?</p>
                                <p className="text-sm sm:text-base font-bold">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4 py-4">
                            <Mail className="mt-1 flex-shrink-0" size={18} />
                            <div className="min-w-0 flex-1">
                                <p className="text-xs sm:text-sm text-gray-600">How can we help you?</p>
                                <p className="text-sm sm:text-base font-bold">hello@email.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4 py-4">
                            <MapPin className="mt-1 flex-shrink-0" size={18} />
                            <div className="min-w-0 flex-1">
                                <p className="text-xs sm:text-sm text-gray-600">Are you ready for coffee?</p>
                                <p className="text-sm sm:text-base font-bold">Ahmedabad, Gujarat, India.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-theme-card text-theme-cardText p-6 sm:p-8 lg:p-10 lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Say Hello!</h2>
                    <form className="space-y-4 sm:space-y-6">
                        {/* Input Fields */}
                        <div className="relative border-b border-gray-400">
                            <input
                                type="text"
                                placeholder="Enter your name*"
                                className="w-full bg-transparent outline-none py-3 sm:py-2 pr-8 placeholder:text-theme-cardText/70 text-sm sm:text-base"
                            />
                            <User className="absolute right-0 top-1/2 -translate-y-1/2" size={18} />
                        </div>

                        <div className="relative border-b border-gray-400">
                            <input
                                type="email"
                                placeholder="Enter your email address*"
                                className="w-full bg-transparent outline-none py-3 sm:py-2 pr-8 placeholder:text-theme-cardText/70 text-sm sm:text-base"
                            />
                            <Mail className="absolute right-0 top-1/2 -translate-y-1/2" size={18} />
                        </div>

                        <div className="relative border-b border-gray-400">
                            <input
                                type="tel"
                                placeholder="Enter mobile number*"
                                className="w-full bg-transparent outline-none py-3 sm:py-2 pr-8 placeholder:text-theme-cardText/70 text-sm sm:text-base"
                            />
                            <Phone className="absolute right-0 top-1/2 -translate-y-1/2" size={18} />
                        </div>

                        <div className="relative border-b border-gray-400">
                            <input
                                type="text"
                                placeholder="Enter company name"
                                className="w-full bg-transparent outline-none py-3 sm:py-2 pr-8 placeholder:text-theme-cardText/70 text-sm sm:text-base"
                            />
                            <Building className="absolute right-0 top-1/2 -translate-y-1/2" size={18} />
                        </div>

                        <div className="relative border-b border-gray-400">
                            <textarea
                                placeholder="Tell us more about your project"
                                className="w-full bg-transparent outline-none py-3 sm:py-2 pr-8 placeholder:text-theme-cardText/70 text-sm sm:text-base resize-none"
                                rows="3"
                            />
                            <MessageSquare className="absolute right-0 top-3" size={18} />
                        </div>

                        <div className="pt-4 sm:pt-6">
                            <button
                                type="submit"
                                className="bg-theme-bg text-theme-text px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
