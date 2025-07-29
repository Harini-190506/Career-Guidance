"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, TrendingUp, TrendingDown, Calendar, Target, Award, BarChart3 } from "lucide-react"

export function CareerAnalytics() {
  const weeklyData = {
    studyHours: { current: 28, goal: 35, change: 12.5 },
    coursesCompleted: { current: 3, goal: 4, change: -8.3 },
    skillsLearned: { current: 7, goal: 10, change: 16.7 },
    projectsBuilt: { current: 2, goal: 3, change: 0 },
  }

  const achievements = [
    { title: "Fast Learner", description: "Completed 3 courses this month", icon: "🚀" },
    { title: "Consistent Progress", description: "7-day learning streak", icon: "🔥" },
    { title: "Skill Builder", description: "Mastered 5 new technical skills", icon: "💪" },
    { title: "Project Creator", description: "Built 2 portfolio projects", icon: "🛠️" },
  ]

  const insights = [
    {
      type: "positive",
      title: "Strong Technical Foundation",
      description: "Your programming skills are developing rapidly. Keep focusing on practical projects.",
    },
    {
      type: "warning",
      title: "Study Schedule Consistency",
      description: "Try to maintain consistent daily study hours for better retention and progress.",
    },
    {
      type: "suggestion",
      title: "Portfolio Development",
      description: "Consider adding one more project to strengthen your portfolio before job applications.",
    },
  ]

  const generatePDFReport = () => {
    alert("Career progress report would be generated and downloaded here!")
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-400"
    if (percentage >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getTrendIcon = (change: number) => {
    return change >= 0 ? (
      <TrendingUp className="w-4 h-4 text-green-400" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-400" />
    )
  }

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <span>Weekly Career Progress Report</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Your learning summary for {new Date().toLocaleDateString()} -{" "}
                {new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </CardDescription>
            </div>
            <Button onClick={generatePDFReport} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Weekly Goals Progress */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-green-400" />
            <span>Weekly Learning Goals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📚</span>
                  <span className="text-gray-300">Study Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.studyHours.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.studyHours.change > 0 ? "+" : ""}
                    {weeklyData.studyHours.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.studyHours.current} / {weeklyData.studyHours.goal} hours
                  </span>
                  <span
                    className={getProgressColor((weeklyData.studyHours.current / weeklyData.studyHours.goal) * 100)}
                  >
                    {Math.round((weeklyData.studyHours.current / weeklyData.studyHours.goal) * 100)}%
                  </span>
                </div>
                <Progress value={(weeklyData.studyHours.current / weeklyData.studyHours.goal) * 100} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">🎓</span>
                  <span className="text-gray-300">Courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.coursesCompleted.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.coursesCompleted.change > 0 ? "+" : ""}
                    {weeklyData.coursesCompleted.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.coursesCompleted.current} / {weeklyData.coursesCompleted.goal} completed
                  </span>
                  <span
                    className={getProgressColor(
                      (weeklyData.coursesCompleted.current / weeklyData.coursesCompleted.goal) * 100,
                    )}
                  >
                    {Math.round((weeklyData.coursesCompleted.current / weeklyData.coursesCompleted.goal) * 100)}%
                  </span>
                </div>
                <Progress
                  value={(weeklyData.coursesCompleted.current / weeklyData.coursesCompleted.goal) * 100}
                  className="h-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-400">🛠️</span>
                  <span className="text-gray-300">Skills</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.skillsLearned.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.skillsLearned.change > 0 ? "+" : ""}
                    {weeklyData.skillsLearned.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.skillsLearned.current} / {weeklyData.skillsLearned.goal} skills
                  </span>
                  <span
                    className={getProgressColor(
                      (weeklyData.skillsLearned.current / weeklyData.skillsLearned.goal) * 100,
                    )}
                  >
                    {Math.round((weeklyData.skillsLearned.current / weeklyData.skillsLearned.goal) * 100)}%
                  </span>
                </div>
                <Progress
                  value={(weeklyData.skillsLearned.current / weeklyData.skillsLearned.goal) * 100}
                  className="h-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">🚀</span>
                  <span className="text-gray-300">Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.projectsBuilt.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.projectsBuilt.change > 0 ? "+" : ""}
                    {weeklyData.projectsBuilt.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.projectsBuilt.current} / {weeklyData.projectsBuilt.goal} projects
                  </span>
                  <span
                    className={getProgressColor(
                      (weeklyData.projectsBuilt.current / weeklyData.projectsBuilt.goal) * 100,
                    )}
                  >
                    {Math.round((weeklyData.projectsBuilt.current / weeklyData.projectsBuilt.goal) * 100)}%
                  </span>
                </div>
                <Progress
                  value={(weeklyData.projectsBuilt.current / weeklyData.projectsBuilt.goal) * 100}
                  className="h-2"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span>Weekly Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-yellow-900/10 rounded-lg border border-yellow-500/20">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h4 className="font-medium text-yellow-400">{achievement.title}</h4>
                    <p className="text-sm text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Career Insights */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            <span>AI Career Insights</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Personalized recommendations based on your learning patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const bgColor = {
                positive: "bg-green-900/20 border-green-500/20",
                warning: "bg-yellow-900/20 border-yellow-500/20",
                suggestion: "bg-blue-900/20 border-blue-500/20",
              }[insight.type]

              const textColor = {
                positive: "text-green-300",
                warning: "text-yellow-300",
                suggestion: "text-blue-300",
              }[insight.type]

              return (
                <div key={index} className={`p-4 rounded-lg border ${bgColor}`}>
                  <h4 className={`font-medium mb-2 ${textColor}`}>{insight.title}</h4>
                  <p className="text-sm text-gray-300">{insight.description}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Summary Stats */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span>Week at a Glance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-blue-400">7/7</div>
              <p className="text-xs text-gray-400">Days Active</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-green-400">28</div>
              <p className="text-xs text-gray-400">Study Hours</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-purple-400">15</div>
              <p className="text-xs text-gray-400">Lessons Completed</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-yellow-400">85%</div>
              <p className="text-xs text-gray-400">Goal Achievement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
