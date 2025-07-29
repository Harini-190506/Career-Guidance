"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Moon, Plus, Clock, TrendingUp, Star } from "lucide-react"

interface SleepRecord {
  id: string
  bedtime: string
  wakeTime: string
  duration: number
  quality: "poor" | "fair" | "good" | "excellent"
  date: string
}

interface SleepTrackerProps {
  onSleepUpdate: (hours: number) => void
}

export function SleepTracker({ onSleepUpdate }: SleepTrackerProps) {
  const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([
    {
      id: "1",
      bedtime: "22:30",
      wakeTime: "06:00",
      duration: 7.5,
      quality: "good",
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: "2",
      bedtime: "23:15",
      wakeTime: "06:30",
      duration: 7.25,
      quality: "fair",
      date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
    },
  ])

  const [newSleep, setNewSleep] = useState({
    bedtime: "",
    wakeTime: "",
    quality: "good" as "poor" | "fair" | "good" | "excellent",
  })

  const calculateDuration = (bedtime: string, wakeTime: string) => {
    const bed = new Date(`2000-01-01 ${bedtime}`)
    let wake = new Date(`2000-01-01 ${wakeTime}`)

    // If wake time is earlier than bedtime, assume it's the next day
    if (wake < bed) {
      wake = new Date(`2000-01-02 ${wakeTime}`)
    }

    const diff = wake.getTime() - bed.getTime()
    return Math.round((diff / (1000 * 60 * 60)) * 100) / 100
  }

  const addSleepRecord = () => {
    if (newSleep.bedtime && newSleep.wakeTime) {
      const duration = calculateDuration(newSleep.bedtime, newSleep.wakeTime)

      const record: SleepRecord = {
        id: Date.now().toString(),
        bedtime: newSleep.bedtime,
        wakeTime: newSleep.wakeTime,
        duration,
        quality: newSleep.quality,
        date: new Date().toISOString().split("T")[0],
      }

      const updatedRecords = [record, ...sleepRecords]
      setSleepRecords(updatedRecords)
      onSleepUpdate(duration)

      setNewSleep({ bedtime: "", wakeTime: "", quality: "good" })
    }
  }

  const averageSleep = sleepRecords.reduce((sum, record) => sum + record.duration, 0) / sleepRecords.length
  const sleepGoal = 8
  const todaysSleep = sleepRecords[0]?.duration || 0
  const sleepProgress = (todaysSleep / sleepGoal) * 100

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "poor":
        return "text-red-400 border-red-500"
      case "fair":
        return "text-yellow-400 border-yellow-500"
      case "good":
        return "text-green-400 border-green-500"
      case "excellent":
        return "text-blue-400 border-blue-500"
      default:
        return "text-gray-400 border-gray-500"
    }
  }

  const getQualityStars = (quality: string) => {
    const stars = {
      poor: 1,
      fair: 2,
      good: 3,
      excellent: 4,
    }
    return stars[quality as keyof typeof stars] || 0
  }

  return (
    <div className="space-y-6">
      {/* Sleep Summary */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Moon className="w-5 h-5 text-purple-400" />
            <span>Sleep Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400">{todaysSleep}h</div>
              <p className="text-sm text-gray-300">Last Night</p>
              <Progress value={sleepProgress} className="h-2 mt-2" />
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400">{averageSleep.toFixed(1)}h</div>
              <p className="text-sm text-gray-300">7-Day Average</p>
            </div>
            <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">{sleepGoal}h</div>
              <p className="text-sm text-gray-300">Daily Goal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sleep Records */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Sleep History</CardTitle>
          <CardDescription>Track your sleep patterns and quality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Recent sleep records */}
          <div className="space-y-3">
            {sleepRecords.slice(0, 5).map((record) => (
              <div key={record.id} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-100">{record.date}</h4>
                    <Badge variant="outline" className={getQualityColor(record.quality)}>
                      {record.quality}
                    </Badge>
                  </div>
                  <div className="flex">
                    {Array.from({ length: getQualityStars(record.quality) }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Moon className="w-4 h-4 text-purple-400" />
                    <span>Bedtime: {record.bedtime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Wake: {record.wakeTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Duration: {record.duration}h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add new sleep record */}
          <div className="p-4 bg-gray-700/20 rounded-lg border border-gray-600 space-y-4">
            <h4 className="font-medium text-gray-100">Log Sleep</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="bedtime">Bedtime</Label>
                <Input
                  id="bedtime"
                  type="time"
                  value={newSleep.bedtime}
                  onChange={(e) => setNewSleep({ ...newSleep, bedtime: e.target.value })}
                  className="bg-gray-800 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="wake-time">Wake Time</Label>
                <Input
                  id="wake-time"
                  type="time"
                  value={newSleep.wakeTime}
                  onChange={(e) => setNewSleep({ ...newSleep, wakeTime: e.target.value })}
                  className="bg-gray-800 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="quality">Sleep Quality</Label>
                <select
                  id="quality"
                  value={newSleep.quality}
                  onChange={(e) => setNewSleep({ ...newSleep, quality: e.target.value as any })}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100"
                >
                  <option value="poor">Poor</option>
                  <option value="fair">Fair</option>
                  <option value="good">Good</option>
                  <option value="excellent">Excellent</option>
                </select>
              </div>
            </div>

            {newSleep.bedtime && newSleep.wakeTime && (
              <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                <p className="text-sm text-purple-300">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Sleep duration: {calculateDuration(newSleep.bedtime, newSleep.wakeTime)} hours
                </p>
              </div>
            )}

            <Button
              onClick={addSleepRecord}
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={!newSleep.bedtime || !newSleep.wakeTime}
            >
              <Plus className="w-4 h-4 mr-2" />
              Log Sleep
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
