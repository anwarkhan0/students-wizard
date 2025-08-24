import React from 'react'

// AI Document Assistant Component
function AIDocumentAssistant ({ visaRequirements, userData }) {
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

export default AIDocumentAssistant