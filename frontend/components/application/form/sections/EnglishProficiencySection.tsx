// components/Application/forms/sections/EnglishProficiencySection.jsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Globe } from "lucide-react";

function EnglishProficiencySection() {
  return (
    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
        <Globe className="h-5 w-5" />
        English Proficiency
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="englishLevel">English Proficiency Level *</Label>
          <select
            id="englishLevel"
            name="englishLevel"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select your level</option>
            <option value="Native Speaker">Native Speaker</option>
            <option value="Advanced (C1-C2)">Advanced (C1-C2)</option>
            <option value="Upper Intermediate (B2)">Upper Intermediate (B2)</option>
            <option value="Intermediate (B1)">Intermediate (B1)</option>
            <option value="Pre-Intermediate (A2)">Pre-Intermediate (A2)</option>
            <option value="Beginner (A1)">Beginner (A1)</option>
          </select>
        </div>
        <div>
          <Label htmlFor="englishTests">English Test Scores</Label>
          <Input
            id="englishTests"
            name="englishTests"
            placeholder="e.g., IELTS: 7.5, TOEFL: 100, Duolingo: 120"
          />
        </div>
      </div>
    </div>
  );
}

export default EnglishProficiencySection;
