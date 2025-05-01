
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BlogPostCard from '@/components/BlogPostCard';
import { Search } from 'lucide-react';

// Sample blog post data
const blogPosts = [
  {
    id: "mental-os-redesign",
    title: "Mental OS Redesign: Engineering Your Thought Patterns",
    excerpt: "Learn how to systematically rebuild your cognitive frameworks using systems engineering principles and structured implementation protocols.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    date: "May 1, 2025",
    author: "Dr. Nathan Parker",
    category: "Mental OS Design",
    readTime: "8 min"
  },
  {
    id: "emotional-signal-processing",
    title: "Emotional Signal Processing: The Engineering Approach",
    excerpt: "Discover how to apply signal processing frameworks to emotional responses, creating an optimized system for information extraction and response.",
    coverImage: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=600&q=80",
    date: "April 25, 2025",
    author: "Dr. Sophia Chen",
    category: "Emotional Signal Processing",
    readTime: "6 min"
  },
  {
    id: "time-perception-engineering",
    title: "Engineering Time Perception for Optimal Performance",
    excerpt: "Learn structured approaches to modify your temporal architecture, enabling enhanced flow states and productivity through scientific protocols.",
    coverImage: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80",
    date: "April 18, 2025",
    author: "Marcus Wei",
    category: "Temporal Mastery",
    readTime: "10 min"
  },
  {
    id: "identity-narrative-engineering",
    title: "Identity Engineering: Architecting Your Self-Narrative",
    excerpt: "Explore how to systematically reconstruct your identity frameworks using structured narrative engineering and implementation protocols.",
    coverImage: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=600&q=80",
    date: "April 10, 2025",
    author: "Dr. Nathan Parker",
    category: "Identity & Narrative Engineering",
    readTime: "7 min"
  },
  {
    id: "decision-framework-optimization",
    title: "Decision Framework Optimization Through Systems Thinking",
    excerpt: "How to construct precision decision-making frameworks that minimize cognitive overhead while maximizing outcome quality.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    date: "April 5, 2025",
    author: "Dr. Sophia Chen",
    category: "Mental OS Design",
    readTime: "9 min"
  },
  {
    id: "attention-engineering",
    title: "Attention Engineering: Building Focus Architectures",
    excerpt: "Learn systematic approaches to restructuring your attentional systems for enhanced depth and precision focus during complex tasks.",
    coverImage: "https://images.unsplash.com/photo-1525339199875-0cd4231eab28?auto=format&fit=crop&w=600&q=80",
    date: "March 28, 2025",
    author: "Marcus Wei",
    category: "Temporal Mastery",
    readTime: "5 min"
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'mental-os-design', name: 'Mental OS Design' },
    { id: 'temporal-mastery', name: 'Temporal Mastery' },
    { id: 'emotional-signal-processing', name: 'Emotional Signal Processing' },
    { id: 'identity-narrative-engineering', name: 'Identity & Narrative Engineering' }
  ];
  
  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || 
                           post.category.toLowerCase().replace(/[&]/g, '').replace(/\s+/g, '-') === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue-dark text-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consciousness Engineering Blog</h1>
            <p className="text-xl text-gray-300">
              Insights and implementation guides for architecting your optimal mental framework
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-brand-purple-light/15 text-brand-purple-light text-xs font-semibold py-1 px-3 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{featuredPost.readTime} read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="w-10 h-10 rounded-full bg-brand-purple-light/20 flex items-center justify-center text-brand-purple-light font-bold">
                        {featuredPost.author.split(' ')[0][0] + featuredPost.author.split(' ')[1][0]}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{featuredPost.author}</p>
                      <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left sidebar */}
            <div className="md:w-1/4">
              <div className="bg-card rounded-xl p-6 border border-border mb-6">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border mb-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-brand-purple-light/15 text-brand-purple-light font-medium' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-4">Subscribe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest consciousness engineering insights delivered to your inbox.
                </p>
                <Input placeholder="Your email" className="mb-3" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:w-3/4">
              <div className="bg-card rounded-xl p-6 border border-border mb-6">
                <Tabs defaultValue="latest" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="latest" className="mt-0">
                    {filteredPosts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post) => (
                          <BlogPostCard key={post.id} {...post} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No articles found matching your search criteria.</p>
                        <Button variant="outline" className="mt-4" onClick={() => {setSearchQuery(''); setActiveCategory('all');}}>
                          Clear Filters
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="popular" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Show some posts in a different order for "popular" tab */}
                      {[...filteredPosts].reverse().slice(0, 4).map((post) => (
                        <BlogPostCard key={post.id} {...post} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="trending" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Show some posts in a different order for "trending" tab */}
                      {[...filteredPosts].sort(() => 0.5 - Math.random()).slice(0, 4).map((post) => (
                        <BlogPostCard key={post.id} {...post} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="text-center">
                <Button variant="outline" size="lg">Load More Articles</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
