// components/Application/forms/sections/StudyLevelSection.jsx
import { Label } from "@/components/ui/label";
import { Award } from "lucide-react";

function StudyLevelSection() {
  return (
    <div className="bg-teal-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
        <Award className="h-5 w-5" />
        Study Level Preference
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="studyLevel">Preferred Study Level *</Label>
          <select
            id="studyLevel"
            name="studyLevel"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select study level</option>
            <option value="Bachelor's">Bachelor's Degree</option>
            <option value="Master's">Master's Degree</option>
            <option value="PhD">PhD/Doctorate</option>
            <option value="Certificate">Certificate Program</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>
        <div>
          <Label htmlFor="startDate">Preferred Start Date *</Label>
          <select
            id="startDate"
            name="startDate"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select start date</option>
            <option value="Fall 2024">Fall 2024</option>
            <option value="Spring 2025">Spring 2025</option>
            <option value="Fall 2025">Fall 2025</option>
            <option value="Spring 2026">Spring 2026</option>
            <option value="Fall 2026">Fall 2026</option>
          </select>
        </div>
        <div>
          <Label htmlFor="budget">Budget Range (USD per year)</Label>
          <select
            id="budget"
            name="budget"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select budget range</option>
            <option value="Under $20,000">Under $20,000</option>
            <option value="$20,000 - $40,000">$20,000 - $40,000</option>
            <option value="$40,000 - $60,000">$40,000 - $60,000</option>
            <option value="$60,000 - $80,000">$60,000 - $80,000</option>
            <option value="Above $80,000">Above $80,000</option>
            <option value="No specific limit">No specific limit</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default StudyLevelSection;