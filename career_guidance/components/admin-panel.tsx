"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  BarChart3,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export function AdminPanel() {
  const [students] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      career: "Data Scientist",
      progress: 78,
      lastActive: "2024-01-20",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@example.com",
      career: "Software Engineer",
      progress: 92,
      lastActive: "2024-01-19",
      status: "active",
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      email: "mike@example.com",
      career: "Product Manager",
      progress: 45,
      lastActive: "2024-01-15",
      status: "inactive",
    },
  ])

  const [careers] = useState([
    {
      id: 1,
      title: "Data Scientist",
      description: "Analyze complex data to drive business decisions",
      students: 156,
      avgSalary: "$120,000",
      growthRate: "+22%",
      status: "active",
    },
    {
      id: 2,
      title: "Software Engineer",
      description: "Design and develop software applications",
      students: 203,
      avgSalary: "$110,000",
      growthRate: "+17%",
      status: "active",
    },
    {
      id: 3,
      title: "Product Manager",
      description: "Lead product development and strategy",
      students: 89,
      avgSalary: "$130,000",
      growthRate: "+19%",
      status: "active",
    },
  ])

  const platformStats = {
    totalStudents: 1247,
    activeStudents: 892,
    completionRate: 73.5,
    avgProgress: 68.2,
    newSignups: 45,
    mlAccuracy: 94.2,
  }

  return (
    <div className="space-y-6">
      {/* Admin Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Total Students
            </CardTitle>
            <Users className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{platformStats.totalStudents.toLocaleString()}</div>
            <p className="text-xs text-green-400">+{platformStats.newSignups} this week</p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Active Students
            </CardTitle>
            <TrendingUp className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{platformStats.activeStudents}</div>
            <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              {Math.round((platformStats.activeStudents / platformStats.totalStudents) * 100)}% active rate
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              Completion Rate
            </CardTitle>
            <CheckCircle className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">{platformStats.completionRate}%</div>
            <p className="text-xs text-green-400">+2.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
              ML Accuracy
            </CardTitle>
            <BarChart3 className="h-4 w-4" style={{ color: "#3C415C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{platformStats.mlAccuracy}%</div>
            <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              Model performance
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tabs */}
      <Tabs defaultValue="students" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 border border-gray-700" style={{ backgroundColor: "#301B3F" }}>
          <TabsTrigger
            value="students"
            className="data-[state=active]:text-white"
            style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
          >
            Students
          </TabsTrigger>
          <TabsTrigger
            value="careers"
            className="data-[state=active]:text-white"
            style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
          >
            Careers
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:text-white"
            style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:text-white"
            style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
          >
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle style={{ color: "#B4A5A5" }}>Student Management</CardTitle>
                  <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                    Manage student accounts and monitor progress
                  </CardDescription>
                </div>
                <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Student
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="p-4 rounded-lg border border-gray-600"
                    style={{ backgroundColor: "#151515" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#3C415C" }}
                        >
                          <span className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                            {student.name}
                          </h4>
                          <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                            {student.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                            {student.career}
                          </p>
                          <p className="text-xs" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                            {student.progress}% complete
                          </p>
                        </div>

                        <Badge
                          variant="outline"
                          className={
                            student.status === "active"
                              ? "text-green-400 border-green-500"
                              : "text-red-400 border-red-500"
                          }
                        >
                          {student.status}
                        </Badge>

                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="careers">
          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle style={{ color: "#B4A5A5" }}>Career Profiles</CardTitle>
                  <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                    Manage available career paths and requirements
                  </CardDescription>
                </div>
                <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Career
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {careers.map((career) => (
                  <div
                    key={career.id}
                    className="p-4 rounded-lg border border-gray-600"
                    style={{ backgroundColor: "#151515" }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                          {career.title}
                        </h4>
                        <Badge variant="outline" className="text-green-400 border-green-500">
                          {career.status}
                        </Badge>
                      </div>

                      <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                        {career.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span style={{ color: "#B4A5A5", opacity: 0.7 }}>Students: </span>
                          <span className="font-medium text-blue-400">{career.students}</span>
                        </div>
                        <div>
                          <span style={{ color: "#B4A5A5", opacity: 0.7 }}>Growth: </span>
                          <span className="font-medium text-green-400">{career.growthRate}</span>
                        </div>
                        <div className="col-span-2">
                          <span style={{ color: "#B4A5A5", opacity: 0.7 }}>Avg Salary: </span>
                          <span className="font-medium text-yellow-400">{career.avgSalary}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-6">
            <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span style={{ color: "#B4A5A5" }}>Platform Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                      Student Engagement
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          Daily Active Users
                        </span>
                        <span className="text-sm font-medium text-green-400">342</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          Avg Session Duration
                        </span>
                        <span className="text-sm font-medium text-blue-400">24 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          Course Completion Rate
                        </span>
                        <span className="text-sm font-medium text-purple-400">73.5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                      ML Model Performance
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          Prediction Accuracy
                        </span>
                        <span className="text-sm font-medium text-green-400">94.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          Model Confidence
                        </span>
                        <span className="text-sm font-medium text-blue-400">87.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          Last Retrained
                        </span>
                        <span className="text-sm font-medium text-yellow-400">2 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle style={{ color: "#B4A5A5" }}>System Alerts</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 bg-transparent"
                    style={{ color: "#B4A5A5" }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border border-yellow-500/20" style={{ backgroundColor: "#151515" }}>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">ML Model Accuracy Below Threshold</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                      Consider retraining with recent student data
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-500/20" style={{ backgroundColor: "#151515" }}>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-green-400">Database Backup Completed</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                      All student data successfully backed up
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-gray-400" />
                <span style={{ color: "#B4A5A5" }}>Platform Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                    ML Model Configuration
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="accuracy-threshold" style={{ color: "#B4A5A5" }}>
                        Accuracy Threshold (%)
                      </Label>
                      <Input
                        id="accuracy-threshold"
                        type="number"
                        defaultValue="90"
                        className="border-gray-600"
                        style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="retrain-frequency" style={{ color: "#B4A5A5" }}>
                        Retrain Frequency (days)
                      </Label>
                      <Input
                        id="retrain-frequency"
                        type="number"
                        defaultValue="7"
                        className="border-gray-600"
                        style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                    Platform Configuration
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="max-students" style={{ color: "#B4A5A5" }}>
                        Max Students per Career
                      </Label>
                      <Input
                        id="max-students"
                        type="number"
                        defaultValue="500"
                        className="border-gray-600"
                        style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="session-timeout" style={{ color: "#B4A5A5" }}>
                        Session Timeout (minutes)
                      </Label>
                      <Input
                        id="session-timeout"
                        type="number"
                        defaultValue="30"
                        className="border-gray-600"
                        style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" className="border-gray-600 bg-transparent" style={{ color: "#B4A5A5" }}>
                  Reset to Defaults
                </Button>
                <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
