
// components/Application/steps/RecommendationsStep.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Bot } from "lucide-react";
import ProfileSummary from '../recommendations/ProfileSummary';
import RecommendationsList from '../recommendations/RecommendationsList';
import CustomSearchCard from '../recommendations/CustomSearchCard';

function RecommendationsStep() {

  const { currentStep, setCurrentStep } = useContext(ApplicationContext);

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
          <Bot className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">AI-Powered Recommendations</h2>
          <p className="text-blue-100">
            Based on your survey responses, our AI has analyzed your profile and generated personalized
            recommendations
          </p>
        </div>
      </div>

      <ProfileSummary />
      <RecommendationsList />
      <CustomSearchCard />
    </div>
  );
}

export default RecommendationsStep;
