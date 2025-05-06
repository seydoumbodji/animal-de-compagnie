
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Mission = () => {
  // Effet pour défiler vers le haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Notre Mission</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Chez CuddleBuddies, notre mission est claire et passionnée : nous nous consacrons à créer des liens durables 
              entre les animaux qui ont besoin d'un foyer et les personnes prêtes à leur offrir amour et attention.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nos valeurs fondamentales</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Bien-être animal</h3>
                <p>
                  Le bien-être des animaux est notre priorité absolue. Nous veillons à ce que chaque animal 
                  reçoive les soins appropriés avant, pendant et après le processus d'adoption.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Adoptions responsables</h3>
                <p>
                  Nous encourageons les adoptions réfléchies et responsables, en guidant les futurs propriétaires 
                  vers l'animal qui correspond le mieux à leur mode de vie et à leurs attentes.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Éducation</h3>
                <p>
                  Nous croyons en l'importance de l'éducation pour promouvoir une cohabitation harmonieuse 
                  entre les humains et les animaux, et réduire les abandons.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Communauté</h3>
                <p>
                  Nous travaillons en étroite collaboration avec des refuges, des vétérinaires et des bénévoles 
                  pour créer un réseau solide dédié à la protection animale.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Notre vision</h2>
            <p className="mb-6">
              Nous aspirons à un monde où aucun animal domestique ne serait sans foyer, où l'adoption serait le premier 
              choix pour accueillir un animal de compagnie, et où chaque relation entre un humain et son animal serait 
              fondée sur le respect, la compréhension et l'amour mutuel.
            </p>
            
            <div className="bg-purple-100 p-6 rounded-lg my-8">
              <h3 className="font-semibold text-xl mb-3">Comment nous soutenons cette mission</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>En facilitant les rencontres entre animaux et adoptants potentiels</li>
                <li>En fournissant des ressources éducatives sur les soins aux animaux</li>
                <li>En collaborant avec des refuges pour améliorer les conditions de vie des animaux en attente d'adoption</li>
                <li>En menant des campagnes de sensibilisation contre l'abandon et la maltraitance</li>
                <li>En proposant un suivi post-adoption pour assurer la réussite de chaque nouvelle famille</li>
              </ul>
            </div>
            
            <p className="text-lg mt-8">
              Rejoignez-nous dans cette aventure et faites partie du changement. Ensemble, nous pouvons faire 
              une différence significative dans la vie de nombreux animaux et de leurs nouveaux propriétaires.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mission;
