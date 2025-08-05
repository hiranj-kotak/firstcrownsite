import React from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Building } from 'lucide-react';
import { section } from 'motion/react-client';

const ContactForm = () => {
    return (
        <section className='py-32'> 
        <div 
        style={{boxShadow: "0px 0px 25px 1px rgba(0, 0, 0, 0.175)"}}
        className="flex flex-col md:flex-row rounded-xl  overflow-hidden max-w-5xl mx-auto bg-theme-bg text-theme-text  " >
            {/* Left Section */}
            <div className="bg-theme-bg  text-theme-text p-10 md:w-1/2 space-y-8">
                <div>
                    <button className="bg-theme-card text-theme-secondary  text-[12px]  font-medium  px-2 py-1 rounded ">
                        KEEP IN TOUCH
                    </button>
                </div>
                <div className="text-4xl font-bold">
                    <p>Looking for help?</p>
                    <p>Ready to help!</p>
                </div>
                <div className="divide-y divide-gray-300">
                    <div className="flex items-start gap-4 py-4">
                        <Phone className="mt-1" size={20} />
                        <div>
                            <p className="text-sm">Feel free to get in touch?</p>
                            <p className="text-sm font-bold ">+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 py-4">
                        <Mail className=" mt-1" size={20} />
                        <div>
                            <p className="text-sm">How can we help you?</p>
                            <p className="text-sm font-bold ">hello@email.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 py-4">
                        <MapPin className=" mt-1" size={20} />
                        <div>
                            <p className="text-sm">Are you ready for coffee?</p>
                            <p className="text-sm font-bold">Ahmedabad, Gujarat, India.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Right Section */}
            <div className="bg-theme-card text-theme-cardText p-10 md:w-1/2">
                <h2 className="text-5xl font-bold mb-8">Say Hello!</h2>
                <form className="space-y-6">
                    {/* Input Field */}
                    <div className="relative border-b border-gray-400">
                        <input
                            type="text"
                            placeholder="Enter your name*"
                            className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-theme-cardText"
                        />
                        <User className="absolute right-0 top-2.5" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <input
                            type="email"
                            placeholder="Enter your email address*"
                            className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-theme-cardText"
                        />
                        <Mail className="absolute right-0 top-2.5" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <input
                            type="text"
                            placeholder="Enter mobile number*"
                            className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-theme-cardText"
                        />
                        <Phone className="absolute right-0 top-2.5" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <input
                            type="text"
                            placeholder="Enter company name"
                            className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-theme-cardText"
                        />
                        <Building className="absolute right-0 top-2.5" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <textarea
                            placeholder="Tell us more about your project"
                            className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-theme-cardText"
                            rows="2"
                        />
                        <MessageSquare className="absolute right-0 top-2.5" size={18} />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="bg-theme-bg text-theme-text px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
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
