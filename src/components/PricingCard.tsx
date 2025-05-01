
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingFeature {
  included: boolean;
  text: string;
}

interface PricingCardProps {
  tier: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PricingCard = ({ tier, price, description, features, isPopular = false }: PricingCardProps) => {
  return (
    <div className={`pricing-card bg-card ${isPopular ? 'border-primary/50 shadow-lg relative' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-max">
          <span className="bg-brand-purple-light text-white text-xs font-bold py-1 px-3 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold mb-2">{tier}</h3>
        <div className="my-6">
          <p className="text-4xl font-bold">${price}</p>
          <p className="text-sm text-muted-foreground">per session</p>
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              {feature.included ? (
                <Check size={18} className="text-green-500 mr-2" />
              ) : (
                <div className="w-[18px] h-[18px] mr-2" />
              )}
              <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-brand-purple-light hover:bg-brand-purple-dark' : ''}`}
          variant={isPopular ? 'default' : 'outline'}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
