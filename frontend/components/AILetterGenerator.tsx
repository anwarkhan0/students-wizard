import React from 'react'
// AI Letter Generator Component
function AILetterGenerator = ({ userData }) {
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
export default AILetterGenerator