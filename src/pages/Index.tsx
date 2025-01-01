import FilterBar from "@/components/FilterBar";
import LocationGrid from "@/components/LocationGrid";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cloud-light to-cloud-dark">
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Misty mountains"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 text-forest-dark font-serif">
              Hammock Heaven
            </h1>
            <h2 className="text-4xl font-bold mb-6 text-forest-dark/90 font-serif">
              Paraíso de Hamacas
            </h2>
            <p className="text-xl text-forest-dark/90 mb-2 font-medium">
              Discover peaceful retreats in Costa Rica's most beautiful locations
            </p>
            <p className="text-lg text-forest-dark/80 font-medium">
              Descubre retiros pacíficos en los lugares más hermosos de Costa Rica
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Button 
                variant="default" 
                className="bg-forest-dark text-cloud-light hover:bg-forest-dark/80"
                onClick={() => window.open('https://crpay.vercel.app/', '_blank')}
              >
                Pagar / Pay Now
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container py-12">
        <FilterBar />
        <LocationGrid />
      </main>
      
      <footer className="bg-gradient-to-t from-forest-dark to-forest py-8 text-cloud-light">
        <div className="container text-center">
          <p className="mb-2 font-medium">© 2024 Hammock Heaven | Paraíso de Hamacas</p>
          <p className="text-cloud-light/90">Encuentre su paz entre las nubes | Find your peace among the clouds</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;