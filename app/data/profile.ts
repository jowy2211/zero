// Single source of truth for all portfolio content. Edit here only.
export const profile = {
  name: 'Joshua Dev',
  fullName: 'Joshua Lapitan',
  handle: 'JOSHUA DEV',
  greeting: "Hey, I'm Joshua",
  role: 'Software Developer',
  tagline: 'I build scalable web applications and turn ideas into impactful products with clean, efficient code.',
  description:
    'Portfolio of Joshua Lapitan, a software developer building fast, scalable web applications with TypeScript, React and Node.js.',
  email: 'hello@example.com',
  // Put a file in /public (e.g. /joshua.webp) to replace the illustration.
  photo: '' as string,
  resume: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'simple-icons:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'simple-icons:linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/', icon: 'simple-icons:x' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'lucide:mail' },
  ],
  codeSnippet: [
    ['code', 'TypeScript'],
    ['build', 'React'],
    ['deploy', 'Vercel'],
    ['passion', 'Solving problems'],
  ] as const,
}

export const skills = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'Git', icon: 'simple-icons:git' },
]

export const projects = [
  {
    title: 'Weatherly',
    description: 'A weather app with real-time data, beautiful charts and forecasts.',
    tags: ['React', 'TypeScript', 'API'],
    art: 'cloud',
    color: 'pink',
    href: '#',
  },
  {
    title: 'Taskboard',
    description: 'Kanban-style task manager with drag and drop, realtime sync and team workspaces.',
    tags: ['Nuxt', 'Tailwind', 'PostgreSQL'],
    art: 'burst',
    color: 'lime',
    href: '#',
  },
  {
    title: 'Shopline',
    description: 'Headless e-commerce storefront with a 98+ Lighthouse score and instant search.',
    tags: ['Vue', 'Node.js', 'Stripe'],
    art: 'grid',
    color: 'violet',
    href: '#',
  },
] as const

export const certifications = [
  { title: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2024', href: '#' },
  { title: 'Meta Front-End Developer', issuer: 'Coursera', year: '2023', href: '#' },
  { title: 'Google UX Design', issuer: 'Google', year: '2022', href: '#' },
]

export const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Technova Inc.',
    period: '2022 - Present',
    summary: 'Lead the frontend development of a high-traffic SaaS platform used by over 50,000 active users.',
  },
  {
    role: 'Web Developer',
    company: 'Creative Studio',
    period: '2019 - 2022',
    summary: 'Built interactive marketing websites and internal tools for various high-profile clients.',
  },
  {
    role: 'Junior Developer',
    company: 'Startup Hub',
    period: '2018 - 2019',
    summary: 'Assisted in building MVP applications for early-stage startups in rapid-iteration cycles.',
  },
]

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
]
