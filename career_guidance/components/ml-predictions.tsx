"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, BarChart3, Download, RefreshCw, Star, Lightbulb, ArrowRight } from "lucide-react"

interface CareerPrediction {
  career: string
  confidence: number
  matchReason: string
  salaryRange: string
  growthRate: string
  requiredSkills: string[]
  matchFactors: {
    academic: number
    interest: number
    aptitude: number
    personality: number
  }
}

export function MLPredictions() {
  const [isLoading, setIsLoading] = useState(false)
  const [predictions, setPredictions] = useState<CareerPrediction[]>([
    {
      career: "Data Scientist",
      confidence: 92,
      matchReason: "Strong analytical skills, excellent math grades, and high interest in problem-solving",
      salaryRange: "$95,000 - $165,000",
      growthRate: "+22% (2023-2033)",
      requiredSkills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Visualization"],
      matchFactors: {
        academic: 95,
        interest: 88,
        aptitude: 92,
        personality: 85,
      },
    },
    {
      career: "Software Engineer",
      confidence: 87,
      matchReason: "High logical thinking scores and strong technology interest",
      salaryRange: "$85,000 - $150,000",
      growthRate: "+17% (2023-2033)",
      requiredSkills: ["Programming", "System Design", "Algorithms", "Git", "Cloud Computing"],
      matchFactors: {
        academic: 90,
        interest: 85,
        aptitude: 88,
        personality: 82,
      },
    },
    {
      career: "Product Manager",
      confidence: 74,
      matchReason: "Good communication skills and leadership potential",
      salaryRange: "$100,000 - $180,000",
      growthRate: "+19% (2023-2033)",
      requiredSkills: ["Strategy", "Analytics", "Communication", "User Research", "Project Management"],
      matchFactors: {
        academic: 78,
        interest: 75,
        aptitude: 80,
        personality: 88,
      },
    },
  ])

  const [modelMetrics] = useState({
    accuracy: 94.2,
    precision: 91.8,
    recall: 89.5,
    f1Score: 90.6,
    trainingData: "15,000+ student profiles",
    lastUpdated: "2024-01-15",
  })

  const refreshPredictions = async () => {
    setIsLoading(true)
    // Simulate API call to ML model
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return "text-green-400"
    if (confidence >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 85) return "Excellent Match"
    if (confidence >= 70) return "Good Match"
    return "Fair Match"
  }

  return (
    <div className="space-y-6">
      {/* ML Model Status */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <CardTitle style={{ color: "#B4A5A5" }}>ML Model Predictions</CardTitle>
            </div>
            <Button
              onClick={refreshPredictions}
              disabled={isLoading}
              className="text-white"
              style={{ backgroundColor: "#3C415C" }}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              {isLoading ? "Processing..." : "Refresh"}
            </Button>
          </div>
          <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
            AI-powered career recommendations based on your assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-lg font-bold text-green-400">{modelMetrics.accuracy}%</div>
              <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Accuracy
              </p>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-lg font-bold text-blue-400">{modelMetrics.precision}%</div>
              <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Precision
              </p>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-lg font-bold text-yellow-400">{modelMetrics.recall}%</div>
              <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Recall
              </p>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-lg font-bold text-purple-400">{modelMetrics.f1Score}%</div>
              <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                F1-Score
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Predictions */}
      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <Card key={index} className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#3C415C" }}
                  >
                    <span className="text-xl font-bold" style={{ color: "#B4A5A5" }}>
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-xl" style={{ color: "#B4A5A5" }}>
                      {prediction.career}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className={getConfidenceColor(prediction.confidence)}>
                        <Target className="w-3 h-3 mr-1" />
                        {prediction.confidence}% Match
                      </Badge>
                      <Badge variant="outline" style={{ color: "#B4A5A5" }}>
                        {getConfidenceLabel(prediction.confidence)}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(prediction.confidence / 20) ? "text-yellow-400 fill-current" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Match Reason */}
              <div className="p-4 rounded-lg border border-blue-500/20" style={{ backgroundColor: "#151515" }}>
                <h4 className="font-medium text-blue-400 mb-2">Why This Career Matches You</h4>
                <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.9 }}>
                  {prediction.matchReason}
                </p>
              </div>

              {/* Career Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                      Salary Range
                    </span>
                    <span className="text-sm font-medium text-green-400">{prediction.salaryRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                      Growth Rate
                    </span>
                    <span className="text-sm font-medium text-blue-400">{prediction.growthRate}</span>
                  </div>
                </div>

                {/* Match Factors */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                    Match Factors
                  </h5>
                  {Object.entries(prediction.matchFactors).map(([factor, score]) => (
                    <div key={factor} className="flex items-center justify-between">
                      <span className="text-xs capitalize" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                        {factor}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Progress value={score} className="h-1 w-16" />
                        <span className="text-xs font-medium" style={{ color: "#B4A5A5" }}>
                          {score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Skills */}
              <div>
                <h5 className="text-sm font-medium mb-2" style={{ color: "#B4A5A5" }}>
                  Key Skills Required
                </h5>
                <div className="flex flex-wrap gap-2">
                  {prediction.requiredSkills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs" style={{ color: "#B4A5A5" }}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button className="flex-1 text-white" style={{ backgroundColor: "#3C415C" }}>
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Career Roadmap
                </Button>
                <Button variant="outline" className="border-gray-600 bg-transparent" style={{ color: "#B4A5A5" }}>
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Get Tips
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Model Information */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            <span style={{ color: "#B4A5A5" }}>Model Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                  Algorithm
                </span>
                <span className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                  Random Forest Classifier
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                  Training Data
                </span>
                <span className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                  {modelMetrics.trainingData}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                  Last Updated
                </span>
                <span className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                  {modelMetrics.lastUpdated}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-purple-500/20" style={{ backgroundColor: "#151515" }}>
              <h4 className="font-medium text-purple-400 mb-2">How It Works</h4>
              <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.8 }}>
                Our ML model analyzes your academic performance, interests, aptitude scores, and personality traits to
                predict career compatibility using advanced machine learning algorithms trained on thousands of
                successful career outcomes.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
              <Download className="w-4 h-4 mr-2" />
              Download Detailed Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
