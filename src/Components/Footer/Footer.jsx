import {
  Youtube,
  Facebook,
  X as Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-dark-bg text-dark-text px-6 py-12 border-t border-dark-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Description */}
        <div>
          <div className="bg-dark-card text-dark-text border border-dark-border px-4 py-2 inline-block rounded">
            Logo
          </div>
          <p className="mt-4 text-sm text-dark-text/70 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore dolor accusantium
            consequatur pariatur. Qui, adipisci deserunt. Labore, corrupti distinctio.
          </p>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="flex flex-col items-center text-center space-y-2 text-sm font-medium">
          <a href="#about" className="text-dark-text hover:text-dark-primary transition-colors duration-300">About Us</a>
          <a href="#work" className="text-dark-text hover:text-dark-primary transition-colors duration-300">Work</a>
          <a href="#service" className="text-dark-text hover:text-dark-primary transition-colors duration-300">Service</a>
          <a href="#contact" className="text-dark-text hover:text-dark-primary transition-colors duration-300">Contact Us</a>
          <a href="/careers" className="text-dark-text hover:text-dark-primary transition-colors duration-300">Career</a>
        </div>

        {/* Social Icons & Email */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6"> {/* Increased gap */}
            <a href="#" className="text-dark-text hover:text-dark-primary transition-colors duration-300 transform hover:scale-110">
              <Youtube size={26} /> {/* Increased size */}
            </a>
            <a href="#" className="text-dark-text hover:text-dark-primary transition-colors duration-300 transform hover:scale-110">
              <Facebook size={26} />
            </a>
            <a href="#" className="text-dark-text hover:text-dark-primary transition-colors duration-300 transform hover:scale-110">
              <Twitter size={26} />
            </a>
            <a href="#" className="text-dark-text hover:text-dark-primary transition-colors duration-300 transform hover:scale-110">
              <Instagram size={26} />
            </a>
            <a href="#" className="text-dark-text hover:text-dark-primary transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={26} />
            </a>
          </div>
          <p className="text-sm text-dark-text/80">hello@email.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;