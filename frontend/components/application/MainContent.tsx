// components/Application/MainContent.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import StepHeader from './StepHeader';
import RegistrationStep from './steps/RegistrationStep';
// import RecommendationsStep from './steps/RecommendationsStep';
// import ProgramRequirementsStep from './steps/ProgramRequirementsStep';
// import AdmissionStep from './steps/AdmissionStep';
// import VisaStep from './steps/VisaStep';
// import CompletionStep from './steps/CompletionStep';

function MainContent() {
  const { currentStep } = useContext(ApplicationContext);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <RegistrationStep />;
      // case 1:
      //   return <RecommendationsStep />;
      // case 2:
      //   return <ProgramRequirementsStep />;
      // case 3:
      //   return <AdmissionStep />;
      // case 4:
      //   return <VisaStep />;
      // case 5:
      //   return <CompletionStep />;
      default:
        return null;
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <StepHeader />
      </CardHeader>
      <CardContent>
        {renderStep()}
      </CardContent>
    </Card>
  );
}

export default MainContent;
