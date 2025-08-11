"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  User,
  Briefcase,
  Activity,
  Settings,
  Eye,
  Pencil,
  Trash,
  ArrowUp,
  ArrowDown,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-[#151515] text-white p-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-[#301B3F] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Total Students
            </CardTitle>
            <CardDescription className="text-gray-400">1,247</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-[#301B3F] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Active Students
            </CardTitle>
            <CardDescription className="text-gray-400">864</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-[#301B3F] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Completion Rate
            </CardTitle>
            <CardDescription className="text-gray-400">78%</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-[#301B3F] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              ML Accuracy
            </CardTitle>
            <CardDescription className="text-gray-400">92%</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="students">
        <TabsList className="bg-[#301B3F] text-white mb-6">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="careers">Careers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Students Tab */}
        <TabsContent value="students">
          <div className="grid grid-cols-1 gap-4">
            {["Jamunadevi", "Jayaharini", "Jayesh"].map((student, index) => (
              <Card key={index} className="bg-[#222] text-white">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#444] rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                      {student.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{student}</div>
                      <div className="text-gray-400 text-sm">
                        {student.toLowerCase()}@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">Career: AI Engineer</div>
                  <div className="text-sm text-gray-300">Progress: 70%</div>
                  <div className="text-sm text-green-400">Status: Active</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Careers Tab */}
        <TabsContent value="careers">
          <div className="grid grid-cols-1 gap-4">
            {["AI Engineer", "Data Scientist", "UX Designer"].map((career, index) => (
              <Card key={index} className="bg-[#222] text-white">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg">{career}</div>
                    <div className="text-sm text-gray-400">
                      {career} Description here
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">Students: 250</div>
                  <div className="text-sm text-gray-300 flex items-center gap-1">
                    Growth: 15%
                    <ArrowUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-sm text-gray-300">Salary: ₹10LPA</div>
                  <div className="text-sm text-green-400">Status: Active</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Engagement */}
            <Card className="bg-[#222] text-white">
              <CardHeader>
                <CardTitle>Student Engagement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>Daily Active Users: 500</div>
                <div>Avg Session Duration: 12 min</div>
                <div>Course Completion Rate: 78%</div>
              </CardContent>
            </Card>

            {/* ML Model Performance */}
            <Card className="bg-[#222] text-white">
              <CardHeader>
                <CardTitle>ML Model Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>Accuracy: 92%</div>
                <div>Avg Confidence: 87%</div>
                <div>Last Retrained: 3 days ago</div>
              </CardContent>
            </Card>
          </div>

          {/* System Alerts */}
          <div className="mt-6 grid grid-cols-1 gap-4">
            <Card className="bg-[#222] text-white">
              <CardContent className="p-4 flex gap-4 items-center">
                <AlertCircle className="text-yellow-400 w-6 h-6" />
                <div>⚠️ ML Accuracy dropped below threshold.</div>
              </CardContent>
            </Card>
            <Card className="bg-[#222] text-white">
              <CardContent className="p-4 flex gap-4 items-center">
                <CheckCircle className="text-green-400 w-6 h-6" />
                <div>✅ Weekly backup completed successfully.</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ML Settings */}
            <Card className="bg-[#222] text-white">
              <CardHeader>
                <CardTitle>ML Model Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Accuracy Threshold</label>
                  <Input className="text-black" defaultValue="90%" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Retrain Frequency</label>
                  <Input className="text-black" defaultValue="Weekly" />
                </div>
              </CardContent>
            </Card>

            {/* Platform Settings */}
            <Card className="bg-[#222] text-white">
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Max Students Per Career</label>
                  <Input className="text-black" defaultValue="100" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Session Timeout (min)</label>
                  <Input className="text-black" defaultValue="30" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline">Reset</Button>
            <Button className="bg-green-600 text-white">Save Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
