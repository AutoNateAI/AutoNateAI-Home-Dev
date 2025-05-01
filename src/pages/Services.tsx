
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PricingCard from '@/components/PricingCard';
import WorkshopCard from '@/components/WorkshopCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, BookOpen, Users } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('tutoring');

  const tutoringTiers = [
    {
      tier: 'Basic',
      price: 499,
      description: 'Essential consciousness engineering techniques for individual optimization',
      features: [
        { included: true, text: 'Initial Mental Architecture Assessment' },
        { included: true, text: '3 One-on-One Sessions (60 min each)' },
        { included: true, text: 'Basic Implementation Protocols' },
        { included: true, text: 'Email Support for 30 Days' },
        { included: false, text: 'Custom Technique Development' },
        { included: false, text: 'Advanced Integration Framework' },
        { included: false, text: 'Lifetime Access to Content Updates' }
      ]
    },
    {
      tier: 'Advanced',
      price: 999,
      description: 'Comprehensive consciousness engineering for high-performance individuals',
      features: [
        { included: true, text: 'Comprehensive Mental Architecture Assessment' },
        { included: true, text: '6 One-on-One Sessions (75 min each)' },
        { included: true, text: 'Advanced Implementation Protocols' },
        { included: true, text: 'Email & Chat Support for 60 Days' },
        { included: true, text: 'Custom Technique Development' },
        { included: false, text: 'Advanced Integration Framework' },
        { included: false, text: 'Lifetime Access to Content Updates' }
      ],
      isPopular: true
    },
    {
      tier: 'Elite',
      price: 1999,
      description: 'Premium consciousness engineering for executives and tech leaders',
      features: [
        { included: true, text: 'Executive Mental Architecture Assessment' },
        { included: true, text: '10 One-on-One Sessions (90 min each)' },
        { included: true, text: 'Elite Implementation Protocols' },
        { included: true, text: 'Priority Email, Chat & Phone Support' },
        { included: true, text: 'Custom Technique Development' },
        { included: true, text: 'Advanced Integration Framework' },
        { included: true, text: 'Lifetime Access to Content Updates' }
      ]
    }
  ];

  const workshops = [
    {
      title: 'Mental OS Restructuring Intensive',
      date: 'June 15-16, 2025',
      time: '9:00 AM - 5:00 PM PST',
      location: 'San Francisco, CA',
      description: 'A two-day immersive workshop focused on rebuilding your mental operating system with precision engineering protocols.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
      tags: ['Mental OS', 'Systems Design', 'Executive Function'],
      isVirtual: false
    },
    {
      title: 'Emotional Signal Processing Lab',
      date: 'July 8, 2025',
      time: '10:00 AM - 4:00 PM PST',
      location: 'Virtual Session',
      description: 'Learn advanced techniques for processing emotional signals and engineering response pathways for optimal performance.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=600&q=80',
      tags: ['Emotional Engineering', 'Signal Processing', 'Performance'],
      isVirtual: true
    },
    {
      title: 'Temporal Mastery for Tech Professionals',
      date: 'August 22, 2025',
      time: '9:00 AM - 5:00 PM EST',
      location: 'New York, NY',
      description: 'A specialized workshop designed for tech professionals looking to master time perception and management.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      tags: ['Time Management', 'Flow States', 'Productivity'],
      isVirtual: false
    }
  ];

  const courses = [
    {
      title: 'Decision Architecture',
      description: 'Master the art and science of decision-making through systems engineering approach',
      price: 299,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      features: ['12 Video Lessons', '5 Worksheets', '3 Implementation Guides', 'Decision Framework Templates']
    },
    {
      title: 'Cognitive Restructuring',
      description: 'Rebuild your thought patterns using data-driven protocols and precision techniques',
      price: 349,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
      features: ['15 Video Lessons', '8 Worksheets', '4 Implementation Guides', 'Cognitive Model Builder']
    },
    {
      title: 'Identity Engineering',
      description: 'Architect your self-concept and narrative for optimal performance and fulfillment',
      price: 399,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
      features: ['18 Video Lessons', '10 Worksheets', '6 Implementation Guides', 'Identity Mapping Tools']
    }
  ];

  const tutorProfiles = [
    {
      name: 'Dr. Nathan Parker',
      title: 'Lead Consciousness Architect',
      bio: 'PhD in Cognitive Neuroscience with 15+ years experience in systems thinking and mental optimization.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Dr. Sophia Chen',
      title: 'Senior Mental Systems Engineer',
      bio: 'Specializes in emotional signal processing and identity engineering for high-performance individuals.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Marcus Wei',
      title: 'Temporal Architecture Specialist',
      bio: 'Former tech executive who pioneered temporal mastery protocols for productivity and flow states.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consciousness Engineering Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Precision tools and expert guidance to architect your mental framework for peak performance
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <Tabs defaultValue="tutoring" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-lg">
                <TabsTrigger value="tutoring">1-on-1 Tutoring</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
                <TabsTrigger value="courses">Digital Courses</TabsTrigger>
              </TabsList>
            </div>

            {/* 1-on-1 Tutoring Tab */}
            <TabsContent value="tutoring">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Personalized Consciousness Engineering</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Work directly with our expert consciousness architects to design and implement your optimal mental framework
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {tutoringTiers.map((tier, index) => (
                    <PricingCard
                      key={index}
                      tier={tier.tier}
                      price={tier.price}
                      description={tier.description}
                      features={tier.features}
                      isPopular={tier.isPopular}
                    />
                  ))}
                </div>

                <div className="bg-muted rounded-xl p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-4 text-center">Meet Our Tutors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tutorProfiles.map((tutor, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h4 className="font-bold">{tutor.name}</h4>
                        <p className="text-sm text-brand-purple-light mb-2">{tutor.title}</p>
                        <p className="text-sm text-muted-foreground">{tutor.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg">Schedule a Consultation</Button>
                </div>
              </div>
            </TabsContent>

            {/* Workshops Tab */}
            <TabsContent value="workshops">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Immersive Engineering Workshops</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Join our intensive in-person and virtual workshops led by consciousness engineering experts
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-6">Upcoming Workshops</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {workshops.map((workshop, index) => (
                    <WorkshopCard key={index} {...workshop} />
                  ))}
                </div>

                <div className="bg-muted rounded-xl p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-6">Corporate Workshops</h3>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
                        alt="Corporate Workshop"
                        className="rounded-lg w-full"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold mb-4">Transform Your Team's Performance</h4>
                      <p className="mb-4">
                        Our customized workshops bring consciousness engineering principles to your organization,
                        helping teams develop optimal mental frameworks for creativity, decision-making, and execution.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-brand-purple-light mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Tailored to your team's specific challenges and goals
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-brand-purple-light mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Half-day, full-day, and multi-day formats available
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-brand-purple-light mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Implementation frameworks for lasting results
                        </li>
                      </ul>
                      <Button className="bg-brand-purple-light hover:bg-brand-purple-dark">Request Information</Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" variant="outline" className="mr-4">
                    <Users size={16} className="mr-2" /> View All Workshops
                  </Button>
                  <Button size="lg">Register for a Workshop</Button>
                </div>
              </div>
            </TabsContent>

            {/* Digital Courses Tab */}
            <TabsContent value="courses">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Digital Technique Packs</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Self-paced digital courses with comprehensive systems and implementation protocols
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {courses.map((course, index) => (
                    <div key={index} className="pricing-card bg-card">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                        <h4 className="font-medium mb-2">Included:</h4>
                        <ul className="mb-6 space-y-1">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <svg className="h-4 w-4 text-brand-purple-light mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold">${course.price}</span>
                          <Button>Purchase</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted rounded-xl p-8 mb-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                      <BookOpen size={120} className="text-brand-purple-light" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-4">Free Sample: Introduction to Consciousness Engineering</h3>
                      <p className="mb-6">
                        Download our free guide to learn the fundamental principles of consciousness engineering and how it differs from traditional personal development approaches.
                      </p>
                      <Button>
                        <Download size={16} className="mr-2" /> Download Free Guide
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg">View All Digital Courses</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Services;
