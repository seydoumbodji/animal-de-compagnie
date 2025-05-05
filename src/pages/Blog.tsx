
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Clock, User } from 'lucide-react';

const Blog = () => {
  // Catégories
  const categories = [
    "Toutes", "Bien-être", "Conseils pratiques", "Chiens", "Chats", "Lapins", "Témoignages", "Événements"
  ];

  // Images des catégories
  const categoryImages = {
    "Bien-être": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Conseils pratiques": "https://images.unsplash.com/photo-1583511655826-05700a52f0d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Chiens": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Chats": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Lapins": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Témoignages": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Événements": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  // State pour la catégorie active
  const [activeCategory, setActiveCategory] = useState("Toutes");

  // Les articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les bienfaits de l'adoption d'un animal sur la santé mentale",
      excerpt: "Découvrez comment la présence d'un animal de compagnie peut améliorer significativement votre bien-être psychologique et émotionnel.",
      author: "Dr. Marie Dupont",
      date: "15 avril 2023",
      readTime: "8 min",
      category: "Bien-être",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Comment introduire un nouveau chat dans un foyer avec des chiens",
      excerpt: "Guide pratique pour faciliter la cohabitation entre félins et canins lors de l'arrivée d'un nouveau membre dans la famille.",
      author: "Alexandre Martin",
      date: "28 février 2023",
      readTime: "10 min",
      category: "Conseils pratiques",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Les races de chiens idéales pour la vie en appartement",
      excerpt: "Vivre en espace restreint ne signifie pas renoncer à adopter un chien. Voici les races qui s'adaptent parfaitement à la vie citadine.",
      author: "Julie Leroy",
      date: "12 janvier 2023",
      readTime: "7 min",
      category: "Chiens",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Comprendre le langage corporel des lapins",
      excerpt: "Apprenez à décoder les signaux que vous envoie votre lapin pour mieux répondre à ses besoins et renforcer votre lien.",
      author: "Thomas Dubois",
      date: "5 décembre 2022",
      readTime: "9 min",
      category: "Lapins",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Nutrition féline : mythes et réalités",
      excerpt: "Démêlez le vrai du faux concernant l'alimentation de votre chat pour lui assurer une santé optimale tout au long de sa vie.",
      author: "Dr. Sophie Renard",
      date: "18 novembre 2022",
      readTime: "11 min",
      category: "Chats",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Histoires inspirantes d'animaux sauvés et de leurs nouveaux propriétaires",
      excerpt: "Des histoires touchantes de sauvetages d'animaux et les liens profonds qui se sont formés avec leurs familles adoptives.",
      author: "Claire Moreau",
      date: "3 octobre 2022",
      readTime: "12 min",
      category: "Témoignages",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Journée portes ouvertes : rencontrez nos protégés et bénévoles",
      excerpt: "Venez nous rendre visite lors de notre journée portes ouvertes annuelle pour rencontrer nos animaux et l'équipe qui prend soin d'eux.",
      author: "Équipe CuddleBuddies",
      date: "20 mai 2023",
      readTime: "5 min",
      category: "Événements",
      image: "/placeholder.svg"
    }
  ];

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredPosts = activeCategory === "Toutes" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Notre Blog</h1>
              <p className="text-gray-600 mt-2">
                Conseils, témoignages et actualités sur l'univers de l'adoption animale
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={category === activeCategory ? "default" : "outline"}
                  className={category === activeCategory ? "bg-purple-500 hover:bg-purple-600" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Affichage des catégories avec images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {categories.slice(1).map((category) => (
              <div 
                key={category}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                  activeCategory === category ? "ring-4 ring-purple-500" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={categoryImages[category]} 
                    alt={`Catégorie ${category}`} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Liste des articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-auto mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full border-purple-500 text-purple-700 hover:bg-purple-50">
                    Lire l'article
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="bg-purple-100 rounded-lg p-6 md:p-8 text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Restez informés !</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Recevez nos derniers articles, conseils d'adoption et histoires inspirantes directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
