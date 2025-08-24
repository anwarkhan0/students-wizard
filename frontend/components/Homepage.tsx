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

import { useContext } from "react";
import { useApplication } from "@/context/ApplicationContext"

function Homepage({ startApplication }) {
    const {countries, testimonials} = useApplication();
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

export default Homepage