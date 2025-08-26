'use client';
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import Header from './Header';
import ProgressBar from './ProgressBar';
import MainContent from './MainContent';
import AIAssistant from './AIAssistant';

function Application() {
  const {
    userData,
    currentStep,
    steps,
    getProgressPercentage,
    showAIAssistant,
  } = useContext(ApplicationContext);

  console.log("Current Step:", currentStep); 
  console.log("Steps:", steps);
  console.log("Progress Percentage:", getProgressPercentage());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        <ProgressBar 
          progress={getProgressPercentage()} 
          currentStep={currentStep} 
          steps={steps} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MainContent />
          </div>
          
          <div className="lg:col-span-1">
            {showAIAssistant && currentStep >= 0 && currentStep < 5 && (
              <AIAssistant step={currentStep} userData={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;