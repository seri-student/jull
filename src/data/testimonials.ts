export interface Testimonial {
  id: number;
  title: string;
  videoUrl: string;
  clientName?: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Amazing Video Editing Work",
    videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
    clientName: "Sarah Johnson",
    company: "TechStartup Inc"
  },
  // {
  //   id: 2,
  //   title: "Professional Quality Results",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Mike Chen",
  //   company: "Creative Agency"
  // },
  // {
  //   id: 3,
  //   title: "Exceeded Our Expectations",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Emma Davis",
  //   company: "Marketing Pro"
  // },
  // {
  //   id: 4,
  //   title: "Outstanding Video Production",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Alex Rodriguez",
  //   company: "Digital Solutions"
  // },
  // {
  //   id: 5,
  //   title: "Top-Notch Editing Skills",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Lisa Thompson",
  //   company: "Brand Studio"
  // },
  // {
  //   id: 6,
  //   title: "Incredible Attention to Detail",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "David Park",
  //   company: "YouTube Creator"
  // },
  // {
  //   id: 7,
  //   title: "Fast Turnaround, Amazing Quality",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Rachel Green",
  //   company: "Fitness Influencer"
  // },
  // {
  //   id: 8,
  //   title: "Perfect for Our Brand",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "James Wilson",
  //   company: "E-commerce Store"
  // },
  // {
  //   id: 9,
  //   title: "Highly Recommend This Editor",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Maria Garcia",
  //   company: "Travel Blogger"
  // },
  // {
  //   id: 10,
  //   title: "Transformed Our Content",
  //   videoUrl: "https://drive.google.com/file/d/1K3rf8XUIJewSY62j9gCrYjcWjq-N9nnR/preview",
  //   clientName: "Tom Anderson",
  //   company: "Tech Review Channel"
  // }
]