"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Award, Clock, Target, BookOpen, Download, Calendar, Star, Brain } from "lucide-react"

export function StudentDashboard() {
  const studentData = {
    name: "Alex Johnson",
    currentCareer: "Data Scientist",
    overallProgress: 78,
    weeklyGoal: 25, // study hours
    weeklyCompleted: 18,
    streak: 12, // learning streak
    totalHours: 156,
    certificates: 3,
    projects: 2,
  }

  const recentActivity = [
    { date: "2024-01-20", activity: "Completed Python Basics Module", type: "course", points: 50 },
    { date: "2024-01-19", activity: "Submitted Data Analysis Project", type: "project", points: 100 },
    { date: "2024-01-18", activity: "Passed Statistics Quiz", type: "assessment", points: 25 },
    { date: "2024-01-17", activity: "Earned SQL Certification", type: "certification", points: 75 },
  ]

  const skillProgress = [
    { skill: "Python Programming", level: 85, category: "Technical" },
    { skill: "Statistics & Math", level: 72, category: "Mathematical" },
    { skill: "Data Visualization", level: 68, category: "Technical" },
    { skill: "Machine Learning", level: 45, category: "Technical" },
    { skill: "Communication", level: 78, category: "Soft Skills" },
  ]

  const upcomingDeadlines = [
    { task: "Machine Learning Assignment", due: "Jan 25, 2024", priority: "high" },
    { task: "Statistics Final Exam", due: "Jan 28, 2024", priority: "medium" },
    { task: "Portfolio Project Review", due: "Feb 2, 2024", priority: "low" },
  ]

  const careerInsights = [
    {
      type: "strength",
      title: "Strong Technical Foundation",
      description: "Your programming skills are developing rapidly. Focus on building more projects.",
    },
    {
      type: "improvement",
      title: "Mathematical Skills",
      description: "Consider strengthening your statistics foundation for better ML understanding.",
    },
    {
      type: "opportunity",
      title: "Portfolio Development",
      description: "Add 2 more projects to your portfolio to stand out to employers.",
    },
  ]

  const getSkillColor = (level: number) => {
    if (level >= 80) return "text-green-400"
    if (level >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400 border-red-500"
      case "medium":
        return "text-yellow-400 border-yellow-500"
      case "low":
        return "text-green-400 border-green-500"
      default:
        return "text-gray-400 border-gray-500"
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case "strength":
        return "bg-green-900/20 border-green-500/20 text-green-300"
      case "improvement":
        return "bg-yellow-900/20 border-yellow-500/20 text-yellow-300"
      case "opportunity":
        return "bg-blue-900/20 border-blue-500/20 text-blue-300"
      default:
        return "bg-gray-900/20 border-gray-500/20 text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Career Progress
            </CardTitle>
            <Target className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{studentData.overallProgress}%</div>
            <Progress value={studentData.overallProgress} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Learning Streak
            </CardTitle>
            <Award className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{studentData.streak} days</div>
            <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              Keep it up!
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Study Hours
            </CardTitle>
            <Clock className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{studentData.totalHours}h</div>
            <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              Total learning time
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Certificates
            </CardTitle>
            <Star className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">{studentData.certificates}</div>
            <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              Earned
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Progress */}
        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span style={{ color: "#B4A5A5" }}>Skill Development</span>
            </CardTitle>
            <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
              Your progress across key career skills
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillProgress.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                      {skill.skill}
                    </span>
                    <Badge variant="outline" className="ml-2 text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <span className={`text-sm font-medium ${getSkillColor(skill.level)}`}>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span style={{ color: "#B4A5A5" }}>Recent Learning Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-gray-600"
                  style={{ backgroundColor: "#151515" }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                        {activity.activity}
                      </p>
                      <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                        {activity.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs capitalize">
                        {activity.type}
                      </Badge>
                      <span className="text-xs font-medium text-yellow-400">+{activity.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Goals & Upcoming Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-400" />
              <span style={{ color: "#B4A5A5" }}>Weekly Study Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {studentData.weeklyCompleted}/{studentData.weeklyGoal}
              </div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Hours completed this week
              </p>
              <Progress value={(studentData.weeklyCompleted / studentData.weeklyGoal) * 100} className="h-2 mt-3" />
            </div>
            <div className="p-4 rounded-lg border border-green-500/20" style={{ backgroundColor: "#151515" }}>
              <p className="text-sm text-green-300">
                🎯 Great progress! You're 72% towards your weekly goal. Just 7 more hours to complete this week's
                target.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-red-400" />
              <span style={{ color: "#B4A5A5" }}>Upcoming Deadlines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-gray-600"
                  style={{ backgroundColor: "#151515" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                        {deadline.task}
                      </p>
                      <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                        Due: {deadline.due}
                      </p>
                    </div>
                    <Badge variant="outline" className={getPriorityColor(deadline.priority)}>
                      {deadline.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Career Insights */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span style={{ color: "#B4A5A5" }}>AI Career Insights</span>
          </CardTitle>
          <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
            Personalized recommendations for your {studentData.currentCareer} journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {careerInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}>
                <h4 className="font-medium mb-2">{insight.title}</h4>
                <p className="text-sm opacity-90">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Report */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span style={{ color: "#B4A5A5" }}>Career Progress Report</span>
              </CardTitle>
              <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Detailed analysis of your learning journey
              </CardDescription>
            </div>
            <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="text-center p-4 rounded-lg border border-blue-500/20"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="text-2xl font-bold text-blue-400">A+</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Current Grade
              </p>
            </div>
            <div
              className="text-center p-4 rounded-lg border border-green-500/20"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="text-2xl font-bold text-green-400">92%</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Assignment Average
              </p>
            </div>
            <div
              className="text-center p-4 rounded-lg border border-purple-500/20"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="text-2xl font-bold text-purple-400">Top 5%</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Class Ranking
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg border border-yellow-500/20" style={{ backgroundColor: "#151515" }}>
            <h4 className="font-medium text-yellow-400 mb-2">Performance Insights</h4>
            <ul className="space-y-1 text-sm" style={{ color: "#B4A5A5", opacity: 0.8 }}>
              <li>• Strongest in programming and analytical thinking</li>
              <li>• Consistent improvement in technical skills over the past month</li>
              <li>• Recommended to focus more on practical project implementation</li>
              <li>• Excellent engagement with course materials and peer discussions</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
