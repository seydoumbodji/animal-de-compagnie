
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const timeSlots = [
  "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
];

interface MeetGreetSchedulerProps {
  petName: string;
  petImage: string;
}

const MeetGreetScheduler = ({ petName, petImage }: MeetGreetSchedulerProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  
  const handleSchedule = () => {
    if (!date) {
      toast.error("Veuillez sélectionner une date");
      return;
    }
    
    if (!timeSlot) {
      toast.error("Veuillez sélectionner un horaire");
      return;
    }
    
    // In a real app, this would send the request to the backend
    toast.success(`Rendez-vous avec ${petName} programmé pour le ${date?.toLocaleDateString()} à ${timeSlot}.`);
  };
  
  // Get tomorrow as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Get a date 30 days from now as the maximum selectable date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  
  return (
    <Card className="p-6 shadow-lg border-purple-100">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="rounded-lg overflow-hidden mb-3">
            <img 
              src={petImage} 
              alt={petName} 
              className="w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Rencontrer {petName}</h3>
          <p className="text-gray-600 mb-4">
            Planifiez une rencontre virtuelle avec {petName} pour faire connaissance et poser vos questions.
          </p>
          
          <div className="bg-purple-50 rounded-lg p-3 text-sm text-purple-700">
            <p className="font-medium">Comment ça marche :</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Choisissez une date et un créneau</li>
              <li>Confirmez votre rendez-vous</li>
              <li>Recevez un email avec un lien pour rejoindre la rencontre virtuelle</li>
              <li>Connectez-vous à l'heure et rencontrez {petName} !</li>
            </ol>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-lg font-medium mb-4">Sélectionnez une date et un horaire</h3>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => 
                  date < tomorrow || 
                  date > maxDate || 
                  date.getDay() === 0 || // Sundays
                  date.getDay() === 6 // Saturdays
                }
              />
            </div>
            
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Heure
                  </label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un horaire" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(time => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleSchedule}
                  className="w-full bg-purple-500 hover:bg-purple-600"
                  disabled={!date || !timeSlot}
                >
                  Programmer la rencontre
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  Vous pouvez annuler jusqu'à 24h avant le rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MeetGreetScheduler;
