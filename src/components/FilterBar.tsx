import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterBar = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm md:flex-row md:items-center">
      <div className="flex-1">
        <Input placeholder="Buscar ubicaciones... | Search locations..." className="border-gray-200" />
      </div>
      <div className="w-full md:w-48">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Rango de Precio | Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Menos de $25/hr | Under $25/hr</SelectItem>
            <SelectItem value="mid">$25-$35/hr | $25-$35/hr</SelectItem>
            <SelectItem value="high">Más de $35/hr | Over $35/hr</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;