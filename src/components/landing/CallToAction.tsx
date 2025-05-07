
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const CallToAction = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="py-20 bg-quanttun-purple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
          {translations.ctaTitle}
        </h2>
        <p className="text-lg text-purple-200 mb-8 max-w-3xl mx-auto">
          {translations.ctaSubtitle}
        </p>
        <Button asChild size="lg" className="bg-white text-quanttun-purple hover:bg-gray-100">
          <Link to="/register">
            {translations.ctaButton}
          </Link>
        </Button>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white">
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-purple-200">Usuários</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-purple-200">Assuntos</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-purple-200">Satisfação</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-purple-200">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
