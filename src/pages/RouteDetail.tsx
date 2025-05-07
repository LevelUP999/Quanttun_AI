
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityCard, { ActivityProps } from '@/components/routes/ActivityCard';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Award, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// Mock data for study routes
const mockRoutesDetails = {
  '1': {
    id: '1',
    title: 'Matemática para Vestibular',
    description: 'Preparação completa de matemática para vestibulares e ENEM, abordando álgebra, geometria, trigonometria e mais.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    totalPoints: 650,
    techniques: ['Revisão Espaçada', 'Pomodoro', 'Mapas Mentais', 'Exercícios Práticos'],
    activities: [
      {
        id: 'a1',
        title: 'Funções de 1º Grau',
        description: 'Estude os conceitos fundamentais das funções de primeiro grau e resolva exercícios práticos.',
        duration: 25,
        points: 50,
        completed: true,
        techniques: ['Revisão Espaçada', 'Pomodoro']
      },
      {
        id: 'a2',
        title: 'Funções de 2º Grau',
        description: 'Aprenda sobre funções quadráticas, suas propriedades e aplicações em problemas práticos.',
        duration: 30,
        points: 60,
        completed: true,
        techniques: ['Mapas Mentais', 'Pomodoro']
      },
      {
        id: 'a3',
        title: 'Geometria Plana',
        description: 'Estude os principais conceitos de geometria plana: áreas, perímetros e teoremas importantes.',
        duration: 45,
        points: 70,
        completed: false,
        techniques: ['Revisão Espaçada', 'Exercícios Práticos']
      },
      {
        id: 'a4',
        title: 'Trigonometria',
        description: 'Compreenda as relações trigonométricas e suas aplicações na resolução de problemas.',
        duration: 40,
        points: 65,
        completed: false,
        techniques: ['Pomodoro', 'Mapas Mentais']
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Inglês Intermediário',
    description: 'Melhore seu vocabulário e gramática de inglês com exercícios práticos e atividades de conversação.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
    totalPoints: 300,
    techniques: ['Flashcards', 'Aprendizagem Ativa', 'Escrita Diária', 'Áudio Imersão'],
    activities: [
      {
        id: 'a1',
        title: 'Tempos Verbais - Present Perfect',
        description: 'Aprenda quando e como usar o Present Perfect em inglês com exemplos práticos.',
        duration: 20,
        points: 40,
        completed: true,
        techniques: ['Flashcards', 'Escrita Diária']
      },
      {
        id: 'a2',
        title: 'Vocabulário de Negócios',
        description: 'Expanda seu vocabulário com termos usados em ambientes empresariais e profissionais.',
        duration: 25,
        points: 50,
        completed: true,
        techniques: ['Aprendizagem Ativa', 'Áudio Imersão']
      },
      {
        id: 'a3',
        title: 'Expressões Idiomáticas',
        description: 'Conheça e pratique expressões idiomáticas comuns para soar mais natural em inglês.',
        duration: 30,
        points: 55,
        completed: false,
        techniques: ['Flashcards', 'Áudio Imersão']
      }
    ]
  },
  '3': {
    id: '3',
    title: 'Programação em Python',
    description: 'Aprenda os fundamentos da programação usando Python, desde conceitos básicos até projetos mais complexos.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    totalPoints: 100,
    techniques: ['Projetos Práticos', 'Pomodoro', 'Revisão de Código', 'Pair Programming'],
    activities: [
      {
        id: 'a1',
        title: 'Variáveis e Tipos de Dados',
        description: 'Entenda os tipos de dados básicos em Python e como trabalhar com variáveis.',
        duration: 20,
        points: 40,
        completed: true,
        techniques: ['Projetos Práticos', 'Pomodoro']
      },
      {
        id: 'a2',
        title: 'Estruturas de Controle',
        description: 'Aprenda sobre condicionais (if, elif, else) e loops (for, while) em Python.',
        duration: 30,
        points: 60,
        completed: false,
        techniques: ['Revisão de Código', 'Pomodoro']
      }
    ]
  }
};

const RouteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { translations } = useLanguage();
  
  const route = mockRoutesDetails[id as keyof typeof mockRoutesDetails];
  const [activities, setActivities] = useState<ActivityProps[]>(route?.activities || []);
  
  if (!route) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Rota não encontrada</h1>
            <p className="text-gray-600">A rota de estudo que você está procurando não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const completedActivities = activities.filter(a => a.completed).length;
  const progress = Math.round((completedActivities / activities.length) * 100);
  const earnedPoints = activities.reduce((total, activity) => {
    return activity.completed ? total + activity.points : total;
  }, 0);

  const handleCompleteActivity = (activityId: string) => {
    const updatedActivities = activities.map(activity => {
      if (activity.id === activityId) {
        return { ...activity, completed: true };
      }
      return activity;
    });
    
    setActivities(updatedActivities);
    
    const activity = activities.find(a => a.id === activityId);
    if (activity) {
      toast({
        title: "Atividade concluída!",
        description: `Você ganhou ${activity.points} pontos por completar "${activity.title}"`,
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          {/* Header with background image */}
          <div 
            className="h-48 md:h-64 rounded-xl mb-8 bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${route.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-quanttun-purple/80 to-quanttun-lightBlue/60"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{route.title}</h1>
              <p className="max-w-2xl text-white/90">{route.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar with stats */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Progresso</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Concluído</span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-3" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                          <CheckCircle size={16} />
                          <span>{translations.completedActivities}</span>
                        </div>
                        <p className="text-xl font-semibold">{completedActivities}/{activities.length}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                          <Award size={16} />
                          <span>{translations.pointsEarned}</span>
                        </div>
                        <p className="text-xl font-semibold text-quanttun-purple">{earnedPoints}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{translations.techniques}</h3>
                  <div className="space-y-2">
                    {route.techniques.map((technique, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="mr-2 mb-2 bg-purple-50 text-quanttun-purple border-purple-200"
                      >
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content with activities */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">Todas</TabsTrigger>
                  <TabsTrigger value="pending">Pendentes</TabsTrigger>
                  <TabsTrigger value="completed">Concluídas</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-6">
                  {activities.map(activity => (
                    <ActivityCard 
                      key={activity.id}
                      activity={activity}
                      onComplete={handleCompleteActivity}
                    />
                  ))}
                </TabsContent>
                
                <TabsContent value="pending" className="space-y-6">
                  {activities.filter(a => !a.completed).map(activity => (
                    <ActivityCard 
                      key={activity.id}
                      activity={activity}
                      onComplete={handleCompleteActivity}
                    />
                  ))}
                  
                  {activities.filter(a => !a.completed).length === 0 && (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Parabéns!</h3>
                      <p className="text-gray-600">Você completou todas as atividades nesta rota.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-6">
                  {activities.filter(a => a.completed).map(activity => (
                    <ActivityCard 
                      key={activity.id}
                      activity={activity}
                      onComplete={handleCompleteActivity}
                    />
                  ))}
                  
                  {activities.filter(a => a.completed).length === 0 && (
                    <div className="text-center py-12">
                      <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Nenhuma atividade concluída</h3>
                      <p className="text-gray-500">Complete sua primeira atividade para ganhar pontos!</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RouteDetail;
