
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-purple-500 text-3xl font-nunito font-extrabold">
            Cuddle<span className="text-purple-700">Buddies</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium">
            <Dog className="mr-1 h-5 w-5" /> Chiens
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium">
            <Cat className="mr-1 h-5 w-5" /> Chats
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium">
            <Rabbit className="mr-1 h-5 w-5" /> Lapins
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors font-medium">
            <Heart className="mr-1 h-5 w-5" /> Favoris
          </a>
          <Button className="bg-purple-500 hover:bg-purple-600">
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
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center">
            <Dog className="mr-1 h-5 w-5" /> Chiens
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center">
            <Cat className="mr-1 h-5 w-5" /> Chats
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center">
            <Rabbit className="mr-1 h-5 w-5" /> Lapins
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded flex items-center">
            <Heart className="mr-1 h-5 w-5" /> Favoris
          </a>
          <div className="px-4 py-2">
            <Button className="bg-purple-500 hover:bg-purple-600 w-full">
              Quiz d'Affinité
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
