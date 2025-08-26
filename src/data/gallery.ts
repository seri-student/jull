export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/src/assets/Screenshot 2025-08-12 194428.png",
    alt: "Professional video editing workspace",
    title: "Professional Workspace"
  },
  {
    id: 2,
    src: "/src/assets/Screenshot 2025-08-12 194742.png",
    alt: "Video editing timeline and effects",
    title: "Advanced Editing"
  },
  {
    id: 3,
    src: "/src/assets/Screenshot 2025-08-12 193913.png",
    alt: "Color grading and post-production",
    title: "Color Grading"
  },
  {
    id: 4,
    src: "/src/assets/Screenshot 2025-08-12 063756.png",
    alt: "Final video output preview",
    title: "Final Output"
  },
  {
    id: 5,
    src: "/src/assets/GwktHtWXoAEmE4X.png",
    alt: "Video editing project showcase",
    title: "Project Showcase"
  }
]