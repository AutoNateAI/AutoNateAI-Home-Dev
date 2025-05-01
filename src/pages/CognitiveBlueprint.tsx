
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CognitiveBlueprint = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You'll be notified when the Cognitive Blueprint Builder launches.",
    });
    
    setEmail('');
    setIsSubscribed(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cognitive Blueprint Builder</h1>
            <p className="text-xl text-gray-300">
              Your personalized mental architecture resource mapping tool
            </p>
            <div className="mt-8 inline-block bg-brand-teal text-white px-4 py-2 rounded-full">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                Coming Soon - Launch Date: August 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left column: Tool description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Mental Architecture Resource Mapping</h2>
                
                <p className="mb-6">
                  The Cognitive Blueprint Builder is an interactive tool that helps you:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Map your existing mental models and cognitive resources",
                    "Identify structural optimization opportunities in your thinking",
                    "Design personalized consciousness engineering protocols",
                    "Track implementation and integration over time",
                    "Measure improvements in cognitive performance metrics"
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <svg className="h-6 w-6 text-brand-purple-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-8">
                  <AlertCircle className="text-yellow-500 mr-3 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Early Bird Discount</h4>
                    <p className="text-sm">
                      Join our waitlist today and receive 30% off when the Cognitive Blueprint Builder launches.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right column: Preview and signup */}
              <div>
                <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
                  <div className="bg-brand-blue-medium text-white p-3 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs mx-auto">Cognitive Blueprint Builder - Preview</div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80" 
                      alt="Blueprint Builder Preview" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                
                {!isSubscribed ? (
                  <div className="bg-card rounded-xl p-8 border border-border">
                    <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
                    <p className="mb-6">
                      Sign up to receive launch updates and secure your early-bird discount.
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-6">
                        <Checkbox id="terms" />
                        <label 
                          htmlFor="terms" 
                          className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to receive emails about the Cognitive Blueprint Builder
                        </label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-brand-purple-light hover:bg-brand-purple-dark">
                        Notify Me at Launch
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="bg-brand-purple-light/10 rounded-xl p-8 border border-brand-purple-light/30 text-center">
                    <svg className="h-16 w-16 text-brand-purple-light mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="mb-4">
                      You're on our waitlist. We'll notify you when the Cognitive Blueprint Builder launches.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Remember to check your inbox for a confirmation email.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Mental Model Mapping",
                description: "Visualize your cognitive frameworks and identify optimization opportunities.",
                icon: (
                  <svg className="h-12 w-12 text-brand-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                )
              },
              {
                title: "Protocol Generator",
                description: "Create personalized implementation protocols based on your cognitive blueprint.",
                icon: (
                  <svg className="h-12 w-12 text-brand-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Progress Tracking",
                description: "Measure improvements in cognitive performance and mental architecture.",
                icon: (
                  <svg className="h-12 w-12 text-brand-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-background rounded-xl p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CognitiveBlueprint;
