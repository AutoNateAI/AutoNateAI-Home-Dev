
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with neural network pattern */}
      <div className="absolute inset-0 bg-neural-pattern z-0"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-95 z-10"></div>
      
      {/* Neural network animation elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-purple-light rounded-full blur-3xl opacity-20 animate-pulse-subtle"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-brand-teal rounded-full blur-3xl opacity-10 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-brand-gold rounded-full blur-3xl opacity-10 animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-30 px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Engineer your mind.<br />
            <span className="text-gradient bg-gradient-accent">Transform your reality.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto">
            Discover consciousness engineering: a unique blend of systems psychology, data-driven mindfulness, generative AI coaching, and advanced neuroscience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-purple-light hover:bg-brand-purple-dark text-white">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Mental OS Design', description: 'Optimize your cognitive framework' },
              { title: 'Temporal Mastery', description: 'Engineer your experience of time' },
              { title: 'Emotional Signal Processing', description: 'Decode & reprogram feelings' },
              { title: 'Identity Engineering', description: 'Architect your self-narrative' }
            ].map((realm, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center transform transition hover:scale-105">
                <h3 className="text-white font-semibold text-lg mb-2">{realm.title}</h3>
                <p className="text-gray-300 text-sm">{realm.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
