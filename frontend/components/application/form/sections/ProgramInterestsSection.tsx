// components/Application/forms/sections/ProgramInterestsSection.jsx
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen } from "lucide-react";

function ProgramInterestsSection() {
  const programs = [
    "Computer Science & IT",
    "Business & Management",
    "Engineering",
    "Medicine & Healthcare",
    "Law",
    "Psychology",
    "Economics & Finance",
    "Data Science & Analytics",
    "Arts & Design",
    "Natural Sciences",
    "Social Sciences",
    "Education",
    "Architecture",
    "Environmental Science",
    "International Relations",
    "Marketing",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Statistics",
    "Philosophy",
    "History",
    "Literature",
    "Linguistics",
    "Journalism & Media",
    "Public Health",
    "Nursing",
    "Pharmacy",
    "Dentistry",
    "Veterinary Medicine",
  ];

  return (
    <div className="bg-indigo-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5" />
        Program Interests
      </h3>
      <Label className="text-sm text-gray-600 mb-3 block">
        Select all fields/programs you're interested in (multiple selection allowed) *
      </Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {programs.map((program) => (
          <div key={program} className="flex items-center space-x-2">
            <Checkbox id={`program-${program}`} name="targetPrograms" value={program} />
            <Label htmlFor={`program-${program}`} className="text-sm cursor-pointer">
              {program}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramInterestsSection;