import { useState } from "react";
import { useAnimals } from "@/hooks/useAnimals";
import PetCard from "@/components/PetCard";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { Dog, Cat, Rabbit } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const AnimalCollection = () => {
  const { data: animals, isLoading, error } = useAnimals();
  const [selectedSpecies, setSelectedSpecies] = useState<string | undefined>();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[400px] w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Une erreur est survenue lors du chargement des animaux.</p>
      </div>
    );
  }

  if (!animals?.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Aucun animal à adopter pour le moment.</p>
      </div>
    );
  }

  const getAnimalType = (species: string): "dog" | "cat" | "rabbit" => {
    const lowerSpecies = species.toLowerCase();
    if (lowerSpecies.includes("chien")) return "dog";
    if (lowerSpecies.includes("chat")) return "cat";
    if (lowerSpecies.includes("lapin")) return "rabbit";
    return "dog";
  };

  const getPhotoUrl = (storagePath: string) => {
    const { data } = supabase.storage.from('animal_photos').getPublicUrl(storagePath);
    return data.publicUrl;
  };

  const filteredAnimals = selectedSpecies 
    ? animals.filter(animal => animal.species.toLowerCase().includes(selectedSpecies.toLowerCase()))
    : animals;

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-8">
        <ToggleGroup 
          type="single" 
          value={selectedSpecies}
          onValueChange={setSelectedSpecies}
          className="bg-white rounded-lg shadow-sm p-1 border"
        >
          <ToggleGroupItem 
            value="chien" 
            aria-label="Voir les chiens"
            className="flex items-center gap-2 px-4 py-2 data-[state=on]:bg-purple-100"
          >
            <Dog className="h-5 w-5" />
            <span>Chiens</span>
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="chat" 
            aria-label="Voir les chats"
            className="flex items-center gap-2 px-4 py-2 data-[state=on]:bg-purple-100"
          >
            <Cat className="h-5 w-5" />
            <span>Chats</span>
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="lapin" 
            aria-label="Voir les lapins"
            className="flex items-center gap-2 px-4 py-2 data-[state=on]:bg-purple-100"
          >
            <Rabbit className="h-5 w-5" />
            <span>Lapins</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimals.map((animal) => (
          <PetCard
            key={animal.id}
            id={Number(animal.id)}
            name={animal.name}
            image={animal.photos?.[0]?.storage_path 
              ? getPhotoUrl(animal.photos[0].storage_path)
              : 'https://images.unsplash.com/photo-1585574234148-1031d167c052'}
            age={`${animal.age_value} ${animal.age_unit}`}
            breed={animal.breed || 'Non spécifié'}
            location={animal.city}
            personalities={["Adorable"]}
            type={getAnimalType(animal.species)}
            lifespan="10-15 ans"
            shelterName={animal.shelter_name}
            shelter_email={animal.shelter_email}
            shelter_phone={animal.shelter_phone}
            description={animal.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalCollection;
