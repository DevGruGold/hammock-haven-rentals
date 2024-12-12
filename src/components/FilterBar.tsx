import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterBar = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-lg bg-cloud-light p-4 shadow-sm md:flex-row md:items-center">
      <div className="flex-1">
        <Input 
          placeholder="Buscar ubicaciones... | Search locations..." 
          className="border-forest-light/20 text-forest-dark placeholder:text-forest-dark/60" 
        />
      </div>
      <div className="w-full md:w-48">
        <Select>
          <SelectTrigger className="border-forest-light/20 text-forest-dark">
            <SelectValue placeholder="Rango de Precio | Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low" className="text-forest-dark">Menos de $25/hr | Under $25/hr</SelectItem>
            <SelectItem value="mid" className="text-forest-dark">$25-$35/hr | $25-$35/hr</SelectItem>
            <SelectItem value="high" className="text-forest-dark">Más de $35/hr | Over $35/hr</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;