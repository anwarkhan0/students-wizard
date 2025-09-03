// components/Application/steps/AdmissionStep.jsx
import { useContext } from "react";
import { ApplicationContext } from "@/context/ApplicationContext";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import AILetterGenerator from "../AILetterGenerator";

function AdmissionStep() {
  const { admissionSteps, admissionProgress, completeAdmissionStep, userData } =
    useContext(ApplicationContext);

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Phase 1: Admission Application</h3>
        <p className="text-gray-600">
          Complete the following steps for your university application
        </p>
      </div>

      <div className="space-y-3">
        {admissionSteps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg border ${
              index < admissionProgress
                ? "bg-green-50 border-green-200"
                : index === admissionProgress
                ? "bg-blue-50 border-blue-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              {index < admissionProgress ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <div
                  className={`w-5 h-5 rounded-full border-2 ${
                    index === admissionProgress
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                />
              )}
              <span
                className={
                  index < admissionProgress ? "text-green-800" : "text-gray-700"
                }
              >
                {step}
              </span>
            </div>
            {index === admissionProgress &&
              admissionProgress < admissionSteps.length && (
                <Button size="sm" onClick={completeAdmissionStep}>
                  Complete
                </Button>
              )}
          </div>
        ))}
      </div>

      <AILetterGenerator userData={userData} />

      {admissionProgress === admissionSteps.length && (
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="text-green-800 font-medium">
            Admission application completed!
          </p>
          <p className="text-green-600 text-sm">Moving to visa process...</p>
        </div>
      )}
    </div>
  );
}

export default AdmissionStep;
