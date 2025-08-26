import { Zap, Award, Clock, Users, Star, Shield } from 'lucide-react';

export interface WhyChooseMeFeature {
  id: number;
  icon: any;
  title: string;
  description: string;
  stats: string;
  subtitle: string;
  glowColor: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

export const whyChooseMeFeatures: WhyChooseMeFeature[] = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Get your videos edited and delivered within 24-48 hours without compromising on quality. Perfect for content creators with tight schedules.",
    stats: "24-48hrs",
    subtitle: "Average Delivery",
    glowColor: 'blue'
  },
  {
    id: 2,
    icon: Award,
    title: "Premium Quality Work",
    description: "Professional-grade editing with attention to every detail. Color grading, sound design, and seamless transitions that make your content stand out.",
    stats: "100%",
    subtitle: "Client Satisfaction",
    glowColor: 'purple'
  },
  {
    id: 3,
    icon: Shield,
    title: "Trusted by Top Creators",
    description: "Working with leading YouTubers and content creators worldwide. Proven track record with millions of views generated through our edits.",
    stats: "500+",
    subtitle: "Projects Completed",
    glowColor: 'green'
  }
];