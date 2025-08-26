// components/Application/forms/sections/ExperienceSection.jsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trophy } from "lucide-react";

function ExperienceSection() {
  return (
    <div className="bg-red-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5" />
        Experience & Background
      </h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="workExperience">Work Experience</Label>
          <Textarea
            id="workExperience"
            name="workExperience"
            placeholder="Describe your work experience, internships, part-time jobs, etc..."
            rows={3}
          />
        </div>
        <div>
          <Label htmlFor="researchExperience">Research Experience</Label>
          <Textarea
            id="researchExperience"
            name="researchExperience"
            placeholder="Any research projects, publications, or academic research experience..."
            rows={3}
          />
        </div>
        <div>
          <Label htmlFor="extracurricular">Extracurricular Activities</Label>
          <Textarea
            id="extracurricular"
            name="extracurricular"
            placeholder="Clubs, sports, volunteering, leadership roles, hobbies..."
            rows={3}
          />
        </div>
        <div>
          <Label htmlFor="careerGoals">Career Goals & Motivation</Label>
          <Textarea
            id="careerGoals"
            name="careerGoals"
            placeholder="What are your career aspirations? Why do you want to study abroad?"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;