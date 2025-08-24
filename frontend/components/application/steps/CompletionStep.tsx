
// components/Application/steps/CompletionStep.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Trophy } from "lucide-react";

function CompletionStep() {
  const { userData } = useContext(ApplicationContext);

  return (
    <div className="text-center space-y-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <Trophy className="h-8 w-8 text-green-600" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Congratulations, {userData.name}!</h2>
        <p className="text-gray-600 mb-4">
          You have successfully completed your AI-assisted application process for{" "}
          {userData.program?.name} in the {userData.department?.name} at {userData.university?.name}.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
        <ul className="text-left text-green-700 space-y-2">
          <li>• Monitor your email for updates from the university</li>
          <li>• Track your visa application status</li>
          <li>• Prepare for your departure with AI travel assistance</li>
          <li>• Connect with other students through our AI matching</li>
        </ul>
      </div>

      <div className="text-2xl font-bold text-blue-600">
        🎉 Best of Luck with Your AI-Powered Journey! 🎉
      </div>
    </div>
  );
}

export default CompletionStep;