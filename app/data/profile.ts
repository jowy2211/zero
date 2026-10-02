// Single source of truth for all portfolio content. Edit here only.
const email = 'anjasoctaris@gmail.com'
const phone = '+62 8211 8440 691'

export const profile = {
  name: 'Anjasmara',
  fullName: 'Anjasmara Octaris Rustian',
  handle: 'ANJASMARA',
  greeting: "Hey, I'm Anjasmara",
  role: 'Software Developer',
  tagline:
    'Full-stack developer with 10+ years of experience building back-office portals, superapps and web platforms with NestJS, NuxtJS and TypeScript.',
  description:
    'Portfolio of Anjasmara Octaris Rustian, a Full-Stack Software Developer in Cimahi, Indonesia, building web applications with NestJS, NuxtJS, TypeScript and PostgreSQL.',
  email,
  phone,
  phoneHref: `tel:${phone.replace(/\s/g, '')}`,
  address: {
    street: 'Jl Pojok Utara 2 No.41-51',
    area: 'Kel. Setiamanah, Kec. Cimahi Tengah',
    city: 'Kota Cimahi',
    postalCode: '40524',
    country: 'Indonesia',
  },
  photo: '/profile.webp',
  personality: ['Kind', 'Communicative', 'Tolerant', 'Target-oriented', 'Honest', 'Responsible'],
  socials: [
    { label: 'GitHub', href: 'https://github.com/jowy2211', icon: 'simple-icons:github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/anjasoctaris', icon: 'simple-icons:linkedin' },
    { label: 'Email', href: `mailto:${email}`, icon: 'lucide:mail' },
    { label: 'Phone', href: `tel:${phone.replace(/\s/g, '')}`, icon: 'lucide:phone' },
  ],
  codeSnippet: [
    ['backend', 'NestJS'],
    ['frontend', 'NuxtJS'],
    ['database', 'PostgreSQL'],
    ['mindset', 'Target-oriented'],
  ] as const,
}

// Proficiency levels (%) taken from the CV.
export const skillGroups = [
  {
    title: 'Frameworks & Languages',
    items: [
      { name: 'NestJS + TypeScript', icon: 'simple-icons:nestjs', level: 95 },
      { name: 'NuxtJS + TypeScript', icon: 'simple-icons:nuxtdotjs', level: 95 },
      { name: 'ReactJS + TypeScript', icon: 'simple-icons:react', level: 50 },
      { name: 'Laravel + PHP', icon: 'simple-icons:laravel', level: 65 },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', level: 90 },
      { name: 'MongoDB', icon: 'simple-icons:mongodb', level: 85 },
      { name: 'MySQL', icon: 'simple-icons:mysql', level: 65 },
      { name: 'MariaDB', icon: 'simple-icons:mariadb', level: 60 },
    ],
  },
]

export const alsoWorkedWith = ['Yii2', 'CodeIgniter', '.NET C#']

export const projects = [
  {
    title: 'Futures Broker Platform',
    company: 'PT Usaha Kreatif Indonesia',
    description: 'Backend services and back-office portal for a futures broker application.',
    tags: ['NestJS', 'NuxtJS', 'Full-Stack'],
    art: 'grid',
    color: 'pink',
  },
  {
    title: 'UKI Company Website',
    company: 'PT Usaha Kreatif Indonesia',
    description: 'Built and rebranded the company website as the front-end developer.',
    tags: ['NuxtJS', 'Front-End'],
    art: 'burst',
    color: 'lime',
  },
  {
    title: 'Superapp & Dashboard',
    company: 'PT Supernova Palapa Nusantara',
    description: 'Superapp web application and dashboard management system.',
    tags: ['NestJS', 'NuxtJS', 'Full-Stack'],
    art: 'circles',
    color: 'violet',
  },
  {
    title: 'KOMATSU Indonesia Portal',
    company: 'PT Supernova Palapa Nusantara',
    description: 'Back-office portal and integrated product service web application for KOMATSU Indonesia.',
    tags: ['Back-office', 'Full-Stack'],
    art: 'stripes',
    color: 'pink',
  },
  {
    title: 'Travel Booking Platform',
    company: 'PT Radya Gita Bahagi',
    description: 'Back-office portal and client area for a travel booking application.',
    tags: ['NuxtJS', 'Front-End'],
    art: 'grid',
    color: 'lime',
  },
  {
    title: 'Morinaga Platinum',
    company: 'PT Radya Gita Bahagi',
    description: 'Developed and maintained the Morinaga Platinum web application.',
    tags: ['Yii2', 'PHP', 'Full-Stack'],
    art: 'burst',
    color: 'violet',
  },
  {
    title: 'Blackmores Indonesia',
    company: 'PT Radya Gita Bahagi',
    description: 'Built the Blackmores Indonesia web application.',
    tags: ['Laravel', 'PHP', 'Full-Stack'],
    art: 'circles',
    color: 'pink',
  },
] as const

export const education = [
  { title: 'Widyatama University', program: 'Informatics Engineering - GPA 3.52', period: '2018' },
  { title: 'ITB Diploma 2 Study Program', program: 'Information Technology Information Study Program', period: '2014 - 2016' },
  { title: 'TI Pembangunan Vocational High School Cimahi', program: 'Computer and Network Engineering', period: '2011 - 2014' },
]

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'PT Usaha Kreatif Indonesia - UKI',
    period: 'April 2024 - Present',
    points: [
      'Developed backend services and back-office portal for a futures broker application, using NestJS and NuxtJS.',
      'Built and rebranded the company website as a Front-End Developer, utilizing NuxtJS.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'PT Supernova Palapa Nusantara - SPN',
    period: 'August 2022 - April 2024',
    points: [
      'Developed a superapp web application and dashboard management system, leveraging NestJS and NuxtJS.',
      'Developed a back-office portal and integrated product service web application for KOMATSU Indonesia.',
    ],
  },
  {
    role: 'Front-End & Full-Stack Developer',
    company: 'PT Radya Gita Bahagi - RGB',
    period: 'December 2019 - August 2022',
    points: [
      'Developed a back-office portal and client area for a travel booking application using NuxtJS.',
      'Developed and maintained the Morinaga Platinum web application with Yii2.',
      'Built the Blackmores Indonesia web application with Laravel.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'PT Idea Kreatif Solusi - Indismart',
    period: 'February 2017 - December 2019',
    points: [
      'Developed a superapp web application for a government environment, using CodeIgniter.',
      'Developed and maintained an integrated smart system platform for a smart city environment, using CodeIgniter.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'BlackBerry Innovation Center - BBIC',
    period: 'February 2016 - February 2017',
    points: ['Developed a smart tracking platform for delivery services, using .NET C# as the MVC framework.'],
  },
]

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
]
