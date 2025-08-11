# CareerSync AI - Career Guidance Platform

A comprehensive career guidance platform that uses AI to predict suitable career paths based on personality traits and aptitude assessments.

## Features

- **AI-Powered Career Prediction**: Uses machine learning to predict suitable careers based on personality and aptitude scores
- **Personality Assessment**: Big Five personality traits assessment (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)
- **Aptitude Assessment**: Comprehensive aptitude testing (Numerical, Spatial, Perceptual, Abstract Reasoning, Verbal Reasoning)
- **User Authentication**: Secure signup/signin with JWT tokens
- **Personalized Dashboard**: Individual career insights and recommendations
- **MongoDB Integration**: Persistent data storage
- **Modern UI**: Beautiful, responsive interface with dark theme

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **UI**: Tailwind CSS, Radix UI components
- **AI Model**: Custom K-Nearest Neighbors algorithm

## Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud)
- npm or pnpm

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd career-guidance
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/career-guidance
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. **Set up MongoDB**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud service)
   - Update the `MONGODB_URI` in your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### For Users

1. **Sign Up**: Create an account with your basic information
2. **Complete Assessment**: Rate yourself on personality traits and aptitudes
3. **Get AI Predictions**: Receive personalized career recommendations
4. **View Dashboard**: Access your career insights and progress

### For Developers

The application structure:

```
career-guidance/
├── app/                    # Next.js app directory
│   ├── dashboard/         # User dashboard
│   ├── signin/           # Sign in page
│   ├── signup/           # Sign up page
│   └── ...
├── components/            # React components
├── lib/                   # Utility functions
│   ├── mongodb.ts        # MongoDB connection
│   └── ai-model.ts       # AI prediction model
├── models/               # Database models
│   └── User.ts          # User schema
├── pages/api/           # API routes
│   ├── auth/            # Authentication endpoints
│   └── user/            # User data endpoints
└── public/              # Static files
    └── Data_final.csv   # Training data for AI model
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration with assessment
- `POST /api/auth/signin` - User login

### User Data
- `GET /api/user/profile` - Get user profile and predictions

## AI Model

The career prediction model uses:
- **K-Nearest Neighbors algorithm**
- **Training data**: 100+ career profiles with personality and aptitude scores
- **Features**: 10 dimensions (5 personality + 5 aptitude scores)
- **Output**: Career prediction with confidence score and alternatives

## Database Schema

### User Model
```typescript
{
  name: string,
  email: string,
  password: string (hashed),
  // Personality scores (1-10)
  o_score: number,      // Openness
  c_score: number,      // Conscientiousness
  e_score: number,      // Extraversion
  a_score: number,      // Agreeableness
  n_score: number,      // Neuroticism
  // Aptitude scores (1-10)
  numerical_aptitude: number,
  spatial_aptitude: number,
  perceptual_aptitude: number,
  abstract_reasoning: number,
  verbal_reasoning: number,
  // AI predictions
  predicted_career: string,
  confidence_score: number,
  profile_completed: boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@careersync.ai or create an issue in the repository.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
- Set up MongoDB (Atlas recommended for production)
- Configure environment variables
- Build and deploy using your preferred platform

## Security Notes

- Change the JWT_SECRET in production
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Add input validation and sanitization
- Consider adding CORS configuration
