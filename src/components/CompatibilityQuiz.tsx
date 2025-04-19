
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dog, Cat, Rabbit } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CompatibilityQuiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    petType: "",
    activityLevel: "",
    spaceAvailable: "",
    timeAvailable: "",
    children: "",
  });
  
  const totalSteps = 5;
  
  const handleInputChange = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };
  
  const handleNext = () => {
    if (step === 1 && !answers.petType) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un type d'animal",
        variant: "destructive"
      });
      return;
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // In a real app, we would calculate results and show matches
      toast({
        title: "Succès",
        description: "Vos résultats sont prêts !"
      });
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <Card className="max-w-lg mx-auto border-purple-100 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Quiz d'Affinité</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Question {step} sur {totalSteps}</span>
          <span className="text-sm font-medium text-purple-600">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" 
               style={{ width: `${(step / totalSteps) * 100}%` }}>
          </div>
        </div>
      </div>
      
      {/* Step 1: Pet Type Preference */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Quel type d'animal vous intéresse ?</h3>
          
          <div className="grid grid-cols-3 gap-3">
            <Button 
              variant={answers.petType === "dog" ? "default" : "outline"}
              className={`flex flex-col items-center h-auto p-4 ${answers.petType === "dog" ? "bg-purple-500" : "border-gray-200"}`}
              onClick={() => handleInputChange("petType", "dog")}
            >
              <Dog size={32} className="mb-2" />
              <span>Chien</span>
            </Button>
            <Button 
              variant={answers.petType === "cat" ? "default" : "outline"}
              className={`flex flex-col items-center h-auto p-4 ${answers.petType === "cat" ? "bg-purple-500" : "border-gray-200"}`}
              onClick={() => handleInputChange("petType", "cat")}
            >
              <Cat size={32} className="mb-2" />
              <span>Chat</span>
            </Button>
            <Button 
              variant={answers.petType === "rabbit" ? "default" : "outline"}
              className={`flex flex-col items-center h-auto p-4 ${answers.petType === "rabbit" ? "bg-purple-500" : "border-gray-200"}`}
              onClick={() => handleInputChange("petType", "rabbit")}
            >
              <Rabbit size={32} className="mb-2" />
              <span>Lapin</span>
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 2: Activity Level */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Quel est votre niveau d'activité quotidien ?</h3>
          
          <RadioGroup value={answers.activityLevel} onValueChange={(value) => handleInputChange("activityLevel", value)}>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="low" id="activity-low" />
              <Label htmlFor="activity-low">Peu actif (promenades courtes)</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="medium" id="activity-medium" />
              <Label htmlFor="activity-medium">Modérément actif (promenades régulières)</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="high" id="activity-high" />
              <Label htmlFor="activity-high">Très actif (course, randonnée, jeux)</Label>
            </div>
          </RadioGroup>
        </div>
      )}
      
      {/* Step 3: Space Available */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">De quel espace disposez-vous ?</h3>
          
          <RadioGroup value={answers.spaceAvailable} onValueChange={(value) => handleInputChange("spaceAvailable", value)}>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="apartment" id="space-apartment" />
              <Label htmlFor="space-apartment">Appartement sans extérieur</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="apartment-balcony" id="space-apartment-balcony" />
              <Label htmlFor="space-apartment-balcony">Appartement avec balcon/terrasse</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="house-garden" id="space-house-garden" />
              <Label htmlFor="space-house-garden">Maison avec jardin</Label>
            </div>
          </RadioGroup>
        </div>
      )}
      
      {/* Step 4: Time Available */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Combien de temps pouvez-vous consacrer à votre animal chaque jour ?</h3>
          
          <RadioGroup value={answers.timeAvailable} onValueChange={(value) => handleInputChange("timeAvailable", value)}>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="minimal" id="time-minimal" />
              <Label htmlFor="time-minimal">Minimal (&lt; 1 heure)</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="moderate" id="time-moderate" />
              <Label htmlFor="time-moderate">Modéré (1-3 heures)</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="abundant" id="time-abundant" />
              <Label htmlFor="time-abundant">Abondant (3+ heures)</Label>
            </div>
          </RadioGroup>
        </div>
      )}
      
      {/* Step 5: Children */}
      {step === 5 && (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Y a-t-il des enfants dans votre foyer ?</h3>
          
          <RadioGroup value={answers.children} onValueChange={(value) => handleInputChange("children", value)}>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="no" id="children-no" />
              <Label htmlFor="children-no">Pas d'enfants</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="older" id="children-older" />
              <Label htmlFor="children-older">Enfants plus âgés (7+ ans)</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value="young" id="children-young" />
              <Label htmlFor="children-young">Jeunes enfants (&lt; 7 ans)</Label>
            </div>
          </RadioGroup>
        </div>
      )}
      
      <div className="flex justify-between mt-8">
        {step > 1 ? (
          <Button variant="outline" onClick={handleBack}>
            Retour
          </Button>
        ) : (
          <div></div>
        )}
        
        <Button className="bg-purple-500 hover:bg-purple-600" onClick={handleNext}>
          {step === totalSteps ? "Voir les résultats" : "Suivant"}
        </Button>
      </div>
    </Card>
  );
};

export default CompatibilityQuiz;
