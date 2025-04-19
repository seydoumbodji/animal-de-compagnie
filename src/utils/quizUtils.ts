
interface PetScore {
  type: "dog" | "cat" | "rabbit";
  score: number;
  reasons: string[];
}

export const calculatePetMatch = (answers: {
  petType: string;
  activityLevel: string;
  spaceAvailable: string;
  timeAvailable: string;
  children: string;
}): PetScore[] => {
  let scores: PetScore[] = [
    { type: "dog", score: 0, reasons: [] },
    { type: "cat", score: 0, reasons: [] },
    { type: "rabbit", score: 0, reasons: [] }
  ];

  // Si l'utilisateur a une préférence directe
  if (answers.petType) {
    scores = scores.map(pet => {
      if (pet.type === answers.petType) {
        pet.score += 5;
        pet.reasons.push("Votre choix préféré");
      }
      return pet;
    });
  }

  // Évaluation du niveau d'activité
  switch (answers.activityLevel) {
    case "high":
      scores.find(p => p.type === "dog")!.score += 4;
      scores.find(p => p.type === "dog")!.reasons.push("Idéal pour un mode de vie actif");
      scores.find(p => p.type === "cat")!.score += 2;
      scores.find(p => p.type === "rabbit")!.score += 1;
      break;
    case "medium":
      scores.find(p => p.type === "dog")!.score += 3;
      scores.find(p => p.type === "cat")!.score += 3;
      scores.find(p => p.type === "rabbit")!.score += 3;
      scores.forEach(pet => pet.reasons.push("Compatible avec votre niveau d'activité modéré"));
      break;
    case "low":
      scores.find(p => p.type === "cat")!.score += 4;
      scores.find(p => p.type === "cat")!.reasons.push("Parfait pour un style de vie tranquille");
      scores.find(p => p.type === "rabbit")!.score += 4;
      scores.find(p => p.type === "rabbit")!.reasons.push("Adapté à un rythme de vie calme");
      scores.find(p => p.type === "dog")!.score += 1;
      break;
  }

  // Évaluation de l'espace disponible
  switch (answers.spaceAvailable) {
    case "house-garden":
      scores.find(p => p.type === "dog")!.score += 4;
      scores.find(p => p.type === "dog")!.reasons.push("Espace extérieur idéal pour un chien");
      scores.find(p => p.type === "cat")!.score += 3;
      scores.find(p => p.type === "rabbit")!.score += 3;
      break;
    case "apartment-balcony":
      scores.find(p => p.type === "cat")!.score += 4;
      scores.find(p => p.type === "cat")!.reasons.push("Parfait pour un chat en appartement");
      scores.find(p => p.type === "rabbit")!.score += 3;
      scores.find(p => p.type === "dog")!.score += 2;
      break;
    case "apartment":
      scores.find(p => p.type === "cat")!.score += 4;
      scores.find(p => p.type === "cat")!.reasons.push("Idéal pour la vie en appartement");
      scores.find(p => p.type === "rabbit")!.score += 3;
      scores.find(p => p.type === "dog")!.score += 1;
      break;
  }

  // Évaluation du temps disponible
  switch (answers.timeAvailable) {
    case "abundant":
      scores.find(p => p.type === "dog")!.score += 4;
      scores.find(p => p.type === "dog")!.reasons.push("Temps suffisant pour les besoins d'un chien");
      scores.find(p => p.type === "rabbit")!.score += 3;
      scores.find(p => p.type === "cat")!.score += 3;
      break;
    case "moderate":
      scores.find(p => p.type === "cat")!.score += 4;
      scores.find(p => p.type === "rabbit")!.score += 3;
      scores.find(p => p.type === "dog")!.score += 2;
      scores.forEach(pet => pet.reasons.push("Compatible avec votre disponibilité"));
      break;
    case "minimal":
      scores.find(p => p.type === "cat")!.score += 4;
      scores.find(p => p.type === "cat")!.reasons.push("Autonomie adaptée à votre emploi du temps");
      scores.find(p => p.type === "rabbit")!.score += 2;
      scores.find(p => p.type === "dog")!.score += 1;
      break;
  }

  // Évaluation présence d'enfants
  switch (answers.children) {
    case "young":
      scores.find(p => p.type === "cat")!.score += 3;
      scores.find(p => p.type === "cat")!.reasons.push("Généralement calme avec les jeunes enfants");
      scores.find(p => p.type === "rabbit")!.score += 2;
      scores.find(p => p.type === "dog")!.score += 2;
      break;
    case "older":
      scores.forEach(pet => {
        pet.score += 3;
        pet.reasons.push("Bon compagnon pour les enfants plus âgés");
      });
      break;
    case "no":
      scores.forEach(pet => {
        pet.score += 3;
        pet.reasons.push("Parfait pour un foyer sans enfants");
      });
      break;
  }

  return scores.sort((a, b) => b.score - a.score);
};
