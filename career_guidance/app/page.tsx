"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, Award, ArrowRight, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms analyze your profile to suggest the perfect career match",
      color: "text-purple-400",
    },
    {
      icon: Target,
      title: "Personalized Roadmaps",
      description: "Get step-by-step guidance with courses, certifications, and skill development plans",
      color: "text-blue-400",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your learning journey with detailed analytics and performance insights",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Earn certificates and build a portfolio that employers actually value",
      color: "text-yellow-400",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515", color: "#B4A5A5" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm border-purple-500 text-purple-300"
              style={{ backgroundColor: "#301B3F" }}
            >
              🚀 Powered by Advanced Machine Learning
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Find Your Perfect</span>
              <br />
              <span style={{ color: "#B4A5A5" }}>Career Path</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-3xl mx-auto">
              Let AI analyze your skills, interests, and goals to recommend the ideal career path with a personalized
              roadmap for success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold text-white career-button"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/signin">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-gray-600 bg-transparent"
                  style={{ color: "#B4A5A5" }}
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "#3C415C" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "#301B3F" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#301B3F" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
              Why Choose CareerSync AI?
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with personalized guidance to help you make the right
              career decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-700 backdrop-blur-sm career-card cursor-pointer"
                style={{ backgroundColor: "#151515" }}
              >
                <CardHeader className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#3C415C" }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle style={{ color: "#B4A5A5" }}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center opacity-80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
              How It Works
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Get personalized career recommendations in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: "#3C415C" }}
              >
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#B4A5A5" }}>
                Take Assessment
              </h3>
              <p className="opacity-80">
                Complete our comprehensive assessment covering your academic performance, interests, and personality
                traits.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: "#3C415C" }}
              >
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#B4A5A5" }}>
                Get AI Predictions
              </h3>
              <p className="opacity-80">
                Our machine learning model analyzes your data and provides top 3 career matches with confidence scores.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: "#3C415C" }}
              >
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#B4A5A5" }}>
                Follow Roadmap
              </h3>
              <p className="opacity-80">
                Get a personalized learning path with courses, certifications, and milestones to achieve your career
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#301B3F" }}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-80">
              Join thousands of students who have found their perfect career path with CareerSync AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold text-white career-button"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-gray-600 bg-transparent"
                  style={{ color: "#B4A5A5" }}
                >
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
