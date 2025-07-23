import {
  Youtube,
  Facebook,
  X as Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-dark-bg text-dark-text px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-dark-border overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <div className="bg-dark-card text-dark-text border border-dark-border px-4 py-2 inline-block rounded-lg mb-4">
            <span className="text-lg font-bold">First</span>
            <span className="text-purple-300 font-bold">Crown</span>
          </div>
          <p className="text-sm sm:text-base text-dark-text/70 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore dolor accusantium
            consequatur pariatur. Qui, adipisci deserunt. Labore, corrupti distinctio.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-2 text-sm sm:text-base font-medium">
          <h3 className="text-lg font-semibold mb-2 sm:mb-3 text-white">Quick Links</h3>
          <a href="#about" className="text-dark-text hover:text-purple-300 transition-colors duration-300">About Us</a>
          <a href="#work" className="text-dark-text hover:text-purple-300 transition-colors duration-300">Work</a>
          <a href="#service" className="text-dark-text hover:text-purple-300 transition-colors duration-300">Service</a>
          <a href="#contact" className="text-dark-text hover:text-purple-300 transition-colors duration-300">Contact Us</a>
          <a href="/careers" className="text-dark-text hover:text-purple-300 transition-colors duration-300">Career</a>
        </div>

        {/* Social Icons & Contact */}
        <div className="flex flex-col items-center sm:items-end space-y-4 sm:space-y-6">
          <div className="text-center sm:text-right">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4 text-white">Connect With Us</h3>
            <div className="flex justify-center sm:justify-end space-x-4 sm:space-x-6">
              <a href="#" className="text-dark-text hover:text-purple-300 transition-colors duration-300 transform hover:scale-110 p-2">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-dark-text hover:text-purple-300 transition-colors duration-300 transform hover:scale-110 p-2">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-dark-text hover:text-purple-300 transition-colors duration-300 transform hover:scale-110 p-2">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-dark-text hover:text-purple-300 transition-colors duration-300 transform hover:scale-110 p-2">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-dark-text hover:text-purple-300 transition-colors duration-300 transform hover:scale-110 p-2">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm sm:text-base text-dark-text/80 font-medium">hello@firstcrown.com</p>
            <p className="text-sm text-dark-text/60 mt-1">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-dark-border/30">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-dark-text/60 text-center sm:text-left">
            © 2024 First Crown. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-dark-text/60">
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;