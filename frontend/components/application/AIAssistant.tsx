import React from 'react'

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

// AI Assistant Component
function AIAssistant ({ step, userData, onSuggestion }) {
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
export default AIAssistant