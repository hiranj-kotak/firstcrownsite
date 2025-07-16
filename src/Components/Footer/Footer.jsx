import {
  Youtube,
  Facebook,
  X as Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Description */}
        <div>
          <div className="bg-gray-700 text-white px-4 py-2 inline-block rounded">
            Logo
          </div>
          <p className="mt-4 text-sm  leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore dolor accusantium
            consequatur pariatur. Qui, adipisci deserunt. Labore, corrupti distinctio.
          </p>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="flex flex-col items-center text-center space-y-2 text-sm font-medium">
          <a href="#about" className="hover:text-violet-600">About Us</a>
          <a href="#work" className="hover:text-violet-600">Work</a>
          <a href="#service" className="hover:text-violet-600">Service</a>
          <a href="#contact" className="hover:text-violet-600">Contact Us</a>
          <a href="/careers" className="hover:text-violet-600">Career</a>
        </div>

        {/* Social Icons & Email */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6"> {/* Increased gap */}
            <a href="#" className="hover:text-violet-600">
              <Youtube size={26} /> {/* Increased size */}
            </a>
            <a href="#" className="hover:text-violet-600">
              <Facebook size={26} />
            </a>
            <a href="#" className="hover:text-violet-600">
              <Twitter size={26} />
            </a>
            <a href="#" className="hover:text-violet-600">
              <Instagram size={26} />
            </a>
            <a href="#" className="hover:text-violet-600">
              <Linkedin size={26} />
            </a>
          </div>
          <p className="text-sm">hello@email.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
