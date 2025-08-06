"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  HelpCircle, 
  Users,
  CheckCircle
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "support@careersync.ai",
      action: "mailto:support@careersync.ai",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      value: "123 Innovation Drive, Silicon Valley, CA 94025",
      action: null,
      color: "text-purple-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon-Fri: 9AM-6PM PST",
      action: null,
      color: "text-yellow-400",
    },
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our platform, pricing, or features",
      email: "info@careersync.ai",
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      description: "Having trouble with the platform? We're here to help",
      email: "support@careersync.ai",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Interested in partnering with us or institutional licensing",
      email: "partnerships@careersync.ai",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

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
              📞 Get In Touch
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Contact</span>
              <br />
              <span style={{ color: "#B4A5A5" }}>CareerSync AI</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-3xl mx-auto">
              Have questions about our platform? Need technical support? Want to explore partnership opportunities? 
              We're here to help you succeed in your career journey.
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

      {/* Contact Information */}
      <section className="py-20 px-4" style={{ backgroundColor: "#301B3F" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
              Contact Information
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Multiple ways to reach our team and get the support you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-gray-700 hover:border-gray-600 transition-colors text-center"
                style={{ backgroundColor: "#151515" }}
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4">
                    <info.icon className={`w-12 h-12 ${info.color}`} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: "#B4A5A5" }}>
                    {info.title}
                  </CardTitle>
                  <p className="text-sm opacity-70">{info.description}</p>
                </CardHeader>
                <CardContent>
                  {info.action ? (
                    <a
                      href={info.action}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm opacity-80">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Options */}
      <section className="py-20 px-4" style={{ backgroundColor: "#151515" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
                Send Us a Message
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <Card
                  className="border-green-500 text-center py-8"
                  style={{ backgroundColor: "#301B3F" }}
                >
                  <CardContent>
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                    <h3 className="text-2xl font-semibold mb-2 text-green-400">
                      Message Sent!
                    </h3>
                    <p className="opacity-80">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  className="border-gray-700"
                  style={{ backgroundColor: "#301B3F" }}
                >
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 bg-gray-800 border-gray-600 text-white"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 bg-gray-800 border-gray-600 text-white"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-1 bg-gray-800 border-gray-600 text-white"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="mt-1 bg-gray-800 border-gray-600 text-white resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-white font-semibold py-3"
                        style={{ backgroundColor: "#3C415C" }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Support Options */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#B4A5A5" }}>
                Support Options
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Choose the best way to get help based on your specific needs.
              </p>

              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="border-gray-700 hover:border-gray-600 transition-colors"
                    style={{ backgroundColor: "#301B3F" }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#3C415C" }}
                        >
                          <option.icon className="w-6 h-6" style={{ color: "#B4A5A5" }} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2" style={{ color: "#B4A5A5" }}>
                            {option.title}
                          </CardTitle>
                          <p className="opacity-80 text-sm mb-3">{option.description}</p>
                          <a
                            href={`mailto:${option.email}`}
                            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <Mail className="w-4 h-4 mr-1" />
                            {option.email}
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* FAQ Link */}
              <Card
                className="border-gray-700 hover:border-gray-600 transition-colors mt-8"
                style={{ backgroundColor: "#301B3F" }}
              >
                <CardContent className="p-6 text-center">
                  <HelpCircle className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                    Frequently Asked Questions
                  </h3>
                  <p className="opacity-80 mb-4">
                    Find quick answers to common questions about our platform.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500"
                  >
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#301B3F" }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "#B4A5A5" }}>
              Our Response Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <MessageSquare className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  General Inquiries
                </h3>
                <p className="opacity-80">Within 24 hours</p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <HelpCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  Technical Support
                </h3>
                <p className="opacity-80">Within 4 hours</p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3C415C" }}
                >
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#B4A5A5" }}>
                  Partnership
                </h3>
                <p className="opacity-80">Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
