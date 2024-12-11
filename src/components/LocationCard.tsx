import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface LocationCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  onBook: () => void;
}

const LocationCard = ({ title, description, price, image, onBook }: LocationCardProps) => {
  const handleBooking = () => {
    const phoneNumber = "50661500559";
    const message = encodeURIComponent(
      `Hello! I would like to book a hammock at ${title} for $${price}/hour. Please provide available time slots.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Show success toast
    toast.success("Opening WhatsApp to complete your booking!");
    
    // Call the original onBook handler
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
        <p className="mt-2 text-lg font-bold text-ocean">${price}/hour</p>
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