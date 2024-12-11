import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

  const handleBooking = () => {
    const phoneNumber = "50661500559";
    const message = encodeURIComponent(
      `Hello! I would like to book a hammock at ${title} for $${currentPrice}/hour during ${priceRanges[currentTimeSlot].description}. Please provide available time slots.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp to complete your booking!");
    onBook();
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-forest">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <p className="text-lg font-bold text-ocean">${currentPrice}/hour</p>
          <p className="text-sm text-gray-500">{priceRanges[currentTimeSlot].description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleBooking} className="w-full bg-forest hover:bg-leaf">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;