
import { Dog, Cat, Rabbit, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cuddle<span className="text-purple-400">Buddies</span></h3>
            <p className="text-gray-300 mb-4">
              Notre mission est de trouver le foyer parfait pour chaque animal et le compagnon idéal pour chaque famille.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm5.333 14.328c-.175.037-.35.05-.525.05-.994 0-1.952-.313-2.725-.9-.469-.363-1.066-.547-1.666-.547-.613 0-1.215.187-1.687.553-.775.6-1.744.905-2.713.893-.338 0-.675-.037-1-.113-1.625-.375-2.95-1.512-3.525-3l-.075-.175c-.35-.85-.525-1.763-.525-2.675 0-.612.087-1.225.262-1.812.175-.588.45-1.138.812-1.625 1.337-1.825 3.212-2.087 3.95-2.087h.002c.787 0 1.537.262 2.138.737l.075.05c.175.125.35.25.538.35.425.225.9.35 1.375.35.438 0 .875-.1 1.287-.313.225-.112.438-.237.638-.387l.063-.038c.6-.45 1.337-.7 2.088-.7.675 0 1.35.162 1.95.475 2.338 1.288 2.412 4.925.588 6.375-1.088.85-1.75 2.15-1.75 3.475 0 .612.125 1.212.375 1.775.125.275.288.537.487.775-.487.125-.975.188-1.463.188z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.441 15.445h-2.13v-1.12c-.398.4-.957.64-1.573.64-1.553 0-2.738-1.233-2.738-2.992 0-1.77 1.185-2.999 2.738-2.999.615 0 1.174.239 1.573.639V8.985h2.13v8.46zm-2.16-5.071c-.702 0-1.266.561-1.266 1.291 0 .727.564 1.288 1.266 1.288s1.265-.561 1.265-1.288c0-.73-.563-1.291-1.265-1.291z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Animaux</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 flex items-center">
                  <Dog className="mr-2 h-4 w-4" /> Chiens à adopter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 flex items-center">
                  <Cat className="mr-2 h-4 w-4" /> Chats à adopter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 flex items-center">
                  <Rabbit className="mr-2 h-4 w-4" /> Lapins à adopter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 flex items-center">
                  <Heart className="mr-2 h-4 w-4" /> Animaux favoris
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">À propos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/notre-mission" className="text-gray-300 hover:text-purple-400">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link to="/comment-adopter" className="text-gray-300 hover:text-purple-400">
                  Comment adopter
                </Link>
              </li>
              <li>
                <Link to="/conseils-adoption" className="text-gray-300 hover:text-purple-400">
                  Conseils d'adoption
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-purple-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> contact@cuddlebuddies.fr
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Inscrivez-vous à notre newsletter</h5>
              <NewsletterSignup darkMode={true} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CuddleBuddies. Tous droits réservés.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-400">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-purple-400">Conditions d'utilisation</a>
            <a href="#" className="text-gray-400 hover:text-purple-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
