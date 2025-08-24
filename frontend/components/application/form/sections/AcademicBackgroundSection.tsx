// components/Application/forms/sections/AcademicBackgroundSection.jsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap } from "lucide-react";

function AcademicBackgroundSection() {
  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5" />
        Academic Background
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="currentEducation">Current Education Level *</Label>
          <select
            id="currentEducation"
            name="currentEducation"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select your current level</option>
            <option value="High School">High School</option>
            <option value="High School Graduate">High School Graduate</option>
            <option value="Bachelor's Student">Bachelor's Student</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <Label htmlFor="gpa">GPA/Grade Average *</Label>
          <Input id="gpa" name="gpa" required placeholder="e.g., 3.5/4.0 or 85%" />
        </div>
        <div>
          <Label htmlFor="fieldOfStudy">Current/Previous Field of Study *</Label>
          <Input
            id="fieldOfStudy"
            name="fieldOfStudy"
            required
            placeholder="e.g., Computer Science, Business"
          />
        </div>
        <div>
          <Label htmlFor="institution">Current/Previous Institution</Label>
          <Input id="institution" name="institution" placeholder="Name of your school/university" />
        </div>
      </div>
      <div className="mt-4">
        <Label htmlFor="academicAchievements">Academic Achievements & Awards</Label>
        <Textarea
          id="academicAchievements"
          name="academicAchievements"
          placeholder="List any scholarships, honors, awards, or notable achievements..."
          rows={3}
        />
      </div>
    </div>
  );
}

export default AcademicBackgroundSection;
