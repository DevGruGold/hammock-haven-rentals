import LocationCard from "./LocationCard";

const locations = [
  {
    id: 1,
    title: "Monteverde Cloud Forest",
    description: "Relax in a misty cloud forest paradise. Best during early morning for mystical fog views, or opt for a peaceful nighttime experience at a reduced rate.",
    basePrice: 25,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    priceRanges: {
      morning: { multiplier: 1.2, description: "Mystical morning fog (6AM-10AM)" },
      day: { multiplier: 1, description: "Regular daytime (10AM-4PM)" },
      sunset: { multiplier: 0.8, description: "Limited visibility (4PM-7PM)" },
      night: { multiplier: 0.5, description: "Night experience (7PM-6AM)" }
    }
  },
  {
    id: 2,
    title: "Manuel Antonio Overlook",
    description: "Ocean views and tropical breeze in this clifftop location. Premium rates during sunset hours for spectacular views.",
    basePrice: 30,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    priceRanges: {
      morning: { multiplier: 1.2, description: "Sunrise views (5AM-8AM)" },
      day: { multiplier: 1, description: "Regular daytime (8AM-4PM)" },
      sunset: { multiplier: 2, description: "Premium sunset (4PM-7PM)" },
      night: { multiplier: 0.7, description: "Starlit evening (7PM-5AM)" }
    }
  },
  {
    id: 3,
    title: "Arenal Volcano Vista",
    description: "Stunning volcano views in a peaceful garden setting. Best visibility in early morning before clouds gather.",
    basePrice: 35,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    priceRanges: {
      morning: { multiplier: 1.5, description: "Clear morning views (5AM-9AM)" },
      day: { multiplier: 1, description: "Regular daytime (9AM-3PM)" },
      sunset: { multiplier: 1.2, description: "Evening glow (3PM-6PM)" },
      night: { multiplier: 0.6, description: "Night experience (6PM-5AM)" }
    }
  },
];

const LocationGrid = () => {
  const handleBook = () => {
    console.log("Booking initiated");
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          title={location.title}
          description={location.description}
          price={location.basePrice}
          image={location.image}
          onBook={handleBook}
          priceRanges={location.priceRanges}
        />
      ))}
    </div>
  );
};

export default LocationGrid;