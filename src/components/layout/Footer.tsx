
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GourmetGo</h3>
            <p className="text-sm text-primary-foreground/80">
              Bringing exceptional culinary experiences directly to your doorstep. Curated from the finest restaurants in the city.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Home
              </Link>
              <Link to="/menu" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Full Menu
              </Link>
              <Link to="/about" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                About Us
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Legal</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/terms" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="tel:+12345678901" className="flex items-center text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Phone size={16} className="mr-2" />
                <span>+1 (234) 567-8901</span>
              </a>
              <a href="mailto:info@gourmetgo.com" className="flex items-center text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Mail size={16} className="mr-2" />
                <span>info@gourmetgo.com</span>
              </a>
              <address className="flex items-start not-italic text-primary-foreground/70">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Gourmet Street, Foodville, FD 12345</span>
              </address>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      <div className="container py-6 text-center text-sm text-primary-foreground/60">
        <p>© {new Date().getFullYear()} GourmetGo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
