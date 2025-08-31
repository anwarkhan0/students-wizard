// components/Application/recommendations/RecommendationCard.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, GraduationCap, Globe } from "lucide-react";

function RecommendationCard({ recommendation, onClick }) {
  const getIcon = () => {
    const iconProps = { className: "h-6 w-6" };
    switch (recommendation.icon) {
      case "Trophy": return <Trophy {...iconProps} className="h-6 w-6 text-green-600" />;
      case "Award": return <Award {...iconProps} className="h-6 w-6 text-blue-600" />;
      case "Star": return <Star {...iconProps} className="h-6 w-6 text-purple-600" />;
      case "GraduationCap": return <GraduationCap {...iconProps} className="h-6 w-6 text-orange-600" />;
      case "Globe": return <Globe {...iconProps} className="h-6 w-6 text-gray-600" />;
      default: return <Trophy {...iconProps} />;
    }
  };

  const getBorderColor = () => {
    switch (recommendation.matchColor) {
      case "green": return "border-l-green-500";
      case "blue": return "border-l-blue-500";
      case "purple": return "border-l-purple-500";
      case "orange": return "border-l-orange-500";
      case "gray": return "border-l-gray-500";
      default: return "border-l-green-500";
    }
  };

  const getBadgeColor = () => {
    switch (recommendation.matchColor) {
      case "green": return "bg-green-100 text-green-800";
      case "blue": return "bg-blue-100 text-blue-800";
      case "purple": return "bg-purple-100 text-purple-800";
      case "orange": return "bg-orange-100 text-orange-800";
      case "gray": return "bg-gray-100 text-gray-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  return (
    <Card
      className={`border-l-4 ${getBorderColor()} hover:shadow-lg transition-shadow cursor-pointer`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`bg-${recommendation.matchColor}-100 p-2 rounded-full`}>
              {getIcon()}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{recommendation.title}</h4>
              <p className="text-gray-600">
                {recommendation.country} • {recommendation.department}
              </p>
            </div>
          </div>
          <Badge className={getBadgeColor()}>{recommendation.match} Match</Badge>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Why recommended:</strong> {recommendation.reason}
          </p>
          <p>
            <strong>Program:</strong> {recommendation.program}
          </p>
          <p>
            <strong>Requirements:</strong> {recommendation.requirements}
          </p>
          <p>
            <strong>Estimated Cost:</strong> {recommendation.cost}
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          {recommendation.badges.map((badge, index) => (
            <Badge key={index} variant="outline">{badge}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecommendationCard;
