import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface PriceRange {
  multiplier: number;
  description: string;
}

interface PriceRanges {
  morning: PriceRange;
  day: PriceRange;
  sunset: PriceRange;
  night: PriceRange;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface LocationCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  onBook: () => void;
  priceRanges: PriceRanges;
}

const LocationCard = ({ title, description, price, image, onBook, priceRanges }: LocationCardProps) => {
  const [currentTimeSlot, setCurrentTimeSlot] = useState<keyof PriceRanges>("day");
  const [currentPrice, setCurrentPrice] = useState(price);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns: AddOn[] = [
    {
      id: "headphones",
      name: "Audífonos con Cancelación de Ruido | Noise-Canceling Headphones",
      price: 5,
      description: "Audífonos premium para relajación máxima | Premium headphones for ultimate relaxation"
    },
    {
      id: "herbal",
      name: "Paquete de Remedios Herbales | Herbal Remedies Package",
      price: 8,
      description: "Té orgánico local y aromaterapia | Local organic tea and aromatherapy"
    }
  ];

  useEffect(() => {
    const updateTimeSlot = () => {
      const hour = new Date().getHours();
      let timeSlot: keyof PriceRanges = "day";
      
      if (hour >= 5 && hour < 9) timeSlot = "morning";
      else if (hour >= 9 && hour < 16) timeSlot = "day";
      else if (hour >= 16 && hour < 19) timeSlot = "sunset";
      else timeSlot = "night";
      
      setCurrentTimeSlot(timeSlot);
      setCurrentPrice(Math.round(price * priceRanges[timeSlot].multiplier));
    };

    updateTimeSlot();
    const interval = setInterval(updateTimeSlot, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [price, priceRanges]);

  const getTotalPrice = () => {
    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    return currentPrice + addOnsTotal;
  };

  const handleBooking = () => {
    const phoneNumber = "50661500559";
    const selectedAddOnsText = selectedAddOns.length > 0
      ? "\nExtras | Add-ons: " + selectedAddOns.map(id => 
          addOns.find(a => a.id === id)?.name
        ).join(", ")
      : "";
    
    const message = encodeURIComponent(
      `¡Hola! Me gustaría reservar una hamaca en ${title} por $${getTotalPrice()}/hora durante ${priceRanges[currentTimeSlot].description}.${selectedAddOnsText}\nPor favor, proporcione horarios disponibles. | Hello! I would like to book a hammock at ${title} for $${getTotalPrice()}/hour during ${priceRanges[currentTimeSlot].description}.${selectedAddOnsText}\nPlease provide available time slots.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("¡Abriendo WhatsApp para completar su reserva! | Opening WhatsApp to complete your booking!");
    onBook();
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-cloud-light">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-forest-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-forest-dark/80">{description}</p>
        <div className="mt-4">
          <p className="text-lg font-bold text-ocean-dark">${currentPrice}/hora | /hour</p>
          <p className="text-sm text-forest-dark/70">{priceRanges[currentTimeSlot].description}</p>
        </div>
        <div className="mt-4 space-y-3">
          <p className="font-semibold text-sm text-forest-dark">Mejore su experiencia | Enhance your experience:</p>
          {addOns.map((addOn) => (
            <div key={addOn.id} className="flex items-start space-x-2">
              <Checkbox
                id={addOn.id}
                checked={selectedAddOns.includes(addOn.id)}
                onCheckedChange={(checked) => {
                  setSelectedAddOns(prev =>
                    checked
                      ? [...prev, addOn.id]
                      : prev.filter(id => id !== addOn.id)
                  );
                }}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor={addOn.id}
                  className="text-sm font-medium leading-none text-forest-dark peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {addOn.name} (+${addOn.price})
                </label>
                <p className="text-xs text-forest-dark/70">
                  {addOn.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {selectedAddOns.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-forest-dark">
              Total: ${getTotalPrice()}/hora | /hour
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleBooking} className="w-full bg-forest hover:bg-forest-dark text-cloud-light font-medium">
          Reservar Ahora | Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;