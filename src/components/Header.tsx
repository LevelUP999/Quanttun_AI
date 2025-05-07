
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, translations, toggleLanguage } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-quanttun-purple transition-colors duration-300">
            {translations.home}
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-quanttun-purple transition-colors duration-300">
            {translations.about}
          </Link>
          <Link to="/routes" className="text-gray-700 hover:text-quanttun-purple transition-colors duration-300">
            {translations.studyRoutes}
          </Link>
          <Button onClick={toggleLanguage} variant="ghost" size="icon" className="w-10 h-10">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Change Language</span>
          </Button>
          <Link to="/login">
            <Button variant="outline" className="border-quanttun-purple text-quanttun-purple hover:bg-quanttun-purple hover:text-white">
              {translations.login}
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-quanttun-purple text-white hover:bg-quanttun-darkPurple">
              {translations.signUp}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button onClick={toggleLanguage} variant="ghost" size="icon" className="w-10 h-10 mr-2">
            <Globe className="h-5 w-5" />
          </Button>
          <Button onClick={toggleMobileMenu} variant="ghost" size="icon" className="w-10 h-10">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 py-2 hover:text-quanttun-purple"
              onClick={toggleMobileMenu}
            >
              {translations.home}
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 py-2 hover:text-quanttun-purple"
              onClick={toggleMobileMenu}
            >
              {translations.about}
            </Link>
            <Link 
              to="/routes" 
              className="text-gray-700 py-2 hover:text-quanttun-purple"
              onClick={toggleMobileMenu}
            >
              {translations.studyRoutes}
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link to="/login" onClick={toggleMobileMenu}>
                <Button variant="outline" className="w-full border-quanttun-purple text-quanttun-purple hover:bg-quanttun-purple hover:text-white">
                  {translations.login}
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMobileMenu}>
                <Button className="w-full bg-quanttun-purple text-white hover:bg-quanttun-darkPurple">
                  {translations.signUp}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
