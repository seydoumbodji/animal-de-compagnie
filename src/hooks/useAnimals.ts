
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
  description: string;
  photos: { storage_path: string }[];
};

const fetchAnimals = async (): Promise<Animal[]> => {
  const { data: animals, error: animalsError } = await supabase
    .from('animals')
    .select(`
      *,
      photos:animal_photos(storage_path)
    `);

  if (animalsError) throw animalsError;
  return animals || [];
};

export const useAnimals = () => {
  return useQuery({
    queryKey: ['animals'],
    queryFn: fetchAnimals,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};
