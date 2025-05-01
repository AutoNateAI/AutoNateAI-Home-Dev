
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'CTO, Quantum Technologies',
    quote: 'The Mental OS Design technique pack helped me completely restructure how I approach problem-solving. My team has noticed a 40% increase in my decision-making efficiency.',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'VP of Engineering, DataFlex',
    quote: 'After working through the Emotional Signal Processing protocols, I\'ve experienced a significant improvement in my leadership capabilities and team dynamics.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    name: 'Marcus Wei',
    role: 'Senior Software Architect, InnoStream',
    quote: 'AutoNateAI\'s Temporal Mastery course changed my relationship with time and productivity. I\'ve reclaimed at least 15 hours weekly by implementing these systems.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Founder & CEO, AgileTech Solutions',
    quote: 'The Identity Engineering framework gave me the tools to reconstruct my self-narrative during a critical pivot in my business. Worth every penny and minute invested.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0].id);

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    setActiveTestimonial(testimonials[newIndex].id);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    setActiveTestimonial(testimonials[newIndex].id);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setActiveTestimonial(testimonials[index].id);
  };

  return (
    <section className="py-20 bg-brand-blue-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-bg"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how tech leaders have transformed their performance through consciousness engineering
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Current testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center text-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-brand-purple-light"
                />
                <h4 className="font-bold mt-4">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-300">{testimonials[currentIndex].role}</p>
                <div className="flex mt-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
              </div>
              <div className="md:w-3/4">
                <svg className="h-10 w-10 text-brand-purple-light/50 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12h-4c0-1.1 0.9-2 2-2h2V8h-6zm14 0c-2.2 0-4 1.8-4 4v10h10V12h-4c0-1.1 0.9-2 2-2h2V8h-6z" />
                </svg>
                <p className="text-xl italic leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-between items-center">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === testimonial.id 
                      ? 'bg-brand-purple-light' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
