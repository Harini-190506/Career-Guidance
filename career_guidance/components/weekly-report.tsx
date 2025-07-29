"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, TrendingUp, TrendingDown, Calendar, Target, Award, Activity } from "lucide-react"

export function WeeklyReport() {
  const weeklyData = {
    water: { current: 52, goal: 56, change: 8.3 },
    calories: { current: 10150, goal: 14000, change: -5.2 },
    exercise: { current: 285, goal: 420, change: 12.1 },
    sleep: { current: 51.5, goal: 56, change: -2.8 },
  }

  const achievements = [
    { title: "Hydration Hero", description: "Reached water goal 6/7 days", icon: "💧" },
    { title: "Early Bird", description: "Consistent sleep schedule", icon: "🌅" },
    { title: "Workout Warrior", description: "5 workout sessions completed", icon: "💪" },
    { title: "Nutrition Tracker", description: "Logged all meals for 7 days", icon: "🥗" },
  ]

  const insights = [
    {
      type: "positive",
      title: "Great Hydration",
      description: "You maintained excellent water intake throughout the week. Keep it up!",
    },
    {
      type: "warning",
      title: "Sleep Consistency",
      description: "Your sleep schedule varied by 2+ hours. Try to maintain consistent bedtimes.",
    },
    {
      type: "suggestion",
      title: "Exercise Goal",
      description: "You're 32% away from your weekly exercise goal. Add 2 more 30-min sessions.",
    },
  ]

  const generatePDFReport = () => {
    // In a real app, this would generate and download a PDF
    alert("PDF report would be generated and downloaded here!")
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
                <span>Weekly Health Report</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Your health summary for {new Date().toLocaleDateString()} -{" "}
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
            <span>Weekly Goals Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">💧</span>
                  <span className="text-gray-300">Water Intake</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.water.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.water.change > 0 ? "+" : ""}
                    {weeklyData.water.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.water.current} / {weeklyData.water.goal} glasses
                  </span>
                  <span className={getProgressColor((weeklyData.water.current / weeklyData.water.goal) * 100)}>
                    {Math.round((weeklyData.water.current / weeklyData.water.goal) * 100)}%
                  </span>
                </div>
                <Progress value={(weeklyData.water.current / weeklyData.water.goal) * 100} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">🍽️</span>
                  <span className="text-gray-300">Calories</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.calories.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.calories.change > 0 ? "+" : ""}
                    {weeklyData.calories.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.calories.current} / {weeklyData.calories.goal} kcal
                  </span>
                  <span className={getProgressColor((weeklyData.calories.current / weeklyData.calories.goal) * 100)}>
                    {Math.round((weeklyData.calories.current / weeklyData.calories.goal) * 100)}%
                  </span>
                </div>
                <Progress value={(weeklyData.calories.current / weeklyData.calories.goal) * 100} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">💪</span>
                  <span className="text-gray-300">Exercise</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.exercise.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.exercise.change > 0 ? "+" : ""}
                    {weeklyData.exercise.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.exercise.current} / {weeklyData.exercise.goal} min
                  </span>
                  <span className={getProgressColor((weeklyData.exercise.current / weeklyData.exercise.goal) * 100)}>
                    {Math.round((weeklyData.exercise.current / weeklyData.exercise.goal) * 100)}%
                  </span>
                </div>
                <Progress value={(weeklyData.exercise.current / weeklyData.exercise.goal) * 100} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-400">😴</span>
                  <span className="text-gray-300">Sleep</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(weeklyData.sleep.change)}
                  <span className="text-sm text-gray-400">
                    {weeklyData.sleep.change > 0 ? "+" : ""}
                    {weeklyData.sleep.change}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {weeklyData.sleep.current} / {weeklyData.sleep.goal} hours
                  </span>
                  <span className={getProgressColor((weeklyData.sleep.current / weeklyData.sleep.goal) * 100)}>
                    {Math.round((weeklyData.sleep.current / weeklyData.sleep.goal) * 100)}%
                  </span>
                </div>
                <Progress value={(weeklyData.sleep.current / weeklyData.sleep.goal) * 100} className="h-2" />
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

      {/* AI Insights */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span>AI Health Insights</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Personalized recommendations based on your weekly patterns
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
              <p className="text-xs text-gray-400">Days Tracked</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-green-400">5</div>
              <p className="text-xs text-gray-400">Workouts</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-orange-400">21</div>
              <p className="text-xs text-gray-400">Meals Logged</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="text-lg font-bold text-purple-400">92%</div>
              <p className="text-xs text-gray-400">Goal Achievement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
