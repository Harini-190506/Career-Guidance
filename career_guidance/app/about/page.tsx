"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, Users, Award, BarChart3, Zap, Heart, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      description: "PhD in Machine Learning with 10+ years in career prediction algorithms",
      icon: Brain,
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      description: "Former career counselor with expertise in student guidance systems",
      icon: Target,
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      description: "Specializes in creating intuitive interfaces for educational platforms",
      icon: Heart,
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      description: "Expert in building scalable web applications and data visualization",
      icon: Zap,
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Our AI models are trained on extensive datasets to provide accurate career predictions",
      color: "text-purple-400",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making career guidance available to students regardless of their background or location",
      color: "text-blue-400",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Every recommendation is backed by comprehensive analysis and real-world outcomes",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality career guidance and support",
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
              🎯 About CareerSync AI
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Empowering Students</span>
              <br />
              <span style={{ color: "#B4A5A5" }}>Through AI-Driven Guidance</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-3xl mx-auto">
              We're on a mission to revolutionize career guidance by combining cutting-edge AI technology with 
              personalized learning experiences to help every student find their perfect career path.
            </p>
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

      {/* Mission Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#301B3F" }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "#B4A5A5" }}>
              Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-80 leading-relaxed">
              At CareerSync AI, we believe that every student deserves access to personalized, data-driven career guidance. 
              Traditional career counseling often falls short due to limited resources and one-size-fits-all approaches. 
              We're changing that by leveraging advanced machine learning algorithms to analyze individual profiles and 
              provide tailored recommendations that truly match each student's unique potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  10,000+
                </h3>
                <p className="opacity-80">Students Guided</p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  95%
                </h3>
                <p className="opacity-80">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  500+
                </h3>
                <p className="opacity-80">Career Paths</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#151515" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
              Our Values
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              The principles that guide everything we do at CareerSync AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-gray-700 hover:border-gray-600 transition-colors"
                style={{ backgroundColor: "#301B3F" }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4">
                    <value.icon className={`w-12 h-12 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: "#B4A5A5" }}>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="opacity-80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#301B3F" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
              Meet Our Team
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              The passionate experts behind CareerSync AI's innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-gray-700 hover:border-gray-600 transition-colors text-center"
                style={{ backgroundColor: "#151515" }}
              >
                <CardHeader className="pb-4">
                  <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#3C415C" }}
                  >
                    <member.icon className="w-10 h-10" style={{ color: "#B4A5A5" }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: "#B4A5A5" }}>
                    {member.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-purple-500 text-purple-300 mt-2"
                    style={{ backgroundColor: "#301B3F" }}
                  >
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="opacity-80 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#151515" }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "#B4A5A5" }}>
              Our Technology
            </h2>
            <p className="text-xl mb-8 opacity-80 leading-relaxed">
              CareerSync AI is built on a foundation of advanced machine learning algorithms, natural language processing, 
              and comprehensive data analysis. Our proprietary models are trained on millions of career outcome data points, 
              academic performance metrics, and industry trends to provide the most accurate predictions possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Brain className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  Machine Learning
                </h3>
                <p className="opacity-80 text-sm">
                  Advanced neural networks trained on extensive career outcome datasets
                </p>
              </div>
              <div className="text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  Data Analytics
                </h3>
                <p className="opacity-80 text-sm">
                  Real-time analysis of industry trends and job market demands
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  Personalization
                </h3>
                <p className="opacity-80 text-sm">
                  Tailored recommendations based on individual profiles and preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
