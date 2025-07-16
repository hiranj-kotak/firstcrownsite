import React from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Building } from 'lucide-react';

const ContactForm = () => {
    return (
        <div className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto my-32 ">
            {/* Left Section */}
            <div className="bg-white p-10 md:w-1/2 space-y-8">
                <div>
                    <button className="bg-primary text-white text-[12px] text-black font-medium  px-2 py-1 rounded ">
                        KEEP IN TOUCH
                    </button>
                </div>
                <div className="text-4xl font-bold">
                    <p>Looking for help?</p>
                    <p>Ready to help!</p>
                </div>
                <div className="divide-y divide-gray-300">
                    <div className="flex items-start gap-4 py-4">
                        <Phone className="text-black mt-1" size={20} />
                        <div>
                            <p className="text-sm">Feel free to get in touch?</p>
                            <p className="text-sm font-bold text-black">+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 py-4">
                        <Mail className="text-black mt-1" size={20} />
                        <div>
                            <p className="text-sm">How can we help you?</p>
                            <p className="text-sm font-bold text-black">hello@email.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 py-4">
                        <MapPin className="text-black mt-1" size={20} />
                        <div>
                            <p className="text-sm">Are you ready for coffee?</p>
                            <p className="text-sm font-bold text-black">Ahmedabad, Gujarat, India.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Right Section */}
            <div className="bg-primary p-10 md:w-1/2">
                <h2 className="text-5xl font-bold text-white mb-8">Say Hello!</h2>
                <form className="space-y-6">
                    {/* Input Field */}
                    <div className="relative border-b border-gray-400">
                        <input
                            type="text"
                            placeholder="Enter your name*"
                            className="w-full bg-transparent text-white outline-none py-2 pr-8 placeholder:text-white"
                        />
                        <User className="absolute right-0 top-2.5 text-white" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <input
                            type="email"
                            placeholder="Enter your email address*"
                            className="w-full bg-transparent outline-none py-2 pr-8 text-white placeholder:text-white"
                        />
                        <Mail className="absolute right-0 top-2.5 text-white" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <input
                            type="text"
                            placeholder="Enter mobile number*"
                            className="w-full bg-transparent outline-none py-2 pr-8 text-white placeholder:text-white"
                        />
                        <Phone className="absolute right-0 top-2.5 text-white" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <input
                            type="text"
                            placeholder="Enter company name"
                            className="w-full bg-transparent outline-none py-2 pr-8 text-white placeholder:text-white"
                        />
                        <Building className="absolute right-0 top-2.5 text-white" size={18} />
                    </div>

                    <div className="relative border-b border-gray-400">
                        <textarea
                            placeholder="Tell us more about your project"
                            className="w-full bg-transparent outline-none py-2 pr-8 text-white  placeholder:text-white"
                            rows="2"
                        />
                        <MessageSquare className="absolute right-0 top-2.5 text-white" size={18} />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="bg-white text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
