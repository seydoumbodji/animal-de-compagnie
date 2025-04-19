
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface PetCardProps {
  id: number;
  name: string;
  image: string;
  age: string;
  breed: string;
  location: string;
  personalities: string[];
  type: "dog" | "cat" | "rabbit";
}

const PetCard = ({ id, name, image, age, breed, location, personalities, type }: PetCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const petTypeLabels = {
    dog: "Chien",
    cat: "Chat",
    rabbit: "Lapin"
  };

  return (
    <Card className="overflow-hidden pet-card-shadow hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${petTypeLabels[type]} à adopter`}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            size={20}
            className={cn(
              "transition-colors", 
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            )}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-white/80 text-sm">{breed}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600">{age}</span>
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {personalities.slice(0, 3).map((personality, idx) => (
            <span key={idx} className="personality-badge">
              {personality}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button className="w-full bg-purple-500 hover:bg-purple-600">
            Rencontrer
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
            Info
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PetCard;
