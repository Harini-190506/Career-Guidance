"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Target, Award, TrendingUp, Bell, Zap, ArrowRight } from "lucide-react"
import { CareerAnalytics } from "@/components/career-analytics"
import { CareerAssessment } from "@/components/career-assessment"
import { MLPredictions } from "@/components/ml-predictions"
import { CareerRoadmap } from "@/components/career-roadmap"
import { AdminPanel } from "@/components/admin-panel"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentUser] = useState({
    name: (typeof window !== "undefined" && localStorage.getItem("userName")) || "Student",
    role: "student", // or "admin"
    completedAssessments: 2,
    careerMatches: 3,
    progressScore: 78,
  })

  const [platformStats] = useState({
    totalStudents: 1247,
    careersAnalyzed: 156,
    successfulPlacements: 892,
    accuracyRate: 94.2,
  })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const recentPredictions = [
    {
      career: "Data Scientist",
      confidence: 92,
      match: "Excellent",
      color: "text-green-400",
    },
    {
      career: "Software Engineer",
      confidence: 87,
      match: "Very Good",
      color: "text-blue-400",
    },
    {
      career: "Product Manager",
      confidence: 74,
      match: "Good",
      color: "text-yellow-400",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515", color: "#B4A5A5" }}>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: "#B4A5A5" }}>
                Welcome back, {currentUser.name}! 👋
              </h1>
              <p className="opacity-80">Continue your career journey with personalized AI recommendations</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-500 text-green-300">
                <Bell className="w-3 h-3 mr-1" />3 New Insights
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">{currentTime.toLocaleDateString()}</p>
                <p className="text-xs opacity-70">{currentTime.toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                Career Progress
              </CardTitle>
              <Target className="h-4 w-4" style={{ color: "#3C415C" }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">{currentUser.progressScore}%</div>
              <p className="text-xs opacity-70 mb-2">Overall completion</p>
              <Progress value={currentUser.progressScore} className="h-2" />
            </CardContent>
          </Card>

          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                ML Accuracy
              </CardTitle>
              <Brain className="h-4 w-4" style={{ color: "#3C415C" }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{platformStats.accuracyRate}%</div>
              <p className="text-xs opacity-70">Model performance</p>
            </CardContent>
          </Card>

          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                Career Matches
              </CardTitle>
              <Award className="h-4 w-4" style={{ color: "#3C415C" }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">{currentUser.careerMatches}</div>
              <p className="text-xs opacity-70">AI recommendations</p>
            </CardContent>
          </Card>

          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                Success Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4" style={{ color: "#3C415C" }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">87.5%</div>
              <p className="text-xs opacity-70">Platform average</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList
            className="grid w-full grid-cols-2 lg:grid-cols-6 border border-gray-700"
            style={{ backgroundColor: "#301B3F" }}
          >
            <TabsTrigger
              value="overview"
              className="data-[state=active]:text-white"
              style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="assessment"
              className="data-[state=active]:text-white"
              style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
            >
              Assessment
            </TabsTrigger>
            <TabsTrigger
              value="predictions"
              className="data-[state=active]:text-white"
              style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
            >
              AI Predictions
            </TabsTrigger>
            <TabsTrigger
              value="roadmap"
              className="data-[state=active]:text-white"
              style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
            >
              Roadmap
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:text-white"
              style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
            >
              Analytics
            </TabsTrigger>
            {currentUser.role === "admin" && (
              <TabsTrigger
                value="admin"
                className="data-[state=active]:text-white"
                style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
              >
                Admin
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Latest ML Predictions */}
              <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span style={{ color: "#B4A5A5" }}>Latest AI Predictions</span>
                  </CardTitle>
                  <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                    Your top career matches based on AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPredictions.map((prediction, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-gray-600"
                      style={{ backgroundColor: "#151515" }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                          {prediction.career}
                        </h4>
                        <Badge variant="outline" className={prediction.color}>
                          {prediction.confidence}% Match
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span style={{ color: "#B4A5A5", opacity: 0.7 }}>Confidence Level</span>
                          <span className={prediction.color}>{prediction.match}</span>
                        </div>
                        <Progress value={prediction.confidence} className="h-2" />
                      </div>
                    </div>
                  ))}
                  <Button className="w-full text-white" style={{ backgroundColor: "#3C415C" }}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Detailed Predictions
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span style={{ color: "#B4A5A5" }}>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-between text-white" style={{ backgroundColor: "#3C415C" }}>
                    <span>Take Career Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <Button className="w-full justify-between text-white" style={{ backgroundColor: "#3C415C" }}>
                    <span>View Learning Roadmap</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <Button className="w-full justify-between text-white" style={{ backgroundColor: "#3C415C" }}>
                    <span>Generate Progress Report</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <div className="pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                        Profile Completion
                      </span>
                      <span className="text-sm font-medium text-green-400">{currentUser.progressScore}%</span>
                    </div>
                    <Progress value={currentUser.progressScore} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card className="border-purple-500/30 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span style={{ color: "#B4A5A5" }}>AI Career Insights</span>
                </CardTitle>
                <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                  Personalized recommendations based on your profile analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-green-500/20" style={{ backgroundColor: "#151515" }}>
                    <p className="text-sm text-green-300">
                      🎯 <strong>Strong Match:</strong> Your analytical skills and math scores indicate excellent
                      potential for Data Science careers. Consider exploring machine learning specializations.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-blue-500/20" style={{ backgroundColor: "#151515" }}>
                    <p className="text-sm text-blue-300">
                      💡 <strong>Skill Gap:</strong> To strengthen your Software Engineering profile, consider taking
                      courses in system design and cloud computing.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-yellow-500/20" style={{ backgroundColor: "#151515" }}>
                    <p className="text-sm text-yellow-300">
                      📈 <strong>Growth Opportunity:</strong> Your leadership scores suggest Product Management
                      potential. Gain experience in project coordination and user research.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessment">
            <CareerAssessment />
          </TabsContent>

          <TabsContent value="predictions">
            <MLPredictions />
          </TabsContent>

          <TabsContent value="roadmap">
            <CareerRoadmap />
          </TabsContent>

          <TabsContent value="analytics">
            <CareerAnalytics />
          </TabsContent>

          {currentUser.role === "admin" && (
            <TabsContent value="admin">
              <AdminPanel />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  )
}
