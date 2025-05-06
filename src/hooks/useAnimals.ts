
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

// Définition du type Animal
export interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string | null;
  age_value: number;
  age_unit: string;
  gender: string;
  description: string;
  shelter_name: string;
  city: string;
  email_refuge?: string | null;
  numero_telephone_refuge?: string | null;
  created_at: string;
  photos?: {
    id: string;
    animal_id: string;
    storage_path: string;
    position: number;
    created_at: string;
  }[];
  [key: string]: any;
}

// Fetch all animals from Supabase
const fetchAnimals = async (): Promise<Animal[]> => {
  const { data, error } = await supabase
    .from("animals")
    .select(`*, photos:animal_photos(*)`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching animals:", error);
    throw new Error("Failed to fetch animals");
  }

  return data || [];
};

// Filter out animals created in the last 24 hours
const filterRecentAnimals = (animals: Animal[]): Animal[] => {
  // Get the timestamp from 24 hours ago
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
  
  // Filter out animals that were created less than 24 hours ago
  return animals.filter((animal) => {
    if (!animal.created_at) return true;
    
    const createdAt = new Date(animal.created_at);
    return createdAt < twentyFourHoursAgo;
  });
};

/**
 * Custom hook to fetch animals from Supabase
 * Animals added in the last 24 hours are filtered out
 */
export const useAnimals = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
    select: filterRecentAnimals,
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 2, // 2 hours
  });

  return {
    animals: data || [],
    isLoading,
    error,
    refetch,
  };
};

// Fetch a single animal by ID
export const useAnimal = (id: string) => {
  return useQuery({
    queryKey: ["animal", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("animals")
        .select(`*, photos:animal_photos(*)`)
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching animal:", error);
        throw new Error("Failed to fetch animal");
      }

      return data as Animal;
    },
    enabled: !!id,
  });
};
