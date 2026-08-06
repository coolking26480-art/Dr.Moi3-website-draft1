export interface Publication {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi?: string;
  link?: string;
  category: "journal" | "book-chapter" | "case-study" | "op-ed";
}

export interface Conference {
  id: string;
  title: string;
  year: number;
  institution: string;
  location: string;
  presentationTitle: string;
  image: string;
}

export interface Award {
  id: string;
  name: string;
  institution: string;
  year: number;
  description: string;
  image: string;
}

export interface Talk {
  id: string;
  eventTitle: string;
  institution: string;
  date: string;
  location: string;
  description?: string;
  image?: string;
}

export interface Qualification {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  specialization: string;
  description?: string;
}

export interface WorkItem {
  id: string;
  role: string;
  institution: string;
  duration: string;
  description: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "teaching" | "conference" | "workshop" | "award" | "lecture" | "event";
}

export const qualifications: Qualification[] = [
  {
    id: "phd",
    degree: "Ph.D. in Psychology",
    institution: "University of Pune",
    duration: "2015 – 2019",
    specialization: "Organizational Psychology & Workplace Mental Health",
    description: "Dissertation focused on the intersection of sleep quality, occupational stress, and psychological well-being among working professionals in the IT sector.",
  },
  {
    id: "mphil",
    degree: "M.Phil. in Clinical Psychology",
    institution: "University of Pune",
    duration: "2013 – 2015",
    specialization: "Cognitive Behavioral Interventions",
    description: "Research on efficacy of CBT-based interventions for anxiety and stress management in corporate settings.",
  },
  {
    id: "masters",
    degree: "M.A. in Psychology",
    institution: "University of Pune",
    duration: "2011 – 2013",
    specialization: "Industrial & Organizational Psychology",
    description: "Coursework in psychometric assessment, organizational behavior, and human resource development.",
  },
  {
    id: "bachelors",
    degree: "B.A. in Psychology",
    institution: "Fergusson College, Pune",
    duration: "2008 – 2011",
    specialization: "General Psychology with Statistics",
    description: "Foundation in psychological theory, research methods, and statistical analysis.",
  },
  {
    id: "diploma",
    degree: "Postgraduate Diploma in Counseling Psychology",
    institution: "Tata Institute of Social Sciences (TISS)",
    duration: "2014 – 2015",
    specialization: "Counseling & Psychotherapy",
    description: "Practical training in individual and group counseling techniques with supervised clinical hours.",
  },
  {
    id: "cert1",
    degree: "Certification in Sleep Science",
    institution: "Sleep Research Society",
    duration: "2020",
    specialization: "Sleep Disorders & Workplace Impact",
    description: "Advanced certification covering sleep physiology, circadian rhythms, and occupational sleep medicine.",
  },
];

export const workExperience: WorkItem[] = [
  {
    id: "we1",
    role: "Assistant Professor of Psychology",
    institution: "FLAME University, Pune",
    duration: "2020 – Present",
    description: "Teaching undergraduate and postgraduate courses in Organizational Psychology, Research Methods, and Community Psychology. Leading curriculum development for the Psychology major.",
    category: "Academic Appointments",
  },
  {
    id: "we2",
    role: "Visiting Faculty",
    institution: "Symbiosis International University",
    duration: "2019 – 2020",
    description: "Delivered lectures on Industrial Psychology and Psychometric Assessment for MBA-HR students.",
    category: "Academic Appointments",
  },
  {
    id: "we3",
    role: "Course Instructor – Organizational Behavior",
    institution: "FLAME University",
    duration: "2020 – Present",
    description: "Designing and delivering OB courses with a focus on experiential learning, case studies, and applied psychological principles in organizational settings.",
    category: "Teaching",
  },
  {
    id: "we4",
    role: "Course Instructor – Research Methods",
    institution: "FLAME University",
    duration: "2021 – Present",
    description: "Training students in quantitative and qualitative research methodologies, statistical analysis using SPSS and R, and academic writing.",
    category: "Teaching",
  },
  {
    id: "we5",
    role: "Undergraduate Dissertation Supervisor",
    institution: "FLAME University",
    duration: "2020 – Present",
    description: "Supervised 10+ undergraduate dissertations across topics including workplace mental health, sleep quality, organizational culture, and employee engagement.",
    category: "Student Mentorship",
  },
  {
    id: "we6",
    role: "Guest Editor",
    institution: "National HRD Network Journal",
    duration: "2022 – Present",
    description: "Overseeing special issues on workplace mental health and employee well-being. Managing peer review process and editorial decisions.",
    category: "Academic Leadership",
  },
  {
    id: "we7",
    role: "Organizing Committee Member",
    institution: "National Conference on Psychology & Well-being",
    duration: "2021, 2023",
    description: "Led logistics and academic programming for two national conferences attracting 200+ delegates from across India.",
    category: "Academic Leadership",
  },
  {
    id: "we8",
    role: "Mental Health Outreach Facilitator",
    institution: "Various Organizations & Communities",
    duration: "2018 – Present",
    description: "Conducted 100+ mental health awareness sessions, workshops, and training programs for corporate employees, educational institutions, and community organizations.",
    category: "Outreach Activities",
  },
  {
    id: "we9",
    role: "Member – Academic Council",
    institution: "FLAME University",
    duration: "2022 – Present",
    description: "Contributing to academic policy decisions, curriculum review, and quality assurance processes at the institutional level.",
    category: "Institutional Service",
  },
  {
    id: "we10",
    role: "Member – Ethics Review Board",
    institution: "FLAME University",
    duration: "2021 – Present",
    description: "Reviewing research proposals for ethical compliance in human subjects research across social sciences.",
    category: "Institutional Service",
  },
];

export const publications: Publication[] = [
  {
    id: "p1",
    authors: "Das, M., Sharma, R., & Patel, K.",
    year: 2024,
    title: "Sleep Quality and Job Performance: A Longitudinal Study Among IT Professionals in India",
    journal: "Journal of Occupational Health Psychology",
    doi: "10.1037/ocp0000123",
    category: "journal",
  },
  {
    id: "p2",
    authors: "Das, M. & Kumar, S.",
    year: 2024,
    title: "Workplace Mental Health Interventions: A Systematic Review of Evidence from South Asian Contexts",
    journal: "International Journal of Environmental Research and Public Health",
    doi: "10.3390/ijerph21010045",
    category: "journal",
  },
  {
    id: "p3",
    authors: "Das, M., Gupta, A., & Reddy, P.",
    year: 2023,
    title: "Organizational Culture and Employee Well-being: Mediating Role of Perceived Social Support",
    journal: "Journal of Applied Psychology",
    doi: "10.1037/apl0000987",
    category: "journal",
  },
  {
    id: "p4",
    authors: "Das, M. & Iyer, V.",
    year: 2023,
    title: "Cross-Cultural Differences in Work-Life Balance: A Comparative Study of Indian and European Professionals",
    journal: "Cross-Cultural Research",
    doi: "10.1177/1069397123001234",
    category: "journal",
  },
  {
    id: "p5",
    authors: "Das, M.",
    year: 2023,
    title: "Burnout Among Healthcare Workers During COVID-19: A Mixed-Methods Investigation",
    journal: "Frontiers in Psychology",
    doi: "10.3389/fpsyg.2023.1122334",
    category: "journal",
  },
  {
    id: "p6",
    authors: "Das, M., Singh, N., & Bose, T.",
    year: 2022,
    title: "Mindfulness-Based Stress Reduction in Corporate Settings: Efficacy and Implementation Challenges",
    journal: "Mindfulness",
    doi: "10.1007/s12671-022-01987-3",
    category: "journal",
  },
  {
    id: "p7",
    authors: "Das, M. & Mehta, R.",
    year: 2022,
    title: "Psychological Safety and Innovation in Teams: Evidence from Indian Startups",
    journal: "South Asian Journal of Management",
    doi: "10.1177/sajm.2022.0045",
    category: "journal",
  },
  {
    id: "p8",
    authors: "Das, M., Choudhury, S., & Nair, L.",
    year: 2021,
    title: "Remote Work and Mental Health: Lessons from the Pandemic Transition",
    journal: "Journal of Managerial Psychology",
    doi: "10.1108/JMP-09-2021-0567",
    category: "journal",
  },
  {
    id: "p9",
    authors: "Das, M.",
    year: 2021,
    title: "Gender Differences in Occupational Stress: A Meta-Analytic Review",
    journal: "Psychology of Women Quarterly",
    doi: "10.1177/03616843211002345",
    category: "journal",
  },
  {
    id: "p10",
    authors: "Das, M. & Banerjee, A.",
    year: 2020,
    title: "Employee Engagement and Organizational Commitment in the Indian IT Sector",
    journal: "Global Business Review",
    doi: "10.1177/0972150920987654",
    category: "journal",
  },
  {
    id: "p11",
    authors: "Das, M.",
    year: 2024,
    title: "Sleep and Productivity: Bridging the Gap Between Research and Practice",
    journal: "In: Routledge Handbook of Occupational Health Psychology (Eds. Smith, J. & Lee, H.)",
    category: "book-chapter",
  },
  {
    id: "p12",
    authors: "Das, M. & Sharma, R.",
    year: 2023,
    title: "Community Psychology in India: Challenges and Opportunities",
    journal: "In: Handbook of Indian Psychology (Eds. Rao, K. & Mishra, P.)",
    category: "book-chapter",
  },
  {
    id: "p13",
    authors: "Das, M.",
    year: 2022,
    title: "Workplace Mental Health: A Strategic Imperative for Indian Organizations",
    journal: "In: Organizational Behavior in Emerging Markets (Eds. Gupta, V. & Wang, L.)",
    category: "book-chapter",
  },
  {
    id: "p14",
    authors: "Das, M., Kumar, S., & Patel, K.",
    year: 2023,
    title: "TechBurn Solutions: Addressing Employee Burnout in a High-Growth Startup",
    journal: "Ivey Publishing",
    category: "case-study",
  },
  {
    id: "p15",
    authors: "Das, M. & Iyer, V.",
    year: 2022,
    title: "WellnessFirst Healthcare: Building a Culture of Psychological Safety",
    journal: "Harvard Business Publishing",
    category: "case-study",
  },
  {
    id: "p16",
    authors: "Das, M.",
    year: 2024,
    title: "Why Indian Companies Must Prioritize Sleep Health",
    journal: "The Hindu BusinessLine",
    category: "op-ed",
  },
  {
    id: "p17",
    authors: "Das, M.",
    year: 2023,
    title: "The Hidden Cost of Presenteeism: Mental Health in the Modern Workplace",
    journal: "Economic Times",
    category: "op-ed",
  },
  {
    id: "p18",
    authors: "Das, M.",
    year: 2022,
    title: "Rethinking Work-Life Balance in the Post-Pandemic Era",
    journal: "Mint",
    category: "op-ed",
  },
];

export const conferences: Conference[] = [
  {
    id: "c1",
    title: "International Conference on Occupational Health Psychology",
    year: 2024,
    institution: "University of Zurich",
    location: "Zurich, Switzerland",
    presentationTitle: "Sleep Quality as a Predictor of Job Performance: A 12-Month Longitudinal Study",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&q=80",
  },
  {
    id: "c2",
    title: "National Conference on Psychology & Well-being",
    year: 2023,
    institution: "FLAME University",
    location: "Pune, India",
    presentationTitle: "Workplace Mental Health Interventions: Evidence from South Asia",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    id: "c3",
    title: "APA Annual Convention",
    year: 2023,
    institution: "American Psychological Association",
    location: "Washington, D.C., USA",
    presentationTitle: "Cross-Cultural Perspectives on Work-Life Balance",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    id: "c4",
    title: "International Conference on Community Psychology",
    year: 2022,
    institution: "University of Lisbon",
    location: "Lisbon, Portugal",
    presentationTitle: "Community-Based Mental Health Programs in Urban India",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  },
  {
    id: "c5",
    title: "National HRD Network Annual Conference",
    year: 2022,
    institution: "NHRD Network",
    location: "Mumbai, India",
    presentationTitle: "Building Psychologically Safe Workplaces: A Framework for Indian Organizations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: "c6",
    title: "European Congress of Psychology",
    year: 2021,
    institution: "EFPA",
    location: "Madrid, Spain (Virtual)",
    presentationTitle: "Remote Work and Mental Health: A Mixed-Methods Investigation",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  },
];

export const awards: Award[] = [
  {
    id: "a1",
    name: "Excellence in Teaching Award",
    institution: "FLAME University",
    year: 2024,
    description: "Recognized for outstanding pedagogical innovation and consistently high student evaluations across all taught courses.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
  },
  {
    id: "a2",
    name: "Excellence in Teaching Award",
    institution: "FLAME University",
    year: 2023,
    description: "Second consecutive year of recognition for teaching excellence, particularly in research methods and organizational psychology.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  },
  {
    id: "a3",
    name: "Best Paper Award",
    institution: "International Conference on Occupational Health Psychology",
    year: 2024,
    description: "Awarded for the longitudinal study on sleep quality and job performance among IT professionals, recognized for methodological rigor and practical implications.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  },
  {
    id: "a4",
    name: "Young Researcher Award",
    institution: "Indian Academy of Applied Psychology",
    year: 2022,
    description: "Honored for significant contributions to workplace mental health research and community outreach in the early career stage.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80",
  },
  {
    id: "a5",
    name: "Outstanding Dissertation Award",
    institution: "University of Pune",
    year: 2019,
    description: "Doctoral dissertation recognized for its innovative approach to studying sleep and workplace well-being in the Indian context.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
];

export const talks: Talk[] = [
  {
    id: "t1",
    eventTitle: "Keynote: Mental Health in the Modern Workplace",
    institution: "Tata Consultancy Services",
    date: "March 2024",
    location: "Pune, India",
    description: "Delivered a keynote address to 500+ employees on recognizing and addressing mental health challenges in high-pressure corporate environments. Followed by an interactive Q&A session.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    id: "t2",
    eventTitle: "Workshop: Sleep Hygiene for Working Professionals",
    institution: "Infosys Limited",
    date: "January 2024",
    location: "Bangalore, India",
    description: "Conducted a full-day workshop on evidence-based sleep hygiene practices, circadian rhythm optimization, and the business case for sleep health in organizations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: "t3",
    eventTitle: "Panel Discussion: Women in Academia",
    institution: "FLAME University",
    date: "November 2023",
    location: "Pune, India",
    description: "Participated in a panel discussion on navigating academic careers, work-life integration, and mentorship for early-career women researchers.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: "t4",
    eventTitle: "Guest Lecture: Organizational Psychology in Practice",
    institution: "Indian Institute of Management, Ahmedabad",
    date: "September 2023",
    location: "Ahmedabad, India",
    description: "Delivered a guest lecture to MBA students on applying organizational psychology principles in HR strategy and leadership development.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: "t5",
    eventTitle: "Public Lecture: Understanding Burnout",
    institution: "Pune Mental Health Festival",
    date: "July 2023",
    location: "Pune, India",
    description: "Public lecture on recognizing early signs of burnout, preventive strategies, and when to seek professional help. Attended by 300+ community members.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  },
  {
    id: "t6",
    eventTitle: "Seminar: Research Methods in Psychology",
    institution: "University of Delhi",
    date: "February 2023",
    location: "New Delhi, India",
    description: "Invited seminar on advanced quantitative research methods, statistical software training, and best practices in academic writing for psychology researchers.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    id: "t7",
    eventTitle: "Workshop: Stress Management for Educators",
    institution: "Symbiosis International School",
    date: "December 2022",
    location: "Pune, India",
    description: "Interactive workshop for 50+ school teachers on stress identification, coping strategies, and building resilience in educational settings.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
  },
  {
    id: "t8",
    eventTitle: "Keynote: The Future of Workplace Well-being",
    institution: "National HRD Network",
    date: "October 2022",
    location: "Mumbai, India",
    description: "Keynote address on emerging trends in workplace well-being, the role of technology, and organizational responsibility for employee mental health.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", alt: "Teaching session in classroom", category: "teaching" },
  { id: "g2", src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&q=80", alt: "Conference presentation", category: "conference" },
  { id: "g3", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", alt: "Workshop facilitation", category: "workshop" },
  { id: "g4", src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80", alt: "Receiving teaching award", category: "award" },
  { id: "g5", src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", alt: "Public lecture", category: "lecture" },
  { id: "g6", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", alt: "Institutional event", category: "event" },
  { id: "g7", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", alt: "Conference keynote", category: "conference" },
  { id: "g8", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Panel discussion", category: "lecture" },
  { id: "g9", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80", alt: "Teaching workshop", category: "teaching" },
  { id: "g10", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", alt: "Award ceremony", category: "award" },
  { id: "g11", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80", alt: "Virtual conference", category: "conference" },
  { id: "g12", src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80", alt: "Best paper award", category: "award" },
];

export const stats = [
  { label: "Mental Health Outreach Sessions", value: "100+", icon: "Heart" },
  { label: "Research Outputs", value: "50+", icon: "FileText" },
  { label: "Invited Talks", value: "25+", icon: "Mic" },
  { label: "Teaching Evaluation", value: "4.5/5", icon: "Star" },
  { label: "Dissertations Supervised", value: "10+", icon: "GraduationCap" },
];

export const researchInterests = [
  "Workplace Mental Health",
  "Sleep & Well-being",
  "Organizational Psychology",
  "Community Psychology",
  "Industrial Psychology",
  "Cross-Cultural Psychology",
];
