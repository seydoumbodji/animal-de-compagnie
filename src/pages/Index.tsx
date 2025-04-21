import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimalCollection from '@/components/AnimalCollection';
import CompatibilityQuiz from '@/components/CompatibilityQuiz';
import MeetGreetScheduler from '@/components/MeetGreetScheduler';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';

const Index = () => {
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedPet, setSelectedPet] = useState<any>(null);

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

      {/* Animals Collection Section */}
      <section id="pets-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Animaux à Adopter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos adorables compagnons qui cherchent une famille aimante.
            </p>
          </div>

          <AnimalCollection />
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
