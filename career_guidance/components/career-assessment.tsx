"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Brain, CheckCircle, ArrowRight, ArrowLeft, Target } from "lucide-react"

interface Question {
  id: string
  category: "academic" | "interest" | "aptitude" | "personality"
  question: string
  type: "multiple-choice" | "scale" | "text" | "grade"
  options?: string[]
  scaleRange?: { min: number; max: number; labels: string[] }
}

export function CareerAssessment() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const assessmentQuestions: Question[] = [
    // Academic Performance
    {
      id: "math_grade",
      category: "academic",
      question: "What is your current Mathematics grade/percentage?",
      type: "grade",
    },
    {
      id: "science_grade",
      category: "academic",
      question: "What is your current Science grade/percentage?",
      type: "grade",
    },
    {
      id: "english_grade",
      category: "academic",
      question: "What is your current English grade/percentage?",
      type: "grade",
    },

    // Interest Assessment
    {
      id: "work_preference",
      category: "interest",
      question: "Which type of work environment appeals to you most?",
      type: "multiple-choice",
      options: [
        "Working with data and analytics",
        "Creating and building things",
        "Helping and teaching others",
        "Leading teams and projects",
        "Researching and discovering new things",
      ],
    },
    {
      id: "problem_solving",
      category: "interest",
      question: "How much do you enjoy solving complex problems?",
      type: "scale",
      scaleRange: {
        min: 1,
        max: 5,
        labels: ["Not at all", "Slightly", "Moderately", "Very much", "Extremely"],
      },
    },
    {
      id: "technology_interest",
      category: "interest",
      question: "How interested are you in technology and innovation?",
      type: "scale",
      scaleRange: {
        min: 1,
        max: 5,
        labels: ["Not interested", "Slightly", "Moderately", "Very interested", "Extremely interested"],
      },
    },

    // Aptitude Assessment
    {
      id: "logical_thinking",
      category: "aptitude",
      question: "Rate your logical thinking and analytical skills",
      type: "scale",
      scaleRange: {
        min: 1,
        max: 5,
        labels: ["Poor", "Below Average", "Average", "Good", "Excellent"],
      },
    },
    {
      id: "communication",
      category: "aptitude",
      question: "How would you rate your communication skills?",
      type: "scale",
      scaleRange: {
        min: 1,
        max: 5,
        labels: ["Poor", "Below Average", "Average", "Good", "Excellent"],
      },
    },
    {
      id: "creativity",
      category: "aptitude",
      question: "How creative do you consider yourself?",
      type: "scale",
      scaleRange: {
        min: 1,
        max: 5,
        labels: ["Not creative", "Slightly", "Moderately", "Very creative", "Extremely creative"],
      },
    },

    // Personality Assessment
    {
      id: "work_style",
      category: "personality",
      question: "Which work style describes you best?",
      type: "multiple-choice",
      options: [
        "I prefer working independently",
        "I enjoy collaborative teamwork",
        "I like leading and directing others",
        "I work best with clear instructions",
        "I thrive in dynamic, changing environments",
      ],
    },
    {
      id: "career_goals",
      category: "personality",
      question: "What are your primary career goals? (Optional)",
      type: "text",
    },
  ]

  const totalSteps = assessmentQuestions.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeAssessment()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeAssessment = () => {
    setIsCompleted(true)
    // Here you would typically send the data to your ML model
    console.log("Assessment completed:", answers)
  }

  const currentQuestion = assessmentQuestions[currentStep]
  const currentAnswer = answers[currentQuestion?.id]

  if (isCompleted) {
    return (
      <Card className="border-gray-700 backdrop-blur-sm max-w-2xl mx-auto" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader className="text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#3C415C" }}
          >
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <CardTitle style={{ color: "#B4A5A5" }}>Assessment Completed!</CardTitle>
          <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
            Your responses are being processed by our AI model
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="p-6 rounded-lg border border-green-500/20" style={{ backgroundColor: "#151515" }}>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Processing Your Career Profile</h3>
            <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              Our machine learning algorithm is analyzing your responses to generate personalized career
              recommendations.
            </p>
            <div className="mt-4">
              <Progress value={100} className="h-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-2xl font-bold text-blue-400">{Object.keys(answers).length}</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Questions Answered
              </p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-2xl font-bold text-purple-400">3</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Career Matches
              </p>
            </div>
          </div>

          <Button className="w-full text-white" style={{ backgroundColor: "#3C415C" }}>
            <Target className="w-4 h-4 mr-2" />
            View ML Predictions
          </Button>
        </CardContent>
      </Card>
    )
  }

  const renderQuestion = () => {
    if (!currentQuestion) return null

    switch (currentQuestion.type) {
      case "multiple-choice":
        return (
          <RadioGroup value={currentAnswer || ""} onValueChange={(value) => handleAnswer(currentQuestion.id, value)}>
            {currentQuestion.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} style={{ color: "#B4A5A5" }}>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )

      case "scale":
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              <span>{currentQuestion.scaleRange?.labels[0]}</span>
              <span>{currentQuestion.scaleRange?.labels[4]}</span>
            </div>
            <RadioGroup
              value={currentAnswer?.toString() || ""}
              onValueChange={(value) => handleAnswer(currentQuestion.id, Number.parseInt(value))}
              className="flex justify-between"
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                <div key={value} className="flex flex-col items-center space-y-2">
                  <RadioGroupItem value={value.toString()} id={`scale-${value}`} />
                  <Label htmlFor={`scale-${value}`} className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                    {value}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case "grade":
        return (
          <Input
            type="number"
            placeholder="Enter your grade (0-100)"
            value={currentAnswer || ""}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
            className="border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
            min="0"
            max="100"
          />
        )

      case "text":
        return (
          <Textarea
            placeholder="Share your thoughts..."
            value={currentAnswer || ""}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
            className="border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
            rows={4}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <CardTitle style={{ color: "#B4A5A5" }}>Career Assessment</CardTitle>
            </div>
            <Badge variant="outline" style={{ color: "#B4A5A5" }}>
              {currentStep + 1} of {totalSteps}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="outline" className="capitalize">
              {currentQuestion?.category}
            </Badge>
          </div>
          <CardTitle className="text-lg" style={{ color: "#B4A5A5" }}>
            {currentQuestion?.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderQuestion()}

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="border-gray-600 bg-transparent"
              style={{ color: "#B4A5A5" }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={nextStep}
              disabled={!currentAnswer && currentQuestion?.type !== "text"}
              className="text-white"
              style={{ backgroundColor: "#3C415C" }}
            >
              {currentStep === totalSteps - 1 ? "Complete Assessment" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Category Progress */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardContent className="pt-6">
          <div className="grid grid-cols-4 gap-4">
            {["academic", "interest", "aptitude", "personality"].map((category) => {
              const categoryQuestions = assessmentQuestions.filter((q) => q.category === category)
              const answeredInCategory = categoryQuestions.filter((q) => answers[q.id]).length
              const categoryProgress = (answeredInCategory / categoryQuestions.length) * 100

              return (
                <div key={category} className="text-center">
                  <div className="text-sm font-medium capitalize mb-1" style={{ color: "#B4A5A5" }}>
                    {category}
                  </div>
                  <Progress value={categoryProgress} className="h-1" />
                  <div className="text-xs mt-1" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                    {answeredInCategory}/{categoryQuestions.length}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
