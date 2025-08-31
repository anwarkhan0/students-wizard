
// components/Application/recommendations/RecommendationsList.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Sparkles } from "lucide-react";
import RecommendationCard from './RecommendationCard';

function RecommendationsList() {
  const { setUserData, setCurrentStep, countries } = useContext(ApplicationContext);

  const recommendations = [
    {
      id: 1,
      title: "Computer Science - Harvard University",
      country: "🇺🇸 United States",
      department: "School of Engineering and Applied Sciences",
      match: "95%",
      matchColor: "green",
      icon: "Trophy",
      program: "Bachelor of Science in Computer Science (4 years)",
      requirements: "GPA 3.8+, SAT 1500+, TOEFL 100+",
      cost: "$75,000/year",
      reason: "Perfect match for your CS background and high academic performance",
      badges: ["Top Ranked", "Research Opportunities", "Strong Alumni Network"],
      university: { id: 1, name: "Harvard University", location: "Cambridge, MA" },
      dept: { id: 1, name: "School of Engineering and Applied Sciences", icon: "⚙️" },
      prog: { id: 1, name: "Computer Science", duration: "4 years", degree: "Bachelor", level: "Undergraduate" }
    },
    {
      id: 2,
      title: "Engineering Science - Oxford University",
      country: "🇬🇧 United Kingdom",
      department: "Department of Engineering Science",
      match: "92%",
      matchColor: "blue",
      icon: "Award",
      program: "Master of Engineering (MEng) in Engineering Science (4 years)",
      requirements: "GPA 3.7+, A-levels AAA, IELTS 7.5+",
      cost: "£45,000/year",
      reason: "Excellent for your engineering interests and international exposure",
      badges: ["Historic Institution", "Tutorial System", "Global Recognition"],
      university: { id: 4, name: "Oxford University", location: "Oxford" },
      dept: { id: 15, name: "Department of Engineering Science", icon: "⚙️" },
      prog: { id: 32, name: "Engineering Science", duration: "4 years", degree: "MEng", level: "Undergraduate" }
    },
    {
      id: 3,
      title: "Computer Engineering - University of Toronto",
      country: "🇨🇦 Canada",
      department: "Faculty of Applied Science & Engineering",
      match: "89%",
      matchColor: "purple",
      icon: "Star",
      program: "Bachelor of Applied Science in Computer Engineering (4 years)",
      requirements: "GPA 3.5+, SAT 1400+, TOEFL 95+",
      cost: "CAD $58,000/year",
      reason: "Great balance of quality education and affordability",
      badges: ["Co-op Programs", "Multicultural", "Post-Grad Work Permit"],
      university: { id: 7, name: "University of Toronto", location: "Toronto" },
      dept: { id: 29, name: "Faculty of Applied Science & Engineering", icon: "⚙️" },
      prog: { id: 38, name: "Computer Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" }
    },
    {
      id: 4,
      title: "Software Engineering - University of Melbourne",
      country: "🇦🇺 Australia",
      department: "Melbourne School of Engineering",
      match: "87%",
      matchColor: "orange",
      icon: "GraduationCap",
      program: "Bachelor of Software Engineering (4 years)",
      requirements: "GPA 3.4+, ATAR 95+, IELTS 6.5+",
      cost: "AUD $47,000/year",
      reason: "Strong tech industry connections and beautiful campus life",
      badges: ["Industry Partnerships", "Work Rights", "Quality of Life"],
      university: { id: 10, name: "University of Melbourne", location: "Melbourne" },
      dept: { id: 44, name: "Melbourne School of Engineering", icon: "⚙️" },
      prog: { id: 40, name: "Software Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" }
    },
    {
      id: 5,
      title: "Mechanical Engineering - TU Munich",
      country: "🇩🇪 Germany",
      department: "School of Engineering and Design",
      match: "84%",
      matchColor: "gray",
      icon: "Globe",
      program: "Bachelor of Science in Mechanical Engineering (3 years)",
      requirements: "GPA 3.2+, Abitur 2.0, German B2/English C1",
      cost: "€500/year (tuition) + €12,000 (living)",
      reason: "Low tuition costs and strong engineering reputation",
      badges: ["Low Cost", "EU Access", "Technical Excellence"],
      university: { id: 13, name: "Technical University of Munich", location: "Munich" },
      dept: { id: 59, name: "School of Engineering and Design", icon: "⚙️" },
      prog: { id: 42, name: "Mechanical Engineering", duration: "3 years", degree: "Bachelor", level: "Undergraduate" }
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-purple-600" />
        Top AI Recommendations for You
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {recommendations.map((rec) => (
          <RecommendationCard
            key={rec.id}
            recommendation={rec}
            onClick={() => {
              setUserData((prev) => ({
                ...prev,
                country: countries[rec.id - 1],
                university: rec.university,
                department: rec.dept,
                program: rec.prog,
              }));
              setCurrentStep(2);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendationsList;
