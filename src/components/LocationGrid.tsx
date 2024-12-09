import LocationCard from "./LocationCard";

const locations = [
  {
    id: 1,
    title: "Monteverde Cloud Forest",
    description: "Relax in a hammock surrounded by misty cloud forest views",
    price: 25,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    id: 2,
    title: "Manuel Antonio Overlook",
    description: "Ocean views and tropical breeze in this clifftop location",
    price: 30,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 3,
    title: "Arenal Volcano Vista",
    description: "Stunning volcano views in a peaceful garden setting",
    price: 35,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
];

const LocationGrid = () => {
  const handleBook = () => {
    // To be implemented
    console.log("Booking initiated");
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          title={location.title}
          description={location.description}
          price={location.price}
          image={location.image}
          onBook={handleBook}
        />
      ))}
    </div>
  );
};

export default LocationGrid;