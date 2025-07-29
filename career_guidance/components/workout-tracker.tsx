"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dumbbell, Plus, Clock, Zap, Target } from "lucide-react"

interface Workout {
  id: string
  type: string
  duration: number
  caloriesBurned: number
  time: string
  intensity: "low" | "medium" | "high"
}

interface WorkoutTrackerProps {
  onCaloriesBurnedUpdate: (calories: number) => void
}

export function WorkoutTracker({ onCaloriesBurnedUpdate }: WorkoutTrackerProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: "1",
      type: "Morning Run",
      duration: 30,
      caloriesBurned: 280,
      time: "07:00",
      intensity: "medium",
    },
    {
      id: "2",
      type: "Weight Training",
      duration: 45,
      caloriesBurned: 320,
      time: "18:30",
      intensity: "high",
    },
  ])

  const [newWorkout, setNewWorkout] = useState({
    type: "",
    duration: "",
    intensity: "medium" as "low" | "medium" | "high",
  })

  const workoutTypes = [
    "Running",
    "Walking",
    "Cycling",
    "Swimming",
    "Weight Training",
    "Yoga",
    "HIIT",
    "Pilates",
    "Dancing",
    "Boxing",
    "Rowing",
  ]

  const calculateCalories = (type: string, duration: number, intensity: "low" | "medium" | "high") => {
    const baseCalories: { [key: string]: number } = {
      Running: 12,
      Walking: 4,
      Cycling: 8,
      Swimming: 10,
      "Weight Training": 6,
      Yoga: 3,
      HIIT: 15,
      Pilates: 4,
      Dancing: 5,
      Boxing: 12,
      Rowing: 10,
    }

    const intensityMultiplier = {
      low: 0.8,
      medium: 1.0,
      high: 1.3,
    }

    const base = baseCalories[type] || 6
    return Math.round(base * duration * intensityMultiplier[intensity])
  }

  const addWorkout = () => {
    if (newWorkout.type && newWorkout.duration) {
      const duration = Number.parseInt(newWorkout.duration)
      const caloriesBurned = calculateCalories(newWorkout.type, duration, newWorkout.intensity)

      const workout: Workout = {
        id: Date.now().toString(),
        type: newWorkout.type,
        duration,
        caloriesBurned,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        intensity: newWorkout.intensity,
      }

      const updatedWorkouts = [...workouts, workout]
      setWorkouts(updatedWorkouts)
      onCaloriesBurnedUpdate(updatedWorkouts.reduce((sum, w) => sum + w.caloriesBurned, 0))

      setNewWorkout({ type: "", duration: "", intensity: "medium" })
    }
  }

  const totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0)
  const totalCaloriesBurned = workouts.reduce((sum, workout) => sum + workout.caloriesBurned, 0)

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "low":
        return "text-green-400 border-green-500"
      case "medium":
        return "text-yellow-400 border-yellow-500"
      case "high":
        return "text-red-400 border-red-500"
      default:
        return "text-gray-400 border-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Workout Summary */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Dumbbell className="w-5 h-5 text-green-400" />
            <span>Workout Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">{workouts.length}</div>
              <p className="text-sm text-gray-300">Workouts Today</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400">{totalDuration} min</div>
              <p className="text-sm text-gray-300">Total Duration</p>
            </div>
            <div className="text-center p-4 bg-red-900/20 rounded-lg border border-red-500/20">
              <div className="text-2xl font-bold text-red-400">{totalCaloriesBurned}</div>
              <p className="text-sm text-gray-300">Calories Burned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Workouts */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Today's Workouts</CardTitle>
          <CardDescription>Track your exercise activities and progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Existing workouts */}
          <div className="space-y-3">
            {workouts.map((workout) => (
              <div key={workout.id} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-100">{workout.type}</h4>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className={getIntensityColor(workout.intensity)}>
                      {workout.intensity}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {workout.time}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{workout.duration} minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-red-400" />
                    <span>{workout.caloriesBurned} calories</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add new workout form */}
          <div className="p-4 bg-gray-700/20 rounded-lg border border-gray-600 space-y-4">
            <h4 className="font-medium text-gray-100">Log New Workout</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="workout-type">Workout Type</Label>
                <Select
                  value={newWorkout.type}
                  onValueChange={(value) => setNewWorkout({ ...newWorkout, type: value })}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600">
                    <SelectValue placeholder="Select workout" />
                  </SelectTrigger>
                  <SelectContent>
                    {workoutTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="30"
                  value={newWorkout.duration}
                  onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
                  className="bg-gray-800 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="intensity">Intensity</Label>
                <Select
                  value={newWorkout.intensity}
                  onValueChange={(value: "low" | "medium" | "high") =>
                    setNewWorkout({ ...newWorkout, intensity: value })
                  }
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {newWorkout.type && newWorkout.duration && (
              <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                <p className="text-sm text-green-300">
                  <Target className="w-4 h-4 inline mr-1" />
                  Estimated calories burned:{" "}
                  {calculateCalories(newWorkout.type, Number.parseInt(newWorkout.duration), newWorkout.intensity)} kcal
                </p>
              </div>
            )}

            <Button
              onClick={addWorkout}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!newWorkout.type || !newWorkout.duration}
            >
              <Plus className="w-4 h-4 mr-2" />
              Log Workout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
