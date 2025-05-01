
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      message: ''
    });
  };
  
  const faqs = [
    {
      question: "What is consciousness engineering?",
      answer: "Consciousness engineering is a systematic approach to optimizing mental architecture using principles from systems engineering, cognitive neuroscience, and implementation science. It focuses on structured protocols for enhancing cognition, emotional processing, temporal perception, and identity frameworks."
    },
    {
      question: "How does AutoNateAI differ from traditional coaching?",
      answer: "Unlike traditional coaching that often focuses on motivation and general advice, we provide precision-engineered systems and protocols for mental optimization. Our approach is data-driven, scientifically grounded, and emphasizes implementation frameworks rather than vague concepts."
    },
    {
      question: "Do I need technical background to benefit from your services?",
      answer: "No technical background is required. While our approach uses engineering terminology, all concepts are explained clearly and made accessible. Our implementation protocols are designed to be practical and applicable regardless of your technical expertise."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients begin experiencing shifts in their mental frameworks within 2-4 weeks of implementing our protocols. More substantial architectural changes typically emerge after 8-12 weeks of consistent practice. We provide clear metrics for tracking your progress throughout the process."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes, we offer a 30-day satisfaction guarantee on our digital courses and a full refund for your first tutoring session if you don't find it valuable. We're committed to delivering measurable results and stand behind the effectiveness of our consciousness engineering protocols."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Reach out to learn more about consciousness engineering services or schedule a consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services or want to explore how consciousness engineering can benefit you? Fill out the form below and we'll respond promptly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="tutoring">1-on-1 Tutoring</SelectItem>
                      <SelectItem value="workshops">Workshops</SelectItem>
                      <SelectItem value="courses">Digital Courses</SelectItem>
                      <SelectItem value="corporate">Corporate Services</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-purple-light hover:bg-brand-purple-dark">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm mb-8">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 h-10 w-10 rounded-full bg-brand-purple-light/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-brand-purple-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:info@autoNateAI.com" className="text-brand-purple-light hover:underline">
                          info@autoNateAI.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 h-10 w-10 rounded-full bg-brand-purple-light/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-brand-purple-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+1234567890" className="hover:underline">
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 h-10 w-10 rounded-full bg-brand-purple-light/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-brand-purple-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p>San Francisco, CA</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          (Virtual services available worldwide)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 h-10 w-10 rounded-full bg-brand-purple-light/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-brand-purple-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Consultation Scheduling</h4>
                        <p className="mb-2">
                          Book a 30-minute exploratory session with one of our consciousness engineers.
                        </p>
                        <Button variant="outline" className="text-brand-purple-light border-brand-purple-light hover:bg-brand-purple-light/10">
                          Schedule Now
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 h-10 w-10 rounded-full bg-brand-purple-light/10 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-brand-purple-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Live Chat</h4>
                        <p className="mb-2">
                          Chat with our support team (9AM-5PM PST, Monday-Friday).
                        </p>
                        <Button variant="outline">Start Chat</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-blue-dark text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Media & Speaking Requests</h3>
                <p className="mb-6">
                  For media interviews, podcast appearances, or speaking engagements with our consciousness engineering experts, please contact:
                </p>
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 mr-2 text-brand-purple-light" />
                  <a href="mailto:media@autoNateAI.com" className="text-brand-purple-light hover:underline">
                    media@autoNateAI.com
                  </a>
                </div>
                <p className="text-sm text-gray-300">
                  Please include details about your audience, publication/event, and specific topics of interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see your question here? Reach out to us directly.
              </p>
              <Button className="bg-brand-purple-light hover:bg-brand-purple-dark">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
