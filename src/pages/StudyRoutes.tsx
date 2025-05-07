
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RouteCard from '@/components/routes/RouteCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Plus } from 'lucide-react';

// Mock data for study routes
const mockRoutes = [
  {
    id: '1',
    title: 'Matemática para Vestibular',
    description: 'Preparação completa de matemática para vestibulares e ENEM.',
    progress: 65,
    completedActivities: 13,
    totalActivities: 20,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    pointsEarned: 650,
    techniques: ['Revisão Espaçada', 'Pomodoro', 'Mapas Mentais']
  },
  {
    id: '2',
    title: 'Inglês Intermediário',
    description: 'Melhore seu vocabulário e gramática de inglês com exercícios práticos.',
    progress: 30,
    completedActivities: 6,
    totalActivities: 20,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
    pointsEarned: 300,
    techniques: ['Flashcards', 'Aprendizagem Ativa', 'Escrita Diária']
  },
  {
    id: '3',
    title: 'Programação em Python',
    description: 'Aprenda os fundamentos da programação usando Python.',
    progress: 10,
    completedActivities: 2,
    totalActivities: 20,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    pointsEarned: 100,
    techniques: ['Projetos Práticos', 'Pomodoro', 'Revisão de Código']
  },
];

const StudyRoutes = () => {
  const { translations } = useLanguage();
  const [routes, setRoutes] = useState(mockRoutes);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              {translations.myRoutes}
            </h1>
            
            <Button className="bg-quanttun-purple hover:bg-quanttun-darkPurple">
              <Plus size={18} className="mr-2" />
              {translations.createNewRoute}
            </Button>
          </div>

          {routes.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 rounded-lg bg-white">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h2 className="text-xl font-medium text-gray-700 mb-2">
                {translations.noRoutesYet}
              </h2>
              <p className="text-gray-500 text-center mb-6 max-w-md">
                {translations.noRoutesDesc}
              </p>
              <Button className="bg-quanttun-purple hover:bg-quanttun-darkPurple">
                {translations.createNewRoute}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routes.map(route => (
                <RouteCard 
                  key={route.id}
                  id={route.id}
                  title={route.title}
                  description={route.description}
                  progress={route.progress}
                  completedActivities={route.completedActivities}
                  totalActivities={route.totalActivities}
                  image={route.image}
                  pointsEarned={route.pointsEarned}
                  techniques={route.techniques}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudyRoutes;
