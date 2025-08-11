import fs from 'fs';
import path from 'path';

interface TrainingData {
  o_score: number;
  c_score: number;
  e_score: number;
  a_score: number;
  n_score: number;
  numerical_aptitude: number;
  spatial_aptitude: number;
  perceptual_aptitude: number;
  abstract_reasoning: number;
  verbal_reasoning: number;
  career: string;
}

interface UserScores {
  o_score: number;
  c_score: number;
  e_score: number;
  a_score: number;
  n_score: number;
  numerical_aptitude: number;
  spatial_aptitude: number;
  perceptual_aptitude: number;
  abstract_reasoning: number;
  verbal_reasoning: number;
}

interface PredictionResult {
  career: string;
  confidence: number;
  alternatives: Array<{ career: string; confidence: number }>;
}

class CareerPredictionModel {
  private trainingData: TrainingData[] = [];
  private careerGroups: Map<string, TrainingData[]> = new Map();

  constructor() {
    this.loadTrainingData();
  }

  private loadTrainingData() {
    try {
      const csvPath = path.join(process.cwd(), 'public', 'Data_final.csv');
      const csvContent = fs.readFileSync(csvPath, 'utf-8');
      const lines = csvContent.split('\n').slice(1); // Skip header

      this.trainingData = lines
        .filter(line => line.trim())
        .map(line => {
          const values = line.split(',');
          return {
            o_score: parseFloat(values[0]), // This is "nO_score" in CSV but we map to o_score
            c_score: parseFloat(values[1]),
            e_score: parseFloat(values[2]),
            a_score: parseFloat(values[3]),
            n_score: parseFloat(values[4]),
            numerical_aptitude: parseFloat(values[5]),
            spatial_aptitude: parseFloat(values[6]),
            perceptual_aptitude: parseFloat(values[7]),
            abstract_reasoning: parseFloat(values[8]),
            verbal_reasoning: parseFloat(values[9]),
            career: values[10].trim()
          };
        });

      // Group data by career
      this.trainingData.forEach(data => {
        if (!this.careerGroups.has(data.career)) {
          this.careerGroups.set(data.career, []);
        }
        this.careerGroups.get(data.career)!.push(data);
      });
    } catch (error) {
      console.error('Error loading training data:', error);
    }
  }

  private calculateDistance(userScores: UserScores, trainingSample: TrainingData): number {
    const weights = {
      personality: 0.3, // 30% weight for personality traits
      aptitude: 0.7    // 70% weight for aptitude scores
    };

    // Personality distance (Big Five)
    const personalityDistance = Math.sqrt(
      Math.pow(userScores.o_score - trainingSample.o_score, 2) +
      Math.pow(userScores.c_score - trainingSample.c_score, 2) +
      Math.pow(userScores.e_score - trainingSample.e_score, 2) +
      Math.pow(userScores.a_score - trainingSample.a_score, 2) +
      Math.pow(userScores.n_score - trainingSample.n_score, 2)
    );

    // Aptitude distance
    const aptitudeDistance = Math.sqrt(
      Math.pow(userScores.numerical_aptitude - trainingSample.numerical_aptitude, 2) +
      Math.pow(userScores.spatial_aptitude - trainingSample.spatial_aptitude, 2) +
      Math.pow(userScores.perceptual_aptitude - trainingSample.perceptual_aptitude, 2) +
      Math.pow(userScores.abstract_reasoning - trainingSample.abstract_reasoning, 2) +
      Math.pow(userScores.verbal_reasoning - trainingSample.verbal_reasoning, 2)
    );

    return weights.personality * personalityDistance + weights.aptitude * aptitudeDistance;
  }

  private findKNearestNeighbors(userScores: UserScores, k: number = 5): Array<{ sample: TrainingData; distance: number }> {
    const distances = this.trainingData.map(sample => ({
      sample,
      distance: this.calculateDistance(userScores, sample)
    }));

    return distances
      .sort((a, b) => a.distance - b.distance)
      .slice(0, k);
  }

  public predictCareer(userScores: UserScores): PredictionResult {
    const k = 5;
    const neighbors = this.findKNearestNeighbors(userScores, k);
    
    // Count career occurrences
    const careerCounts = new Map<string, number>();
    const careerDistances = new Map<string, number[]>();

    neighbors.forEach(({ sample, distance }) => {
      const count = careerCounts.get(sample.career) || 0;
      careerCounts.set(sample.career, count + 1);
      
      const distances = careerDistances.get(sample.career) || [];
      distances.push(distance);
      careerDistances.set(sample.career, distances);
    });

    // Calculate confidence scores
    const careerScores = Array.from(careerCounts.entries()).map(([career, count]) => {
      const distances = careerDistances.get(career) || [];
      const avgDistance = distances.reduce((sum, d) => sum + d, 0) / distances.length;
      const frequency = count / k;
      const confidence = frequency * (1 / (1 + avgDistance)); // Higher frequency and lower distance = higher confidence
      
      return { career, confidence, count };
    });

    // Sort by confidence
    careerScores.sort((a, b) => b.confidence - a.confidence);

    const topCareer = careerScores[0];
    const alternatives = careerScores.slice(1, 4).map(c => ({
      career: c.career,
      confidence: c.confidence
    }));

    return {
      career: topCareer.career,
      confidence: Math.min(topCareer.confidence, 0.95), // Cap at 95%
      alternatives
    };
  }

  public getCareerInsights(career: string): { description: string; skills: string[]; requirements: string[] } {
    const careerInsights: { [key: string]: { description: string; skills: string[]; requirements: string[] } } = {
      'Software Developer': {
        description: 'Design, develop, and maintain software applications and systems.',
        skills: ['Programming', 'Problem Solving', 'Analytical Thinking', 'Team Collaboration'],
        requirements: ['Bachelor\'s in Computer Science or related field', 'Programming languages (Java, Python, etc.)', 'Database knowledge']
      },
      'Data Analyst': {
        description: 'Collect, process, and analyze data to help organizations make informed decisions.',
        skills: ['Statistical Analysis', 'Data Visualization', 'SQL', 'Excel', 'Critical Thinking'],
        requirements: ['Bachelor\'s degree in Statistics, Mathematics, or related field', 'Proficiency in data analysis tools']
      },
      'Graphic Designer': {
        description: 'Create visual content for various media platforms and marketing materials.',
        skills: ['Creativity', 'Design Software', 'Color Theory', 'Typography', 'Communication'],
        requirements: ['Portfolio of work', 'Proficiency in design software (Adobe Creative Suite)', 'Understanding of design principles']
      },
      'Teacher': {
        description: 'Educate students in various subjects and help them develop skills and knowledge.',
        skills: ['Communication', 'Patience', 'Organization', 'Leadership', 'Subject Knowledge'],
        requirements: ['Teaching certification', 'Bachelor\'s degree in education or subject area', 'Classroom management skills']
      },
      'Marketing Manager': {
        description: 'Develop and execute marketing strategies to promote products or services.',
        skills: ['Strategic Thinking', 'Communication', 'Analytics', 'Creativity', 'Leadership'],
        requirements: ['Bachelor\'s degree in Marketing or Business', 'Experience in marketing campaigns', 'Understanding of consumer behavior']
      }
    };

    return careerInsights[career] || {
      description: 'A professional career path that matches your skills and personality.',
      skills: ['Adaptability', 'Problem Solving', 'Communication', 'Continuous Learning'],
      requirements: ['Relevant education or training', 'Industry experience', 'Professional development']
    };
  }
}

// Create singleton instance
const careerModel = new CareerPredictionModel();

export default careerModel;
