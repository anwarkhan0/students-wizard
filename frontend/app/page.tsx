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
                  {currentStep === 2 && <FileText className="h-5 w-5" />}
                  {currentStep === 3 && <CheckCircle className="h-5 w-5" />}
                  {currentStep === 4 && <Plane className="h-5 w-5" />}
                  {currentStep === 5 && <Trophy className="h-5 w-5" />}
                  {steps[currentStep]}
                </CardTitle>
                <CardDescription>
                  {currentStep === 0 && "Complete our comprehensive survey to get personalized AI recommendations"}
                  {currentStep === 1 && "Review AI-generated recommendations based on your profile"}
                  {currentStep === 2 && "Review the requirements for your selected program"}
                  {currentStep === 3 && "Complete your admission application process"}
                  {currentStep === 4 && "Prepare your visa application documents"}
                  {currentStep === 5 && "Congratulations! Your application journey is complete"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Registration Survey Step */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    {!showConfirmations ? (
                      <form onSubmit={handleRegistration} className="space-y-6">
                        {/* Personal Information */}
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Personal Information
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input id="name" name="name" required placeholder="Enter your full name" />
                            </div>
                            <div>
                              <Label htmlFor="age">Age *</Label>
                              <Input
                                id="age"
                                name="age"
                                type="number"
                                min="16"
                                max="65"
                                required
                                placeholder="Your age"
                              />
                            </div>
                            <div>
                              <Label htmlFor="nationality">Nationality *</Label>
                              <select
                                id="nationality"
                                name="nationality"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select your nationality</option>
                                <option value="Afghan">Afghan</option>
                                <option value="Albanian">Albanian</option>
                                <option value="Algerian">Algerian</option>
                                <option value="American">American</option>
                                <option value="Argentinian">Argentinian</option>
                                <option value="Australian">Australian</option>
                                <option value="Austrian">Austrian</option>
                                <option value="Bangladeshi">Bangladeshi</option>
                                <option value="Belgian">Belgian</option>
                                <option value="Brazilian">Brazilian</option>
                                <option value="British">British</option>
                                <option value="Canadian">Canadian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Danish">Danish</option>
                                <option value="Egyptian">Egyptian</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Indian">Indian</option>
                                <option value="Indonesian">Indonesian</option>
                                <option value="Iranian">Iranian</option>
                                <option value="Iraqi">Iraqi</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Jordanian">Jordanian</option>
                                <option value="Kenyan">Kenyan</option>
                                <option value="Malaysian">Malaysian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Dutch">Dutch</option>
                                <option value="Nigerian">Nigerian</option>
                                <option value="Norwegian">Norwegian</option>
                                <option value="Pakistani">Pakistani</option>
                                <option value="Filipino">Filipino</option>
                                <option value="Polish">Polish</option>
                                <option value="Russian">Russian</option>
                                <option value="Saudi">Saudi</option>
                                <option value="Singaporean">Singaporean</option>
                                <option value="South African">South African</option>
                                <option value="South Korean">South Korean</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Swedish">Swedish</option>
                                <option value="Swiss">Swiss</option>
                                <option value="Thai">Thai</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Emirati">Emirati</option>
                                <option value="Vietnamese">Vietnamese</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="currentCountry">Current Country of Residence *</Label>
                              <select
                                id="currentCountry"
                                name="currentCountry"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select your current country</option>
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email address"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="Enter your phone number with country code"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Academic Background */}
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" />
                            Academic Background
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="currentEducation">Current Education Level *</Label>
                              <select
                                id="currentEducation"
                                name="currentEducation"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select your current level</option>
                                <option value="High School">High School</option>
                                <option value="High School Graduate">High School Graduate</option>
                                <option value="Bachelor's Student">Bachelor's Student</option>
                                <option value="Bachelor's Graduate">Bachelor's Graduate</option>
                                <option value="Master's Student">Master's Student</option>
                                <option value="Master's Graduate">Master's Graduate</option>
                                <option value="PhD Student">PhD Student</option>
                                <option value="PhD Graduate">PhD Graduate</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="gpa">GPA/Grade Average *</Label>
                              <Input id="gpa" name="gpa" required placeholder="e.g., 3.5/4.0 or 85%" />
                            </div>
                            <div>
                              <Label htmlFor="fieldOfStudy">Current/Previous Field of Study *</Label>
                              <Input
                                id="fieldOfStudy"
                                name="fieldOfStudy"
                                required
                                placeholder="e.g., Computer Science, Business"
                              />
                            </div>
                            <div>
                              <Label htmlFor="institution">Current/Previous Institution</Label>
                              <Input id="institution" name="institution" placeholder="Name of your school/university" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <Label htmlFor="academicAchievements">Academic Achievements & Awards</Label>
                            <Textarea
                              id="academicAchievements"
                              name="academicAchievements"
                              placeholder="List any scholarships, honors, awards, or notable achievements..."
                              rows={3}
                            />
                          </div>
                        </div>

                        {/* English Proficiency */}
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            English Proficiency
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="englishLevel">English Proficiency Level *</Label>
                              <select
                                id="englishLevel"
                                name="englishLevel"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select your level</option>
                                <option value="Native Speaker">Native Speaker</option>
                                <option value="Advanced (C1-C2)">Advanced (C1-C2)</option>
                                <option value="Upper Intermediate (B2)">Upper Intermediate (B2)</option>
                                <option value="Intermediate (B1)">Intermediate (B1)</option>
                                <option value="Pre-Intermediate (A2)">Pre-Intermediate (A2)</option>
                                <option value="Beginner (A1)">Beginner (A1)</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="englishTests">English Test Scores</Label>
                              <Input
                                id="englishTests"
                                name="englishTests"
                                placeholder="e.g., IELTS: 7.5, TOEFL: 100, Duolingo: 120"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Target Countries */}
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Target Study Destinations
                          </h3>
                          <Label className="text-sm text-gray-600 mb-3 block">
                            Select all countries you're interested in studying (multiple selection allowed) *
                          </Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {countries.map((country) => (
                              <div key={country.id} className="flex items-center space-x-2">
                                <Checkbox id={`country-${country.id}`} name="targetCountries" value={country.id} />
                                <Label htmlFor={`country-${country.id}`} className="text-sm cursor-pointer">
                                  {country.flag} {country.name}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Target Programs */}
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Program Interests
                          </h3>
                          <Label className="text-sm text-gray-600 mb-3 block">
                            Select all fields/programs you're interested in (multiple selection allowed) *
                          </Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "Computer Science & IT",
                              "Business & Management",
                              "Engineering",
                              "Medicine & Healthcare",
                              "Law",
                              "Psychology",
                              "Economics & Finance",
                              "Data Science & Analytics",
                              "Arts & Design",
                              "Natural Sciences",
                              "Social Sciences",
                              "Education",
                              "Architecture",
                              "Environmental Science",
                              "International Relations",
                              "Marketing",
                              "Mechanical Engineering",
                              "Electrical Engineering",
                              "Civil Engineering",
                              "Biomedical Engineering",
                              "Chemical Engineering",
                              "Physics",
                              "Chemistry",
                              "Biology",
                              "Mathematics",
                              "Statistics",
                              "Philosophy",
                              "History",
                              "Literature",
                              "Linguistics",
                              "Journalism & Media",
                              "Public Health",
                              "Nursing",
                              "Pharmacy",
                              "Dentistry",
                              "Veterinary Medicine",
                            ].map((program) => (
                              <div key={program} className="flex items-center space-x-2">
                                <Checkbox id={`program-${program}`} name="targetPrograms" value={program} />
                                <Label htmlFor={`program-${program}`} className="text-sm cursor-pointer">
                                  {program}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Study Level Preference */}
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            Study Level Preference
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="studyLevel">Preferred Study Level *</Label>
                              <select
                                id="studyLevel"
                                name="studyLevel"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select study level</option>
                                <option value="Bachelor's">Bachelor's Degree</option>
                                <option value="Master's">Master's Degree</option>
                                <option value="PhD">PhD/Doctorate</option>
                                <option value="Certificate">Certificate Program</option>
                                <option value="Diploma">Diploma</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="startDate">Preferred Start Date *</Label>
                              <select
                                id="startDate"
                                name="startDate"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select start date</option>
                                <option value="Fall 2024">Fall 2024</option>
                                <option value="Spring 2025">Spring 2025</option>
                                <option value="Fall 2025">Fall 2025</option>
                                <option value="Spring 2026">Spring 2026</option>
                                <option value="Fall 2026">Fall 2026</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="budget">Budget Range (USD per year)</Label>
                              <select
                                id="budget"
                                name="budget"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select budget range</option>
                                <option value="Under $20,000">Under $20,000</option>
                                <option value="$20,000 - $40,000">$20,000 - $40,000</option>
                                <option value="$40,000 - $60,000">$40,000 - $60,000</option>
                                <option value="$60,000 - $80,000">$60,000 - $80,000</option>
                                <option value="Above $80,000">Above $80,000</option>
                                <option value="No specific limit">No specific limit</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Experience & Background */}
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                            <Trophy className="h-5 w-5" />
                            Experience & Background
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="workExperience">Work Experience</Label>
                              <Textarea
                                id="workExperience"
                                name="workExperience"
                                placeholder="Describe your work experience, internships, part-time jobs, etc..."
                                rows={3}
                              />
                            </div>
                            <div>
                              <Label htmlFor="researchExperience">Research Experience</Label>
                              <Textarea
                                id="researchExperience"
                                name="researchExperience"
                                placeholder="Any research projects, publications, or academic research experience..."
                                rows={3}
                              />
                            </div>
                            <div>
                              <Label htmlFor="extracurricular">Extracurricular Activities</Label>
                              <Textarea
                                id="extracurricular"
                                name="extracurricular"
                                placeholder="Clubs, sports, volunteering, leadership roles, hobbies..."
                                rows={3}
                              />
                            </div>
                            <div>
                              <Label htmlFor="careerGoals">Career Goals & Motivation</Label>
                              <Textarea
                                id="careerGoals"
                                name="careerGoals"
                                placeholder="What are your career aspirations? Why do you want to study abroad?"
                                rows={4}
                              />
                            </div>
                          </div>
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          Complete Survey & Send Verification Codes
                        </Button>
                      </form>
                    ) : (
                      // Keep the existing verification code section unchanged
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
                              Continue to AI Recommendations
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

                {/* AI Recommendations Step */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
                        <Bot className="h-12 w-12 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">AI-Powered Recommendations</h2>
                        <p className="text-blue-100">
                          Based on your survey responses, our AI has analyzed your profile and generated personalized
                          recommendations
                        </p>
                      </div>
                    </div>

                    {/* User Profile Summary */}
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-800">
                          <FileText className="h-5 w-5" />
                          Your Profile Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Name:</strong> {userData.name}
                          </div>
                          <div>
                            <strong>Current Level:</strong> {userData.currentEducation}
                          </div>
                          <div>
                            <strong>Field of Study:</strong> {userData.fieldOfStudy}
                          </div>
                          <div>
                            <strong>English Level:</strong> {userData.englishLevel}
                          </div>
                          <div>
                            <strong>Preferred Level:</strong> {userData.studyLevel}
                          </div>
                          <div>
                            <strong>Start Date:</strong> {userData.startDate}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Top Recommendations */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-purple-600" />
                        Top AI Recommendations for You
                      </h3>

                      {/* Recommendation Cards */}
                      <div className="grid grid-cols-1 gap-6">
                        {/* Recommendation 1 */}
                        <Card
                          className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => {
                            setUserData((prev) => ({
                              ...prev,
                              country: countries[0], // US
                              university: universities[1] ? universities[1][0] : { id: 1, name: "Harvard University", location: "Cambridge, MA" },
                              department: departments[1] ? departments[1][0] : { id: 1, name: "School of Engineering and Applied Sciences", icon: "⚙️" },
                              program: programs[1] ? programs[1][0] : { id: 1, name: "Computer Science", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
                            }))
                            setCurrentStep(2)
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                  <Trophy className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">Computer Science - Harvard University</h4>
                                  <p className="text-gray-600">
                                    🇺🇸 United States • School of Engineering and Applied Sciences
                                  </p>
                                </div>
                              </div>
                              <Badge className="bg-green-100 text-green-800">95% Match</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700">
                              <p>
                                <strong>Why recommended:</strong> Perfect match for your CS background and high academic
                                performance
                              </p>
                              <p>
                                <strong>Program:</strong> Bachelor of Science in Computer Science (4 years)
                              </p>
                              <p>
                                <strong>Requirements:</strong> GPA 3.8+, SAT 1500+, TOEFL 100+
                              </p>
                              <p>
                                <strong>Estimated Cost:</strong> $75,000/year
                              </p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Badge variant="outline">Top Ranked</Badge>
                              <Badge variant="outline">Research Opportunities</Badge>
                              <Badge variant="outline">Strong Alumni Network</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Recommendation 2 */}
                        <Card
                          className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => {
                            setUserData((prev) => ({
                              ...prev,
                              country: countries[1], // UK
                              university: universities[2] ? universities[2][0] : { id: 4, name: "Oxford University", location: "Oxford" },
                              department: departments[15] ? departments[15][0] : { id: 15, name: "Department of Engineering Science", icon: "⚙️" },
                              program: programs[15] ? programs[15][0] : { id: 32, name: "Engineering Science", duration: "4 years", degree: "MEng", level: "Undergraduate" },
                            }))
                            setCurrentStep(2)
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full">
                                  <Award className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">Engineering Science - Oxford University</h4>
                                  <p className="text-gray-600">🇬🇧 United Kingdom • Department of Engineering Science</p>
                                </div>
                              </div>
                              <Badge className="bg-blue-100 text-blue-800">92% Match</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700">
                              <p>
                                <strong>Why recommended:</strong> Excellent for your engineering interests and
                                international exposure
                              </p>
                              <p>
                                <strong>Program:</strong> Master of Engineering (MEng) in Engineering Science (4 years)
                              </p>
                              <p>
                                <strong>Requirements:</strong> GPA 3.7+, A-levels AAA, IELTS 7.5+
                              </p>
                              <p>
                                <strong>Estimated Cost:</strong> £45,000/year
                              </p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Badge variant="outline">Historic Institution</Badge>
                              <Badge variant="outline">Tutorial System</Badge>
                              <Badge variant="outline">Global Recognition</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Recommendation 3 */}
                        <Card
                          className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => {
                            setUserData((prev) => ({
                              ...prev,
                              country: countries[2], // Canada
                              university: universities[3] ? universities[3][0] : { id: 7, name: "University of Toronto", location: "Toronto" },
                              department: departments[29] ? departments[29][0] : { id: 29, name: "Faculty of Applied Science & Engineering", icon: "⚙️" },
                              program: programs[29] ? programs[29][0] : { id: 38, name: "Computer Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
                            }))
                            setCurrentStep(2)
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="bg-purple-100 p-2 rounded-full">
                                  <Star className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    Computer Engineering - University of Toronto
                                  </h4>
                                  <p className="text-gray-600">🇨🇦 Canada • Faculty of Applied Science & Engineering</p>
                                </div>
                              </div>
                              <Badge className="bg-purple-100 text-purple-800">89% Match</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700">
                              <p>
                                <strong>Why recommended:</strong> Great balance of quality education and affordability
                              </p>
                              <p>
                                <strong>Program:</strong> Bachelor of Applied Science in Computer Engineering (4 years)
                              </p>
                              <p>
                                <strong>Requirements:</strong> GPA 3.5+, SAT 1400+, TOEFL 95+
                              </p>
                              <p>
                                <strong>Estimated Cost:</strong> CAD $58,000/year
                              </p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Badge variant="outline">Co-op Programs</Badge>
                              <Badge variant="outline">Multicultural</Badge>
                              <Badge variant="outline">Post-Grad Work Permit</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        {/* More Recommendations */}
                        <Card
                          className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => {
                            setUserData((prev) => ({
                              ...prev,
                              country: countries[3], // Australia
                              university: universities[4] ? universities[4][0] : { id: 10, name: "University of Melbourne", location: "Melbourne" },
                              department: departments[44] ? departments[44][0] : { id: 44, name: "Melbourne School of Engineering", icon: "⚙️" },
                              program: programs[44] ? programs[44][0] : { id: 40, name: "Software Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
                            }))
                            setCurrentStep(2)
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                  <GraduationCap className="h-6 w-6 text-orange-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">
                                    Software Engineering - University of Melbourne
                                  </h4>
                                  <p className="text-gray-600">🇦🇺 Australia • Melbourne School of Engineering</p>
                                </div>
                              </div>
                              <Badge className="bg-orange-100 text-orange-800">87% Match</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700">
                              <p>
                                <strong>Why recommended:</strong> Strong tech industry connections and beautiful campus
                                life
                              </p>
                              <p>
                                <strong>Program:</strong> Bachelor of Software Engineering (4 years)
                              </p>
                              <p>
                                <strong>Requirements:</strong> GPA 3.4+, ATAR 95+, IELTS 6.5+
                              </p>
                              <p>
                                <strong>Estimated Cost:</strong> AUD $47,000/year
                              </p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Badge variant="outline">Industry Partnerships</Badge>
                              <Badge variant="outline">Work Rights</Badge>
                              <Badge variant="outline">Quality of Life</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Alternative Options */}
                        <Card
                          className="border-l-4 border-l-gray-500 hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => {
                            setUserData((prev) => ({
                              ...prev,
                              country: countries[4], // Germany
                              university: universities[5] ? universities[5][0] : { id: 13, name: "Technical University of Munich", location: "Munich" },
                              department: departments[59] ? departments[59][0] : { id: 59, name: "School of Engineering and Design", icon: "⚙️" },
                              program: programs[59] ? programs[59][0] : { id: 42, name: "Mechanical Engineering", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
                            }))
                            setCurrentStep(2)
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="bg-gray-100 p-2 rounded-full">
                                  <Globe className="h-6 w-6 text-gray-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">Mechanical Engineering - TU Munich</h4>
                                  <p className="text-gray-600">🇩🇪 Germany • School of Engineering and Design</p>
                                </div>
                              </div>
                              <Badge className="bg-gray-100 text-gray-800">84% Match</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700">
                              <p>
                                <strong>Why recommended:</strong> Low tuition costs and strong engineering reputation
                              </p>
                              <p>
                                <strong>Program:</strong> Bachelor of Science in Mechanical Engineering (3 years)
                              </p>
                              <p>
                                <strong>Requirements:</strong> GPA 3.2+, Abitur 2.0, German B2/English C1
                              </p>
                              <p>
                                <strong>Estimated Cost:</strong> €500/year (tuition) + €12,000 (living)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Badge variant="outline">Low Cost</Badge>
                              <Badge variant="outline">EU Access</Badge>
                              <Badge variant="outline">Technical Excellence</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Custom Search Option */}
                    <Card className="border-dashed border-2 border-gray-300">
                      <CardContent className="p-6 text-center">
                        <h4 className="font-semibold text-gray-700 mb-2">Don't see what you're looking for?</h4>
                        <p className="text-gray-600 mb-4">Browse all universities and programs manually</p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            // Could implement a custom search/browse functionality
                            alert("Custom search functionality would be implemented here")
                          }}
                        >
                          Browse All Options
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Program Requirements */}
                {currentStep === 2 && userData.program && (
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
                )}

                {/* Admission Process with AI Letter Generator */}
                {currentStep === 3 && (
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
                {currentStep === 4 && (
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
                {currentStep === 5 && (
                  <div className="text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-green-600" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2">Congratulations, {userData.name}!</h2>
                      <p className="text-gray-600 mb-4">
                        You have successfully completed your AI-assisted application process for{" "}
                        {userData.program?.name} in the {userData.department?.name} at {userData.university?.name}.
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
            {showAIAssistant && currentStep >= 0 && currentStep < 5 && (
              <AIAssistant step={currentStep} userData={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
