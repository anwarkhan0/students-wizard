import { createContext, useContext, useState } from 'react';

  // Mock data
import { countries } from "../data/countries.js"
import { testimonials } from "../data/testimonials.js"
const { visaRequirements } = import("../data/visaRequirements.ts");
const { programRequirements } = import("../data/programRequirements.ts");
const { admissionSteps } = import("../data/admissionSteps.ts");

export const ApplicationContext = createContext({});



export function ApplicationProvider({ children }) {

  const [currentStep, setCurrentStep] = useState(-1)
  const [userData, setUserData] = useState({
    // Personal Info
    name: "",
    age: "",
    nationality: "",
    currentCountry: "",
    email: "",
    phone: "",

    // Academic Background
    currentEducation: "",
    gpa: "",
    fieldOfStudy: "",
    institution: "",
    academicAchievements: "",

    // English Proficiency
    englishLevel: "",
    englishTests: "",

    // Preferences
    targetCountries: [],
    targetPrograms: [],
    studyLevel: "",
    startDate: "",
    budget: "",

    // Experience
    workExperience: "",
    researchExperience: "",
    extracurricular: "",
    careerGoals: "",

    // Selected options
    country: null,
    university: null,
    department: null,
    program: null,

    // Verification
    emailConfirmed: false,
    phoneConfirmed: false,
  })
  const [admissionProgress, setAdmissionProgress] = useState(0)
  const [visaChecklist, setVisaChecklist] = useState({})
  const [showAIAssistant, setShowAIAssistant] = useState(true);

 


  // const { steps } = import("../data/ApplicationSteps.ts");




  const startApplication = () => {
    setCurrentStep(0)
  }

  const [confirmationCodes, setConfirmationCodes] = useState({
    email: "",
    phone: "",
    generatedEmailCode: "",
    generatedPhoneCode: "",
  })
  const [showConfirmations, setShowConfirmations] = useState(false)
  const [isVerifying, setIsVerifying] = useState({ email: false, phone: false })

  const getProgressPercentage = () => {
    return ((currentStep + 1) / steps.length) * 100
  }

  /* ----------------- helpers (must come before return) ----------------- */
  function proceedToAdmission() {
    setCurrentStep(3)
  }

  function completeAdmissionStep() {
    setAdmissionProgress((p) => {
      const next = Math.min(p + 1, admissionSteps.length)
      if (next === admissionSteps.length) setCurrentStep(4)
      return next
    })
  }

  function completeVisaProcess() {
    if (Object.values(visaChecklist).filter(Boolean).length === visaRequirements.length) {
      setCurrentStep(5)
    }
  }

  function toggleVisaRequirement(requirement: string) {
    setVisaChecklist((prev) => ({ ...prev, [requirement]: !prev[requirement] }))
  }

  /* ---- registration / verification helpers ---- */
  function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const emailCode = Math.floor(100000 + Math.random() * 900000).toString()
    const phoneCode = Math.floor(100000 + Math.random() * 900000).toString()

    // Collect multiple selections
    const targetCountries = Array.from(formData.getAll("targetCountries"))
    const targetPrograms = Array.from(formData.getAll("targetPrograms"))

    setUserData((prev) => ({
      ...prev,
      // Personal Info
      name: formData.get("name") as string,
      nationality: formData.get("nationality") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,

      // Academic Background
      currentEducation: formData.get("currentEducation") as string,
      gpa: formData.get("gpa") as string,
      fieldOfStudy: formData.get("fieldOfStudy") as string,
      institution: formData.get("institution") as string,
      academicAchievements: formData.get("academicAchievements") as string,

      // English Proficiency
      englishLevel: formData.get("englishLevel") as string,
      englishTests: formData.get("englishTests") as string,

      // Preferences
      targetCountries,
      targetPrograms,
      studyLevel: formData.get("studyLevel") as string,
      startDate: formData.get("startDate") as string,
      budget: formData.get("budget") as string,

      // Experience
      workExperience: formData.get("workExperience") as string,
      researchExperience: formData.get("researchExperience") as string,
      extracurricular: formData.get("extracurricular") as string,
      careerGoals: formData.get("careerGoals") as string,
    }))

    setConfirmationCodes({
      email: "",
      phone: "",
      generatedEmailCode: emailCode,
      generatedPhoneCode: phoneCode,
    })
    setShowConfirmations(true)
  }

  function verifyEmail() {
    setIsVerifying((v) => ({ ...v, email: true }))
    setTimeout(() => {
      setIsVerifying((v) => ({ ...v, email: false }))
      setUserData((prev) =>
        confirmationCodes.email === confirmationCodes.generatedEmailCode ? { ...prev, emailConfirmed: true } : prev,
      )
    }, 1500)
  }

  function verifyPhone() {
    setIsVerifying((v) => ({ ...v, phone: true }))
    setTimeout(() => {
      setIsVerifying((v) => ({ ...v, phone: false }))
      setUserData((prev) =>
        confirmationCodes.phone === confirmationCodes.generatedPhoneCode ? { ...prev, phoneConfirmed: true } : prev,
      )
    }, 1500)
  }

  function resendEmailCode() {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString()
    setConfirmationCodes((c) => ({ ...c, generatedEmailCode: newCode, email: "" }))
    alert(`New email code sent: ${newCode}`)
  }

  function resendPhoneCode() {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString()
    setConfirmationCodes((c) => ({ ...c, generatedPhoneCode: newCode, phone: "" }))
    alert(`New phone code sent: ${newCode}`)
  }

  // const steps = [
  //   "Select Country",
  //   "Choose University",
  //   "Pick Department",
  //   "Select Program",
  //   "Review Requirements",
  //   "Submit Application",
  //   "Visa Process",
  //   "Finish"
  // ]

  // const value = {
  //   ,
  // }

  const steps = [
    "Registration Survey",
    "AI Recommendations",
    "Requirements",
    "Admission Process",
    "Visa Process",
    "Completion",
  ]

  return (
    <ApplicationContext.Provider value={{
      
      userData,
      setUserData,
      currentStep,
      setCurrentStep,
      steps,
      getProgressPercentage,
      startApplication,
      proceedToAdmission,
      completeAdmissionStep,
      completeVisaProcess,
      visaChecklist,
      toggleVisaRequirement,
      showAIAssistant,
      setShowAIAssistant,
      admissionProgress,
      visaRequirements,
      programRequirements,
      admissionSteps,
      confirmationCodes,
      setConfirmationCodes,
      showConfirmations,
      setShowConfirmations,
      isVerifying,
      setIsVerifying,
      handleRegistration,
      verifyEmail,
      verifyPhone,
      resendEmailCode,
      resendPhoneCode,
      //mock data
      countries,
      testimonials
    }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) throw new Error("useApplication must be used within ApplicationProvider");
  return context;
};