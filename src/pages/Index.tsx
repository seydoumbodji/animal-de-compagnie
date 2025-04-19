
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PetCard from '@/components/PetCard';
import CompatibilityQuiz from '@/components/CompatibilityQuiz';
import MeetGreetScheduler from '@/components/MeetGreetScheduler';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Cat, Rabbit } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState("dogs");
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedPet, setSelectedPet] = useState<any>(null);

  // Mock data for pets
  const pets = {
    dogs: [
      {
        id: 1,
        name: "Rocky",
        image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "2 ans",
        breed: "Berger Allemand",
        location: "Paris",
        personalities: ["Joueur", "Énergique", "Fidèle"],
        type: "dog" as const
      },
      {
        id: 2,
        name: "Bella",
        image: "https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "4 ans",
        breed: "Golden Retriever",
        location: "Lyon",
        personalities: ["Calme", "Affectueux", "Sociable"],
        type: "dog" as const
      },
      {
        id: 3,
        name: "Max",
        image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "1 an",
        breed: "Jack Russell",
        location: "Marseille",
        personalities: ["Vif", "Intelligent", "Curieux"],
        type: "dog" as const
      }
    ],
    cats: [
      {
        id: 4,
        name: "Luna",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "3 ans",
        breed: "Siamois",
        location: "Bordeaux",
        personalities: ["Indépendant", "Calme", "Observateur"],
        type: "cat" as const
      },
      {
        id: 5,
        name: "Simba",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "5 mois",
        breed: "Maine Coon",
        location: "Lille",
        personalities: ["Joueur", "Sociable", "Doux"],
        type: "cat" as const
      },
      {
        id: 6,
        name: "Felix",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "2 ans",
        breed: "Européen",
        location: "Toulouse",
        personalities: ["Câlin", "Dormeur", "Gourmand"],
        type: "cat" as const
      }
    ],
    rabbits: [
      {
        id: 7,
        name: "Caramel",
        image: "https://images.unsplash.com/photo-1585574234148-1031d167c052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "1 an",
        breed: "Nain",
        location: "Nice",
        personalities: ["Timide", "Calme", "Propre"],
        type: "rabbit" as const
      },
      {
        id: 8,
        name: "Oreo",
        image: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "8 mois",
        breed: "Bélier",
        location: "Strasbourg",
        personalities: ["Curieux", "Actif", "Sociable"],
        type: "rabbit" as const
      },
      {
        id: 9,
        name: "Snowball",
        image: "https://images.unsplash.com/photo-1533993962330-7e4e1e64b2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        age: "2 ans",
        breed: "Rex",
        location: "Nantes",
        personalities: ["Doux", "Calme", "Affectueux"],
        type: "rabbit" as const
      }
    ]
  };

  const handleMeetGreet = (pet: any) => {
    setSelectedPet(pet);
    setShowScheduler(true);
    setTimeout(() => {
      const element = document.getElementById('scheduler');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Featured Pets Section */}
      <section id="pets-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Animaux à Adopter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos adorables compagnons qui cherchent une famille aimante. Utilisez nos filtres pour trouver votre match parfait.
            </p>
          </div>

          <Tabs defaultValue="dogs" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-purple-50">
                <TabsTrigger value="dogs" className="flex items-center">
                  <Dog className="mr-1 h-4 w-4" /> Chiens
                </TabsTrigger>
                <TabsTrigger value="cats" className="flex items-center">
                  <Cat className="mr-1 h-4 w-4" /> Chats
                </TabsTrigger>
                <TabsTrigger value="rabbits" className="flex items-center">
                  <Rabbit className="mr-1 h-4 w-4" /> Lapins
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dogs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.dogs.map(pet => (
                  <div key={pet.id} onClick={() => handleMeetGreet(pet)} className="cursor-pointer">
                    <PetCard {...pet} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cats">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.cats.map(pet => (
                  <div key={pet.id} onClick={() => handleMeetGreet(pet)} className="cursor-pointer">
                    <PetCard {...pet} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rabbits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.rabbits.map(pet => (
                  <div key={pet.id} onClick={() => handleMeetGreet(pet)} className="cursor-pointer">
                    <PetCard {...pet} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 text-center">
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
              Voir plus de {activeTab === "dogs" ? "chiens" : activeTab === "cats" ? "chats" : "lapins"}
            </Button>
          </div>
        </div>
      </section>

      {/* Meet & Greet Scheduler */}
      {showScheduler && selectedPet && (
        <section id="scheduler" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Rencontrez {selectedPet.name}
              </h2>
              <Button variant="ghost" onClick={() => setShowScheduler(false)}>
                Fermer
              </Button>
            </div>
            <MeetGreetScheduler petName={selectedPet.name} petImage={selectedPet.image} />
          </div>
        </section>
      )}

      {/* Compatibility Quiz Section */}
      <section data-section="quiz" className="py-16 bg-purple-100 bg-opacity-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trouvez Votre Compagnon Idéal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre quiz d'affinité unique vous aide à identifier l'animal qui correspond parfaitement à votre style de vie et à vos préférences.
            </p>
          </div>
          
          <CompatibilityQuiz />
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment Ça Marche
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Adopter un animal n'a jamais été aussi simple. Suivez ces étapes pour trouver votre compagnon parfait.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-purple-600">1</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Découvrez</h3>
              <p className="text-gray-600">Parcourez nos profils d'animaux ou faites notre quiz d'affinité</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-purple-600">2</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Rencontrez</h3>
              <p className="text-gray-600">Planifiez une rencontre virtuelle avec l'animal qui vous plaît</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-purple-600">3</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Adoptez</h3>
              <p className="text-gray-600">Complétez le formulaire d'adoption et rencontrez votre futur compagnon en personne</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-purple-600">4</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Accueillez</h3>
              <p className="text-gray-600">Ramenez votre nouveau compagnon à la maison et commencez votre nouvelle vie ensemble</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-purple-500 hover:bg-purple-600">
              Commencer l'aventure
            </Button>
          </div>
        </div>
      </section>
            
      <Footer />
    </div>
  );
};

export default Index;
