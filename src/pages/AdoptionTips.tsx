
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dog, Cat, Rabbit, ThumbsUp, AlertTriangle } from 'lucide-react';

const AdoptionTips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Conseils d'Adoption</h1>
          
          <p className="text-lg mb-8">
            Adopter un animal est une aventure merveilleuse qui nécessite préparation et connaissances. 
            Découvrez nos conseils pour faire de cette expérience un succès durable pour vous et votre nouveau compagnon.
          </p>
          
          <Tabs defaultValue="general" className="mb-10">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">Général</TabsTrigger>
              <TabsTrigger value="dogs" className="flex items-center gap-1"><Dog className="h-4 w-4" /> Chiens</TabsTrigger>
              <TabsTrigger value="cats" className="flex items-center gap-1"><Cat className="h-4 w-4" /> Chats</TabsTrigger>
              <TabsTrigger value="rabbits" className="flex items-center gap-1"><Rabbit className="h-4 w-4" /> Lapins</TabsTrigger>
            </TabsList>
            
            {/* Conseils généraux */}
            <TabsContent value="general">
              <div className="space-y-6 mt-6">
                <h2 className="text-2xl font-semibold">Conseils généraux d'adoption</h2>
                
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <ThumbsUp className="mr-2 h-5 w-5 text-purple-600" /> 
                    Les bonnes pratiques
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Patience et adaptation :</strong> Laissez du temps à votre animal pour s'adapter à son nouvel environnement. 
                      Certains animaux ont besoin de plusieurs jours, voire semaines, pour se sentir en sécurité.
                    </li>
                    <li>
                      <strong>Établissez une routine :</strong> Les animaux se sentent en sécurité lorsqu'ils ont une routine stable 
                      pour les repas, les promenades et les moments de jeu.
                    </li>
                    <li>
                      <strong>Suivi vétérinaire :</strong> Planifiez une visite chez le vétérinaire peu après l'adoption pour 
                      un bilan de santé complet et établir un calendrier vaccinal.
                    </li>
                    <li>
                      <strong>Socialisez progressivement :</strong> Introduisez doucement votre animal aux autres membres du 
                      foyer, animaux inclus, en respectant son rythme.
                    </li>
                    <li>
                      <strong>Éducation positive :</strong> Utilisez le renforcement positif plutôt que la punition pour 
                      éduquer votre animal.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" /> 
                    Les pièges à éviter
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Adoption impulsive :</strong> Ne vous précipitez jamais dans une adoption sans avoir 
                      réfléchi aux responsabilités et à l'engagement à long terme.
                    </li>
                    <li>
                      <strong>Ignorer les signaux de stress :</strong> Apprenez à reconnaître les signes d'anxiété ou 
                      de mal-être chez votre animal pour intervenir rapidement.
                    </li>
                    <li>
                      <strong>Négliger l'exercice mental :</strong> Les animaux ont besoin de stimulation mentale autant que 
                      d'exercice physique pour être épanouis.
                    </li>
                    <li>
                      <strong>Modifier l'alimentation brutalement :</strong> Tout changement alimentaire doit se faire 
                      progressivement pour éviter les troubles digestifs.
                    </li>
                    <li>
                      <strong>Surestimer ses capacités :</strong> Soyez honnête avec vous-même concernant le temps et 
                      les ressources que vous pouvez consacrer à un animal.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Conseils pour les chiens */}
            <TabsContent value="dogs">
              <div className="space-y-6 mt-6">
                <h2 className="text-2xl font-semibold">Conseils pour l'adoption d'un chien</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Les premiers jours</h3>
                    <p className="mb-3">
                      Les premiers jours sont cruciaux pour établir une relation de confiance avec votre nouveau chien.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Prévoyez un espace calme et confortable où il pourra se réfugier</li>
                      <li>Limitez les visites et les stimulations extérieures</li>
                      <li>Établissez des règles claires et cohérentes dès le début</li>
                      <li>Commencez à établir une routine quotidienne</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-3">La socialisation</h3>
                    <p className="mb-3">
                      Une bonne socialisation est essentielle pour avoir un chien équilibré et confiant.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Exposez progressivement votre chien à différentes personnes, animaux et environnements</li>
                      <li>Rendez ces expériences positives avec des récompenses</li>
                      <li>Soyez attentif aux signaux de stress ou d'anxiété</li>
                      <li>Considérez des cours d'éducation canine</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-xl mb-3">L'exercice et la stimulation mentale</h3>
                  <p className="mb-3">
                    Les chiens ont besoin d'exercice physique et mental quotidien pour être heureux et en bonne santé.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Exercice physique</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Promenades quotidiennes</li>
                        <li>Jeux de lancer</li>
                        <li>Course ou randonnée</li>
                        <li>Natation (pour certaines races)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Stimulation mentale</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Jouets d'intelligence</li>
                        <li>Jeux de recherche</li>
                        <li>Apprentissage de nouveaux ordres</li>
                        <li>Parcours d'obstacles</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Selon les races</h4>
                      <p className="text-sm">
                        Les besoins varient considérablement selon les races - un Border Collie aura besoin de 
                        bien plus d'activité qu'un Bouledogue français.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Les soins essentiels</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Alimentation adaptée :</strong> Choisissez une nourriture de qualité adaptée à l'âge, 
                      à la taille et à l'activité de votre chien.
                    </li>
                    <li>
                      <strong>Soins dentaires :</strong> Brossez régulièrement les dents de votre chien et offrez-lui 
                      des jouets dentaires.
                    </li>
                    <li>
                      <strong>Toilettage :</strong> Brossez régulièrement votre chien et donnez-lui des bains selon ses besoins.
                    </li>
                    <li>
                      <strong>Vermifuges et antiparasitaires :</strong> Suivez les recommandations de votre vétérinaire 
                      pour les traitements préventifs.
                    </li>
                    <li>
                      <strong>Visites vétérinaires :</strong> Prévoyez au minimum une visite annuelle pour un bilan de santé.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Conseils pour les chats */}
            <TabsContent value="cats">
              <div className="space-y-6 mt-6">
                <h2 className="text-2xl font-semibold">Conseils pour l'adoption d'un chat</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">L'arrivée à la maison</h3>
                    <p className="mb-3">
                      Les chats sont très sensibles aux changements d'environnement et ont besoin de temps pour s'adapter.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Préparez une pièce calme avec tous les essentiels</li>
                      <li>Laissez votre chat explorer à son rythme</li>
                      <li>Évitez de le forcer à sortir de sa cachette</li>
                      <li>Introduisez progressivement le reste de la maison</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-3">L'environnement idéal</h3>
                    <p className="mb-3">
                      Pour s'épanouir, un chat a besoin d'un environnement enrichi et adapté à ses besoins naturels.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Créez des points en hauteur pour l'observation</li>
                      <li>Mettez à disposition plusieurs zones de repos</li>
                      <li>Installez des griffoirs à différents endroits</li>
                      <li>Pensez à l'enrichissement avec des jouets variés</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-xl mb-3">La litière</h3>
                  <p className="mb-3">
                    La gestion de la litière est un aspect crucial du bien-être de votre chat.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Règles de base</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Prévoyez une litière par chat + une supplémentaire</li>
                        <li>Placez-les dans des endroits calmes et accessibles</li>
                        <li>Nettoyez quotidiennement</li>
                        <li>Changez complètement la litière régulièrement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">En cas de problèmes</h4>
                      <p className="text-sm mb-2">
                        Si votre chat refuse d'utiliser sa litière, cela peut indiquer :
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Un problème médical (consultez un vétérinaire)</li>
                        <li>Une litière mal entretenue</li>
                        <li>Un type de litière non apprécié</li>
                        <li>Un emplacement inadéquat</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-3">Le comportement félin</h3>
                  <p className="mb-3">
                    Comprendre le langage corporel et les comportements naturels des chats est essentiel pour une cohabitation harmonieuse.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Signaux de bien-être</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ronronnement (pas toujours signe de bien-être)</li>
                        <li>Queue dressée et détendue</li>
                        <li>Clignement lent des yeux</li>
                        <li>Toilettage régulier</li>
                        <li>Jeu actif</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Signaux de stress</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Queue basse ou fouettant l'air</li>
                        <li>Oreilles plaquées en arrière</li>
                        <li>Pupilles dilatées</li>
                        <li>Toilettage excessif</li>
                        <li>Miaulements fréquents</li>
                        <li>Se cacher constamment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Conseils pour les lapins */}
            <TabsContent value="rabbits">
              <div className="space-y-6 mt-6">
                <h2 className="text-2xl font-semibold">Conseils pour l'adoption d'un lapin</h2>
                
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-xl mb-3">Les idées reçues</h3>
                  <p className="mb-4">
                    Les lapins sont souvent mal compris et adoptés sans connaître leurs véritables besoins.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">❌ Les lapins sont faciles à entretenir et parfaits pour les enfants</p>
                      <p className="text-sm ml-6">
                        ✅ Les lapins ont besoin de soins quotidiens et d'attention. Ils peuvent être stressés par les 
                        manipulations excessives et sont souvent trop fragiles pour de jeunes enfants.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">❌ Les lapins peuvent vivre en cage toute leur vie</p>
                      <p className="text-sm ml-6">
                        ✅ Les lapins ont besoin d'exercice quotidien et d'espace pour se déplacer. Une cage ne devrait 
                        être qu'un abri, pas un lieu de vie permanent.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">❌ Les lapins sont des animaux silencieux et solitaires</p>
                      <p className="text-sm ml-6">
                        ✅ Les lapins sont des animaux sociaux qui vivent en groupes dans la nature. Un lapin seul peut développer 
                        des problèmes comportementaux liés à l'ennui et à la solitude.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">L'habitat</h3>
                    <p className="mb-3">
                      Un habitat adapté est essentiel au bien-être de votre lapin.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Clapier ou enclos spacieux avec extension</li>
                      <li>Zone abritée pour se cacher et se reposer</li>
                      <li>Sol non glissant recouvert de litière absorbante</li>
                      <li>Accès à un espace plus grand plusieurs heures par jour</li>
                      <li>Protection contre les prédateurs si à l'extérieur</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-3">L'alimentation</h3>
                    <p className="mb-3">
                      Une alimentation équilibrée est cruciale pour la santé de votre lapin.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Foin :</strong> 80% de l'alimentation, disponible en permanence</li>
                      <li><strong>Légumes frais :</strong> 10-15%, variés et quotidiens</li>
                      <li><strong>Granulés :</strong> 5-10%, de qualité et sans céréales</li>
                      <li><strong>Eau :</strong> fraîche et disponible en permanence</li>
                      <li><strong>À éviter :</strong> sucreries, pain, céréales, chocolat</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-3">La santé et les soins</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Soins réguliers</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Vérification quotidienne de l'appétit et des selles</li>
                        <li>Brossage hebdomadaire (plus fréquent en période de mue)</li>
                        <li>Taille des griffes toutes les 6-8 semaines</li>
                        <li>Vérification des dents régulièrement</li>
                        <li>Nettoyage du clapier/enclos au moins une fois par semaine</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Signaux d'alerte</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Diminution ou arrêt de l'alimentation</li>
                        <li>Absence de selles pendant plus de 8-12 heures</li>
                        <li>Diarrhée ou selles molles</li>
                        <li>Respiration rapide ou difficile</li>
                        <li>Léthargie, position recroquevillée</li>
                        <li>Écoulement des yeux, du nez ou de la bouche</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-amber-700 font-medium">
                    Important : Les lapins sont des proies dans la nature et masquent souvent leurs symptômes. 
                    Tout changement de comportement peut indiquer un problème grave nécessitant une attention vétérinaire immédiate.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-purple-100 p-6 rounded-lg mt-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Toujours besoin d'aide ?</h2>
            <p className="mb-4">
              Nos équipes sont disponibles pour répondre à vos questions et vous accompagner dans votre projet d'adoption.
            </p>
            <div className="flex justify-center gap-4">
              <a href="mailto:contact@cuddlebuddies.fr" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdoptionTips;
