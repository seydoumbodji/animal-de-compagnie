
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const HowToAdopt = () => {
  // Effet pour défiler vers le haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Comment Adopter</h1>
          
          <p className="text-lg mb-8">
            Adopter un animal est une décision importante qui transformera votre vie et celle de votre nouveau compagnon. 
            Voici notre guide pour vous accompagner à chaque étape du processus d'adoption.
          </p>
          
          <div className="space-y-12 mb-12">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-semibold mb-3">Réfléchissez à votre mode de vie</h2>
                <p className="mb-4">
                  Avant de vous engager, évaluez votre disponibilité, votre espace de vie, votre budget et vos attentes. 
                  Différents animaux ont des besoins différents en matière d'attention, d'exercice et de soins.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Questions à vous poser :</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ai-je suffisamment de temps à consacrer à un animal ?</li>
                    <li>Mon logement est-il adapté (espace, accès extérieur, règlement) ?</li>
                    <li>Puis-je assumer financièrement les soins vétérinaires, la nourriture et autres dépenses ?</li>
                    <li>Quelle espèce et race conviendrait le mieux à mon style de vie ?</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-semibold mb-3">Trouvez votre compagnon idéal</h2>
                <p className="mb-4">
                  Explorez notre site pour découvrir les animaux disponibles. Utilisez notre quiz d'affinité pour 
                  identifier les animaux qui correspondent le mieux à vos attentes et à votre style de vie.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Button className="bg-purple-500 hover:bg-purple-600">Voir les chiens</Button>
                  <Button className="bg-purple-500 hover:bg-purple-600">Voir les chats</Button>
                  <Button className="bg-purple-500 hover:bg-purple-600">Voir les lapins</Button>
                </div>
              </div>
            </div>
            
            {/* Étape 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-semibold mb-3">Contactez le refuge</h2>
                <p className="mb-4">
                  Une fois que vous avez trouvé un animal qui vous intéresse, contactez le refuge qui l'héberge pour 
                  organiser une rencontre. Cette étape est essentielle pour établir un premier contact et vérifier la compatibilité.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Lors de votre visite :</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" /> 
                      <span>Prenez votre temps pour interagir avec l'animal</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" /> 
                      <span>Posez toutes vos questions au personnel du refuge</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" /> 
                      <span>Renseignez-vous sur l'historique et le comportement de l'animal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Étape 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-semibold mb-3">Procédez à l'adoption</h2>
                <p className="mb-4">
                  Si la rencontre se passe bien, vous pourrez entamer les démarches d'adoption. Chaque refuge a ses propres 
                  procédures, mais généralement, vous devrez :
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Remplir un formulaire d'adoption</li>
                  <li>Fournir une pièce d'identité et un justificatif de domicile</li>
                  <li>Payer les frais d'adoption (qui couvrent généralement la stérilisation, les vaccins, etc.)</li>
                  <li>Signer un contrat d'adoption</li>
                </ul>
                <p>
                  Certains refuges effectuent une visite à domicile ou un suivi post-adoption pour s'assurer du 
                  bien-être de l'animal dans son nouvel environnement.
                </p>
              </div>
            </div>
            
            {/* Étape 5 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">5</div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-semibold mb-3">Préparez l'arrivée de votre animal</h2>
                <p className="mb-4">
                  Avant d'accueillir votre nouvel ami, assurez-vous que votre domicile est prêt à le recevoir. 
                  Procurez-vous les équipements nécessaires et aménagez un espace confortable et sécurisé.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="font-medium mb-1">Pour un chien</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Gamelles pour l'eau et la nourriture</li>
                      <li>Laisse, collier et médaille d'identification</li>
                      <li>Panier ou coussin confortable</li>
                      <li>Jouets adaptés</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="font-medium mb-1">Pour un chat</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Litière et bac à litière</li>
                      <li>Gamelles pour l'eau et la nourriture</li>
                      <li>Arbre à chat ou griffoir</li>
                      <li>Jouets adaptés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Besoin de conseils supplémentaires ?</h2>
            <p className="text-center mb-6">
              N'hésitez pas à consulter notre section de conseils d'adoption ou à contacter notre équipe pour toute question.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-purple-500 hover:bg-purple-600">Conseils d'adoption</Button>
              <Button variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-50">
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowToAdopt;
