
// components/Application/forms/RegistrationForm.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Button } from "@/components/ui/button";
import PersonalInfoSection from './sections/PersonalInfoSection';
import AcademicBackgroundSection from './sections/AcademicBackgroundSection';
import EnglishProficiencySection from './sections/EnglishProficiencySection';
import TargetCountriesSection from './sections/TargetCountriesSection';
import ProgramInterestsSection from './sections/ProgramInterestsSection';
import StudyLevelSection from './sections/StudyLevelSection';
import ExperienceSection from './sections/ExperienceSection';

function RegistrationForm() {
  const { handleRegistration } = useContext(ApplicationContext);

  return (
    <form onSubmit={handleRegistration} className="space-y-6">
      <PersonalInfoSection />
      <AcademicBackgroundSection />
      <EnglishProficiencySection />
      <TargetCountriesSection />
      <ProgramInterestsSection />
      <StudyLevelSection />
      <ExperienceSection />
      
      <Button type="submit" className="w-full" size="lg">
        Complete Survey & Send Verification Codes
      </Button>
    </form>
  );
}

export default RegistrationForm;
