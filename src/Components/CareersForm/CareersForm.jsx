import React from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Clock,
  MessageSquare,
  Upload,
} from "lucide-react";

const CareersForm = () => {
  return (
    <div className="max-w-6xl mx-auto  mt-32 mb-32 rounded-xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-white p-10 space-y-6">
        <button className="bg-primary text-[12px] text-white font-semibold px-3 py-1 rounded">
          WE ARE HIRING
        </button>
        <h2 className="text-4xl font-bold">Be part of our mission</h2>
        <p className="text-gray-600">
          We’re looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </p>
        <p className="font-semibold">
          You can submit your resume indicating the desired position
        </p>

        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-4">
            <img src="https://img.icons8.com/ios-filled/24/000000/whatsapp.png" alt="whatsapp" />
            <div>
              <p className="text-sm">Send on direct whatsapp</p>
              <p className="font-semibold">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-gray-200 pt-4">
            <Mail size={20} />
            <div>
              <p className="text-sm">Send on email</p>
              <p className="font-semibold">hello@email.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-primary text-white p-10">
        <h3 className="text-3xl font-bold mb-6">Fill in the blanks</h3>
        <form className="space-y-6">
          {/* Name */}
          <div className="relative border-b border-gray-400">
            <input
              type="text"
              placeholder="Enter your name*"
              className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-white text-white"
            />
            <User className="absolute right-0 top-2.5 text-white" size={18} />
          </div>

          {/* Email */}
          <div className="relative border-b border-gray-400">
            <input
              type="email"
              placeholder="Enter your email address*"
              className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-white text-white"
            />
            <Mail className="absolute right-0 top-2.5 text-white" size={18} />
          </div>

          {/* Mobile */}
          <div className="relative border-b border-gray-400">
            <input
              type="text"
              placeholder="Enter mobile number*"
              className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-white text-white"
            />
            <Phone className="absolute right-0 top-2.5 text-white" size={18} />
          </div>

          {/* Job Role & Notice Period (Side by side) */}
          <div className="flex gap-4">
            <div className="relative border-b border-gray-400 w-1/2">
              <input
                type="text"
                placeholder="Job Role"
                className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-white text-white"
              />
              <Briefcase className="absolute right-0 top-2.5 text-white" size={18} />
            </div>
            <div className="relative border-b border-gray-400 w-1/2">
              <input
                type="text"
                placeholder="Notice Period"
                className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-white text-white"
              />
              <Clock className="absolute right-0 top-2.5 text-white" size={18} />
            </div>
          </div>

          {/* Message */}
          <div className="relative border-b border-gray-400">
            <textarea
              placeholder="Tell us about yourself in short"
              rows="2"
              className="w-full bg-transparent outline-none py-2 pr-8 placeholder:text-white text-white"
            ></textarea>
            <MessageSquare className="absolute right-0 top-2.5 text-white" size={18} />
          </div>

          {/* Upload */}
          <div className="relative border-b border-gray-400">
            <input
              type="file"
              className="w-full text-sm text-white file:hidden"
              onChange={(e) => console.log(e.target.files[0])}
            />
            <div className="flex justify-between items-center py-2 pr-8 text-white text-sm">
              <span className="italic opacity-60">or drop file here</span>
              <Upload size={18} />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-white text-primary px-6 py-2 rounded-full text-sm hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareersForm;
