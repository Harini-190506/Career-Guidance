"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  BookOpen,
  Award,
  Briefcase,
  Clock,
  CheckCircle,
  Circle,
  Star,
  ExternalLink,
  Calendar,
  Target,
} from "lucide-react"

interface RoadmapStep {
  id: string
  title: string
  description: string
  type: "course" | "certification" | "project" | "internship" | "exam"
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  status: "completed" | "in-progress" | "upcoming"
  resources: {
    name: string
    url: string
    type: "course" | "book" | "website" | "video"
  }[]
  prerequisites?: string[]
}

interface CareerRoadmap {
  career: string
  totalDuration: string
  phases: {
    name: string
    duration: string
    steps: RoadmapStep[]
  }[]
}

export function CareerRoadmap() {
  const [selectedCareer, setSelectedCareer] = useState("Data Scientist")

  const roadmaps: Record<string, CareerRoadmap> = {
    "Data Scientist": {
      career: "Data Scientist",
      totalDuration: "18-24 months",
      phases: [
        {
          name: "Foundation Phase",
          duration: "6 months",
          steps: [
            {
              id: "math-stats",
              title: "Mathematics & Statistics",
              description: "Master linear algebra, calculus, probability, and statistical inference",
              type: "course",
              duration: "3 months",
              difficulty: "Intermediate",
              status: "completed",
              resources: [
                { name: "Khan Academy Statistics", url: "#", type: "course" },
                { name: "Linear Algebra by Gilbert Strang", url: "#", type: "course" },
                { name: "Think Stats", url: "#", type: "book" },
              ],
            },
            {
              id: "python-basics",
              title: "Python Programming",
              description: "Learn Python fundamentals, data structures, and object-oriented programming",
              type: "course",
              duration: "2 months",
              difficulty: "Beginner",
              status: "in-progress",
              resources: [
                { name: "Python for Everybody", url: "#", type: "course" },
                { name: "Automate the Boring Stuff", url: "#", type: "book" },
              ],
            },
            {
              id: "sql-databases",
              title: "SQL & Databases",
              description: "Master SQL queries, database design, and data manipulation",
              type: "course",
              duration: "1 month",
              difficulty: "Beginner",
              status: "upcoming",
              resources: [
                { name: "SQLBolt", url: "#", type: "website" },
                { name: "PostgreSQL Tutorial", url: "#", type: "course" },
              ],
            },
          ],
        },
        {
          name: "Core Skills Phase",
          duration: "8 months",
          steps: [
            {
              id: "data-analysis",
              title: "Data Analysis with Pandas",
              description: "Learn data manipulation, cleaning, and exploratory data analysis",
              type: "course",
              duration: "2 months",
              difficulty: "Intermediate",
              status: "upcoming",
              resources: [
                { name: "Pandas Documentation", url: "#", type: "website" },
                { name: "Python for Data Analysis", url: "#", type: "book" },
              ],
              prerequisites: ["python-basics"],
            },
            {
              id: "machine-learning",
              title: "Machine Learning Fundamentals",
              description: "Supervised and unsupervised learning algorithms, model evaluation",
              type: "course",
              duration: "4 months",
              difficulty: "Advanced",
              status: "upcoming",
              resources: [
                { name: "Andrew Ng's ML Course", url: "#", type: "course" },
                { name: "Scikit-learn Documentation", url: "#", type: "website" },
              ],
              prerequisites: ["math-stats", "python-basics"],
            },
            {
              id: "data-viz",
              title: "Data Visualization",
              description: "Create compelling visualizations using matplotlib, seaborn, and plotly",
              type: "course",
              duration: "1 month",
              difficulty: "Intermediate",
              status: "upcoming",
              resources: [
                { name: "Matplotlib Tutorials", url: "#", type: "course" },
                { name: "Seaborn Gallery", url: "#", type: "website" },
              ],
            },
            {
              id: "first-project",
              title: "Capstone Project",
              description: "Complete an end-to-end data science project with real-world data",
              type: "project",
              duration: "1 month",
              difficulty: "Advanced",
              status: "upcoming",
              resources: [
                { name: "Kaggle Datasets", url: "#", type: "website" },
                { name: "GitHub Portfolio Guide", url: "#", type: "website" },
              ],
            },
          ],
        },
        {
          name: "Specialization Phase",
          duration: "6 months",
          steps: [
            {
              id: "deep-learning",
              title: "Deep Learning",
              description: "Neural networks, TensorFlow/PyTorch, computer vision, NLP",
              type: "course",
              duration: "3 months",
              difficulty: "Advanced",
              status: "upcoming",
              resources: [
                { name: "Deep Learning Specialization", url: "#", type: "course" },
                { name: "PyTorch Tutorials", url: "#", type: "course" },
              ],
            },
            {
              id: "cloud-platforms",
              title: "Cloud Computing",
              description: "AWS/GCP/Azure for data science, MLOps, model deployment",
              type: "course",
              duration: "2 months",
              difficulty: "Intermediate",
              status: "upcoming",
              resources: [
                { name: "AWS Machine Learning", url: "#", type: "course" },
                { name: "Google Cloud ML", url: "#", type: "course" },
              ],
            },
            {
              id: "internship",
              title: "Data Science Internship",
              description: "Gain real-world experience in a data science role",
              type: "internship",
              duration: "3-6 months",
              difficulty: "Advanced",
              status: "upcoming",
              resources: [
                { name: "LinkedIn Jobs", url: "#", type: "website" },
                { name: "AngelList Startups", url: "#", type: "website" },
              ],
            },
          ],
        },
      ],
    },
    "Software Engineer": {
      career: "Software Engineer",
      totalDuration: "12-18 months",
      phases: [
        {
          name: "Programming Fundamentals",
          duration: "4 months",
          steps: [
            {
              id: "programming-basics",
              title: "Programming Fundamentals",
              description: "Learn core programming concepts, algorithms, and data structures",
              type: "course",
              duration: "2 months",
              difficulty: "Beginner",
              status: "completed",
              resources: [
                { name: "CS50 Introduction to Computer Science", url: "#", type: "course" },
                { name: "Codecademy", url: "#", type: "website" },
              ],
            },
            {
              id: "web-development",
              title: "Web Development",
              description: "HTML, CSS, JavaScript, and modern web frameworks",
              type: "course",
              duration: "2 months",
              difficulty: "Intermediate",
              status: "in-progress",
              resources: [
                { name: "The Odin Project", url: "#", type: "course" },
                { name: "MDN Web Docs", url: "#", type: "website" },
              ],
            },
          ],
        },
      ],
    },
  }

  const currentRoadmap = roadmaps[selectedCareer]
  const allSteps = currentRoadmap.phases.flatMap((phase) => phase.steps)
  const completedSteps = allSteps.filter((step) => step.status === "completed").length
  const totalSteps = allSteps.length
  const overallProgress = (completedSteps / totalSteps) * 100

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="w-4 h-4" />
      case "certification":
        return <Award className="w-4 h-4" />
      case "project":
        return <Target className="w-4 h-4" />
      case "internship":
        return <Briefcase className="w-4 h-4" />
      case "exam":
        return <Star className="w-4 h-4" />
      default:
        return <Circle className="w-4 h-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 border-green-500"
      case "Intermediate":
        return "text-yellow-400 border-yellow-500"
      case "Advanced":
        return "text-red-400 border-red-500"
      default:
        return "text-gray-400 border-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Career Selection */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span style={{ color: "#B4A5A5" }}>Career Roadmap</span>
          </CardTitle>
          <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
            Personalized learning path for your chosen career
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            {Object.keys(roadmaps).map((career) => (
              <Button
                key={career}
                variant={selectedCareer === career ? "default" : "outline"}
                onClick={() => setSelectedCareer(career)}
                className={selectedCareer === career ? "text-white" : "border-gray-600"}
                style={selectedCareer === career ? { backgroundColor: "#3C415C" } : { color: "#B4A5A5" }}
              >
                {career}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-2xl font-bold text-blue-400">{currentRoadmap.totalDuration}</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Total Duration
              </p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-2xl font-bold text-green-400">
                {completedSteps}/{totalSteps}
              </div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Steps Completed
              </p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#151515" }}>
              <div className="text-2xl font-bold text-purple-400">{Math.round(overallProgress)}%</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Progress
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2" style={{ color: "#B4A5A5", opacity: 0.7 }}>
              <span>Overall Progress</span>
              <span>{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Phases */}
      <div className="space-y-6">
        {currentRoadmap.phases.map((phase, phaseIndex) => (
          <Card key={phaseIndex} className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle style={{ color: "#B4A5A5" }}>{phase.name}</CardTitle>
                  <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                    Duration: {phase.duration}
                  </CardDescription>
                </div>
                <Badge variant="outline" style={{ color: "#B4A5A5" }}>
                  Phase {phaseIndex + 1}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {phase.steps.map((step, stepIndex) => (
                  <div
                    key={step.id}
                    className="p-4 rounded-lg border border-gray-600"
                    style={{ backgroundColor: "#151515" }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">{getStatusIcon(step.status)}</div>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
                              {step.title}
                            </h4>
                            <p className="text-sm mt-1" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                              {step.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className={getDifficultyColor(step.difficulty)}>
                              {step.difficulty}
                            </Badge>
                            <Badge variant="outline" style={{ color: "#B4A5A5" }}>
                              <Clock className="w-3 h-3 mr-1" />
                              {step.duration}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(step.type)}
                            <span className="capitalize">{step.type}</span>
                          </div>
                        </div>

                        {step.prerequisites && (
                          <div>
                            <p className="text-xs font-medium mb-1" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                              Prerequisites:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {step.prerequisites.map((prereq, prereqIndex) => (
                                <Badge key={prereqIndex} variant="outline" className="text-xs">
                                  {allSteps.find((s) => s.id === prereq)?.title || prereq}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Resources */}
                        <div>
                          <p className="text-xs font-medium mb-2" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                            Learning Resources:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.resources.map((resource, resourceIndex) => (
                              <div
                                key={resourceIndex}
                                className="flex items-center justify-between p-2 rounded border border-gray-700"
                                style={{ backgroundColor: "#301B3F" }}
                              >
                                <div className="flex items-center space-x-2">
                                  {getTypeIcon(resource.type)}
                                  <span className="text-xs" style={{ color: "#B4A5A5" }}>
                                    {resource.name}
                                  </span>
                                </div>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <ExternalLink className="w-3 h-3" style={{ color: "#B4A5A5" }} />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        {step.status === "upcoming" && (
                          <Button className="w-full text-white" style={{ backgroundColor: "#3C415C" }}>
                            Start Learning
                          </Button>
                        )}
                        {step.status === "in-progress" && (
                          <Button
                            className="w-full bg-transparent"
                            variant="outline"
                            className="border-yellow-500 text-yellow-400"
                          >
                            Continue Progress
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Summary */}
      <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-green-400" />
            <span style={{ color: "#B4A5A5" }}>Progress Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="text-center p-4 rounded-lg border border-green-500/20"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="text-2xl font-bold text-green-400">{completedSteps}</div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Completed Steps
              </p>
            </div>
            <div
              className="text-center p-4 rounded-lg border border-yellow-500/20"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="text-2xl font-bold text-yellow-400">
                {allSteps.filter((step) => step.status === "in-progress").length}
              </div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                In Progress
              </p>
            </div>
            <div
              className="text-center p-4 rounded-lg border border-blue-500/20"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="text-2xl font-bold text-blue-400">
                {allSteps.filter((step) => step.status === "upcoming").length}
              </div>
              <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
                Upcoming
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg border border-purple-500/20" style={{ backgroundColor: "#151515" }}>
            <h4 className="font-medium text-purple-400 mb-2">Next Milestone</h4>
            <p className="text-sm" style={{ color: "#B4A5A5", opacity: 0.8 }}>
              Complete your Python Programming course to unlock Machine Learning Fundamentals. You're making great
              progress on your journey to becoming a {selectedCareer}!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
