
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface NewsletterSignupProps {
  className?: string;
  darkMode?: boolean;
}

const NewsletterSignup = ({ className = '', darkMode = false }: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email invalide",
        description: "Veuillez saisir une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Vérifier si l'email existe déjà
      const { data: existingSubscribers } = await supabase
        .from('newsletter_subscribers')
        .select('id')
        .eq('email', email)
        .limit(1);

      if (existingSubscribers && existingSubscribers.length > 0) {
        toast({
          title: "Déjà inscrit",
          description: "Cette adresse email est déjà inscrite à notre newsletter.",
          variant: "default",
        });
        setIsSubmitting(false);
        return;
      }

      // Insérer le nouvel abonné
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        console.error('Erreur lors de l\'inscription:', error);
        throw new Error(error.message);
      }

      toast({
        title: "Inscription réussie !",
        description: "Merci de vous être inscrit à notre newsletter.",
      });
      
      // Réinitialiser le formulaire
      setEmail('');
    } catch (error) {
      toast({
        title: "Échec de l'inscription",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`flex flex-col sm:flex-row gap-2 ${darkMode ? 'max-w-md mx-auto' : ''}`}>
        <Input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-grow px-4 py-2 rounded-md ${
            darkMode 
              ? 'bg-gray-700 text-white border-gray-600 focus:ring-purple-400' 
              : 'border border-gray-300 focus:ring-purple-500'
          } focus:outline-none focus:ring-2`}
          disabled={isSubmitting}
        />
        <Button 
          type="submit"
          className={darkMode ? "bg-purple-500 hover:bg-purple-600" : "bg-purple-600 hover:bg-purple-700"}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Inscription...' : 'S\'abonner'}
        </Button>
      </div>
    </form>
  );
};

export default NewsletterSignup;
