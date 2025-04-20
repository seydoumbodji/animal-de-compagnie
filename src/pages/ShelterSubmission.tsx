
import React from 'react';
import AnimalSubmissionForm from '@/components/AnimalSubmissionForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShelterSubmission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Soumettre un Animal à l'Adoption
        </h1>
        
        <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed">
            J'ai lancé une chaîne YouTube et TikTok dédiées à l'aide à l'adoption des animaux de refuge, avec des vidéos courtes présentant des chiens, chats et autres animaux à la recherche d'une famille.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            L'idée est simple : vous m'envoyez les infos (photos, nom, âge, caractère, ville, lien vers la fiche d'adoption), et je crée une vidéo gratuite et engageante, que je publie sur YouTube et TikTok.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Objectif : augmenter la visibilité de vos protégés auprès d'un public plus large, notamment les jeunes et les familles actives sur les réseaux.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
            Si cela vous intéresse, veuillez remplir le formulaire.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 italic">
            Merci pour votre engagement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimalSubmissionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShelterSubmission;
