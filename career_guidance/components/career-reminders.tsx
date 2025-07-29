"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock, Mail, Smartphone, Plus, Trash2, Settings, BookOpen, Target, Award } from "lucide-react"

interface Reminder {
  id: string
  type: "study" | "deadline" | "milestone" | "review"
  time: string
  message: string
  enabled: boolean
  frequency: "daily" | "weekdays" | "weekly"
}

export function CareerReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      type: "study",
      time: "09:00",
      message: "Time for your daily coding practice! 💻",
      enabled: true,
      frequency: "daily",
    },
    {
      id: "2",
      type: "deadline",
      time: "18:00",
      message: "Project deadline approaching - 2 days left! ⏰",
      enabled: true,
      frequency: "daily",
    },
    {
      id: "3",
      type: "milestone",
      time: "20:00",
      message: "Review your weekly learning goals 🎯",
      enabled: true,
      frequency: "weekly",
    },
    {
      id: "4",
      type: "review",
      time: "15:00",
      message: "Time to review yesterday's concepts 📚",
      enabled: false,
      frequency: "weekdays",
    },
  ])

  const [newReminder, setNewReminder] = useState({
    type: "study" as "study" | "deadline" | "milestone" | "review",
    time: "",
    message: "",
    frequency: "daily" as "daily" | "weekdays" | "weekly",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    soundEnabled: true,
    quietHours: {
      enabled: true,
      start: "22:00",
      end: "07:00",
    },
  })

  const reminderTypes = {
    study: { icon: BookOpen, color: "text-blue-400", bg: "bg-blue-900/20 border-blue-500/20" },
    deadline: { icon: Clock, color: "text-red-400", bg: "bg-red-900/20 border-red-500/20" },
    milestone: { icon: Target, color: "text-green-400", bg: "bg-green-900/20 border-green-500/20" },
    review: { icon: Award, color: "text-purple-400", bg: "bg-purple-900/20 border-purple-500/20" },
  }

  const addReminder = () => {
    if (newReminder.time && newReminder.message) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        type: newReminder.type,
        time: newReminder.time,
        message: newReminder.message,
        enabled: true,
        frequency: newReminder.frequency,
      }

      setReminders([...reminders, reminder])
      setNewReminder({ type: "study", time: "", message: "", frequency: "daily" })
    }
  }

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder)),
    )
  }

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  const getDefaultMessage = (type: string) => {
    const messages = {
      study: "Time for your study session! 📚",
      deadline: "Important deadline reminder! ⏰",
      milestone: "Check your milestone progress 🎯",
      review: "Review time - reinforce your learning! 📝",
    }
    return messages[type as keyof typeof messages] || ""
  }

  return (
    <div className="space-y-6">
      {/* Notification Settings */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-gray-400" />
            <span>Notification Preferences</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Configure how you want to receive career and learning reminders
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">Email Notifications</span>
                </div>
                <Switch
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Push Notifications</span>
                </div>
                <Switch
                  checked={notificationSettings.pushNotifications}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, pushNotifications: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">Sound Alerts</span>
                </div>
                <Switch
                  checked={notificationSettings.soundEnabled}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, soundEnabled: checked })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Quiet Hours</span>
                <Switch
                  checked={notificationSettings.quietHours.enabled}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      quietHours: { ...notificationSettings.quietHours, enabled: checked },
                    })
                  }
                />
              </div>

              {notificationSettings.quietHours.enabled && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="quiet-start" className="text-xs text-gray-400">
                      From
                    </Label>
                    <Input
                      id="quiet-start"
                      type="time"
                      value={notificationSettings.quietHours.start}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          quietHours: { ...notificationSettings.quietHours, start: e.target.value },
                        })
                      }
                      className="bg-gray-800 border-gray-600 text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quiet-end" className="text-xs text-gray-400">
                      To
                    </Label>
                    <Input
                      id="quiet-end"
                      type="time"
                      value={notificationSettings.quietHours.end}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          quietHours: { ...notificationSettings.quietHours, end: e.target.value },
                        })
                      }
                      className="bg-gray-800 border-gray-600 text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Reminders */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-blue-400" />
            <span>Active Career Reminders</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            Manage your automated learning and career reminders
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {reminders.map((reminder) => {
              const typeConfig = reminderTypes[reminder.type]
              const IconComponent = typeConfig.icon

              return (
                <div key={reminder.id} className={`p-4 rounded-lg border ${typeConfig.bg}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <IconComponent className={`w-5 h-5 mt-0.5 ${typeConfig.color}`} />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-100 capitalize">{reminder.type} Reminder</span>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {reminder.time}
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            {reminder.frequency}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-300">{reminder.message}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={reminder.enabled}
                        onCheckedChange={() => toggleReminder(reminder.id)}
                        size="sm"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteReminder(reminder.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Add New Reminder */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="w-5 h-5 text-green-400" />
            <span>Add New Reminder</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reminder-type">Reminder Type</Label>
              <select
                id="reminder-type"
                value={newReminder.type}
                onChange={(e) => {
                  const type = e.target.value as "study" | "deadline" | "milestone" | "review"
                  setNewReminder({
                    ...newReminder,
                    type,
                    message: getDefaultMessage(type),
                  })
                }}
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100"
              >
                <option value="study">Study Session</option>
                <option value="deadline">Deadline</option>
                <option value="milestone">Milestone</option>
                <option value="review">Review</option>
              </select>
            </div>

            <div>
              <Label htmlFor="reminder-time">Time</Label>
              <Input
                id="reminder-time"
                type="time"
                value={newReminder.time}
                onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                className="bg-gray-800 border-gray-600"
              />
            </div>

            <div>
              <Label htmlFor="reminder-frequency">Frequency</Label>
              <select
                id="reminder-frequency"
                value={newReminder.frequency}
                onChange={(e) => setNewReminder({ ...newReminder, frequency: e.target.value as any })}
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100"
              >
                <option value="daily">Daily</option>
                <option value="weekdays">Weekdays Only</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="reminder-message">Custom Message</Label>
            <Input
              id="reminder-message"
              placeholder="Enter your reminder message..."
              value={newReminder.message}
              onChange={(e) => setNewReminder({ ...newReminder, message: e.target.value })}
              className="bg-gray-800 border-gray-600"
            />
          </div>

          <Button
            onClick={addReminder}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={!newReminder.time || !newReminder.message}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Reminder
          </Button>
        </CardContent>
      </Card>

      {/* Automation Status */}
      <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-green-400" />
            <span>Career Automation Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">{reminders.filter((r) => r.enabled).length}</div>
              <p className="text-sm text-gray-300">Active Reminders</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400">24/7</div>
              <p className="text-sm text-gray-300">Career Tracking</p>
            </div>
            <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400">Smart</div>
              <p className="text-sm text-gray-300">AI Recommendations</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/10 rounded-lg border border-green-500/20">
            <p className="text-sm text-green-300">
              🚀 Your CareerSync automation is running smoothly! All systems are active and tracking your learning
              progress.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
