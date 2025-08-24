// components/Application/forms/VerificationSection.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import EmailVerificationCard from './verification/EmailVerificationCard';
import PhoneVerificationCard from './verification/PhoneVerificationCard';

function VerificationSection() {
  const {
    userData,
    setCurrentStep,
    setShowConfirmations,
    setUserData,
    setConfirmationCodes,
  } = useContext(ApplicationContext);

  const handleBackToForm = () => {
    setShowConfirmations(false);
    setUserData({ ...userData, emailConfirmed: false, phoneConfirmed: false });
    setConfirmationCodes({
      email: "",
      phone: "",
      generatedEmailCode: "",
      generatedPhoneCode: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Verify Your Contact Information</h3>
        <p className="text-gray-600">
          We've sent verification codes to your email and phone. Please enter them below to continue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EmailVerificationCard />
        <PhoneVerificationCard />
      </div>

      {userData.emailConfirmed && userData.phoneConfirmed && (
        <div className="text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-green-800 mb-1">Verification Complete!</h3>
            <p className="text-green-700">
              Both your email and phone have been successfully verified.
            </p>
          </div>
          <Button onClick={() => setCurrentStep(1)} className="w-full" size="lg">
            Continue to AI Recommendations
          </Button>
        </div>
      )}

      <div className="text-center">
        <Button variant="outline" onClick={handleBackToForm}>
          Back to Registration Form
        </Button>
      </div>
    </div>
  );
}

export default VerificationSection;