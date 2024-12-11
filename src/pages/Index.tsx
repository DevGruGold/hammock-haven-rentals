import FilterBar from "@/components/FilterBar";
import LocationGrid from "@/components/LocationGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D3E4FD] to-[#E5DEFF]">
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Misty mountains"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-forest to-ocean bg-clip-text text-transparent font-serif">
              Hammock Heaven
            </h1>
            <h2 className="text-4xl font-bold mb-6 text-forest/80 font-serif">
              Paraíso de Hamacas
            </h2>
            <p className="text-xl text-leaf/90 mb-2">
              Discover peaceful retreats in Costa Rica's most beautiful locations
            </p>
            <p className="text-lg text-leaf/80">
              Descubre retiros pacíficos en los lugares más hermosos de Costa Rica
            </p>
          </div>
        </div>
      </header>
      
      <main className="container py-12">
        <FilterBar />
        <LocationGrid />
      </main>
      
      <footer className="bg-gradient-to-t from-forest/90 to-forest py-8 text-white">
        <div className="container text-center">
          <p className="mb-2">© 2024 Hammock Heaven | Paraíso de Hamacas</p>
          <p className="text-sand/80">Encuentre su paz entre las nubes | Find your peace among the clouds</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;