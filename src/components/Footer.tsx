
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-purple-light">Auto</span>
              <span className="text-brand-teal">Nate</span>
              <span className="text-brand-gold">AI</span>
              <span className="text-white"> Institute</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Engineer your mind. Transform your reality. Discover the science of consciousness engineering.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/cognitive-blueprint" className="text-gray-300 hover:text-primary transition-colors">
                  Cognitive Blueprint
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-teal" />
                <a href="mailto:info@autoNateAI.com" className="text-gray-300 hover:text-primary">
                  info@autoNateAI.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-teal" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-brand-teal" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Join our newsletter for the latest updates on consciousness engineering.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-brand-purple-light hover:bg-brand-purple-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AutoNateAI Institute. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
