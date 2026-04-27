import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-warm-bg/90 backdrop-blur-md border-b border-warm-bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex flex-col">
              <span className="text-2xl font-serif tracking-tight leading-none uppercase text-warm-ink">Just the Wright</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-accent-olive">Interiors</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-warm-ink border-b border-warm-ink'
                      : 'text-warm-ink hover:text-accent-olive'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons / CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link to="/auth" className="text-warm-ink hover:text-accent-olive transition-colors">
                <User size={20} strokeWidth={1.5} />
              </Link>
              <Link to="/cart" className="text-warm-ink hover:text-accent-olive transition-colors">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </Link>
              <Link to="/contact" className="bg-warm-ink text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-accent-olive transition-colors text-center inline-block">
                Book a Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-4">
              <Link to="/cart" className="text-warm-ink/70 hover:text-warm-ink">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-warm-ink focus:outline-none"
              >
                {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-warm-bg-secondary overflow-hidden bg-warm-bg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base uppercase tracking-widest font-medium text-warm-ink/80 hover:text-warm-ink"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/auth"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base uppercase tracking-widest font-medium text-warm-ink/80 hover:text-warm-ink"
                >
                  Account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-10 py-6 border-t border-warm-bg-secondary bg-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] uppercase tracking-widest text-accent-olive font-semibold text-center">
          <span>Modern Interior Design</span>
          <span>E-Commerce Decor Shop</span>
          <span>Interior Design Blog</span>
          <a href="https://reviews.google.com" target="_blank" rel="noreferrer" className="hover:text-warm-ink transition-colors">Google Certified Reviews</a>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-warm-bg-tertiary flex items-center justify-center cursor-pointer hover:bg-accent-olive hover:text-white transition-all text-warm-ink">
            <span className="text-[10px]">IG</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-warm-bg-tertiary flex items-center justify-center cursor-pointer hover:bg-accent-olive hover:text-white transition-all text-warm-ink">
            <span className="text-[10px]">PB</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
