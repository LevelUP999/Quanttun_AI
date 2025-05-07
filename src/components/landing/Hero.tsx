
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="pt-20 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              {translations.heroTitle}
            </h1>
            <p className="text-lg text-gray-600">
              {translations.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-quanttun-purple hover:bg-quanttun-darkPurple text-white px-8 py-6 text-lg">
                <Link to="/register">
                  {translations.getStarted}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-quanttun-purple text-quanttun-purple hover:bg-quanttun-purple hover:text-white">
                <Link to="/about" className="flex items-center gap-1">
                  {translations.learnMore}
                  <ChevronRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Brain with rocket illustration */}
            <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 shadow-xl">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-quanttun-lightPurple/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-quanttun-lightBlue/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-quanttun-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-gray-900">Revisão Espaçada</h3>
                    <p className="text-gray-600 text-sm mt-2">Técnica científica para melhorar a retenção de conhecimento.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-quanttun-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-gray-900">Pomodoro</h3>
                    <p className="text-gray-600 text-sm mt-2">Gerencie seu tempo de estudo e aumente sua produtividade.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-gray-900">Aprendizagem Ativa</h3>
                    <p className="text-gray-600 text-sm mt-2">Participe diretamente em seu processo de aprendizado.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-gray-900">Gamificação</h3>
                    <p className="text-gray-600 text-sm mt-2">Ganhe pontos e recompensas enquanto aprende.</p>
                  </div>
                </div>
                
                {/* Central brain with rocket illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-quanttun-purple to-quanttun-lightPurple rounded-full flex items-center justify-center animate-float shadow-xl">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C7.58 2 4 5.58 4 10C4 12.03 4.76 13.87 6 15.28V15.5C6 16.88 7.12 18 8.5 18H9V19.5C9 20.33 9.67 21 10.5 21H13.5C14.33 21 15 20.33 15 19.5V18H15.5C16.88 18 18 16.88 18 15.5V15.28C19.24 13.87 20 12.03 20 10C20 5.58 16.42 2 12 2Z" fill="currentColor" />
                    </svg>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-quanttun-lightBlue rounded-full animate-pulse-gentle">
                      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7L12 2L11 7C11 7 10 8 10 9C10 10 11 11 12 11C13 11 14 10 14 9C14 8 13 7 13 7Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
