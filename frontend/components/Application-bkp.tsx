import { useContext } from 'react';

import { ApplicationContext } from '@/context/ApplicationContext';

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

import AIAssistant from './application/AIAssistant';

function Application() {

  const {
    userData,
    setUserData,
    currentStep,
    setCurrentStep,
    steps,
    getProgressPercentage,
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
    testimonials,
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
  } = useContext(ApplicationContext);

  console.log("Current Step:", currentStep);

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
                              <Label htmlFor="nationality">Country *</Label>
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
                      // Verification code section
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
                              university: universities[1]
                                ? universities[1][0]
                                : { id: 1, name: "Harvard University", location: "Cambridge, MA" },
                              department: departments[1]
                                ? departments[1][0]
                                : { id: 1, name: "School of Engineering and Applied Sciences", icon: "⚙️" },
                              program: programs[1]
                                ? programs[1][0]
                                : {
                                  id: 1,
                                  name: "Computer Science",
                                  duration: "4 years",
                                  degree: "Bachelor",
                                  level: "Undergraduate",
                                },
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
                              university: universities[2]
                                ? universities[2][0]
                                : { id: 4, name: "Oxford University", location: "Oxford" },
                              department: departments[15]
                                ? departments[15][0]
                                : { id: 15, name: "Department of Engineering Science", icon: "⚙️" },
                              program: programs[15]
                                ? programs[15][0]
                                : {
                                  id: 32,
                                  name: "Engineering Science",
                                  duration: "4 years",
                                  degree: "MEng",
                                  level: "Undergraduate",
                                },
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
                              university: universities[3]
                                ? universities[3][0]
                                : { id: 7, name: "University of Toronto", location: "Toronto" },
                              department: departments[29]
                                ? departments[29][0]
                                : { id: 29, name: "Faculty of Applied Science & Engineering", icon: "⚙️" },
                              program: programs[29]
                                ? programs[29][0]
                                : {
                                  id: 38,
                                  name: "Computer Engineering",
                                  duration: "4 years",
                                  degree: "Bachelor",
                                  level: "Undergraduate",
                                },
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
                              university: universities[4]
                                ? universities[4][0]
                                : { id: 10, name: "University of Melbourne", location: "Melbourne" },
                              department: departments[44]
                                ? departments[44][0]
                                : { id: 44, name: "Melbourne School of Engineering", icon: "⚙️" },
                              program: programs[44]
                                ? programs[44][0]
                                : {
                                  id: 40,
                                  name: "Software Engineering",
                                  duration: "4 years",
                                  degree: "Bachelor",
                                  level: "Undergraduate",
                                },
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
                              university: universities[5]
                                ? universities[5][0]
                                : { id: 13, name: "Technical University of Munich", location: "Munich" },
                              department: departments[59]
                                ? departments[59][0]
                                : { id: 59, name: "School of Engineering and Design", icon: "⚙️" },
                              program: programs[59]
                                ? programs[59][0]
                                : {
                                  id: 42,
                                  name: "Mechanical Engineering",
                                  duration: "3 years",
                                  degree: "Bachelor",
                                  level: "Undergraduate",
                                },
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
                          className={`flex items-center justify-between p-3 rounded-lg border ${index < admissionProgress
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
                                className={`w-5 h-5 rounded-full border-2 ${index === admissionProgress ? "border-blue-600" : "border-gray-300"
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

export default Application