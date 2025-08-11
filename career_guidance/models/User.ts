import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student',
  },
  // Personality scores (Big Five)
  o_score: { type: Number, min: 1, max: 10 },
  c_score: { type: Number, min: 1, max: 10 },
  e_score: { type: Number, min: 1, max: 10 },
  a_score: { type: Number, min: 1, max: 10 },
  n_score: { type: Number, min: 1, max: 10 },
  
  // Aptitude scores
  numerical_aptitude: { type: Number, min: 1, max: 10 },
  spatial_aptitude: { type: Number, min: 1, max: 10 },
  perceptual_aptitude: { type: Number, min: 1, max: 10 },
  abstract_reasoning: { type: Number, min: 1, max: 10 },
  verbal_reasoning: { type: Number, min: 1, max: 10 },
  
  // AI prediction
  predicted_career: { type: String },
  confidence_score: { type: Number, min: 0, max: 1 },
  
  // Profile completion
  profile_completed: { type: Boolean, default: false },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.User || mongoose.model('User', userSchema);
