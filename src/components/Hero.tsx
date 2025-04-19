
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Trouvez votre <span className="text-purple-500">compagnon</span> idéal
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez des animaux adorables qui cherchent un foyer aimant. Notre plateforme unique vous aide à trouver le compagnon parfait selon votre style de vie.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
              Adopter maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
              Quiz d'Affinité
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#" className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm hover:shadow transition-all text-gray-700">
              <Dog className="mr-2 h-5 w-5 text-purple-500" /> 
              <span>Chiens</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm hover:shadow transition-all text-gray-700">
              <Cat className="mr-2 h-5 w-5 text-purple-500" /> 
              <span>Chats</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm hover:shadow transition-all text-gray-700">
              <Rabbit className="mr-2 h-5 w-5 text-purple-500" /> 
              <span>Lapins</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative z-10 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Un chien heureux" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="absolute top-10 -right-4 -z-10 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-10 -left-4 -z-10 w-32 h-32 bg-purple-300 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
