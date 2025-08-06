"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Globe,
  GraduationCap,
  FileText,
  Plane,
  Trophy,
  Award,
  Star,
  Bot,
  Sparkles,
  Download,
  Copy,
  RefreshCw,
} from "lucide-react"

// Mock data (same as before)
const countries = [
  { id: 1, name: "United States", flag: "🇺🇸" },
  { id: 2, name: "United Kingdom", flag: "🇬🇧" },
  { id: 3, name: "Canada", flag: "🇨🇦" },
  { id: 4, name: "Australia", flag: "🇦🇺" },
  { id: 5, name: "Germany", flag: "🇩🇪" },
]

const universities = {
  1: [
    { id: 1, name: "Harvard University", location: "Cambridge, MA" },
    { id: 2, name: "Stanford University", location: "Stanford, CA" },
    { id: 3, name: "MIT", location: "Cambridge, MA" },
  ],
  2: [
    { id: 4, name: "Oxford University", location: "Oxford" },
    { id: 5, name: "Cambridge University", location: "Cambridge" },
    { id: 6, name: "Imperial College London", location: "London" },
  ],
  3: [
    { id: 7, name: "University of Toronto", location: "Toronto" },
    { id: 8, name: "McGill University", location: "Montreal" },
    { id: 9, name: "UBC", location: "Vancouver" },
  ],
  4: [
    { id: 10, name: "University of Melbourne", location: "Melbourne" },
    { id: 11, name: "University of Sydney", location: "Sydney" },
    { id: 12, name: "Australian National University", location: "Canberra" },
  ],
  5: [
    { id: 13, name: "Technical University of Munich", location: "Munich" },
    { id: 14, name: "Heidelberg University", location: "Heidelberg" },
    { id: 15, name: "Humboldt University of Berlin", location: "Berlin" },
  ],
}

const programs = {
  1: [
    { id: 1, name: "Computer Science", duration: "4 years", degree: "Bachelor" },
    { id: 2, name: "Business Administration", duration: "2 years", degree: "Master" },
    { id: 3, name: "Medicine", duration: "6 years", degree: "Doctor" },
  ],
  4: [
    { id: 4, name: "Engineering", duration: "4 years", degree: "Bachelor" },
    { id: 5, name: "Law", duration: "3 years", degree: "Bachelor" },
    { id: 6, name: "Psychology", duration: "3 years", degree: "Bachelor" },
  ],
  7: [
    { id: 7, name: "Data Science", duration: "2 years", degree: "Master" },
    { id: 8, name: "Finance", duration: "4 years", degree: "Bachelor" },
  ],
  10: [
    { id: 9, name: "Environmental Science", duration: "3 years", degree: "Bachelor" },
    { id: 10, name: "Arts", duration: "4 years", degree: "Bachelor" },
  ],
  13: [
    { id: 11, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor" },
    { id: 12, name: "Physics", duration: "3 years", degree: "Bachelor" },
  ],
}

const programRequirements = {
  1: {
    gpa: "3.8+",
    tests: ["SAT: 1500+", "TOEFL: 100+"],
    documents: ["Transcripts", "Letters of Recommendation", "Personal Statement", "Resume"],
    deadline: "January 1, 2025",
  },
  2: {
    gpa: "3.5+",
    tests: ["GMAT: 650+", "TOEFL: 90+"],
    documents: ["Transcripts", "Work Experience", "Essays", "Letters of Recommendation"],
    deadline: "March 15, 2025",
  },
  3: {
    gpa: "3.7+",
    tests: ["MCAT: 510+", "TOEFL: 100+"],
    documents: ["Transcripts", "Letters of Recommendation", "Personal Statement", "Resume"],
    deadline: "October 15, 2024",
  },
  4: {
    gpa: "3.5+",
    tests: ["GRE: 320+", "TOEFL: 95+"],
    documents: ["Transcripts", "Letters of Recommendation", "Statement of Purpose"],
    deadline: "December 1, 2024",
  },
}

const admissionSteps = [
  "Complete Application Form",
  "Submit Required Documents",
  "Pay Application Fee",
  "Schedule Interview",
  "Submit Additional Materials",
  "Await Decision",
]

const visaRequirements = [
  "Valid Passport",
  "University Acceptance Letter",
  "Financial Proof (Bank Statements)",
  "Visa Application Form",
  "Passport Photos",
  "Medical Examination",
  "English Proficiency Test",
  "Academic Transcripts",
  "Statement of Purpose",
  "Sponsor Letter (if applicable)",
]

const testimonials = [
  {
    name: "Sarah Chen",
    country: "🇨🇳 China",
    university: "Stanford University",
    quote:
      "The AI assistance helped me write a perfect motivation letter. The guidance I received made my dream of studying at Stanford a reality!",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    country: "🇪🇬 Egypt",
    university: "Oxford University",
    quote:
      "The AI document preparation saved me weeks of work. From application to visa, everything was handled professionally.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    country: "🇲🇽 Mexico",
    university: "University of Toronto",
    quote: "The AI-powered visa checklist and document templates made the process so much easier. Highly recommend!",
    rating: 5,
  },
]

// AI Assistant Component
const AIAssistant = ({ step, userData, onSuggestion }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [suggestion, setSuggestion] = useState("")

  const getAISuggestion = async () => {
    setIsLoading(true)
    // Simulate AI response
    setTimeout(() => {
      let aiSuggestion = ""
      switch (step) {
        case 1:
          aiSuggestion = `Based on your profile, I recommend considering ${userData.country?.name} for its excellent education system and post-graduation opportunities. The universities here offer strong programs in your field of interest.`
          break
        case 2:
          aiSuggestion = `For ${userData.country?.name}, I suggest looking at universities that match your academic background. Consider factors like program ranking, location, and scholarship opportunities.`
          break
        case 3:
          aiSuggestion = `The ${userData.program?.name} program at ${userData.university?.name} is an excellent choice. Make sure to highlight relevant experience and skills in your application.`
          break
        case 4:
          aiSuggestion = `To meet the requirements, focus on improving your test scores and gathering strong recommendation letters. Start preparing your personal statement early.`
          break
        default:
          aiSuggestion = "I'm here to help you with personalized guidance throughout your application process."
      }
      setSuggestion(aiSuggestion)
      setIsLoading(false)
      if (onSuggestion) onSuggestion(aiSuggestion)
    }, 2000)
  }

  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Bot className="h-5 w-5" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        {suggestion ? (
          <div className="space-y-3">
            <p className="text-blue-700">{suggestion}</p>
            <Button size="sm" variant="outline" onClick={getAISuggestion} disabled={isLoading}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Get New Suggestion
            </Button>
          </div>
        ) : (
          <Button onClick={getAISuggestion} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Getting AI Suggestion...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Get AI Guidance
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

// AI Letter Generator Component
const AILetterGenerator = ({ userData }) => {
  const [letterType, setLetterType] = useState("motivation")
  const [generatedLetter, setGeneratedLetter] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [userInput, setUserInput] = useState({
    background: "",
    goals: "",
    experience: "",
    whyUniversity: "",
  })

  const generateLetter = async () => {
    setIsGenerating(true)
    // Simulate AI letter generation
    setTimeout(() => {
      const sampleLetter = `Dear Admissions Committee,

I am writing to express my strong interest in the ${userData.program?.name} program at ${userData.university?.name}. As an aspiring student with a passion for ${userData.program?.name.toLowerCase()}, I am excited about the opportunity to contribute to and learn from your esteemed institution.

My academic journey has been driven by a deep curiosity about ${userData.program?.name.toLowerCase()} and its applications in solving real-world challenges. Through my previous studies and experiences, I have developed a solid foundation in the fundamental concepts and principles that will serve me well in your program.

${userInput.background && `Background: ${userInput.background}`}

${userInput.experience && `Experience: ${userInput.experience}`}

What particularly attracts me to ${userData.university?.name} is its reputation for excellence in ${userData.program?.name.toLowerCase()} and its commitment to fostering innovation and critical thinking. ${userInput.whyUniversity && userInput.whyUniversity}

My career goals align perfectly with the opportunities that this program offers. ${userInput.goals && userInput.goals} I am confident that the rigorous curriculum and diverse learning environment at ${userData.university?.name} will provide me with the knowledge and skills necessary to achieve these aspirations.

I am eager to contribute to the vibrant academic community at ${userData.university?.name} and to make the most of the opportunities for growth and learning that your program provides.

Thank you for considering my application. I look forward to the opportunity to discuss my candidacy further.

Sincerely,
${userData.name || "[Your Name]"}`

      setGeneratedLetter(sampleLetter)
      setIsGenerating(false)
    }, 3000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter)
  }

  return (
    <Card className="border-purple-200 bg-purple-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <FileText className="h-5 w-5" />
          AI Letter Generator
        </CardTitle>
        <CardDescription>Generate personalized letters for your application</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={letterType} onValueChange={setLetterType}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="motivation">Motivation Letter</TabsTrigger>
            <TabsTrigger value="personal">Personal Statement</TabsTrigger>
            <TabsTrigger value="purpose">Statement of Purpose</TabsTrigger>
          </TabsList>

          <TabsContent value={letterType} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="background">Academic Background</Label>
                <Textarea
                  id="background"
                  placeholder="Describe your academic background..."
                  value={userInput.background}
                  onChange={(e) => setUserInput({ ...userInput, background: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="goals">Career Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="What are your career aspirations..."
                  value={userInput.goals}
                  onChange={(e) => setUserInput({ ...userInput, goals: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Describe your relevant experience..."
                  value={userInput.experience}
                  onChange={(e) => setUserInput({ ...userInput, experience: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="whyUniversity">Why This University?</Label>
                <Textarea
                  id="whyUniversity"
                  placeholder="Why do you want to study here..."
                  value={userInput.whyUniversity}
                  onChange={(e) => setUserInput({ ...userInput, whyUniversity: e.target.value })}
                />
              </div>
            </div>

            <Button onClick={generateLetter} disabled={isGenerating} className="w-full">
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating {letterType} letter...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate {letterType} Letter
                </>
              )}
            </Button>

            {generatedLetter && (
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm">{generatedLetter}</pre>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy to Clipboard
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download as PDF
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

// AI Document Assistant Component
const AIDocumentAssistant = ({ visaRequirements, userData }) => {
  const [selectedDocument, setSelectedDocument] = useState("")
  const [documentTemplate, setDocumentTemplate] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateDocumentTemplate = async (docType) => {
    setIsGenerating(true)
    setSelectedDocument(docType)

    // Simulate AI document generation
    setTimeout(() => {
      let template = ""
      switch (docType) {
        case "Financial Proof (Bank Statements)":
          template = `FINANCIAL SUPPORT STATEMENT

To Whom It May Concern:

I, ${userData.name || "[Your Name]"}, hereby declare that I have sufficient financial resources to support my studies at ${userData.university?.name || "[University Name]"} for the ${userData.program?.name || "[Program Name]"} program.

Financial Details:
- Total estimated cost for the program: $[Amount]
- Available funds in bank account: $[Amount]
- Additional financial support: $[Amount]

Bank Account Details:
- Bank Name: [Bank Name]
- Account Number: [Account Number]
- Current Balance: $[Amount]
- Account Opening Date: [Date]

I understand that these funds must remain available throughout my studies and I commit to maintaining adequate financial resources.

Sincerely,
${userData.name || "[Your Name]"}
Date: [Date]

Attachments:
- Bank statements for the last 6 months
- Fixed deposit certificates
- Scholarship award letters (if applicable)`
          break

        case "Statement of Purpose":
          template = `STATEMENT OF PURPOSE

${userData.program?.name || "[Program Name]"} Program
${userData.university?.name || "[University Name]"}

Dear Admissions Committee,

I am writing to express my strong interest in pursuing the ${userData.program?.name || "[Program Name]"} program at ${userData.university?.name || "[University Name]"}. This statement outlines my academic background, professional goals, and reasons for choosing your esteemed institution.

ACADEMIC BACKGROUND
[Describe your educational background, relevant coursework, and academic achievements]

PROFESSIONAL EXPERIENCE
[Detail your work experience, internships, and relevant projects]

RESEARCH INTERESTS
[Explain your research interests and how they align with the program]

WHY THIS UNIVERSITY
[Explain why you chose this specific university and program]

CAREER GOALS
[Describe your short-term and long-term career objectives]

CONCLUSION
I am confident that the ${userData.program?.name || "[Program Name]"} program at ${userData.university?.name || "[University Name]"} will provide me with the knowledge and skills necessary to achieve my career goals.

Thank you for your consideration.

Sincerely,
${userData.name || "[Your Name]"}`
          break

        case "Sponsor Letter (if applicable)":
          template = `SPONSORSHIP LETTER

Date: [Date]

To: Visa Officer
[Embassy/Consulate Name]
[Address]

Subject: Financial Sponsorship for ${userData.name || "[Student Name]"}

Dear Sir/Madam,

I, [Sponsor Name], hereby confirm that I will provide financial support to ${userData.name || "[Student Name]"} for their studies at ${userData.university?.name || "[University Name]"} in the ${userData.program?.name || "[Program Name]"} program.

Sponsor Details:
- Full Name: [Sponsor Name]
- Relationship to Student: [Relationship]
- Occupation: [Occupation]
- Annual Income: $[Amount]
- Contact Information: [Phone/Email]

Financial Commitment:
I commit to providing financial support covering:
- Tuition fees: $[Amount] per year
- Living expenses: $[Amount] per year
- Other expenses: $[Amount] per year
- Total annual support: $[Amount]

I understand my responsibilities as a sponsor and confirm that I have sufficient financial resources to support the student throughout their studies.

Attached documents:
- Bank statements
- Income tax returns
- Employment letter
- Property documents (if applicable)

Sincerely,
[Sponsor Name]
[Signature]`
          break

        default:
          template = `DOCUMENT TEMPLATE FOR: ${docType}

This is a template for ${docType}. Please customize this template according to your specific requirements and the guidelines provided by the institution or embassy.

Key points to include:
- Personal information
- Relevant details specific to this document type
- Supporting evidence
- Contact information
- Date and signature

Please consult with the relevant authorities for specific requirements and formatting guidelines.`
      }

      setDocumentTemplate(template)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <FileText className="h-5 w-5" />
          AI Document Assistant
        </CardTitle>
        <CardDescription>Generate templates and guidance for visa documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Select Document Type</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {visaRequirements.map((requirement, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => generateDocumentTemplate(requirement)}
                className="justify-start"
              >
                {requirement}
              </Button>
            ))}
          </div>
        </div>

        {isGenerating && (
          <div className="text-center py-4">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
            <p>Generating template for {selectedDocument}...</p>
          </div>
        )}

        {documentTemplate && !isGenerating && (
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border max-h-96 overflow-y-auto">
              <h4 className="font-semibold mb-2">Template for: {selectedDocument}</h4>
              <pre className="whitespace-pre-wrap text-sm">{documentTemplate}</pre>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(documentTemplate)}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Template
              </Button>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download as Word
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function StudentConsultantApp() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    country: null,
    university: null,
    program: null,
    emailConfirmed: false,
    phoneConfirmed: false,
  })
  const [admissionProgress, setAdmissionProgress] = useState(0)
  const [visaChecklist, setVisaChecklist] = useState({})
  const [showAIAssistant, setShowAIAssistant] = useState(true)

  const steps = [
    "Registration",
    "Country Selection",
    "University Selection",
    "Program Selection",
    "Requirements",
    "Admission Process",
    "Visa Process",
    "Completion",
  ]

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
  function selectCountry(country: any) {
    setUserData((prev) => ({ ...prev, country }))
    setCurrentStep(2)
  }

  function selectUniversity(university: any) {
    setUserData((prev) => ({ ...prev, university }))
    setCurrentStep(3)
  }

  function selectProgram(program: any) {
    setUserData((prev) => ({ ...prev, program }))
    setCurrentStep(4)
  }

  function proceedToAdmission() {
    setCurrentStep(5)
  }

  function completeAdmissionStep() {
    setAdmissionProgress((p) => {
      const next = Math.min(p + 1, admissionSteps.length)
      if (next === admissionSteps.length) setCurrentStep(6)
      return next
    })
  }

  function toggleVisaRequirement(requirement: string) {
    setVisaChecklist((prev) => ({ ...prev, [requirement]: !prev[requirement] }))
  }

  function completeVisaProcess() {
    if (Object.values(visaChecklist).filter(Boolean).length === visaRequirements.length) {
      setCurrentStep(7)
    }
  }

  /* ---- registration / verification helpers ---- */
  function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const emailCode = Math.floor(100000 + Math.random() * 900000).toString()
    const phoneCode = Math.floor(100000 + Math.random() * 900000).toString()

    setUserData((prev) => ({
      ...prev,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
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
  /* --------------------------------------------------------------------- */

  // Landing Page Component (same as before but with updated testimonials)
  if (currentStep === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">StudyAbroad AI</span>
              </div>
              <Button onClick={startApplication} className="bg-blue-600 hover:bg-blue-700">
                Start with AI Assistance
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    AI-Powered
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {" "}
                      Study Abroad{" "}
                    </span>
                    Consultant
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Get personalized AI assistance for every step of your international education journey. From
                    motivation letters to visa documents - all powered by advanced AI.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={startApplication}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                  >
                    Start with AI Assistant
                    <Bot className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                    Learn More
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">AI-Assisted Applications</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img
                      src="/placeholder.svg?height=300&width=250&text=AI+Powered+Student+Success"
                      alt="AI-powered student assistance"
                      className="rounded-2xl shadow-lg"
                    />
                    <img
                      src="/placeholder.svg?height=200&width=250&text=Global+Education+AI"
                      alt="Global education with AI"
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img
                      src="/placeholder.svg?height=250&width=250&text=Smart+Document+Generation"
                      alt="AI document generation"
                      className="rounded-2xl shadow-lg"
                    />
                    <img
                      src="/placeholder.svg?height=220&width=250&text=Personalized+Guidance"
                      alt="Personalized AI guidance"
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Floating AI elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <div className="absolute top-1/2 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
              <p className="text-xl text-gray-600">Advanced AI assistance for every step of your journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Guidance</h3>
                  <p className="text-gray-600">
                    Get personalized AI recommendations for universities, programs, and application strategies based on
                    your profile.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Letter Writing</h3>
                  <p className="text-gray-600">
                    Generate compelling motivation letters, personal statements, and essays tailored to your chosen
                    programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Document Templates</h3>
                  <p className="text-gray-600">
                    AI-generated templates for visa documents, financial statements, and all required paperwork.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rest of landing page sections remain the same but with updated content mentioning AI features */}
        {/* Global Reach Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl font-bold mb-4">AI-Guided Global Education</h2>
              <p className="text-xl opacity-90">Smart recommendations for top universities worldwide</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
                >
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <div className="text-white font-medium">{country.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Success Stories</h2>
              <p className="text-xl text-gray-600">Students who succeeded with AI assistance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.country}</div>
                      <div className="text-sm text-blue-600">{testimonial.university}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for AI-Powered Success?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students who have achieved their dreams with our AI assistance.
            </p>
            <Button onClick={startApplication} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4">
              Start with AI Assistant
              <Bot className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                  <span className="ml-2 text-xl font-bold">StudyAbroad AI</span>
                </div>
                <p className="text-gray-400">Your AI-powered partner for international education.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">AI Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Smart University Matching</li>
                  <li>AI Letter Writing</li>
                  <li>Document Generation</li>
                  <li>Personalized Guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Destinations</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>United States</li>
                  <li>United Kingdom</li>
                  <li>Canada</li>
                  <li>Australia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>ai-support@studyabroad.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>24/7 AI Support</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 StudyAbroad AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">StudyAbroad AI Consultant</h1>
          <p className="text-gray-600">Your AI-powered journey to international education</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{Math.round(getProgressPercentage())}%</span>
          </div>
          <Progress value={getProgressPercentage()} className="h-2" />
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-xs ${index <= currentStep ? "text-blue-600 font-medium" : "text-gray-400"}`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {currentStep === 0 && <FileText className="h-5 w-5" />}
                  {currentStep === 1 && <Globe className="h-5 w-5" />}
                  {currentStep === 2 && <GraduationCap className="h-5 w-5" />}
                  {currentStep === 3 && <GraduationCap className="h-5 w-5" />}
                  {currentStep === 4 && <FileText className="h-5 w-5" />}
                  {currentStep === 5 && <CheckCircle className="h-5 w-5" />}
                  {currentStep === 6 && <Plane className="h-5 w-5" />}
                  {currentStep === 7 && <Trophy className="h-5 w-5" />}
                  {steps[currentStep]}
                </CardTitle>
                <CardDescription>
                  {currentStep === 0 && "Let's start by getting your basic information"}
                  {currentStep === 1 && "Choose your preferred study destination"}
                  {currentStep === 2 && "Select a university from your chosen country"}
                  {currentStep === 3 && "Pick a program that matches your interests"}
                  {currentStep === 4 && "Review the requirements for your selected program"}
                  {currentStep === 5 && "Complete your admission application process"}
                  {currentStep === 6 && "Prepare your visa application documents"}
                  {currentStep === 7 && "Congratulations! Your application journey is complete"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* All the existing step content remains the same */}
                {/* Registration Step */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    {!showConfirmations ? (
                      <form onSubmit={handleRegistration} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" required placeholder="Enter your full name" />
                          </div>
                          <div>
                            <Label htmlFor="country">Country of Residence</Label>
                            <select
                              id="country"
                              name="country"
                              required
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="">Select your country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Canada">Canada</option>
                              <option value="China">China</option>
                              <option value="Denmark">Denmark</option>
                              <option value="Egypt">Egypt</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Italy">Italy</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Norway">Norway</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Russia">Russia</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Singapore">Singapore</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Korea">South Korea</option>
                              <option value="Spain">Spain</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="UAE">United Arab Emirates</option>
                              <option value="UK">United Kingdom</option>
                              <option value="USA">United States</option>
                              <option value="Vietnam">Vietnam</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" name="email" type="email" required placeholder="Enter your email address" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="Enter your phone number with country code (e.g., +1234567890)"
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send Verification Codes
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Verify Your Contact Information</h3>
                          <p className="text-gray-600">
                            We've sent verification codes to your email and phone. Please enter them below to continue.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Email Verification */}
                          <Card
                            className={`border-2 ${userData.emailConfirmed ? "border-green-200 bg-green-50" : "border-blue-200 bg-blue-50"}`}
                          >
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-2 text-sm">
                                <CheckCircle
                                  className={`h-4 w-4 ${userData.emailConfirmed ? "text-green-600" : "text-gray-400"}`}
                                />
                                Email Verification
                              </CardTitle>
                              <CardDescription className="text-xs">Code sent to: {userData.email}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              {!userData.emailConfirmed ? (
                                <>
                                  <div>
                                    <Label htmlFor="emailCode" className="text-sm">
                                      Verification Code
                                    </Label>
                                    <Input
                                      id="emailCode"
                                      type="text"
                                      placeholder="Enter 6-digit code"
                                      maxLength={6}
                                      value={confirmationCodes.email}
                                      onChange={(e) =>
                                        setConfirmationCodes({ ...confirmationCodes, email: e.target.value })
                                      }
                                    />
                                  </div>
                                  <div className="text-xs text-gray-600 bg-gray-100 p-2 rounded">
                                    Demo Code: {confirmationCodes.generatedEmailCode}
                                  </div>
                                  <Button
                                    size="sm"
                                    onClick={() => verifyEmail()}
                                    disabled={isVerifying.email || confirmationCodes.email.length !== 6}
                                    className="w-full"
                                  >
                                    {isVerifying.email ? "Verifying..." : "Verify Email"}
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => resendEmailCode()}
                                    className="w-full"
                                  >
                                    Resend Code
                                  </Button>
                                </>
                              ) : (
                                <div className="text-center py-4">
                                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                  <p className="text-sm text-green-800 font-medium">Email Verified!</p>
                                </div>
                              )}
                            </CardContent>
                          </Card>

                          {/* Phone Verification */}
                          <Card
                            className={`border-2 ${userData.phoneConfirmed ? "border-green-200 bg-green-50" : "border-blue-200 bg-blue-50"}`}
                          >
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-2 text-sm">
                                <CheckCircle
                                  className={`h-4 w-4 ${userData.phoneConfirmed ? "text-green-600" : "text-gray-400"}`}
                                />
                                Phone Verification
                              </CardTitle>
                              <CardDescription className="text-xs">Code sent to: {userData.phone}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              {!userData.phoneConfirmed ? (
                                <>
                                  <div>
                                    <Label htmlFor="phoneCode" className="text-sm">
                                      Verification Code
                                    </Label>
                                    <Input
                                      id="phoneCode"
                                      type="text"
                                      placeholder="Enter 6-digit code"
                                      maxLength={6}
                                      value={confirmationCodes.phone}
                                      onChange={(e) =>
                                        setConfirmationCodes({ ...confirmationCodes, phone: e.target.value })
                                      }
                                    />
                                  </div>
                                  <div className="text-xs text-gray-600 bg-gray-100 p-2 rounded">
                                    Demo Code: {confirmationCodes.generatedPhoneCode}
                                  </div>
                                  <Button
                                    size="sm"
                                    onClick={() => verifyPhone()}
                                    disabled={isVerifying.phone || confirmationCodes.phone.length !== 6}
                                    className="w-full"
                                  >
                                    {isVerifying.phone ? "Verifying..." : "Verify Phone"}
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => resendPhoneCode()}
                                    className="w-full"
                                  >
                                    Resend Code
                                  </Button>
                                </>
                              ) : (
                                <div className="text-center py-4">
                                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                  <p className="text-sm text-green-800 font-medium">Phone Verified!</p>
                                </div>
                              )}
                            </CardContent>
                          </Card>
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
                              Continue to Country Selection
                            </Button>
                          </div>
                        )}

                        <div className="text-center">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setShowConfirmations(false)
                              setUserData({ ...userData, emailConfirmed: false, phoneConfirmed: false })
                              setConfirmationCodes({
                                email: "",
                                phone: "",
                                generatedEmailCode: "",
                                generatedPhoneCode: "",
                              })
                            }}
                          >
                            Back to Registration Form
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Country Selection */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        Selected Country: {userData.country.flag} {userData.country.name}
                      </Badge>
                    </div>
                    {countries.map((country) => (
                      <Card
                        key={country.id}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => selectCountry(country)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-4xl mb-2">{country.flag}</div>
                          <h3 className="font-semibold">{country.name}</h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* University Selection */}
                {currentStep === 2 && userData.country && (
                  <div className="space-y-4">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        Selected Country: {userData.country.flag} {userData.country.name}
                      </Badge>
                    </div>
                    {universities[userData.country.id] && universities[userData.country.id].length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {universities[userData.country.id].map((university) => (
                          <Card
                            key={university.id}
                            className="cursor-pointer hover:shadow-md transition-shadow"
                            onClick={() => selectUniversity(university)}
                          >
                            <CardContent className="p-4">
                              <h3 className="font-semibold text-lg">{university.name}</h3>
                              <p className="text-gray-600">{university.location}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <p className="text-gray-600 mb-4">No universities found for this country.</p>
                        <Button onClick={() => setCurrentStep(1)}>Select Another Country</Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Program Selection */}
                {currentStep === 3 && userData.university && (
                  <div className="space-y-4">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        Selected University: {userData.university.name}
                      </Badge>
                    </div>
                    {programs[userData.university.id] && programs[userData.university.id].length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programs[userData.university.id].map((program) => (
                          <Card
                            key={program.id}
                            className="cursor-pointer hover:shadow-md transition-shadow"
                            onClick={() => selectProgram(program)}
                          >
                            <CardContent className="p-4">
                              <h3 className="font-semibold text-lg">{program.name}</h3>
                              <p className="text-gray-600">
                                {program.degree} • {program.duration}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <p className="text-gray-600 mb-4">No programs found for this university.</p>
                        <Button onClick={() => setCurrentStep(2)}>Select Another University</Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Program Requirements */}
                {currentStep === 4 && userData.program && (
                  <div className="space-y-6">
                    <div className="mb-4">
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
                )}

                {/* Admission Process with AI Letter Generator */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Phase 1: Admission Application</h3>
                      <p className="text-gray-600">Complete the following steps for your university application</p>
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
                                  index === admissionProgress ? "border-blue-600" : "border-gray-300"
                                }`}
                              />
                            )}
                            <span className={index < admissionProgress ? "text-green-800" : "text-gray-700"}>
                              {step}
                            </span>
                          </div>
                          {index === admissionProgress && admissionProgress < admissionSteps.length && (
                            <Button size="sm" onClick={completeAdmissionStep}>
                              Complete
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* AI Letter Generator */}
                    <AILetterGenerator userData={userData} />

                    {admissionProgress === admissionSteps.length && (
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-green-800 font-medium">Admission application completed!</p>
                        <p className="text-green-600 text-sm">Moving to visa process...</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Visa Process with AI Document Assistant */}
                {currentStep === 6 && (
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

                    {/* AI Document Assistant */}
                    <AIDocumentAssistant visaRequirements={visaRequirements} userData={userData} />

                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="text-blue-800">
                        Progress: {Object.values(visaChecklist).filter(Boolean).length} / {visaRequirements.length}{" "}
                        completed
                      </span>
                      <Button
                        onClick={completeVisaProcess}
                        disabled={Object.values(visaChecklist).filter(Boolean).length !== visaRequirements.length}
                      >
                        Complete Visa Process
                      </Button>
                    </div>
                  </div>
                )}

                {/* Completion */}
                {currentStep === 7 && (
                  <div className="text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-green-600" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2">Congratulations, {userData.name}!</h2>
                      <p className="text-gray-600 mb-4">
                        You have successfully completed your AI-assisted application process for{" "}
                        {userData.program?.name} at {userData.university?.name}.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
                      <ul className="text-left text-green-700 space-y-2">
                        <li>• Monitor your email for updates from the university</li>
                        <li>• Track your visa application status</li>
                        <li>• Prepare for your departure with AI travel assistance</li>
                        <li>• Connect with other students through our AI matching</li>
                      </ul>
                    </div>

                    <div className="text-2xl font-bold text-blue-600">
                      🎉 Best of Luck with Your AI-Powered Journey! 🎉
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="lg:col-span-1">
            {showAIAssistant && currentStep >= 0 && currentStep < 7 && (
              <AIAssistant step={currentStep} userData={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
