// components/Application/StepHeader.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { CardTitle, CardDescription } from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  GraduationCap,
  FileText,
  Plane,
  Trophy,
} from "lucide-react";

function StepHeader() {
  const { currentStep, steps } = useContext(ApplicationContext);

  const getStepIcon = () => {
    const iconProps = { className: "h-5 w-5" };
    
    switch (currentStep) {
      case 0:
        return <FileText {...iconProps} />;
      case 1:
        return <Globe {...iconProps} />;
      case 2:
        return <FileText {...iconProps} />;
      case 3:
        return <CheckCircle {...iconProps} />;
      case 4:
        return <Plane {...iconProps} />;
      case 5:
        return <Trophy {...iconProps} />;
      default:
        return null;
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 0:
        return "Complete our comprehensive survey to get personalized AI recommendations";
      case 1:
        return "Review AI-generated recommendations based on your profile";
      case 2:
        return "Review the requirements for your selected program";
      case 3:
        return "Complete your admission application process";
      case 4:
        return "Prepare your visa application documents";
      case 5:
        return "Congratulations! Your application journey is complete";
      default:
        return "";
    }
  };

  return (
    <>
      <CardTitle className="flex items-center gap-2">
        {getStepIcon()}
        {steps[currentStep]}
      </CardTitle>
      <CardDescription>
        {getStepDescription()}
      </CardDescription>
    </>
  );
}

export default StepHeader;
