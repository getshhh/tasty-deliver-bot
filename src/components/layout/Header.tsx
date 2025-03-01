
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import TelegramAuth from '../auth/TelegramAuth';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Add this line to fix the TypeScript error
}

const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-colors menu-item',
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    console.log("User logged in:", userData);
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'glass-effect py-3 shadow-subtle'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">GourmetGo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-4 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-x-3">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart size={20} />
          </Button>
          
          {user ? (
            <Button variant="outline" size="sm" className="ml-2">
              <User size={16} className="mr-2" />
              {user.name || 'Account'}
            </Button>
          ) : (
            <TelegramAuth onLogin={handleLogin} />
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 flex animate-fade-in flex-col bg-background p-4 md:hidden">
          <nav className="flex flex-col space-y-4 pt-4">
            <NavLink to="/" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <Separator />
            <NavLink to="/menu" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
              Menu
            </NavLink>
            <Separator />
            <NavLink to="/about" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <Separator />
            <NavLink to="/contact" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
