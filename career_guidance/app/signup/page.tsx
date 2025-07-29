"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Brain, Eye, EyeOff, Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

    // Step 2: Profile
    role: "student", // student or admin
    institution: "",
    grade: "",
    interests: [] as string[],

    // Step 3: Preferences
    agreeToTerms: false,
    subscribeNewsletter: true,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const interestOptions = [
    "Technology & Programming",
    "Data Science & Analytics",
    "Business & Management",
    "Healthcare & Medicine",
    "Engineering",
    "Creative Arts & Design",
    "Education & Teaching",
    "Finance & Economics",
    "Marketing & Sales",
    "Research & Development",
  ]

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.password) newErrors.password = "Password is required"
      else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match"
    }

    if (step === 2) {
      if (!formData.institution.trim()) newErrors.institution = "Institution is required"
      if (formData.role === "student" && !formData.grade.trim()) newErrors.grade = "Grade/Year is required"
      if (formData.interests.length === 0) newErrors.interests = "Please select at least one interest"
    }

    if (step === 3) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Store user info for demo purposes
      localStorage.setItem("userName", `${formData.firstName} ${formData.lastName}`)
      localStorage.setItem("userEmail", formData.email)
      localStorage.setItem("userRole", formData.role)

      // Redirect to dashboard or welcome page
      window.location.href = "/dashboard"
    } catch (err) {
      setErrors({ submit: "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests: newInterests }
    })

    // Clear interest error if exists
    if (errors.interests) {
      setErrors((prev) => ({ ...prev, interests: "" }))
    }
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" style={{ color: "#B4A5A5" }}>
            First Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
            <Input
              id="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="pl-10 border-gray-600"
              style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
            />
          </div>
          {errors.firstName && <p className="text-sm text-red-400">{errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" style={{ color: "#B4A5A5" }}>
            Last Name
          </Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
          />
          {errors.lastName && <p className="text-sm text-red-400">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" style={{ color: "#B4A5A5" }}>
          Email Address
        </Label>
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
        {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" style={{ color: "#B4A5A5" }}>
          Password
        </Label>
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
        {errors.password && <p className="text-sm text-red-400">{errors.password}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" style={{ color: "#B4A5A5" }}>
          Confirm Password
        </Label>
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
        {errors.confirmPassword && <p className="text-sm text-red-400">{errors.confirmPassword}</p>}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label style={{ color: "#B4A5A5" }}>I am a:</Label>
        <RadioGroup value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student" style={{ color: "#B4A5A5" }}>
              Student
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="admin" id="admin" />
            <Label htmlFor="admin" style={{ color: "#B4A5A5" }}>
              Educator/Admin
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="institution" style={{ color: "#B4A5A5" }}>
          Institution/School
        </Label>
        <Input
          id="institution"
          placeholder="University of California, Berkeley"
          value={formData.institution}
          onChange={(e) => handleInputChange("institution", e.target.value)}
          className="border-gray-600"
          style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
        />
        {errors.institution && <p className="text-sm text-red-400">{errors.institution}</p>}
      </div>

      {formData.role === "student" && (
        <div className="space-y-2">
          <Label htmlFor="grade" style={{ color: "#B4A5A5" }}>
            Grade/Year
          </Label>
          <Input
            id="grade"
            placeholder="12th Grade / Sophomore"
            value={formData.grade}
            onChange={(e) => handleInputChange("grade", e.target.value)}
            className="border-gray-600"
            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
          />
          {errors.grade && <p className="text-sm text-red-400">{errors.grade}</p>}
        </div>
      )}

      <div className="space-y-4">
        <Label style={{ color: "#B4A5A5" }}>Areas of Interest (Select all that apply):</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {interestOptions.map((interest) => (
            <label
              key={interest}
              className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                formData.interests.includes(interest)
                  ? "border-purple-500 bg-purple-900/20"
                  : "border-gray-600 hover:border-gray-500"
              }`}
              style={{ backgroundColor: formData.interests.includes(interest) ? "#301B3F" : "#151515" }}
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={formData.interests.includes(interest)}
                  onCheckedChange={() => handleInterestToggle(interest)}
                  id={`interest-${interest}`}
                />
                <span className="text-sm" style={{ color: "#B4A5A5" }}>
                  {interest}
                </span>
              </div>
            </label>
          ))}
        </div>
        {errors.interests && <p className="text-sm text-red-400">{errors.interests}</p>}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="p-4 rounded-lg border border-green-500/20" style={{ backgroundColor: "#151515" }}>
        <div className="flex items-center space-x-2 mb-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <h3 className="font-medium text-green-400">Almost Done!</h3>
        </div>
        <p className="text-sm opacity-80">
          Review your information and complete your registration to start your personalized career journey.
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-gray-600" style={{ backgroundColor: "#151515" }}>
          <h4 className="font-medium mb-2" style={{ color: "#B4A5A5" }}>
            Account Summary
          </h4>
          <div className="space-y-1 text-sm opacity-80">
            <p>
              <strong>Name:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Role:</strong> {formData.role === "student" ? "Student" : "Educator/Admin"}
            </p>
            <p>
              <strong>Institution:</strong> {formData.institution}
            </p>
            {formData.role === "student" && (
              <p>
                <strong>Grade:</strong> {formData.grade}
              </p>
            )}
            <p>
              <strong>Interests:</strong> {formData.interests.length} selected
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm" style={{ color: "#B4A5A5" }}>
              I agree to the{" "}
              <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>
            </Label>
          </div>
          {errors.agreeToTerms && <p className="text-sm text-red-400">{errors.agreeToTerms}</p>}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.subscribeNewsletter}
              onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm" style={{ color: "#B4A5A5" }}>
              Subscribe to our newsletter for career insights and platform updates
            </Label>
          </div>
        </div>

        {errors.submit && (
          <div className="p-3 rounded-lg border border-red-500/20 bg-red-900/10">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <p className="text-sm text-red-400">{errors.submit}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Create Account"
      case 2:
        return "Profile Setup"
      case 3:
        return "Complete Registration"
      default:
        return "Sign Up"
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Enter your basic information to get started"
      case 2:
        return "Tell us about yourself to personalize your experience"
      case 3:
        return "Review and complete your registration"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515", color: "#B4A5A5" }}>
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#3C415C" }}
            >
              <Brain className="w-8 h-8" style={{ color: "#B4A5A5" }} />
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#B4A5A5" }}>
              Join CareerSync AI
            </h1>
            <p className="opacity-80">Start your personalized career journey today</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step <= currentStep ? "text-white" : "text-gray-400"
                    }`}
                    style={{
                      backgroundColor: step <= currentStep ? "#3C415C" : "#151515",
                      border: step <= currentStep ? "none" : "2px solid #3C415C",
                    }}
                  >
                    {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-0.5 mx-2 ${step < currentStep ? "bg-green-400" : "bg-gray-600"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-2">
              <p className="text-sm opacity-70">
                Step {currentStep} of 3: {getStepTitle()}
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
            <CardHeader>
              <CardTitle style={{ color: "#B4A5A5" }}>{getStepTitle()}</CardTitle>
              <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>{getStepDescription()}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={currentStep === 3 ? handleSubmit : (e) => e.preventDefault()}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="border-gray-600 bg-transparent"
                    style={{ color: "#B4A5A5" }}
                  >
                    Previous
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="text-white"
                      style={{ backgroundColor: "#3C415C" }}
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="text-white font-semibold"
                      style={{ backgroundColor: "#3C415C" }}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Creating Account...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Create Account</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Sign In Link */}
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
