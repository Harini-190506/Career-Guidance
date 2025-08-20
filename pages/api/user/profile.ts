import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await dbConnect()

    // Get token from request
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' })
    }

    const token = authHeader.substring(7)
    const decoded = verifyToken(token)

    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    // Find user
    const user = await User.findById(decoded.userId).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        predicted_career: user.predicted_career,
        confidence_score: user.confidence_score,
        profile_completed: user.profile_completed,
        o_score: user.o_score,
        c_score: user.c_score,
        e_score: user.e_score,
        a_score: user.a_score,
        n_score: user.n_score,
        numerical_aptitude: user.numerical_aptitude,
        spatial_aptitude: user.spatial_aptitude,
        perceptual_aptitude: user.perceptual_aptitude,
        abstract_reasoning: user.abstract_reasoning,
        verbal_reasoning: user.verbal_reasoning,
      },
    })
  } catch (error: any) {
    console.error('Profile fetch error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}