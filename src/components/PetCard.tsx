
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, InfoIcon, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface PetCardProps {
  id: number;
  name: string;
  image: string;
  age: string;
  breed: string;
  location: string;
  personalities: string[];
  type: "dog" | "cat" | "rabbit";
  lifespan: string;
  shelterName: string;
  shelter_email: string;
  shelter_phone: string;
  description: string;
}

const PetCard = ({ 
  id, 
  name, 
  image, 
  age, 
  breed, 
  location, 
  personalities, 
  type, 
  lifespan,
  shelterName,
  shelter_email,
  shelter_phone,
  description
}: PetCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const { toast } = useToast();

  const petTypeLabels = {
    dog: "Chien",
    cat: "Chat",
    rabbit: "Lapin"
  };

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

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          toast({
            description: `${type === "email" ? "Email" : "Numéro de téléphone"} copié !`,
          });
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          toast({
            variant: "destructive",
            description: "Impossible de copier le texte. Veuillez réessayer.",
          });
        });
    } else {
      toast({
        variant: "destructive",
        description: `${type === "email" ? "Email" : "Numéro de téléphone"} non disponible.`,
      });
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
          
          <div className="flex justify-center">
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
                <DialogDescription>
                  {breed} • {age}
                </DialogDescription>
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
              <div>
                <h4 className="font-medium text-purple-700">Refuge</h4>
                <p className="text-sm text-gray-600">{shelterName}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-purple-700 mb-1">Description</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            
            <div className="pt-2 space-y-2">
              <Button 
                className="w-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center gap-2"
                onClick={() => copyToClipboard(shelter_phone, "phone")}
              >
                <Phone size={16} />
                Téléphone du refuge
              </Button>
              <Button 
                className="w-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center gap-2"
                onClick={() => copyToClipboard(shelter_email, "email")}
              >
                <Mail size={16} />
                Email du refuge
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PetCard;
