"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Droplets, Plus, Minus } from "lucide-react"

interface WaterTrackerProps {
  currentIntake: number
  goal: number
  onUpdate: (intake: number) => void
}

export function WaterTracker({ currentIntake, goal, onUpdate }: WaterTrackerProps) {
  const progress = (currentIntake / goal) * 100

  const addWater = () => {
    if (currentIntake < goal + 2) {
      onUpdate(currentIntake + 1)
    }
  }

  const removeWater = () => {
    if (currentIntake > 0) {
      onUpdate(currentIntake - 1)
    }
  }

  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Droplets className="w-5 h-5 text-blue-400" />
          <span>Water Intake Tracker</span>
        </CardTitle>
        <CardDescription className="text-gray-300">Stay hydrated throughout the day</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">
            {currentIntake}/{goal}
          </div>
          <p className="text-gray-300">glasses of water</p>
        </div>

        <Progress value={progress} className="h-3" />

        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={removeWater}
            disabled={currentIntake === 0}
            className="border-gray-600 hover:bg-gray-700 bg-transparent"
          >
            <Minus className="w-4 h-4" />
          </Button>

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{currentIntake}</div>
            <p className="text-xs text-gray-400">glasses</p>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={addWater}
            className="border-blue-500 hover:bg-blue-900/20 text-blue-400 bg-transparent"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {progress >= 100 && (
          <div className="text-center p-3 bg-green-900/20 rounded-lg border border-green-500/20">
            <p className="text-green-300 text-sm">🎉 Congratulations! You've reached your daily water goal!</p>
          </div>
        )}

        {progress < 50 && (
          <div className="text-center p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
            <p className="text-blue-300 text-sm">💧 Remember to stay hydrated! You're halfway to your goal.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
