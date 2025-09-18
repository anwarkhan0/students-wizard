// components/Application/steps/RegistrationStep.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import RegistrationForm from '../form/RegistrationForm';
import VerificationSection from '../form/sections/VerificationSection';
import { useFetch } from '@/hooks/useApplicationData';

interface Country {
  name: string;
  visaInfo: string;
}
function RegistrationStep() {
  const { showConfirmations } = useContext(ApplicationContext);
  const { data: countries, loading, error } = useFetch<Country[]>('http://localhost:4000/api/admin/countries');
  // if(countries) {
  //   console.log(countries[3].name);
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-6">
      {!showConfirmations ? <RegistrationForm /> : <VerificationSection />}
    </div>
  );
}

export default RegistrationStep;
