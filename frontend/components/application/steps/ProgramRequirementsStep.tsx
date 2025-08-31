import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProgramRequirementsStep() {
  const { userData, programRequirements, proceedToAdmission } = useContext(ApplicationContext);

  console.log(userData)

  return (
    <div className="space-y-6">
      <div className="mb-4 space-y-2">
        <Badge variant="outline" className="mb-2">
          Selected University: {userData.university.name}
        </Badge>
        <Badge variant="outline" className="mb-2">
          Selected Department: {userData.department.name}
        </Badge>
        <Badge variant="outline" className="mb-2">
          Selected Program: {userData.program.name}
        </Badge>
      </div>

      {programRequirements[userData.program.id] ? (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Academic Requirements</h3>
            <p className="text-gray-600">Minimum GPA: {programRequirements[userData.program.id].gpa}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Required Tests</h3>
            <ul className="list-disc list-inside space-y-1">
              {programRequirements[userData.program.id].tests.map((test, index) => (
                <li key={index} className="text-gray-600">
                  {test}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Required Documents</h3>
            <ul className="list-disc list-inside space-y-1">
              {programRequirements[userData.program.id].documents.map((doc, index) => (
                <li key={index} className="text-gray-600">
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Application Deadline</h3>
            <p className="text-red-600 font-medium">
              {programRequirements[userData.program.id].deadline}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center p-6">
          <p className="text-gray-600 mb-4">
            Detailed requirements for this program are not available at the moment. Please contact the
            university directly for more information.
          </p>
          <p className="text-gray-600 mb-4">You can still proceed with the application process.</p>
        </div>
      )}

      <Button onClick={proceedToAdmission} className="w-full">
        Proceed to Application Process
      </Button>
    </div>
  );
}

export default ProgramRequirementsStep;