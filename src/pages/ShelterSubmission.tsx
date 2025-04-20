
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
        <div className="max-w-3xl mx-auto">
          <AnimalSubmissionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShelterSubmission;
