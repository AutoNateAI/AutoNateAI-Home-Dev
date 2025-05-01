
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkshopCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  isVirtual?: boolean;
}

const WorkshopCard = ({
  title,
  date,
  time,
  location,
  description,
  image,
  tags,
  isVirtual = false
}: WorkshopCardProps) => {
  return (
    <div className="card-hover-effect bg-card rounded-xl overflow-hidden border border-border">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isVirtual && (
          <Badge variant="secondary" className="absolute top-3 right-3 bg-brand-teal text-white">
            Virtual
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-brand-blue-medium/10">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-2 text-brand-purple-light" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-2 text-brand-purple-light" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-brand-purple-light" />
            <span>{location}</span>
          </div>
        </div>
        
        <Button className="w-full">Register</Button>
      </div>
    </div>
  );
};

export default WorkshopCard;
