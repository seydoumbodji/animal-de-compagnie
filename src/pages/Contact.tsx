
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NewsletterSignup from '@/components/NewsletterSignup';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would normally send this data to a backend
    // This is just a simulation for now
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contactez-nous</h1>
          <p className="text-gray-600 mb-8">Vous avez des questions ? N'hésitez pas à nous écrire !</p>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">Email</h2>
                <p className="text-gray-600">contact@cuddlebuddies.fr</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input 
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message"
                  rows={6}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </form>
          </div>
          
          <div className="mt-10 bg-purple-50 rounded-lg p-6 border border-purple-100">
            <h2 className="text-xl font-semibold mb-4">Quand nous vous répondrons</h2>
            <p className="text-gray-700 mb-4">
              Notre équipe s'efforce de répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrables.
              Pendant les périodes de forte activité, ce délai peut être légèrement plus long.
            </p>
            <p className="text-gray-700">
              Si votre demande concerne une urgence concernant un animal, veuillez l'indiquer clairement dans l'objet
              de votre message pour que nous puissions la traiter en priorité.
            </p>
          </div>
          
          <div className="mt-10 bg-purple-100 rounded-lg p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Restez informés !</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Recevez nos derniers articles, conseils d'adoption et histoires inspirantes directement dans votre boîte mail.
            </p>
            <NewsletterSignup className="max-w-md mx-auto" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
