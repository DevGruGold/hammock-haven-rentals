import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  onBook: () => void;
}

const LocationCard = ({ title, description, price, image, onBook }: LocationCardProps) => {
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
        <Button onClick={onBook} className="w-full bg-forest hover:bg-leaf">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;