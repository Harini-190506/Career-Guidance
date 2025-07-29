"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, BookOpen, Award, Clock, TrendingUp, CheckCircle, Circle, Star } from "lucide-react"

interface Milestone {
  id: string
  title: string
  description: string
  category: "course" | "project" | "certification" | "skill"
  status: "completed" | "in-progress" | "upcoming"
  progress: number
  dueDate: string
  points: number
}

export function CareerProgressTracker() {
  const [milestones] = useState<Milestone[]>([
    {
      id: "1",
      title: "Complete Python Fundamentals",
      description: "Master Python basics including data structures and OOP",
      category: "course",
      status: "completed",
      progress: 100,
      dueDate: "2024-01-15",
      points: 100,
    },
    {
      id: "2",
      title: "Build Portfolio Project",
      description: "Create a data analysis project using real-world datasets",
      category: "project",
      status: "in-progress",
      progress: 65,
      dueDate: "2024-02-01",
      points: 150,
    },
    {
      id: "3",
      title: "SQL Certification",
      description: "Earn SQL certification from recognized platform",
      category: "certification",
      status: "upcoming",
      progress: 0,
      dueDate: "2024-02-15",
      points: 75,
    },
    {
      id: "4",
      title: "Machine Learning Basics",
      description: "Complete introductory ML course and assignments",
      category: "course",
      status: "upcoming",
      progress: 0,
      dueDate: "2024-03-01",
      points: 120,
    },
  ])

  const totalPoints = milestones.reduce((sum, milestone) => sum + milestone.points, 0)
  const earnedPoints = milestones
    .filter((m) => m.status === "completed")
    .reduce((sum, milestone) => sum + milestone.points, 0)
  const overallProgress = (earnedPoints / totalPoints) * 100

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-yellow-400" />
      default:
        return <Circle className="w-5 h-5 text-gray-400" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "course":
        return <BookOpen className="w-4 h-4" />
      case "project":
        return <Target className="w-4 h-4" />
      case "certification":
        return <Award className="w-4 h-4" />
      case "skill":
        return <Star className="w-4 h-4" />
      default:
        return <Circle className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "course":
        return "text-blue-400 border-blue-500"
      case "project":
        return "text-green-400 border-green-500"
      case "certification":
        return "text-purple-400 border-purple-500"
      case "skill":
        return "text-yellow-400 border-yellow-500"
      default:
        return "text-gray-400 border-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Progress Summary */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span>Career Progress Overview</span>
          </CardTitle>
          <CardDescription className="text-gray-300">Track your journey towards your career goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400">{Math.round(overallProgress)}%</div>
              <p className="text-sm text-gray-300">Overall Progress</p>
            </div>
            <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">
                {earnedPoints}/{totalPoints}
              </div>
              <p className="text-sm text-gray-300">Points Earned</p>
            </div>
            <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400">
                {milestones.filter((m) => m.status === "completed").length}
              </div>
              <p className="text-sm text-gray-300">Completed Milestones</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Career Roadmap Progress</span>
              <span>{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Milestones List */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Current Milestones</CardTitle>
          <CardDescription className="text-gray-300">Your active learning objectives and achievements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{getStatusIcon(milestone.status)}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-100">{milestone.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className={getCategoryColor(milestone.category)}>
                    {getCategoryIcon(milestone.category)}
                    <span className="ml-1 capitalize">{milestone.category}</span>
                  </Badge>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-500">
                    {milestone.points} pts
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Progress</span>
                  <span>{milestone.progress}%</span>
                </div>
                <Progress value={milestone.progress} className="h-2" />
              </div>

              <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
                <span>Due: {milestone.dueDate}</span>
                {milestone.status === "in-progress" && (
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Continue
                  </Button>
                )}
                {milestone.status === "upcoming" && (
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                    Start
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievement Stats */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span>Achievement Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
              <div className="text-lg font-bold text-purple-400">
                {milestones.filter((m) => m.category === "course" && m.status === "completed").length}
              </div>
              <p className="text-xs text-gray-300">Courses Completed</p>
            </div>
            <div className="text-center p-3 bg-green-900/20 rounded-lg border border-green-500/20">
              <div className="text-lg font-bold text-green-400">
                {milestones.filter((m) => m.category === "project" && m.status === "completed").length}
              </div>
              <p className="text-xs text-gray-300">Projects Built</p>
            </div>
            <div className="text-center p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
              <div className="text-lg font-bold text-blue-400">
                {milestones.filter((m) => m.category === "certification" && m.status === "completed").length}
              </div>
              <p className="text-xs text-gray-300">Certifications</p>
            </div>
            <div className="text-center p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
              <div className="text-lg font-bold text-yellow-400">
                {milestones.filter((m) => m.category === "skill" && m.status === "completed").length}
              </div>
              <p className="text-xs text-gray-300">Skills Mastered</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-900/10 rounded-lg border border-purple-500/20">
            <p className="text-sm text-purple-300">
              🎯 You're making excellent progress! Complete 2 more milestones to unlock the next phase of your Data
              Science roadmap.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
