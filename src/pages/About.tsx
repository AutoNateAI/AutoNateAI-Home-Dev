
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Brain, Layers, Zap } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Nathan Parker',
      role: 'Founder & Lead Consciousness Architect',
      bio: 'PhD in Cognitive Neuroscience with 15+ years of research in systems thinking and mental optimization frameworks.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Sophia Chen',
      role: 'Chief Research Officer',
      bio: 'Expert in emotional signal processing and identity engineering protocols for high-performance individuals.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Marcus Wei',
      role: 'Head of Temporal Engineering',
      bio: 'Former tech executive and specialist in temporal mastery protocols for productivity and flow states.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Amara Johnson',
      role: 'Director of Implementation Research',
      bio: 'Develops evidence-based protocols for translating consciousness engineering concepts into daily practice.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80'
    }
  ];
  
  const partnerLogos = [
    { name: 'MIT Media Lab', logo: 'https://via.placeholder.com/150x50?text=MIT+Media+Lab' },
    { name: 'Stanford Neuroscience', logo: 'https://via.placeholder.com/150x50?text=Stanford+Neuroscience' },
    { name: 'Harvard Psychology', logo: 'https://via.placeholder.com/150x50?text=Harvard+Psychology' },
    { name: 'Google AI', logo: 'https://via.placeholder.com/150x50?text=Google+AI' },
    { name: 'OpenAI', logo: 'https://via.placeholder.com/150x50?text=OpenAI' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AutoNateAI Institute</h1>
            <p className="text-xl text-gray-300">
              Pioneering the science and application of consciousness engineering for high performers
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Origin Story</h2>
              <p className="text-lg mb-4">
                AutoNateAI Institute began with a simple observation: while technology systems are built with precision engineering, human mental frameworks are often left to develop haphazardly.
              </p>
              <p className="text-lg mb-4">
                Our founder, Dr. Nathan Parker, experienced firsthand the limitations of traditional productivity and personal development approaches while leading AI research teams in Silicon Valley.
              </p>
              <p className="text-lg mb-4">
                Drawing on his background in systems engineering and cognitive neuroscience, he developed the first consciousness engineering protocols—structured frameworks for optimization of mental architecture.
              </p>
              <p className="text-lg mb-6">
                In 2023, he partnered with experts in psychology, AI, and implementation science to found the AutoNateAI Institute, dedicated to advancing and applying consciousness engineering for high performers.
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" 
                  alt="Dr. Nathan Parker"
                  className="rounded-full w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-bold">Dr. Nathan Parker</h4>
                  <p className="text-sm text-muted-foreground">Founder & Lead Consciousness Architect</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-brand-purple-light/10 animate-pulse-subtle"></div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
                  alt="Team working on consciousness engineering"
                  className="rounded-xl shadow-lg relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-brand-teal/10 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-brand-blue-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg"></div>
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To transform how high-performing individuals architect their inner world through precision systems engineering, data-driven mindfulness, and advanced neuroscience.
              </p>
              <h4 className="text-xl font-bold mb-4">Core Principles</h4>
              <ul className="space-y-3">
                {[
                  "Systems thinking applied to consciousness",
                  "Data-driven approach to mental optimization",
                  "Implementable frameworks, not just concepts",
                  "Integration of cutting-edge neuroscience",
                  "Ethics-first approach to consciousness engineering"
                ].map((principle, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-brand-purple-light mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg mb-6">
                To pioneer a new paradigm where mental architecture is approached with the same precision engineering as technological systems, enabling unprecedented human potential.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="mb-4">
                    <Terminal size={32} className="text-brand-purple-light" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Systems Psychology</h4>
                  <p className="text-sm text-gray-300">
                    Engineering mental frameworks using structured system models
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="mb-4">
                    <Brain size={32} className="text-brand-purple-light" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Neuroscience</h4>
                  <p className="text-sm text-gray-300">
                    Evidence-based approaches grounded in latest research
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="mb-4">
                    <Layers size={32} className="text-brand-purple-light" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Data-Driven</h4>
                  <p className="text-sm text-gray-300">
                    Measuring outcomes and optimizing based on real results
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="mb-4">
                    <Zap size={32} className="text-brand-purple-light" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">AI Integration</h4>
                  <p className="text-sm text-gray-300">
                    Leveraging generative AI for personalized coaching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experts at the intersection of systems thinking, psychology, and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-purple-light text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Scientific Foundations</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center items-start">
                  <div className="w-24 h-24 rounded-full bg-brand-purple-light/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-brand-purple-light">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Systems Psychology</h3>
                  <p className="mb-4">
                    We apply principles from systems engineering to mental frameworks, viewing cognition, emotion, and identity as integrated systems that can be optimized through structured protocols.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Our research has demonstrated a 32% improvement in decision quality when mental models are structured using systems engineering principles."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center items-start">
                  <div className="w-24 h-24 rounded-full bg-brand-purple-light/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-brand-purple-light">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Cognitive Neuroscience</h3>
                  <p className="mb-4">
                    Our techniques are grounded in the latest neuroscience research on neuroplasticity, attention networks, and the neural basis of conscious experience.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Through fMRI studies, we've documented enhanced neural efficiency in attention networks after implementation of our temporal mastery protocols."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center items-start">
                  <div className="w-24 h-24 rounded-full bg-brand-purple-light/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-brand-purple-light">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Implementation Science</h3>
                  <p className="mb-4">
                    We focus on bridging the gap between concept and application through structured implementation protocols designed for sustainable integration into daily life.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Our implementation frameworks have achieved a 78% long-term adoption rate compared to the 23% industry standard for behavior change interventions."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center items-start">
                  <div className="w-24 h-24 rounded-full bg-brand-purple-light/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-brand-purple-light">4</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">AI-Enhanced Personalization</h3>
                  <p className="mb-4">
                    We leverage generative AI to create personalized coaching experiences that adapt to individual mental architectures and optimize implementation pathways.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Our AI-enhanced coaching has been shown to increase protocol adherence by 47% compared to standard approaches."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partners & Collaborators</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Working with leading institutions to advance consciousness engineering
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 max-w-[180px]"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold mb-4">Collaboration Opportunities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We're actively seeking research partners and organizations interested in applying consciousness engineering principles. 
            </p>
            <Button asChild className="bg-brand-purple-light hover:bg-brand-purple-dark">
              <Link to="/contact">Explore Partnerships <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
