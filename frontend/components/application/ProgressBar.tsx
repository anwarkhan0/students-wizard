
// components/Application/ProgressBar.jsx
import { Progress } from "@/components/ui/progress";

function ProgressBar({ progress, currentStep, steps }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-xs ${
              index <= currentStep ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;