// components/Application/steps/VisaStep.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import AIDocumentAssistant from '../AIDocumentAssistant';

function VisaStep() {
  const { 
    visaRequirements, 
    visaChecklist, 
    toggleVisaRequirement, 
    completeVisaProcess,
    userData 
  } = useContext(ApplicationContext);

  const completedRequirements = Object.values(visaChecklist).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Phase 2: Visa Application</h3>
        <p className="text-gray-600">Check off each requirement as you complete them</p>
      </div>

      <div className="space-y-3">
        {visaRequirements.map((requirement, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
            <Checkbox
              id={`visa-${index}`}
              checked={visaChecklist[requirement] || false}
              onCheckedChange={() => toggleVisaRequirement(requirement)}
            />
            <Label htmlFor={`visa-${index}`} className="flex-1 cursor-pointer">
              {requirement}
            </Label>
          </div>
        ))}
      </div>

      <AIDocumentAssistant visaRequirements={visaRequirements} userData={userData} />

      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
        <span className="text-blue-800">
          Progress: {completedRequirements} / {visaRequirements.length} completed
        </span>
        <Button
          onClick={completeVisaProcess}
          disabled={completedRequirements !== visaRequirements.length}
        >
          Complete Visa Process
        </Button>
      </div>
    </div>
  );
}

export default VisaStep;