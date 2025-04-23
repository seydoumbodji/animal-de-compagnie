
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ImageUploader } from './ImageUploader';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  species: z.string().min(2, 'Veuillez spécifier l\'espèce'),
  breed: z.string().min(2, 'Veuillez spécifier la race'),
  age_value: z.number().positive('L\'âge doit être positif'),
  age_unit: z.enum(['months', 'years']),
  gender: z.enum(['male', 'female']),
  city: z.string().min(2, 'Veuillez spécifier la ville'),
  shelter_name: z.string().min(2, 'Veuillez spécifier le nom du refuge'),
  shelter_email: z.string().email('Veuillez fournir une adresse email valide'),
  shelter_phone: z.string().min(10, 'Veuillez fournir un numéro de téléphone valide'),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
});

const AnimalSubmissionForm = () => {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age_unit: 'years',
      gender: 'male',
      breed: '',
      shelter_email: '',
      shelter_phone: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (photos.length < 3) {
      toast({
        title: "Erreur",
        description: "Veuillez télécharger au moins 3 photos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Prepare animal data with mapped field names for database columns
      const animalData = {
        name: values.name,
        species: values.species,
        breed: values.breed,
        age_value: values.age_value,
        age_unit: values.age_unit,
        gender: values.gender,
        city: values.city,
        shelter_name: values.shelter_name,
        email_refuge: values.shelter_email,  // Map to the correct database column
        numero_telephone_refuge: values.shelter_phone, // Map to the correct database column
        description: values.description,
      };

      const { data: animal, error: animalError } = await supabase
        .from('animals')
        .insert(animalData)
        .select()
        .single();

      if (animalError) throw animalError;

      // Upload photos
      for (let i = 0; i < photos.length; i++) {
        const file = photos[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `${animal.id}/${i}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('animal_photos')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Create photo record
        const { error: photoError } = await supabase
          .from('animal_photos')
          .insert([{
            animal_id: animal.id,
            storage_path: fileName,
            position: i,
          }]);

        if (photoError) throw photoError;
      }

      toast({
        title: "Succès",
        description: "L'animal a été ajouté avec succès",
      });

      form.reset();
      setPhotos([]);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la soumission",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de l'animal</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Luna" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="species"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Espèce</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Chat" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Race</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Siamois" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="age_value"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Âge</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    min="0"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age_unit"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Unité</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="years" id="years" />
                      <label htmlFor="years">Années</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="months" id="months" />
                      <label htmlFor="months">Mois</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sexe</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <label htmlFor="male">Mâle</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <label htmlFor="female">Femelle</label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ville</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Paris" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shelter_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du refuge</FormLabel>
              <FormControl>
                <Input placeholder="Ex: SPA Paris" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shelter_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email du refuge</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input className="pl-10" placeholder="Ex: contact@spa-paris.fr" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shelter_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone du refuge</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input className="pl-10" placeholder="Ex: 0123456789" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Décrivez la personnalité et l'histoire de l'animal..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageUploader
          value={photos}
          onChange={setPhotos}
          maxFiles={5}
          minFiles={3}
        />

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Soumission en cours...' : 'Soumettre l\'animal'}
        </Button>
      </form>
    </Form>
  );
};

export default AnimalSubmissionForm;

