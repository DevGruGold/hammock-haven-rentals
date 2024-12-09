import FilterBar from "@/components/FilterBar";
import LocationGrid from "@/components/LocationGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-sand/20">
      <header className="bg-forest py-12 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">Hammock Paradise</h1>
          <p className="mt-4 text-lg text-sand">
            Discover peaceful retreats in Costa Rica's most beautiful locations
          </p>
        </div>
      </header>
      
      <main className="container py-8">
        <FilterBar />
        <LocationGrid />
      </main>
      
      <footer className="mt-16 bg-forest py-8 text-white">
        <div className="container text-center">
          <p>© 2024 Hammock Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;