export const mockCourses: Course[] = [
  {
    id: 1,
    name: "Business Essentials",
    type: "free",
    description: "Learn the basics of business management and strategy.",
    location: "Online",
  },
  {
    id: 2,
    name: "Advanced Business Strategies",
    type: "paid",
    description: "Deep dive into advanced strategies for business growth.",
    location: "New York, USA",
  },
  {
    id: 3,
    name: "HTML & CSS Basics",
    type: "free",
    description: "Start your web development journey with HTML and CSS.",
    location: "Online",
  },
  {
    id: 4,
    name: "Full Stack Development",
    type: "paid",
    description: "Learn full-stack development using modern tools.",
    location: "Online",
  },
  {
    id: 5,
    name: "Introduction to VFX",
    type: "free",
    description: "Explore the fundamentals of visual effects design.",
    location: "Online",
  },
  {
    id: 6,
    name: "Advanced VFX Techniques",
    type: "paid",
    description: "Learn industry-standard techniques for VFX creation.",
    location: "London, UK",
  },
  {
    id: 7,
    name: "Game Design Basics",
    type: "free",
    description: "Learn the essentials of game design and development.",
    location: "Online",
  },
  {
    id: 8,
    name: "Advanced Game Development",
    type: "paid",
    description: "Master advanced techniques in game development.",
    location: "Online",
  },
];

export type Course = {
  id: number;
  name: string;
  type: "free" | "paid";
  description: string;
  location: string;
};
