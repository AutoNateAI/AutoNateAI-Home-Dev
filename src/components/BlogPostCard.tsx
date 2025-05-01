
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  coverImage,
  date,
  author,
  category,
  readTime
}: BlogPostCardProps) => {
  return (
    <article className="card-hover-effect bg-card rounded-xl overflow-hidden border border-border h-full flex flex-col">
      <Link to={`/blog/${id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <Badge className="bg-brand-purple-light/15 text-brand-purple-light hover:bg-brand-purple-light/25">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{readTime} read</span>
        </div>
        
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div className="flex items-center text-sm">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
