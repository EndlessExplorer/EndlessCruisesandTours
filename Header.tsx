import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Globe className={`w-8 h-8 mr-2 ${isScrolled ? 'text-emerald-600' : 'text-white'}`} />
              <span className={`text-xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Endless Cruises and Tours
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className={`${isScrolled ? 'text-gray-800 hover:text-emerald-600' : 'text-white hover:text-emerald-200'} font-medium transition-colors`}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                to="/circuits" 
                className={`${isScrolled ? 'text-gray-800 hover:text-emerald-600' : 'text-white hover:text-emerald-200'} font-medium transition-colors`}
              >
                {t('navigation.circuits')}
              </Link>
              <Link 
                to="/contact" 
                className={`${isScrolled ? 'text-gray-800 hover:text-emerald-600' : 'text-white hover:text-emerald-200'} font-medium transition-colors`}
              >
                {t('navigation.contact')}
              </Link>
            </nav>
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

          <div className="flex items-center md:hidden">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button 
              onClick={toggleMenu} 
              className={`ml-4 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden bg-white rounded-b-lg mt-2 ${isMenuOpen ? 'shadow-md' : ''}`}
        >
          <nav className="flex flex-col py-4">
            <Link to="/" className="px-4 py-2 text-gray-800 hover:text-emerald-600 hover:bg-gray-50">
              {t('navigation.home')}
            </Link>
            <Link to="/circuits" className="px-4 py-2 text-gray-800 hover:text-emerald-600 hover:bg-gray-50">
              {t('navigation.circuits')}
            </Link>
            <Link to="/contact" className="px-4 py-2 text-gray-800 hover:text-emerald-600 hover:bg-gray-50">
              {t('navigation.contact')}
            </Link>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;