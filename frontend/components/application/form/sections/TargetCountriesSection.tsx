// components/Application/forms/sections/TargetCountriesSection.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe } from "lucide-react";

function TargetCountriesSection() {
  const { countries } = useContext(ApplicationContext);

  return (
    <div className="bg-orange-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
        <Globe className="h-5 w-5" />
        Target Study Destinations
      </h3>
      <Label className="text-sm text-gray-600 mb-3 block">
        Select all countries you're interested in studying (multiple selection allowed) *
      </Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {countries.map((country) => (
          <div key={country.id} className="flex items-center space-x-2">
            <Checkbox id={`country-${country.id}`} name="targetCountries" value={country.id} />
            <Label htmlFor={`country-${country.id}`} className="text-sm cursor-pointer">
              {country.flag} {country.name}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TargetCountriesSection;
