
import { useAnimals } from "@/hooks/useAnimals";
import PetCard from "@/components/PetCard";
import { Skeleton } from "@/components/ui/skeleton";

const AnimalCollection = () => {
  const { data: animals, isLoading, error } = useAnimals();

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {animals.map((animal) => (
        <PetCard
          key={animal.id}
          id={Number(animal.id)}
          name={animal.name}
          image={animal.photos[0]?.storage_path || 'https://images.unsplash.com/photo-1585574234148-1031d167c052'}
          age={`${animal.age_value} ${animal.age_unit}`}
          breed={animal.breed || 'Non spécifié'}
          location={animal.city}
          personalities={["Adorable"]}
          type={animal.species as "dog" | "cat" | "rabbit"}
        />
      ))}
    </div>
  );
};

export default AnimalCollection;
