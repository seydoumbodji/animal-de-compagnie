
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Animal = {
  id: string;
  name: string;
  species: string;
  breed: string | null;
  age_value: number;
  age_unit: string;
  gender: string;
  city: string;
  shelter_name: string;
  shelter_email: string;
  shelter_phone: string;
  description: string;
  photos: { storage_path: string }[];
};

const fetchAnimals = async (): Promise<Animal[]> => {
  console.log("Fetching animals from database...");
  // Ajout d'un filtre pour exclure les animaux ajoutés dans les dernières 24 heures
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
  
  const { data: animals, error: animalsError } = await supabase
    .from('animals')
    .select(`
      *,
      photos:animal_photos(storage_path)
    `)
    .lt('created_at', twentyFourHoursAgo.toISOString());

  if (animalsError) throw animalsError;
  
  // Ensure data conforms to the Animal type
  const typedAnimals = animals?.map(animal => ({
    id: animal.id,
    name: animal.name,
    species: animal.species,
    breed: animal.breed,
    age_value: animal.age_value,
    age_unit: animal.age_unit,
    gender: animal.gender,
    city: animal.city,
    shelter_name: animal.shelter_name,
    shelter_email: animal.email_refuge || '', 
    shelter_phone: animal.numero_telephone_refuge || '',
    description: animal.description,
    photos: animal.photos || []
  })) as Animal[];
  
  return typedAnimals || [];
};

export const useAnimals = () => {
  return useQuery({
    queryKey: ['animals'],
    queryFn: fetchAnimals,
    refetchInterval: 24 * 60 * 60 * 1000, // Refetch every 24 hours (24h * 60min * 60sec * 1000ms)
    staleTime: 24 * 60 * 60 * 1000, // Consider data fresh for 24 hours
    cacheTime: 24 * 60 * 60 * 1000, // Keep data in cache for 24 hours
  });
};
