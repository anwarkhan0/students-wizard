// components/Application/steps/RegistrationStep.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import RegistrationForm from '../form/RegistrationForm';
import VerificationSection from '../form/sections/VerificationSection';

function RegistrationStep() {
  const { showConfirmations } = useContext(ApplicationContext);

  return (
    <div className="space-y-6">
      {!showConfirmations ? <RegistrationForm /> : <VerificationSection />}
    </div>
  );
}

export default RegistrationStep;
