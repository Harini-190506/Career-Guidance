"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Brain, Eye, EyeOff, Mail, Lock, User, ArrowRight, ArrowLeft, AlertCircle, CheckCircle, Target, Users, Lightbulb, BarChart3, BookOpen, Heart, Zap, Shield, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    o_score: 5,
    c_score: 5,
    e_score: 5,
    a_score: 5,
    n_score: 5,
    numerical_aptitude: 5,
    spatial_aptitude: 5,
    perceptual_aptitude: 5,
    abstract_reasoning: 5,
    verbal_reasoning: 5,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Signup failed')
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push('/dashboard')
    } catch (err: any) {
      setErrors({ submit: err.message || "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validatePassword = (password: string) => {
    const errors: string[] = []
    
    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long')
    }
    
    return errors
  }

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setErrors({ submit: "Please fill in all required fields" })
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setErrors({ submit: "Passwords do not match" })
        return
      }
      
      const passwordErrors = validatePassword(formData.password)
      if (passwordErrors.length > 0) {
        setErrors({ submit: passwordErrors.join(', ') })
        return
      }
    }
    setErrors({})
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" style={{ color: "#B4A5A5" }}>Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
          <Input
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="pl-10 border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" style={{ color: "#B4A5A5" }}>Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="pl-10 border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
          />
        </div>
      </div>

                    <div className="space-y-2">
         <Label htmlFor="password" style={{ color: "#B4A5A5" }}>Password</Label>
         <div className="relative">
           <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
           <Input
             id="password"
             type={showPassword ? "text" : "password"}
             placeholder="Create a strong password"
             value={formData.password}
             onChange={(e) => handleInputChange("password", e.target.value)}
             className="pl-10 pr-10 border-gray-600"
             style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
           />
           <button
             type="button"
             onClick={() => setShowPassword(!showPassword)}
             className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100"
           >
             {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
           </button>
         </div>
         <div className="text-xs opacity-60">
           <p className={formData.password.length >= 6 ? 'text-green-400' : 'text-gray-500'}>
             ✓ Password must be at least 6 characters long
           </p>
         </div>
       </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" style={{ color: "#B4A5A5" }}>Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            className="pl-10 pr-10 border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100"
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <Button
        type="button"
        onClick={nextStep}
        className="w-full text-white font-semibold"
        style={{ backgroundColor: "#3C415C" }}
      >
        Next: Personality Assessment
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Heart className="w-8 h-8 mx-auto mb-2 text-pink-400" />
        <h3 className="text-xl font-semibold" style={{ color: "#B4A5A5" }}>Personality Assessment</h3>
        <p className="text-sm opacity-70">Rate yourself on these personality traits (1-10)</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Openness to Experience: {formData.o_score}</Label>
          <Slider
            value={[formData.o_score]}
            onValueChange={(value) => handleInputChange("o_score", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How open are you to new experiences and ideas?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Conscientiousness: {formData.c_score}</Label>
          <Slider
            value={[formData.c_score]}
            onValueChange={(value) => handleInputChange("c_score", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How organized and responsible are you?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Extraversion: {formData.e_score}</Label>
          <Slider
            value={[formData.e_score]}
            onValueChange={(value) => handleInputChange("e_score", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How outgoing and social are you?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Agreeableness: {formData.a_score}</Label>
          <Slider
            value={[formData.a_score]}
            onValueChange={(value) => handleInputChange("a_score", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How cooperative and trusting are you?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Neuroticism: {formData.n_score}</Label>
          <Slider
            value={[formData.n_score]}
            onValueChange={(value) => handleInputChange("n_score", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How sensitive are you to stress and negative emotions?</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          type="button"
          onClick={prevStep}
          variant="outline"
          className="flex-1 border-gray-600 text-gray-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          type="button"
          onClick={nextStep}
          className="flex-1 text-white font-semibold"
          style={{ backgroundColor: "#3C415C" }}
        >
          Next: Aptitude Assessment
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
        <h3 className="text-xl font-semibold" style={{ color: "#B4A5A5" }}>Aptitude Assessment</h3>
        <p className="text-sm opacity-70">Rate your skills in these areas (1-10)</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Numerical Aptitude: {formData.numerical_aptitude}</Label>
          <Slider
            value={[formData.numerical_aptitude]}
            onValueChange={(value) => handleInputChange("numerical_aptitude", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How good are you with numbers and calculations?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Spatial Aptitude: {formData.spatial_aptitude}</Label>
          <Slider
            value={[formData.spatial_aptitude]}
            onValueChange={(value) => handleInputChange("spatial_aptitude", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How well can you visualize and manipulate objects in space?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Perceptual Aptitude: {formData.perceptual_aptitude}</Label>
          <Slider
            value={[formData.perceptual_aptitude]}
            onValueChange={(value) => handleInputChange("perceptual_aptitude", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How quickly can you identify patterns and details?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Abstract Reasoning: {formData.abstract_reasoning}</Label>
          <Slider
            value={[formData.abstract_reasoning]}
            onValueChange={(value) => handleInputChange("abstract_reasoning", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How well can you solve complex problems and think logically?</p>
        </div>

        <div className="space-y-2">
          <Label style={{ color: "#B4A5A5" }}>Verbal Reasoning: {formData.verbal_reasoning}</Label>
          <Slider
            value={[formData.verbal_reasoning]}
            onValueChange={(value) => handleInputChange("verbal_reasoning", value[0])}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs opacity-60">How strong are your language and communication skills?</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          type="button"
          onClick={prevStep}
          variant="outline"
          className="flex-1 border-gray-600 text-gray-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="flex-1 text-white font-semibold"
          style={{ backgroundColor: "#3C415C" }}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Creating Account...</span>
            </div>
          ) : (
            <>
              Create Account & Get AI Prediction
              <Brain className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515", color: "#B4A5A5" }}>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3C415C" }}>
              <Brain className="w-8 h-8" style={{ color: "#B4A5A5" }} />
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#B4A5A5" }}>
              Join CareerSync AI
            </h1>
            <p className="opacity-80">Start your personalized career journey today</p>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    step <= currentStep ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm mt-2 opacity-70">
              Step {currentStep} of 3: {
                currentStep === 1 ? 'Basic Information' :
                currentStep === 2 ? 'Personality Assessment' :
                'Aptitude Assessment'
              }
            </p>
          </div>

          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <CardTitle style={{ color: "#B4A5A5" }}>
                {currentStep === 1 ? 'Create Account' :
                 currentStep === 2 ? 'Personality Assessment' :
                 'Aptitude Assessment'}
              </CardTitle>
              <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
                {currentStep === 1 ? 'Enter your basic information to get started' :
                 currentStep === 2 ? 'Help us understand your personality traits' :
                 'Assess your skills and aptitudes for better career matching'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}

                {errors.submit && (
                  <div className="p-3 rounded-lg border border-red-500/20 bg-red-900/10 mt-4">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <p className="text-sm text-red-400">{errors.submit}</p>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm opacity-80">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
