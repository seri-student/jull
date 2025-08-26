import { Shield, Clock, Award, Users } from 'lucide-react';

export interface ReliabilityFeature {
  id: number;
  icon: any;
  title: string;
  description: string;
  stats: string;
  subtitle: string;
  glowColor: 'blue' | 'purple' | 'green' | 'orange';
}

export const reliabilityFeatures: ReliabilityFeature[] = [
  {
    id: 1,
    icon: Shield,
    title: "Trusted by Top Creators",
    description: "Working with leading YouTubers and content creators worldwide with proven track record.",
    stats: "500+ Projects",
    subtitle: "Projects Completed",
    glowColor: 'blue'
  },
  {
    id: 2,
    icon: Clock,
    title: "Lightning Fast Delivery",
    description: "Meeting tight deadlines with 99% on-time delivery rate while maintaining premium quality.",
    stats: "99% On-Time",
    subtitle: "On-Time Rate",
    glowColor: 'green'
  },
  {
    id: 3,
    icon: Award,
    title: "Premium Quality Work",
    description: "Award-winning video editing with industry recognition and featured work in publications.",
    stats: "15+ Awards",
    subtitle: "Industry Awards",
    glowColor: 'purple'
  },
];