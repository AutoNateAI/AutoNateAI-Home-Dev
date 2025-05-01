
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeaturedTechniques from '@/components/FeaturedTechniques';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Mental Architecture with Systems Psychology</h2>
              <p className="text-xl mb-4 text-muted-foreground">
                AutoNateAI Institute combines cutting-edge neuroscience, systems thinking, and generative AI to help you architect a mind that works for you, not against you.
              </p>
              <p className="mb-6">
                Our integrated approach targets four critical domains of consciousness engineering:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Mental OS Design",
                    description: "Restructure your thinking patterns with precision systems design"
                  },
                  {
                    title: "Temporal Mastery",
                    description: "Engineer your relationship with time through scientifically-proven protocols"
                  },
                  {
                    title: "Emotional Signal Processing",
                    description: "Parse and reprogram emotional responses with signal processing frameworks"
                  },
                  {
                    title: "Identity & Narrative Engineering",
                    description: "Architect your self-concept using advanced systems psychology"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-brand-purple-light/10 text-brand-purple-light flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-accent p-1 rounded-xl">
              <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue-medium rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">The Consciousness Engineering Difference</h3>
                
                <div className="space-y-4">
                  {[
                    "Precision systems instead of vague advice",
                    "Implementable frameworks, not just concepts",
                    "Data-driven approaches to mental optimization",
                    "AI-enhanced coaching tailored to your unique architecture",
                    "Science-based protocols with measurable outcomes"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-brand-purple-light mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link to="/services">Explore Our Services <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedTechniques />
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue-dark">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Engineer Your Consciousness?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step toward architecting a mind that performs at its highest capacity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-brand-purple-light hover:bg-brand-purple-dark">
                <Link to="/services">Explore Digital Coaching</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <Link to="/cognitive-blueprint">Build Your Blueprint</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
