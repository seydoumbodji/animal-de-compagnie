
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleQuizClick = () => {
    // Scroll to the quiz section
    const quizSection = document.querySelector('[data-section="quiz"]');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast({
        title: "Information",
        description: "La section Quiz est en cours de chargement"
      });
    }
  };

  const handleAnimalTypeClick = (type: string) => {
    // Find the tabs section and activate the appropriate tab
    const tabTrigger = document.querySelector(`[data-state="inactive"][value="${type}"]`) as HTMLButtonElement;
    if (tabTrigger) {
      tabTrigger.click();
      // Also scroll to the section
      const petsSection = document.getElementById("pets-section");
      if (petsSection) {
        petsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-purple-500 text-3xl font-nunito font-extrabold">
            Cuddle<span className="text-purple-700">Buddies</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleAnimalTypeClick("dogs")}
            className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium"
          >
            <Dog className="mr-1 h-5 w-5" /> Chiens
          </button>
          <button 
            onClick={() => handleAnimalTypeClick("cats")}
            className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium"
          >
            <Cat className="mr-1 h-5 w-5" /> Chats
          </button>
          <button 
            onClick={() => handleAnimalTypeClick("rabbits")}
            className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium"
          >
            <Rabbit className="mr-1 h-5 w-5" /> Lapins
          </button>
          <button 
            className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium"
            onClick={() => toast({
              title: "Fonctionnalité à venir",
              description: "La section favoris sera bientôt disponible"
            })}
          >
            <Heart className="mr-1 h-5 w-5" /> Favoris
          </button>
          <Button 
            className="bg-purple-500 hover:bg-purple-600"
            onClick={handleQuizClick}
          >
            Quiz d'Affinité
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-purple-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 bg-white">
          <button 
            onClick={() => {
              handleAnimalTypeClick("dogs");
              setIsMenuOpen(false);
            }}
            className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center w-full text-left"
          >
            <Dog className="mr-1 h-5 w-5" /> Chiens
          </button>
          <button 
            onClick={() => {
              handleAnimalTypeClick("cats");
              setIsMenuOpen(false);
            }}
            className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center w-full text-left"
          >
            <Cat className="mr-1 h-5 w-5" /> Chats
          </button>
          <button 
            onClick={() => {
              handleAnimalTypeClick("rabbits");
              setIsMenuOpen(false);
            }}
            className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center w-full text-left"
          >
            <Rabbit className="mr-1 h-5 w-5" /> Lapins
          </button>
          <button 
            onClick={() => {
              toast({
                title: "Fonctionnalité à venir",
                description: "La section favoris sera bientôt disponible"
              });
              setIsMenuOpen(false);
            }}
            className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center w-full text-left"
          >
            <Heart className="mr-1 h-5 w-5" /> Favoris
          </button>
          <div className="px-4 py-2">
            <Button 
              className="bg-purple-500 hover:bg-purple-600 w-full"
              onClick={() => {
                handleQuizClick();
                setIsMenuOpen(false);
              }}
            >
              Quiz d'Affinité
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
