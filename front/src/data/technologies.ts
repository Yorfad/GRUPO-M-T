export interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'database'
  icon?: string
}

export const technologies: Technology[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'React Native', category: 'mobile' },
  { name: 'Expo', category: 'mobile' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'Vercel', category: 'devops' },
]

export const techCategories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'database', label: 'Base de datos' },
  { key: 'devops', label: 'DevOps & Cloud' },
] as const
