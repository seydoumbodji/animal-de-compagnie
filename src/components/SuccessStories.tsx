
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  petName: string;
  ownerName: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Du refuge à la famille",
    description: "Après 2 ans au refuge, Max a trouvé sa famille pour toujours. Maintenant il profite de longues balades et de câlins quotidiens.",
    beforeImage: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    afterImage: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    petName: "Max",
    ownerName: "Famille Martin"
  },
  {
    id: 2,
    title: "Une nouvelle vie pour Luna",
    description: "Luna était craintive et stressée. Aujourd'hui, elle s'épanouit dans son nouveau foyer avec son amie féline Mia.",
    beforeImage: "https://images.unsplash.com/photo-1554089672-7661925cf8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    afterImage: "https://images.unsplash.com/photo-1608032364895-84d9dbc1a3a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    petName: "Luna",
    ownerName: "Sophie D."
  },
  {
    id: 3,
    title: "Le bonheur de Caramel",
    description: "Abandonné à 8 ans, ce lapin a retrouvé joie de vivre avec sa nouvelle famille qui lui offre l'attention qu'il mérite.",
    beforeImage: "https://images.unsplash.com/photo-1576502733340-4acbd528b538?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    afterImage: "https://images.unsplash.com/photo-1585574234148-1031d167c052?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    petName: "Caramel",
    ownerName: "Thomas et Julie"
  }
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState<SuccessStory>(successStories[0]);
  const [activeImage, setActiveImage] = useState<"before" | "after">("after");
  
  return (
    <div className="py-12 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Histoires d'Adoption Réussies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ces animaux ont trouvé leur foyer pour la vie grâce à notre plateforme. Découvrez leur parcours inspirant.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl">
              <img 
                src={activeImage === "before" ? activeStory.beforeImage : activeStory.afterImage} 
                alt={activeStory.petName} 
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md">
                <div className="flex">
                  <Button 
                    variant="ghost" 
                    className={`rounded-l-full px-3 ${activeImage === "before" ? "bg-purple-100 text-purple-600" : ""}`}
                    onClick={() => setActiveImage("before")}
                  >
                    Avant
                  </Button>
                  <div className="border-r border-gray-200 h-6 my-auto"></div>
                  <Button 
                    variant="ghost" 
                    className={`rounded-r-full px-3 ${activeImage === "after" ? "bg-purple-100 text-purple-600" : ""}`}
                    onClick={() => setActiveImage("after")}
                  >
                    Après
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{activeStory.title}</h3>
                <p className="text-white/80">{activeStory.petName}, adopté par {activeStory.ownerName}</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Card className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeStory.title}</h3>
                <p className="text-gray-600 mb-6">{activeStory.description}</p>
                
                <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-600">
                  "Adopter {activeStory.petName} a été la meilleure décision de notre vie. Notre maison est remplie d'amour et de joie."
                </blockquote>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">Parcourez d'autres histoires :</p>
                <div className="flex flex-wrap gap-2">
                  {successStories.map((story) => (
                    <Button
                      key={story.id}
                      variant={activeStory.id === story.id ? "default" : "outline"} 
                      className={activeStory.id === story.id ? "bg-purple-500" : "border-purple-200"}
                      onClick={() => setActiveStory(story)}
                    >
                      {story.petName}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
