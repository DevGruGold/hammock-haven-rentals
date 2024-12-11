import LocationCard from "./LocationCard";

const locations = [
  {
    id: 1,
    title: "Monteverde Cloud Forest | Bosque Nuboso",
    description: "Relax in a misty cloud forest paradise. Best during early morning for mystical fog views. | Relájate en un paraíso del bosque nuboso. Mejor durante la mañana para vistas místicas.",
    basePrice: 25,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    priceRanges: {
      morning: { multiplier: 1.2, description: "Mystical morning fog | Niebla mística matutina (6AM-10AM)" },
      day: { multiplier: 1, description: "Regular daytime | Horario regular (10AM-4PM)" },
      sunset: { multiplier: 0.8, description: "Limited visibility | Visibilidad limitada (4PM-7PM)" },
      night: { multiplier: 0.5, description: "Night experience | Experiencia nocturna (7PM-6AM)" }
    }
  },
  {
    id: 2,
    title: "Manuel Antonio Overlook | Mirador",
    description: "Ocean views and tropical breeze in this clifftop location. | Vistas al océano y brisa tropical en esta ubicación sobre el acantilado.",
    basePrice: 30,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    priceRanges: {
      morning: { multiplier: 1.2, description: "Sunrise views | Vistas del amanecer (5AM-8AM)" },
      day: { multiplier: 1, description: "Regular daytime | Horario regular (8AM-4PM)" },
      sunset: { multiplier: 2, description: "Premium sunset | Atardecer premium (4PM-7PM)" },
      night: { multiplier: 0.7, description: "Starlit evening | Noche estrellada (7PM-5AM)" }
    }
  },
  {
    id: 3,
    title: "Arenal Volcano Vista | Vista al Volcán",
    description: "Stunning volcano views in a peaceful garden setting. | Impresionantes vistas al volcán en un entorno de jardín pacífico.",
    basePrice: 35,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    priceRanges: {
      morning: { multiplier: 1.5, description: "Clear morning views | Vistas claras matutinas (5AM-9AM)" },
      day: { multiplier: 1, description: "Regular daytime | Horario regular (9AM-3PM)" },
      sunset: { multiplier: 1.2, description: "Evening glow | Resplandor vespertino (3PM-6PM)" },
      night: { multiplier: 0.6, description: "Night experience | Experiencia nocturna (6PM-5AM)" }
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