"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// static imports (don't use dynamic import() here)
import { countries } from "../data/countries";
import { testimonials } from "../data/testimonials";
import { visaRequirements } from "../data/visaRequirements";
import { programRequirements } from "../data/programRequirements";
import { admissionSteps } from "../data/admissionSteps";

type UserData = {
  name?: string;
  age?: string;
  nationality?: string;
  currentCountry?: string;
  email?: string;
  phone?: string;
  currentEducation?: string;
  gpa?: string;
  fieldOfStudy?: string;
  institution?: string;
  academicAchievements?: string;
  englishLevel?: string;
  englishTests?: string;
  targetCountries?: string[];
  targetPrograms?: string[];
  studyLevel?: string;
  startDate?: string;
  budget?: string;
  workExperience?: string;
  researchExperience?: string;
  extracurricular?: string;
  careerGoals?: string;
  country?: any;
  university?: any;
  department?: any;
  program?: any;
  emailConfirmed?: boolean;
  phoneConfirmed?: boolean;
};

type AppContextType = {
  userData: UserData;
  setUserData: (u: UserData) => void;
  currentStep: number;
  setCurrentStep: (s: number) => void;
  steps: string[];
  getProgressPercentage: () => number;
  startApplication: () => void;
  proceedToAdmission: () => void;
  completeAdmissionStep: () => void;
  completeVisaProcess: () => void;
  visaChecklist: Record<string, boolean>;
  toggleVisaRequirement: (r: string) => void;
  showAIAssistant: boolean;
  setShowAIAssistant: (v: boolean) => void;
  admissionProgress: number;
  visaRequirements: any[];
  programRequirements: any[];
  admissionSteps: any[];
  confirmationCodes: Record<string, string>;
  setConfirmationCodes: (c: Record<string, string>) => void;
  showConfirmations: boolean;
  setShowConfirmations: (v: boolean) => void;
  isVerifying: { email: boolean; phone: boolean };
  setIsVerifying: (v: { email: boolean; phone: boolean }) => void;
  handleRegistration: (e: React.FormEvent<HTMLFormElement>) => void;
  verifyEmail: () => void;
  verifyPhone: () => void;
  resendEmailCode: () => void;
  resendPhoneCode: () => void;
  countries: any[];
  testimonials: any[];
};

const defaultValue: AppContextType = {
  userData: {},
  setUserData: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
  steps: [
    "Registration Survey",
    "AI Recommendations",
    "Requirements",
    "Admission Process",
    "Visa Process",
    "Completion",
  ],
  getProgressPercentage: () => 0,
  startApplication: () => {},
  proceedToAdmission: () => {},
  completeAdmissionStep: () => {},
  completeVisaProcess: () => {},
  visaChecklist: {},
  toggleVisaRequirement: () => {},
  showAIAssistant: true,
  setShowAIAssistant: () => {},
  admissionProgress: 0,
  visaRequirements,
  programRequirements,
  admissionSteps,
  confirmationCodes: { email: "", phone: "", generatedEmailCode: "", generatedPhoneCode: "" },
  setConfirmationCodes: () => {},
  showConfirmations: false,
  setShowConfirmations: () => {},
  isVerifying: { email: false, phone: false },
  setIsVerifying: () => {},
  handleRegistration: () => {},
  verifyEmail: () => {},
  verifyPhone: () => {},
  resendEmailCode: () => {},
  resendPhoneCode: () => {},
  countries,
  testimonials,
};

export const ApplicationContext = createContext<AppContextType>(defaultValue);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [userData, setUserData] = useState<UserData>({});
  const [admissionProgress, setAdmissionProgress] = useState<number>(0);
  const [visaChecklist, setVisaChecklist] = useState<Record<string, boolean>>({});
  const [showAIAssistant, setShowAIAssistant] = useState<boolean>(true);
  const [confirmationCodes, setConfirmationCodes] = useState<Record<string, string>>({
    email: "",
    phone: "",
    generatedEmailCode: "",
    generatedPhoneCode: "",
  });
  const [showConfirmations, setShowConfirmations] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<{ email: boolean; phone: boolean }>({ email: false, phone: false });

  const steps = defaultValue.steps;

  const getProgressPercentage = () => {
    if (!steps || steps.length === 0) return 0;
    return ((currentStep + 1) / steps.length) * 100;
  };

  function startApplication() {
    setCurrentStep(0);
  }

  function proceedToAdmission() {
    setCurrentStep(3);
  }

  function completeAdmissionStep() {
    setAdmissionProgress((p) => {
      const next = Math.min(p + 1, admissionSteps.length);
      if (next === admissionSteps.length) setCurrentStep(4);
      return next;
    });
  }

  function completeVisaProcess() {
    if (Object.values(visaChecklist).filter(Boolean).length === visaRequirements.length) {
      setCurrentStep(5);
    }
  }

  function toggleVisaRequirement(requirement: string) {
    setVisaChecklist((prev) => ({ ...prev, [requirement]: !prev[requirement] }));
  }

  function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const emailCode = Math.floor(100000 + Math.random() * 900000).toString();
    const phoneCode = Math.floor(100000 + Math.random() * 900000).toString();

    const targetCountries = Array.from(formData.getAll("targetCountries")) as string[];
    const targetPrograms = Array.from(formData.getAll("targetPrograms")) as string[];

    setUserData((prev) => ({
      ...prev,
      name: (formData.get("name") as string) || "",
      nationality: (formData.get("nationality") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      currentEducation: (formData.get("currentEducation") as string) || "",
      gpa: (formData.get("gpa") as string) || "",
      fieldOfStudy: (formData.get("fieldOfStudy") as string) || "",
      institution: (formData.get("institution") as string) || "",
      academicAchievements: (formData.get("academicAchievements") as string) || "",
      englishLevel: (formData.get("englishLevel") as string) || "",
      englishTests: (formData.get("englishTests") as string) || "",
      targetCountries,
      targetPrograms,
      studyLevel: (formData.get("studyLevel") as string) || "",
      startDate: (formData.get("startDate") as string) || "",
      budget: (formData.get("budget") as string) || "",
      workExperience: (formData.get("workExperience") as string) || "",
      researchExperience: (formData.get("researchExperience") as string) || "",
      extracurricular: (formData.get("extracurricular") as string) || "",
      careerGoals: (formData.get("careerGoals") as string) || "",
    }));

    setConfirmationCodes({
      email: "",
      phone: "",
      generatedEmailCode: emailCode,
      generatedPhoneCode: phoneCode,
    });
    setShowConfirmations(true);
  }

  function verifyEmail() {
    setIsVerifying((v) => ({ ...v, email: true }));
    setTimeout(() => {
      setIsVerifying((v) => ({ ...v, email: false }));
      setUserData((prev) =>
        confirmationCodes.email === confirmationCodes.generatedEmailCode ? { ...prev, emailConfirmed: true } : prev,
      );
    }, 1500);
  }

  function verifyPhone() {
    setIsVerifying((v) => ({ ...v, phone: true }));
    setTimeout(() => {
      setIsVerifying((v) => ({ ...v, phone: false }));
      setUserData((prev) =>
        confirmationCodes.phone === confirmationCodes.generatedPhoneCode ? { ...prev, phoneConfirmed: true } : prev,
      );
    }, 1500);
  }

  function resendEmailCode() {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setConfirmationCodes((c) => ({ ...c, generatedEmailCode: newCode, email: "" }));
    alert(`New email code sent: ${newCode}`);
  }

  function resendPhoneCode() {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setConfirmationCodes((c) => ({ ...c, generatedPhoneCode: newCode, phone: "" }));
    alert(`New phone code sent: ${newCode}`);
  }

  const value: AppContextType = {
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
    countries,
    testimonials,
  };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
}

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) throw new Error("useApplication must be used within ApplicationProvider");
  return context;
};