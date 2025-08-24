"use client"

import type React from "react"
import Homepage from "@/components/Homepage"


// // AI Assistant Component
// const AIAssistant = ({ step, userData, onSuggestion }) => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [suggestion, setSuggestion] = useState("")

//   const getAISuggestion = async () => {
//     setIsLoading(true)
//     // Simulate AI response
//     setTimeout(() => {
//       let aiSuggestion = ""
//       switch (step) {
//         case 1:
//           aiSuggestion = `Based on your profile, I recommend considering ${userData.country?.name} for its excellent education system and post-graduation opportunities. The universities here offer strong programs in your field of interest.`
//           break
//         case 2:
//           aiSuggestion = `For ${userData.country?.name}, I suggest looking at universities that match your academic background. Consider factors like program ranking, location, and scholarship opportunities.`
//           break
//         case 3:
//           aiSuggestion = `${userData.university?.name} has excellent departments. Consider your career goals when selecting a department - each offers unique opportunities and specializations.`
//           break
//         case 4:
//           aiSuggestion = `The ${userData.program?.name} program in ${userData.department?.name} is an excellent choice. Make sure to highlight relevant experience and skills in your application.`
//           break
//         case 5:
//           aiSuggestion = `To meet the requirements, focus on improving your test scores and gathering strong recommendation letters. Start preparing your personal statement early.`
//           break
//         default:
//           aiSuggestion = "I'm here to help you with personalized guidance throughout your application process."
//       }
//       setSuggestion(aiSuggestion)
//       setIsLoading(false)
//       if (onSuggestion) onSuggestion(aiSuggestion)
//     }, 2000)
//   }

//   return (
//     <Card className="border-blue-200 bg-blue-50">
//       <CardHeader className="pb-3">
//         <CardTitle className="flex items-center gap-2 text-blue-800">
//           <Bot className="h-5 w-5" />
//           AI Assistant
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         {suggestion ? (
//           <div className="space-y-3">
//             <p className="text-blue-700">{suggestion}</p>
//             <Button size="sm" variant="outline" onClick={getAISuggestion} disabled={isLoading}>
//               <RefreshCw className="h-4 w-4 mr-2" />
//               Get New Suggestion
//             </Button>
//           </div>
//         ) : (
//           <Button onClick={getAISuggestion} disabled={isLoading} className="w-full">
//             {isLoading ? (
//               <>
//                 <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
//                 Getting AI Suggestion...
//               </>
//             ) : (
//               <>
//                 <Sparkles className="h-4 w-4 mr-2" />
//                 Get AI Guidance
//               </>
//             )}
//           </Button>
//         )}
//       </CardContent>
//     </Card>
//   )
// }

// // AI Letter Generator Component
// const AILetterGenerator = ({ userData }) => {
//   const [letterType, setLetterType] = useState("motivation")
//   const [generatedLetter, setGeneratedLetter] = useState("")
//   const [isGenerating, setIsGenerating] = useState(false)
//   const [userInput, setUserInput] = useState({
//     background: "",
//     goals: "",
//     experience: "",
//     whyUniversity: "",
//   })

//   const generateLetter = async () => {
//     setIsGenerating(true)
//     // Simulate AI letter generation
//     setTimeout(() => {
//       const sampleLetter = `Dear Admissions Committee,

// I am writing to express my strong interest in the ${userData.program?.name} program in the ${userData.department?.name} at ${userData.university?.name}. As an aspiring student with a passion for ${userData.program?.name.toLowerCase()}, I am excited about the opportunity to contribute to and learn from your esteemed institution.

// My academic journey has been driven by a deep curiosity about ${userData.program?.name.toLowerCase()} and its applications in solving real-world challenges. Through my previous studies and experiences, I have developed a solid foundation in the fundamental concepts and principles that will serve me well in your program.

// ${userInput.background && `Background: ${userInput.background}`}

// ${userInput.experience && `Experience: ${userInput.experience}`}

// What particularly attracts me to ${userData.university?.name} is its reputation for excellence in ${userData.program?.name.toLowerCase()} within the ${userData.department?.name}. The department's commitment to fostering innovation and critical thinking aligns perfectly with my academic and professional aspirations. ${userInput.whyUniversity && userInput.whyUniversity}

// My career goals align perfectly with the opportunities that this program offers. ${userInput.goals && userInput.goals} I am confident that the rigorous curriculum and diverse learning environment at ${userData.university?.name} will provide me with the knowledge and skills necessary to achieve these aspirations.

// I am eager to contribute to the vibrant academic community at ${userData.university?.name} and to make the most of the opportunities for growth and learning that your program provides.

// Thank you for considering my application. I look forward to the opportunity to discuss my candidacy further.

// Sincerely,
// ${userData.name || "[Your Name]"}`

//       setGeneratedLetter(sampleLetter)
//       setIsGenerating(false)
//     }, 3000)
//   }

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generatedLetter)
//   }

//   return (
//     <Card className="border-purple-200 bg-purple-50">
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2 text-purple-800">
//           <FileText className="h-5 w-5" />
//           AI Letter Generator
//         </CardTitle>
//         <CardDescription>Generate personalized letters for your application</CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <Tabs value={letterType} onValueChange={setLetterType}>
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="motivation">Motivation Letter</TabsTrigger>
//             <TabsTrigger value="personal">Personal Statement</TabsTrigger>
//             <TabsTrigger value="purpose">Statement of Purpose</TabsTrigger>
//           </TabsList>

//           <TabsContent value={letterType} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <Label htmlFor="background">Academic Background</Label>
//                 <Textarea
//                   id="background"
//                   placeholder="Describe your academic background..."
//                   value={userInput.background}
//                   onChange={(e) => setUserInput({ ...userInput, background: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="goals">Career Goals</Label>
//                 <Textarea
//                   id="goals"
//                   placeholder="What are your career aspirations..."
//                   value={userInput.goals}
//                   onChange={(e) => setUserInput({ ...userInput, goals: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="experience">Relevant Experience</Label>
//                 <Textarea
//                   id="experience"
//                   placeholder="Describe your relevant experience..."
//                   value={userInput.experience}
//                   onChange={(e) => setUserInput({ ...userInput, experience: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="whyUniversity">Why This University?</Label>
//                 <Textarea
//                   id="whyUniversity"
//                   placeholder="Why do you want to study here..."
//                   value={userInput.whyUniversity}
//                   onChange={(e) => setUserInput({ ...userInput, whyUniversity: e.target.value })}
//                 />
//               </div>
//             </div>

//             <Button onClick={generateLetter} disabled={isGenerating} className="w-full">
//               {isGenerating ? (
//                 <>
//                   <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
//                   Generating {letterType} letter...
//                 </>
//               ) : (
//                 <>
//                   <Sparkles className="h-4 w-4 mr-2" />
//                   Generate {letterType} Letter
//                 </>
//               )}
//             </Button>

//             {generatedLetter && (
//               <div className="space-y-3">
//                 <div className="bg-white p-4 rounded-lg border max-h-96 overflow-y-auto">
//                   <pre className="whitespace-pre-wrap text-sm">{generatedLetter}</pre>
//                 </div>
//                 <div className="flex gap-2">
//                   <Button size="sm" variant="outline" onClick={copyToClipboard}>
//                     <Copy className="h-4 w-4 mr-2" />
//                     Copy to Clipboard
//                   </Button>
//                   <Button size="sm" variant="outline">
//                     <Download className="h-4 w-4 mr-2" />
//                     Download as PDF
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </TabsContent>
//         </Tabs>
//       </CardContent>
//     </Card>
//   )
// }

// // AI Document Assistant Component
// const AIDocumentAssistant = ({ visaRequirements, userData }) => {
//   const [selectedDocument, setSelectedDocument] = useState("")
//   const [documentTemplate, setDocumentTemplate] = useState("")
//   const [isGenerating, setIsGenerating] = useState(false)

//   const generateDocumentTemplate = async (docType) => {
//     setIsGenerating(true)
//     setSelectedDocument(docType)

//     // Simulate AI document generation
//     setTimeout(() => {
//       let template = ""
//       switch (docType) {
//         case "Statement of Purpose":
//           template = `STATEMENT OF PURPOSE

// ${userData.program?.name || "[Program Name]"} Program
// ${userData.department?.name || "[Department Name]"}
// ${userData.university?.name || "[University Name]"}

// Dear Admissions Committee,

// I am writing to express my strong interest in pursuing the ${userData.program?.name || "[Program Name]"} program in the ${userData.department?.name || "[Department Name]"} at ${userData.university?.name || "[University Name]"}. This statement outlines my academic background, professional goals, and reasons for choosing your esteemed institution.

// ACADEMIC BACKGROUND
// [Describe your educational background, relevant coursework, and academic achievements]

// PROFESSIONAL EXPERIENCE
// [Detail your work experience, internships, and relevant projects]

// RESEARCH INTERESTS
// [Explain your research interests and how they align with the program]

// WHY THIS UNIVERSITY AND DEPARTMENT
// [Explain why you chose this specific university, department, and program]

// CAREER GOALS
// [Describe your short-term and long-term career objectives]

// CONCLUSION
// I am confident that the ${userData.program?.name || "[Program Name]"} program in the ${userData.department?.name || "[Department Name]"} at ${userData.university?.name || "[University Name]"} will provide me with the knowledge and skills necessary to achieve my career goals.

// Thank you for your consideration.

// Sincerely,
// ${userData.name || "[Your Name]"}`
//           break

//         case "Sponsor Letter (if applicable)":
//           template = `SPONSORSHIP LETTER

// Date: [Date]

// To: Visa Officer
// [Embassy/Consulate Name]
// [Address]

// Subject: Financial Sponsorship for ${userData.name || "[Student Name]"}

// Dear Sir/Madam,

// I, [Sponsor Name], hereby confirm that I will provide financial support to ${userData.name || "[Student Name]"} for their studies at ${userData.university?.name || "[University Name]"} in the ${userData.program?.name || "[Program Name]"} program within the ${userData.department?.name || "[Department Name]"}.

// Sponsor Details:
// - Full Name: [Sponsor Name]
// - Relationship to Student: [Relationship]
// - Occupation: [Occupation]
// - Annual Income: $[Amount]
// - Contact Information: [Phone/Email]

// Financial Commitment:
// I commit to providing financial support covering:
// - Tuition fees: $[Amount] per year
// - Living expenses: $[Amount] per year
// - Other expenses: $[Amount] per year
// - Total annual support: $[Amount]

// I understand my responsibilities as a sponsor and confirm that I have sufficient financial resources to support the student throughout their studies.

// Attached documents:
// - Bank statements
// - Income tax returns
// - Employment letter
// - Property documents (if applicable)

// Sincerely,
// [Sponsor Name]
// [Signature]`
//           break

//         default:
//           template = `DOCUMENT TEMPLATE FOR: ${docType}

// This document type is not available for AI assistance. Please refer to the official country requirements on their platforms for specific guidelines and templates.

// For ${docType}, you should:
// - Visit the official embassy or consulate website
// - Check the specific requirements for your country
// - Download official forms and templates
// - Follow the provided guidelines exactly

// Please consult with the relevant authorities for specific requirements and formatting guidelines.`
//       }

//       setDocumentTemplate(template)
//       setIsGenerating(false)
//     }, 2000)
//   }

//   return (
//     <Card className="border-green-200 bg-green-50">
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2 text-green-800">
//           <FileText className="h-5 w-5" />
//           AI Document Assistant
//         </CardTitle>
//         <CardDescription>Generate templates for visa documents</CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//           {visaRequirements.map((requirement, index) => (
//             <Button
//               key={index}
//               variant="outline"
//               size="sm"
//               onClick={() => generateDocumentTemplate(requirement)}
//               disabled={isGenerating}
//               className="text-left justify-start"
//             >
//               {requirement}
//             </Button>
//           ))}
//         </div>

//         {isGenerating && (
//           <div className="text-center py-4">
//             <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
//             <p className="text-sm text-gray-600">Generating template for {selectedDocument}...</p>
//           </div>
//         )}

//         {documentTemplate && (
//           <div className="space-y-3">
//             <h4 className="font-semibold">Template for: {selectedDocument}</h4>
//             <div className="bg-white p-4 rounded-lg border max-h-96 overflow-y-auto">
//               <pre className="whitespace-pre-wrap text-sm">{documentTemplate}</pre>
//             </div>
//             <div className="flex gap-2">
//               <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(documentTemplate)}>
//                 <Copy className="h-4 w-4 mr-2" />
//                 Copy Template
//               </Button>
//               <Button size="sm" variant="outline">
//                 <Download className="h-4 w-4 mr-2" />
//                 Download as PDF
//               </Button>
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }




export default function StudentWizardApp() {
  return (
    <Homepage />
  )
}


