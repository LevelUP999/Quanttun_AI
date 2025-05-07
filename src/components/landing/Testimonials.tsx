
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Testimonials = () => {
  const { translations } = useLanguage();
  
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Estudante de Medicina",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      content: "A Quanttun AI transformou completamente a forma como eu estudo. A técnica de revisão espaçada realmente funciona e tenho conseguido reter muito mais conteúdo. Recomendo a todos os estudantes de medicina!"
    },
    {
      name: "Carlos Mendes",
      role: "Programador",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Estou aprendendo programação e a abordagem gamificada da Quanttun AI me mantém motivado. Os pontos e recompensas são um estímulo extra e as técnicas de estudo são muito eficientes."
    },
    {
      name: "Juliana Costa",
      role: "Professora",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "Como professora, recomendo a Quanttun AI aos meus alunos. A plataforma utiliza métodos cientificamente comprovados e já notei uma grande melhora no desempenho da minha turma."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {translations.testimonialsTitle}
          </h2>
          <div className="mt-4 w-24 h-1 bg-quanttun-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <svg className="w-12 h-12 text-quanttun-purple opacity-30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM28 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
