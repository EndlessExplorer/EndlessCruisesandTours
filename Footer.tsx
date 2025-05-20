import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Endless Cruises and Tours</h3>
            <p className="text-gray-300 mb-4">
              Tour operator specializing in authentic experiences across Madagascar's diverse landscapes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/circuits" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.circuits')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.info.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
                <span className="text-gray-300">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-emerald-400" />
                <a href="mailto:contact@endless-tours.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@endless-tours.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-emerald-400" />
                <a href="tel:+261-20-12-345-67" className="text-gray-300 hover:text-white transition-colors">
                  {t('contact.info.phone')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates on our latest tours and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Endless Cruises and Tours. {t('footer.rights')}.
          </p>
          <p className="mt-2">
            {t('footer.createdBy')} <a href="https://leomedias.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">LEO Médias Groupe</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;