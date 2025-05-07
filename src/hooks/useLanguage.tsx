
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  // Common navigation
  home: string;
  about: string;
  studyRoutes: string;
  login: string;
  signUp: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  getStarted: string;
  learnMore: string;
  
  // Features section
  featuresTitle: string;
  personalizedPlans: string;
  personalizedPlansDesc: string;
  spacedRevision: string;
  spacedRevisionDesc: string;
  pomodoroTechnique: string;
  pomodoroTechniqueDesc: string;
  activeLearning: string;
  activeLearningDesc: string;
  
  // Benefits section
  benefitsTitle: string;
  efficiency: string;
  efficiencyDesc: string;
  motivation: string;
  motivationDesc: string;
  progress: string;
  progressDesc: string;
  
  // How it works section
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  
  // Testimonials section
  testimonialsTitle: string;
  
  // Call to action
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  
  // Auth pages
  welcomeBack: string;
  newAccount: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  loginWith: string;
  createAccount: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  
  // Footer
  footerTagline: string;
  product: string;
  features: string;
  pricing: string;
  testimonials: string;
  resources: string;
  blog: string;
  guides: string;
  support: string;
  company: string;
  contact: string;
  privacy: string;
  terms: string;
  allRights: string;
  
  // Study routes page
  myRoutes: string;
  createNewRoute: string;
  noRoutesYet: string;
  noRoutesDesc: string;
  
  // Route page
  activitiesTitle: string;
  completedActivities: string;
  pointsEarned: string;
  techniques: string;
}

const translations: Record<Language, Translations> = {
  pt: {
    // Common navigation
    home: "Início",
    about: "Sobre",
    studyRoutes: "Rotas de Estudo",
    login: "Entrar",
    signUp: "Cadastrar",
    
    // Hero section
    heroTitle: "Estude de forma mais inteligente com a Inteligência Artificial",
    heroSubtitle: "A Quanttun AI cria planos de estudo personalizados e gamificados utilizando técnicas comprovadas como revisão espaçada, Pomodoro e aprendizagem ativa.",
    getStarted: "Começar agora",
    learnMore: "Saiba mais",
    
    // Features section
    featuresTitle: "Recursos poderosos para potencializar seus estudos",
    personalizedPlans: "Planos Personalizados",
    personalizedPlansDesc: "Planos adaptados ao seu estilo de aprendizado e objetivos específicos.",
    spacedRevision: "Revisão Espaçada",
    spacedRevisionDesc: "Técnica científica para melhorar a retenção de conhecimento a longo prazo.",
    pomodoroTechnique: "Técnica Pomodoro",
    pomodoroTechniqueDesc: "Método de gestão de tempo para aumentar o foco e produtividade.",
    activeLearning: "Aprendizagem Ativa",
    activeLearningDesc: "Estratégias que envolvem a participação direta no processo de aprendizagem.",
    
    // Benefits section
    benefitsTitle: "Benefícios da Quanttun AI",
    efficiency: "Mais Eficiência",
    efficiencyDesc: "Aprenda mais em menos tempo com métodos otimizados para seu perfil.",
    motivation: "Motivação Constante",
    motivationDesc: "Sistema de gamificação que mantém você engajado e focado.",
    progress: "Progresso Visível",
    progressDesc: "Acompanhe sua evolução e celebre cada conquista no caminho.",
    
    // How it works section
    howItWorksTitle: "Como funciona",
    howItWorksSubtitle: "Em apenas três passos simples você começa a transformar sua forma de estudar",
    step1Title: "Crie sua conta",
    step1Desc: "Registre-se gratuitamente e forneça informações sobre seus objetivos de aprendizado.",
    step2Title: "A IA personaliza seu plano",
    step2Desc: "Nossa IA analisa suas necessidades e cria um plano de estudo personalizado.",
    step3Title: "Estude e evolua",
    step3Desc: "Siga o plano, ganhe pontos por cada conquista e acompanhe seu progresso.",
    
    // Testimonials section
    testimonialsTitle: "O que nossos usuários dizem",
    
    // Call to action
    ctaTitle: "Pronto para transformar seus estudos?",
    ctaSubtitle: "Junte-se a milhares de estudantes que já estão aproveitando o poder da Quanttun AI",
    ctaButton: "Comece gratuitamente",
    
    // Auth pages
    welcomeBack: "Bem-vindo de volta",
    newAccount: "Crie sua conta",
    fullName: "Nome completo",
    email: "E-mail",
    password: "Senha",
    confirmPassword: "Confirme a senha",
    forgotPassword: "Esqueceu a senha?",
    loginWith: "Ou entre com",
    createAccount: "Criar conta",
    alreadyHaveAccount: "Já tem uma conta?",
    dontHaveAccount: "Não tem uma conta?",
    
    // Footer
    footerTagline: "Revolucionando a forma de aprender com inteligência artificial e métodos científicos.",
    product: "Produto",
    features: "Funcionalidades",
    pricing: "Preços",
    testimonials: "Depoimentos",
    resources: "Recursos",
    blog: "Blog",
    guides: "Guias",
    support: "Suporte",
    company: "Empresa",
    contact: "Contato",
    privacy: "Privacidade",
    terms: "Termos",
    allRights: "Todos os direitos reservados",
    
    // Study routes page
    myRoutes: "Minhas Rotas de Estudo",
    createNewRoute: "Criar Nova Rota",
    noRoutesYet: "Você ainda não tem rotas de estudo",
    noRoutesDesc: "Crie sua primeira rota de estudo personalizada com a ajuda da nossa IA.",
    
    // Route page
    activitiesTitle: "Atividades",
    completedActivities: "Atividades Completadas",
    pointsEarned: "Pontos Ganhos",
    techniques: "Técnicas Utilizadas",
  },
  en: {
    // Common navigation
    home: "Home",
    about: "About",
    studyRoutes: "Study Routes",
    login: "Login",
    signUp: "Sign Up",
    
    // Hero section
    heroTitle: "Study Smarter with AI",
    heroSubtitle: "Quanttun AI creates personalized, gamified study plans using proven techniques like spaced repetition, Pomodoro and active learning.",
    getStarted: "Get started",
    learnMore: "Learn more",
    
    // Features section
    featuresTitle: "Powerful features to enhance your studies",
    personalizedPlans: "Personalized Plans",
    personalizedPlansDesc: "Plans adapted to your learning style and specific goals.",
    spacedRevision: "Spaced Repetition",
    spacedRevisionDesc: "Scientific technique to improve long-term knowledge retention.",
    pomodoroTechnique: "Pomodoro Technique",
    pomodoroTechniqueDesc: "Time management method to increase focus and productivity.",
    activeLearning: "Active Learning",
    activeLearningDesc: "Strategies that involve direct participation in the learning process.",
    
    // Benefits section
    benefitsTitle: "Benefits of Quanttun AI",
    efficiency: "Greater Efficiency",
    efficiencyDesc: "Learn more in less time with methods optimized for your profile.",
    motivation: "Constant Motivation",
    motivationDesc: "Gamification system that keeps you engaged and focused.",
    progress: "Visible Progress",
    progressDesc: "Track your evolution and celebrate each achievement along the way.",
    
    // How it works section
    howItWorksTitle: "How it works",
    howItWorksSubtitle: "In just three simple steps you start transforming the way you study",
    step1Title: "Create your account",
    step1Desc: "Register for free and provide information about your learning goals.",
    step2Title: "AI customizes your plan",
    step2Desc: "Our AI analyzes your needs and creates a personalized study plan.",
    step3Title: "Study and evolve",
    step3Desc: "Follow the plan, earn points for each achievement and track your progress.",
    
    // Testimonials section
    testimonialsTitle: "What our users say",
    
    // Call to action
    ctaTitle: "Ready to transform your studies?",
    ctaSubtitle: "Join thousands of students who are already leveraging the power of Quanttun AI",
    ctaButton: "Start for free",
    
    // Auth pages
    welcomeBack: "Welcome back",
    newAccount: "Create your account",
    fullName: "Full name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm password",
    forgotPassword: "Forgot password?",
    loginWith: "Or login with",
    createAccount: "Create account",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    
    // Footer
    footerTagline: "Revolutionizing learning with artificial intelligence and scientific methods.",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    testimonials: "Testimonials",
    resources: "Resources",
    blog: "Blog",
    guides: "Guides",
    support: "Support",
    company: "Company",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    allRights: "All rights reserved",
    
    // Study routes page
    myRoutes: "My Study Routes",
    createNewRoute: "Create New Route",
    noRoutesYet: "You don't have any study routes yet",
    noRoutesDesc: "Create your first personalized study route with the help of our AI.",
    
    // Route page
    activitiesTitle: "Activities",
    completedActivities: "Completed Activities",
    pointsEarned: "Points Earned",
    techniques: "Techniques Used",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      toggleLanguage,
      translations: translations[language],
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
