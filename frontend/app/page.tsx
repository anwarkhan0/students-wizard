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
  BookOpen,
} from "lucide-react"
import Homepage from "@/components/Homepage"
import App from "next/app"
import Application from "@/components/Application"

// Mock data
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

// Departments for each university
const departments = {
  1: [
    // Harvard University
    { id: 1, name: "School of Engineering and Applied Sciences", icon: "⚙️" },
    { id: 2, name: "Harvard Business School", icon: "💼" },
    { id: 3, name: "Harvard Medical School", icon: "🏥" },
    { id: 4, name: "Faculty of Arts and Sciences", icon: "🎨" },
    { id: 5, name: "Harvard Law School", icon: "⚖️" },
  ],
  2: [
    // Stanford University
    { id: 6, name: "School of Engineering", icon: "⚙️" },
    { id: 7, name: "Graduate School of Business", icon: "💼" },
    { id: 8, name: "School of Medicine", icon: "🏥" },
    { id: 9, name: "School of Humanities and Sciences", icon: "🎨" },
    { id: 10, name: "Stanford Law School", icon: "⚖️" },
  ],
  3: [
    // MIT
    { id: 11, name: "School of Engineering", icon: "⚙️" },
    { id: 12, name: "MIT Sloan School of Management", icon: "💼" },
    { id: 13, name: "School of Science", icon: "🔬" },
    { id: 14, name: "School of Architecture and Planning", icon: "🏗️" },
  ],
  4: [
    // Oxford University
    { id: 15, name: "Department of Engineering Science", icon: "⚙️" },
    { id: 16, name: "Saïd Business School", icon: "💼" },
    { id: 17, name: "Medical Sciences Division", icon: "🏥" },
    { id: 18, name: "Humanities Division", icon: "🎨" },
    { id: 19, name: "Faculty of Law", icon: "⚖️" },
  ],
  5: [
    // Cambridge University
    { id: 20, name: "Department of Engineering", icon: "⚙️" },
    { id: 21, name: "Judge Business School", icon: "💼" },
    { id: 22, name: "School of Clinical Medicine", icon: "🏥" },
    { id: 23, name: "Faculty of Arts and Humanities", icon: "🎨" },
    { id: 24, name: "Faculty of Law", icon: "⚖️" },
  ],
  6: [
    // Imperial College London
    { id: 25, name: "Faculty of Engineering", icon: "⚙️" },
    { id: 26, name: "Imperial College Business School", icon: "💼" },
    { id: 27, name: "Faculty of Medicine", icon: "🏥" },
    { id: 28, name: "Faculty of Natural Sciences", icon: "🔬" },
  ],
  7: [
    // University of Toronto
    { id: 29, name: "Faculty of Applied Science & Engineering", icon: "⚙️" },
    { id: 30, name: "Rotman School of Management", icon: "💼" },
    { id: 31, name: "Faculty of Medicine", icon: "🏥" },
    { id: 32, name: "Faculty of Arts & Science", icon: "🎨" },
    { id: 33, name: "Faculty of Law", icon: "⚖️" },
  ],
  8: [
    // McGill University
    { id: 34, name: "Faculty of Engineering", icon: "⚙️" },
    { id: 35, name: "Desautels Faculty of Management", icon: "💼" },
    { id: 36, name: "Faculty of Medicine and Health Sciences", icon: "🏥" },
    { id: 37, name: "Faculty of Arts", icon: "🎨" },
    { id: 38, name: "Faculty of Law", icon: "⚖️" },
  ],
  9: [
    // UBC
    { id: 39, name: "Faculty of Applied Science", icon: "⚙️" },
    { id: 40, name: "Sauder School of Business", icon: "💼" },
    { id: 41, name: "Faculty of Medicine", icon: "🏥" },
    { id: 42, name: "Faculty of Arts", icon: "🎨" },
    { id: 43, name: "Peter A. Allard School of Law", icon: "⚖️" },
  ],
  10: [
    // University of Melbourne
    { id: 44, name: "Melbourne School of Engineering", icon: "⚙️" },
    { id: 45, name: "Melbourne Business School", icon: "💼" },
    { id: 46, name: "Faculty of Medicine, Dentistry and Health Sciences", icon: "🏥" },
    { id: 47, name: "Faculty of Arts", icon: "🎨" },
    { id: 48, name: "Melbourne Law School", icon: "⚖️" },
  ],
  11: [
    // University of Sydney
    { id: 49, name: "Faculty of Engineering", icon: "⚙️" },
    { id: 50, name: "Business School", icon: "💼" },
    { id: 51, name: "Faculty of Medicine and Health", icon: "🏥" },
    { id: 52, name: "Faculty of Arts and Social Sciences", icon: "🎨" },
    { id: 53, name: "Sydney Law School", icon: "⚖️" },
  ],
  12: [
    // Australian National University
    { id: 54, name: "College of Engineering and Computer Science", icon: "⚙️" },
    { id: 55, name: "ANU College of Business and Economics", icon: "💼" },
    { id: 56, name: "ANU Medical School", icon: "🏥" },
    { id: 57, name: "College of Arts and Social Sciences", icon: "🎨" },
    { id: 58, name: "ANU College of Law", icon: "⚖️" },
  ],
  13: [
    // Technical University of Munich
    { id: 59, name: "School of Engineering and Design", icon: "⚙️" },
    { id: 60, name: "TUM School of Management", icon: "💼" },
    { id: 61, name: "TUM School of Medicine", icon: "🏥" },
    { id: 62, name: "TUM School of Natural Sciences", icon: "🔬" },
  ],
  14: [
    // Heidelberg University
    { id: 63, name: "Faculty of Engineering Sciences", icon: "⚙️" },
    { id: 64, name: "Faculty of Economics and Social Sciences", icon: "💼" },
    { id: 65, name: "Faculty of Medicine", icon: "🏥" },
    { id: 66, name: "Faculty of Philosophy", icon: "🎨" },
    { id: 67, name: "Faculty of Law", icon: "⚖️" },
  ],
  15: [
    // Humboldt University of Berlin
    { id: 68, name: "Faculty of Mathematics and Natural Sciences", icon: "🔬" },
    { id: 69, name: "School of Business and Economics", icon: "💼" },
    { id: 70, name: "Charité - Universitätsmedizin Berlin", icon: "🏥" },
    { id: 71, name: "Faculty of Humanities and Social Sciences", icon: "🎨" },
    { id: 72, name: "Faculty of Law", icon: "⚖️" },
  ],
}

// Programs organized by department
const programs = {
  // Engineering departments
  1: [
    // Harvard SEAS
    { id: 1, name: "Computer Science", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 2, name: "Electrical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 3, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 4, name: "Computer Science", duration: "2 years", degree: "Master", level: "Graduate" },
  ],
  6: [
    // Stanford Engineering
    { id: 5, name: "Computer Science", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 6, name: "Electrical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 7, name: "Mechanical Engineering", duration: "2 years", degree: "Master", level: "Graduate" },
  ],
  11: [
    // MIT Engineering
    {
      id: 8,
      name: "Computer Science and Engineering",
      duration: "4 years",
      degree: "Bachelor",
      level: "Undergraduate",
    },
    {
      id: 9,
      name: "Electrical Engineering and Computer Science",
      duration: "2 years",
      degree: "Master",
      level: "Graduate",
    },
    { id: 10, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
  ],

  // Business departments
  2: [
    // Harvard Business School
    { id: 11, name: "Business Administration", duration: "2 years", degree: "MBA", level: "Graduate" },
    { id: 12, name: "Executive Education", duration: "1 year", degree: "Certificate", level: "Executive" },
  ],
  7: [
    // Stanford GSB
    { id: 13, name: "Business Administration", duration: "2 years", degree: "MBA", level: "Graduate" },
    { id: 14, name: "Management Science & Engineering", duration: "2 years", degree: "Master", level: "Graduate" },
  ],
  12: [
    // MIT Sloan
    { id: 15, name: "Business Administration", duration: "2 years", degree: "MBA", level: "Graduate" },
    { id: 16, name: "Management", duration: "1 year", degree: "Master", level: "Graduate" },
  ],

  // Medical departments
  3: [
    // Harvard Medical School
    { id: 17, name: "Medicine", duration: "4 years", degree: "MD", level: "Graduate" },
    { id: 18, name: "Biomedical Sciences", duration: "5 years", degree: "PhD", level: "Graduate" },
  ],
  8: [
    // Stanford Medicine
    { id: 19, name: "Medicine", duration: "4 years", degree: "MD", level: "Graduate" },
    { id: 20, name: "Biomedical Informatics", duration: "2 years", degree: "Master", level: "Graduate" },
  ],

  // Arts and Sciences
  4: [
    // Harvard FAS
    { id: 21, name: "Psychology", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 22, name: "Economics", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 23, name: "History", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 24, name: "Psychology", duration: "5 years", degree: "PhD", level: "Graduate" },
  ],
  9: [
    // Stanford H&S
    { id: 25, name: "Psychology", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 26, name: "Economics", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 27, name: "International Relations", duration: "2 years", degree: "Master", level: "Graduate" },
  ],

  // Law departments
  5: [
    // Harvard Law
    { id: 28, name: "Juris Doctor", duration: "3 years", degree: "JD", level: "Graduate" },
    { id: 29, name: "Master of Laws", duration: "1 year", degree: "LLM", level: "Graduate" },
  ],
  10: [
    // Stanford Law
    { id: 30, name: "Juris Doctor", duration: "3 years", degree: "JD", level: "Graduate" },
    { id: 31, name: "Master of Laws", duration: "1 year", degree: "LLM", level: "Graduate" },
  ],

  // Add more programs for other departments...
  15: [
    // Oxford Engineering
    { id: 32, name: "Engineering Science", duration: "4 years", degree: "MEng", level: "Undergraduate" },
    { id: 33, name: "Computer Science", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
  ],
  20: [
    // Cambridge Engineering
    { id: 34, name: "Engineering", duration: "4 years", degree: "MEng", level: "Undergraduate" },
    { id: 35, name: "Computer Science", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
  ],
  25: [
    // Imperial Engineering
    { id: 36, name: "Aeronautical Engineering", duration: "4 years", degree: "MEng", level: "Undergraduate" },
    { id: 37, name: "Civil Engineering", duration: "4 years", degree: "MEng", level: "Undergraduate" },
  ],
  29: [
    // UofT Engineering
    { id: 38, name: "Computer Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 39, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
  ],
  44: [
    // Melbourne Engineering
    { id: 40, name: "Software Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 41, name: "Chemical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
  ],
  59: [
    // TUM Engineering
    { id: 42, name: "Mechanical Engineering", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
    { id: 43, name: "Electrical Engineering", duration: "2 years", degree: "Master", level: "Graduate" },
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
  11: {
    gpa: "3.6+",
    tests: ["GMAT: 700+", "TOEFL: 100+"],
    documents: ["Transcripts", "Work Experience", "Essays", "Letters of Recommendation"],
    deadline: "January 15, 2025",
  },
  17: {
    gpa: "3.8+",
    tests: ["MCAT: 515+", "TOEFL: 100+"],
    documents: ["Transcripts", "Letters of Recommendation", "Personal Statement", "Clinical Experience"],
    deadline: "October 1, 2024",
  },
  21: {
    gpa: "3.5+",
    tests: ["GRE: 310+", "TOEFL: 90+"],
    documents: ["Transcripts", "Letters of Recommendation", "Personal Statement", "Research Experience"],
    deadline: "December 15, 2024",
  },
  28: {
    gpa: "3.7+",
    tests: ["LSAT: 170+", "TOEFL: 100+"],
    documents: ["Transcripts", "Letters of Recommendation", "Personal Statement", "Resume"],
    deadline: "February 1, 2025",
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
          aiSuggestion = `${userData.university?.name} has excellent departments. Consider your career goals when selecting a department - each offers unique opportunities and specializations.`
          break
        case 4:
          aiSuggestion = `The ${userData.program?.name} program in ${userData.department?.name} is an excellent choice. Make sure to highlight relevant experience and skills in your application.`
          break
        case 5:
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

I am writing to express my strong interest in the ${userData.program?.name} program in the ${userData.department?.name} at ${userData.university?.name}. As an aspiring student with a passion for ${userData.program?.name.toLowerCase()}, I am excited about the opportunity to contribute to and learn from your esteemed institution.

My academic journey has been driven by a deep curiosity about ${userData.program?.name.toLowerCase()} and its applications in solving real-world challenges. Through my previous studies and experiences, I have developed a solid foundation in the fundamental concepts and principles that will serve me well in your program.

${userInput.background && `Background: ${userInput.background}`}

${userInput.experience && `Experience: ${userInput.experience}`}

What particularly attracts me to ${userData.university?.name} is its reputation for excellence in ${userData.program?.name.toLowerCase()} within the ${userData.department?.name}. The department's commitment to fostering innovation and critical thinking aligns perfectly with my academic and professional aspirations. ${userInput.whyUniversity && userInput.whyUniversity}

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
        case "Statement of Purpose":
          template = `STATEMENT OF PURPOSE

${userData.program?.name || "[Program Name]"} Program
${userData.department?.name || "[Department Name]"}
${userData.university?.name || "[University Name]"}

Dear Admissions Committee,

I am writing to express my strong interest in pursuing the ${userData.program?.name || "[Program Name]"} program in the ${userData.department?.name || "[Department Name]"} at ${userData.university?.name || "[University Name]"}. This statement outlines my academic background, professional goals, and reasons for choosing your esteemed institution.

ACADEMIC BACKGROUND
[Describe your educational background, relevant coursework, and academic achievements]

PROFESSIONAL EXPERIENCE
[Detail your work experience, internships, and relevant projects]

RESEARCH INTERESTS
[Explain your research interests and how they align with the program]

WHY THIS UNIVERSITY AND DEPARTMENT
[Explain why you chose this specific university, department, and program]

CAREER GOALS
[Describe your short-term and long-term career objectives]

CONCLUSION
I am confident that the ${userData.program?.name || "[Program Name]"} program in the ${userData.department?.name || "[Department Name]"} at ${userData.university?.name || "[University Name]"} will provide me with the knowledge and skills necessary to achieve my career goals.

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

I, [Sponsor Name], hereby confirm that I will provide financial support to ${userData.name || "[Student Name]"} for their studies at ${userData.university?.name || "[University Name]"} in the ${userData.program?.name || "[Program Name]"} program within the ${userData.department?.name || "[Department Name]"}.

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

This document type is not available for AI assistance. Please refer to the official country requirements on their platforms for specific guidelines and templates.

For ${docType}, you should:
- Visit the official embassy or consulate website
- Check the specific requirements for your country
- Download official forms and templates
- Follow the provided guidelines exactly

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
        <CardDescription>Generate templates for visa documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {visaRequirements.map((requirement, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => generateDocumentTemplate(requirement)}
              disabled={isGenerating}
              className="text-left justify-start"
            >
              {requirement}
            </Button>
          ))}
        </div>

        {isGenerating && (
          <div className="text-center py-4">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-600">Generating template for {selectedDocument}...</p>
          </div>
        )}

        {documentTemplate && (
          <div className="space-y-3">
            <h4 className="font-semibold">Template for: {selectedDocument}</h4>
            <div className="bg-white p-4 rounded-lg border max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">{documentTemplate}</pre>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(documentTemplate)}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Template
              </Button>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download as PDF
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
  const [showAIAssistant, setShowAIAssistant] = useState(true)

  const steps = [
    "Registration Survey",
    "AI Recommendations",
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
      age: formData.get("age") as string,
      nationality: formData.get("nationality") as string,
      currentCountry: formData.get("currentCountry") as string,
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
  /* --------------------------------------------------------------------- */

  // Landing Page Component (same as before but with updated testimonials)
  if (currentStep === -1) {
    return (
     <Homepage startApplication={startApplication} countries={countries} testimonials={testimonials} />
    )
  }

  return (
   <Application getProgressPercentage={getProgressPercentage} steps={steps} currentStep={currentStep} showConfirmations={showConfirmations} handleRegistration={handleRegistration} countries={countries} showAIAssistant={showAIAssistant} AIAssistant={AIAssistant} userData={userData} />
  )
}
