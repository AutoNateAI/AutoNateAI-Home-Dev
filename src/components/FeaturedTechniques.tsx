
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techniques = [
  {
    name: 'Decision Architecture',
    description: 'Optimize your choice-making frameworks through systems modeling and precision heuristics.',
    components: ['Cognitive Model Builder', 'Decision Tree Templates', 'Implementation Protocols'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    name: 'Attentional Routing',
    description: 'Engineer precision focus pathways with structured protocols for deep work and flow states.',
    components: ['Focus Architecture Map', 'Distraction Elimination Guide', 'State Transition Workflows'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    name: 'Emotional Syntax',
    description: 'Develop sophisticated emotional regulation through systems-based feeling frameworks.',
    components: ['Signal Processing Framework', 'Emotion Mapping Templates', 'Integration Practices'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
];

const FeaturedTechniques = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technique Packs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision tools for consciousness engineering, organized into implementable systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <div 
              key={index} 
              className="pricing-card card-hover-effect flex flex-col bg-card"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${technique.image})` }}
              ></div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{technique.name}</h3>
                <p className="text-muted-foreground mb-4">{technique.description}</p>
                
                <h4 className="font-medium mb-2 mt-2">Components:</h4>
                <ul className="mb-6 text-sm space-y-1">
                  {technique.components.map((component, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-purple-light rounded-full mr-2"></span>
                      {component}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Explore Technique <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-brand-purple-light hover:bg-brand-purple-dark">
            View All Technique Packs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTechniques;
