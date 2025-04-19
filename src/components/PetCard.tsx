
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  const [showInfoDialog, setShowInfoDialog] = useState(false);

  const petTypeLabels = {
    dog: "Chien",
    cat: "Chat",
    rabbit: "Lapin"
  };

  // Informations supplémentaires sur les animaux (en fonction du type)
  const petInfo = {
    dog: {
      lifespan: "10-13 ans",
      diet: "Croquettes adaptées, viande, légumes",
      exercise: "Promenades quotidiennes, jeux",
      medicalNeeds: "Vaccinations annuelles, visites vétérinaires régulières",
      temperament: "Sociale, fidèle, active",
      adoptionFee: "250€",
    },
    cat: {
      lifespan: "12-15 ans",
      diet: "Croquettes spéciales chat, nourriture humide",
      exercise: "Jeux interactifs, espace pour grimper",
      medicalNeeds: "Vaccinations annuelles, soins dentaires",
      temperament: "Indépendant, curieux, affectueux",
      adoptionFee: "200€",
    },
    rabbit: {
      lifespan: "8-12 ans",
      diet: "Foin frais, légumes verts, granulés",
      exercise: "Espace pour sauter et explorer",
      medicalNeeds: "Contrôles vétérinaires réguliers",
      temperament: "Calme, social avec d'autres lapins",
      adoptionFee: "150€",
    }
  };

  return (
    <>
      <Card className="overflow-hidden pet-card-shadow hover:shadow-lg transition-all duration-300 group">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={`${name}, ${petTypeLabels[type]} à adopter`}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
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
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-500 hover:bg-purple-50 flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                setShowInfoDialog(true);
              }}
            >
              <InfoIcon size={16} />
              Info
            </Button>
          </div>
        </div>
      </Card>

      <Dialog open={showInfoDialog} onOpenChange={setShowInfoDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <img 
                src={image} 
                alt={name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <DialogTitle className="text-xl">{name}</DialogTitle>
                <DialogDescription>{breed} • {age}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-purple-700 mb-1">Personnalité</h4>
              <div className="flex flex-wrap gap-1">
                {personalities.map((trait, idx) => (
                  <span key={idx} className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <h4 className="font-medium text-purple-700">Durée de vie</h4>
                <p className="text-sm text-gray-600">{petInfo[type].lifespan}</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-700">Localisation</h4>
                <p className="text-sm text-gray-600">{location}</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-700">Alimentation</h4>
                <p className="text-sm text-gray-600">{petInfo[type].diet}</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-700">Exercice</h4>
                <p className="text-sm text-gray-600">{petInfo[type].exercise}</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-700">Besoins médicaux</h4>
                <p className="text-sm text-gray-600">{petInfo[type].medicalNeeds}</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-700">Frais d'adoption</h4>
                <p className="text-sm text-gray-600">{petInfo[type].adoptionFee}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-purple-700 mb-1">À propos de {name}</h4>
              <p className="text-sm text-gray-600">
                {name} est un{type === "cat" ? "e" : ""} {petTypeLabels[type].toLowerCase()} {type === "cat" ? "câline" : "affectueux"} qui 
                aime {type === "dog" ? "les promenades et jouer" : type === "cat" ? "se prélasser au soleil et jouer avec des jouets" : "grignoter du foin frais et explorer son environnement"}.
                {personalities.includes("Sociable") ? ` ${name} s'entend bien avec les autres animaux et les enfants.` : ""}
                {personalities.includes("Calme") ? ` ${name} est calme et appréciera un foyer tranquille.` : ""}
                {personalities.includes("Énergique") ? ` ${name} est plein d'énergie et aura besoin d'exercice quotidien.` : ""}
              </p>
            </div>
            
            <div className="pt-2">
              <Button 
                className="w-full bg-purple-500 hover:bg-purple-600"
                onClick={() => setShowInfoDialog(false)}
              >
                Rencontrer {name}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PetCard;
