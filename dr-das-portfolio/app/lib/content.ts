export const siteConfig = {
  name: 'Dr. Moitrayee Das',
  title: 'Assistant Professor of Psychology',
  organization: 'FLAME University, Pune',
  logo: 'MD',
};

export const heroContent = {
  kicker: 'Assistant Professor of Psychology',
  headline: ['Strategy.', 'Research.', 'Impact.'],
  bio: 'Assistant Professor of Psychology at FLAME University, Pune, with a Ph.D. in Management and Labour Studies from TISS Mumbai. Research and teaching center on workplace mental health, sleep and well-being, and organizational psychology.',
  stats: [
    { number: '100+', label: 'Outreach Sessions' },
    { number: '50+', label: 'Publications' },
    { number: 'Ph.D.', label: 'TISS Mumbai' },
  ],
  ctas: [
    { label: 'View Research', action: 'scrollToResearch', variant: 'primary' as const },
    { label: 'Contact', action: 'openContact', variant: 'outline' as const },
  ],
  portrait: {
    name: 'Dr. Moitrayee Das',
    org: 'FLAME University, Pune',
  },
};

export const researchContent = {
  kicker: 'Research Focus',
  title: 'AREAS OF EXPERTISE',
  areas: [
    {
      num: '01',
      title: 'Workplace Mental Health',
      description: 'Burnout, overwork culture, and organizational interventions for employee wellness.',
    },
    {
      num: '02',
      title: 'Sleep & Well-being',
      description: 'Shift work, sleep problems, and cognitive alertness in diverse professions across India.',
    },
    {
      num: '03',
      title: 'Cross-Cultural Psychology',
      description: 'Indigenous healing, rituals, and culturally grounded mental health practices.',
    },
    {
      num: '04',
      title: 'Digital & Social Behavior',
      description: 'Digital presenteeism, social media authenticity, and AI's impact on mental health.',
    },
  ],
};

export const publicationsContent = {
  kicker: 'Selected Works',
  title: 'PUBLICATIONS',
  items: [
    {
      year: '2025',
      title: 'Shift work, sleep and well-being: A qualitative study on rotating shift workers',
      meta: 'Management and Labour Studies · Das, M. & Palo, S.',
    },
    {
      year: '2025',
      title: 'Intersection of caste and Student Suicide in India: A Scoping Review',
      meta: 'Sambhāṣaṇ · Shah, M. & Das, M.',
    },
    {
      year: '2024',
      title: 'The rainbow after the storm: The power of post-traumatic growth',
      meta: 'Frontiers for Young Minds · Palo, S., Swaika, D. & Das, M.',
    },
    {
      year: '2021',
      title: 'Sleeping Well: The Gateway to Employee Wellness',
      meta: 'NHRD Network Journal · Palo, S. & Das, M.',
    },
  ],
  footerLink: 'View All Publications →',
};

export const awardsContent = {
  kicker: 'Recognition',
  title: 'AWARDS & HONORS',
  items: [
    { title: 'Teaching Award', org: 'FLAME University', year: '2024–2025' },
    { title: 'Best Paper Award', org: '9th INDAM Conference', year: '2024' },
    { title: 'Teaching Award', org: 'FLAME University', year: '2023–2024' },
    { title: 'Outstanding Student', org: 'TISS Mumbai · M.Phil', year: '2017' },
  ],
};

export const outreachContent = {
  kicker: 'Impact',
  title: 'OUTREACH & ENGAGEMENT',
  stats: [
    { number: '100+', label: 'Mental Health Sessions' },
    { number: '25+', label: 'Invited Talks' },
    { number: '2', label: 'National Conferences' },
  ],
  partners: [
    'YASHADA',
    'Bridgestone India',
    'NIBM Pune',
    'TEDx FLAME',
    'MHRD',
    'IC3 Conference',
  ],
  cta: 'View Full Outreach',
};

export const contactContent = {
  title: 'Get in Touch',
  subtitle: 'I'll get back to you within 48 hours.',
  fields: {
    name: { placeholder: 'Your name', type: 'text' },
    email: { placeholder: 'your@email.com', type: 'email' },
    phone: { placeholder: '+91 00000 00000', type: 'tel' },
    message: { placeholder: 'Your message...', type: 'textarea' },
  },
  submit: 'Send Message',
  success: {
    title: 'Message sent successfully!',
    subtitle: 'I'll be in touch soon.',
  },
};

export const navLinks = [
  { label: 'Home', panelIndex: 0 },
  { label: 'Research', panelIndex: 1 },
  { label: 'Publications', panelIndex: 2 },
  { label: 'Awards', panelIndex: 3 },
  { label: 'Outreach', panelIndex: 4 },
];
