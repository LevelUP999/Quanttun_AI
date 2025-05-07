import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Tv } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { translations } = useLanguage();
  
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 text-sm mt-2">
              {translations.footerTagline}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-quanttun-purple transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-quanttun-purple transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-quanttun-purple transition-colors" aria-label="TikTok">
                <Tv size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">{translations.product}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.features}</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.pricing}</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.testimonials}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">{translations.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.blog}</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.guides}</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.support}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">{translations.company}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.about}</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.contact}</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.privacy}</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-quanttun-purple transition-colors">{translations.terms}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Quanttun AI. {translations.allRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
