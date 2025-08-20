import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import { hashPassword, generateToken, validateEmail, validatePassword } from '@/lib/auth'
import careerModel from '@/lib/ai-model'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await dbConnect()

    const {
      name,
      email,
      password,
      o_score,
      c_score,
      e_score,
      a_score,
      n_score,
      numerical_aptitude,
      spatial_aptitude,
      perceptual_aptitude,
      abstract_reasoning,
      verbal_reasoning,
    } = req.body

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return res.status(400).json({ error: passwordValidation.errors.join(', ') })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Get AI prediction
    const userScores = {
      o_score: Number(o_score),
      c_score: Number(c_score),
      e_score: Number(e_score),
      a_score: Number(a_score),
      n_score: Number(n_score),
      numerical_aptitude: Number(numerical_aptitude),
      spatial_aptitude: Number(spatial_aptitude),
      perceptual_aptitude: Number(perceptual_aptitude),
      abstract_reasoning: Number(abstract_reasoning),
      verbal_reasoning: Number(verbal_reasoning),
    }

    const prediction = careerModel.predictCareer(userScores)

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      ...userScores,
      predicted_career: prediction.career,
      confidence_score: prediction.confidence,
      profile_completed: true,
    })

    await user.save()

    // Generate token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    })

    // Return user data (without password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      predicted_career: user.predicted_career,
      confidence_score: user.confidence_score,
      profile_completed: user.profile_completed,
    }

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: userData,
    })
  } catch (error: any) {
    console.error('Signup error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}