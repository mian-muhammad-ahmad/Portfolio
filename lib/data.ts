export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const sectionIds = nav.map((n) => n.href.replace("#", ""));

export const heroStats = [
  { num: "1.5+", label: "yrs // experience" },
  { num: "10+", label: "Projects Completed" },
  { num: "2+", label: "Internships & Certificates" },
  { num: "100%", label: "Passion for AI" },
];

export const aboutMetrics = [
  { k: "Degree", v: "BS Artificial Intelligence" },
  { k: "Current focus", v: "LLM fine-tuning & MLOps" },
  { k: "Based in", v: "Faisalabad, PK" },
  { k: "Availability", v: "Freelance / Full-time" },
  { k: "Core Stack", v: "Python · React · Next.js · TensorFlow · Scikit-learn" },
];

export const aboutPills = [
  "Machine Learning",
  "Artificial Intelligence",
  "Python Development",
  "Full Stack Development",
  "Problem Solving",
  "Continuous Learning",
];

export type SkillBar = { name: string; pct: number };
export type SkillCard = {
  title: string;
  icon: "languages" | "frameworks" | "training" | "mlops" | "data";
  bars?: SkillBar[];
  tags?: string[];
  wide?: boolean;
};

export const skillCards: SkillCard[] = [
  {
    title: "Programming Languages",
    icon: "languages",
    bars: [
      { name: "Python", pct: 90 },
      { name: "JavaScript", pct: 85 },
      { name: "C++", pct: 75 },
      { name: "SQL", pct: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: "frameworks",
    bars: [
      { name: "React.js", pct: 90 },
      { name: "Next.js", pct: 85 },
      { name: "Node.js", pct: 80 },
      { name: "Express.js", pct: 80 },
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: "training",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Data Preprocessing",
      "Model Training",
      "Model Evaluation",
      "Feature Engineering",
      "Classification",
      "Generative AI",
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: "mlops",
    bars: [
      { name: "TensorFlow", pct: 85 },
      { name: "Scikit-learn", pct: 90 },
      { name: "OpenCV", pct: 80 },
      { name: "Flask", pct: 80 },
    ],
  },
  {
    title: "Databases & Developer Tools",
    icon: "data",
    wide: true,
    tags: [
      "MongoDB",
      "SQLite",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Tailwind CSS",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  metrics: string[];
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  gradient: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "DocInsight – Mini Document Insight Pipeline",
    description:
      "An AI-powered document analysis system that extracts text from PDF and TXT files, generates structured summaries, and answers user questions using Google's Gemini API. Built with a modular architecture for scalability and maintainability.",
    metrics: ["AI Summarization", "Document Q&A"],
    tech: [
      "Python",
      "Gemini API",
      "Sentence Transformers",
      "Flask",
      "JSON",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/mian-muhammad-ahmad/DocInsight",
    gradient: "from-[#132433] to-[#0e1b26]",
    accent: "teal",
  },
  {
    title: "Credit Scoring Prediction System",
    description:
      "A machine learning model that predicts customer creditworthiness using historical financial data. The project includes preprocessing, feature engineering, model training, and performance evaluation.",
    metrics: ["Machine Learning", "Data Analysis"],
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/mian-muhammad-ahmad/CodeAlpha_CreditScoringModel",
    gradient: "from-[#122b28] to-[#0d1f1c]",
    accent: "teal",
  },
  {
    title: "Handwritten Character Recognition",
    description:
      "A deep learning application that recognizes handwritten characters using convolutional neural networks (CNNs). The model is trained on image datasets to accurately classify handwritten inputs.",
    metrics: ["Deep Learning", "Computer Vision"],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/mian-muhammad-ahmad/CodeAlpha_HandwrittenCharacterRecognition",
    gradient: "from-[#231a12] to-[#1a130d]",
    accent: "blue",
  },
  {
    title: "File Organizer & Sorting Algorithm Performance Analyzer",
    description:
      "A software application that organizes file names or file sizes and evaluates the performance of Selection Sort, Insertion Sort, Quick Sort, and Heap Sort by measuring execution time, comparisons, and swaps. Designed to demonstrate algorithm efficiency through performance analysis and data organization.",
    metrics: [
      "4 Sorting Algorithms",
      "Performance Analysis"
    ],
    tech: [
      "C++",
      "Data Structures",
      "Algorithms",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    demoUrl: "https://file-organizer-and-sorting-algorithm.netlify.app/",
    repoUrl: "https://github.com/mian-muhammad-ahmad/file-organizer",
    gradient: "from-[#132433] to-[#0e1b26]",
    accent: "teal",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A machine learning project developed during my CodeAlpha Machine Learning Internship that predicts the likelihood of heart disease using multiple classification algorithms. The system performs data preprocessing, feature scaling, model evaluation, automatic best-model selection, and generates visual performance reports.",
    metrics: [
      "5 ML Models",
      "Best Model Selection"
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/mian-muhammad-ahmad/CodeAlpha_DiseasePrediction",
    gradient: "from-[#1a1730] to-[#12101f]",
    accent: "violet",
  },
  {
    title: "MLOps Model Registry & CI/CD Pipeline",
    description:
      "Versioned model registry with automated retraining triggers, staging validation gates, and one-click rollback for production ML models.",
    metrics: ["10x faster deploys", "Zero-downtime rollout"],
    tech: ["MLflow", "Docker", "GitHub Actions", "AWS"],
    demoUrl: "#",
    repoUrl: "#",
    gradient: "from-[#1c1424] to-[#130d1c]",
    accent: "violet",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
 {
    role: "AI/ML Project Developer",
    company: "Insighta",
    date: "2026",
    bullets: [
      "Successfully completed the 'Mini Document Insight Pipeline' technical assessment for Insighta.",
      "Developed an AI-powered document analysis pipeline capable of extracting text, generating structured summaries, and answering document-based questions using Google's Gemini API.",
      "Built a modular solution featuring document loading, text chunking, semantic retrieval, LLM-based summarization, and Markdown/JSON report generation with clean, maintainable architecture.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Freelance / Contract",
    date: "2025 — 2026",
    bullets: [
      "Delivered 05+ custom ML solutions for clients across e-commerce, healthcare, and fintech.",
      "Built computer-vision QA tools and NLP pipelines, consistently rated 5-star for delivery quality.",
      "Designed REST APIs (FastAPI) to serve models with sub-100ms response times.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    date: "2026",
    bullets: [
      "Developed machine learning solutions using Python, Scikit-learn, and XGBoost.",
      "Built a Heart Disease Prediction System with data preprocessing, feature engineering, model training, and performance evaluation.",
      "Compared multiple classification algorithms and implemented automatic best-model selection using standard evaluation metrics.",
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "model" | "chatbot" | "pipeline" | "automation" | "deploy" | "audit";
};

export const services: Service[] = [
  {
    title: "Custom ML Model Development",
    description:
      "End-to-end model design, training, and evaluation tailored to your data and business metric — not a generic off-the-shelf fit.",
    icon: "model",
  },
  {
    title: "AI & Chatbot Integration",
    description:
      "Fine-tuned LLM and NLP chatbots integrated into your product or support workflow, from prototype to production.",
    icon: "chatbot",
  },
  {
    title: "Data Pipeline & Preprocessing",
    description:
      "Robust ETL and feature-engineering pipelines that turn messy raw data into model-ready, versioned datasets.",
    icon: "pipeline",
  },
  {
    title: "Python Automation & Backend",
    description:
      "Scripts, services, and backend systems that remove manual work and glue your data and ML components together.",
    icon: "automation",
  },
  {
    title: "Model Deployment & APIs",
    description:
      "Containerized, versioned deployments with FastAPI/Flask and cloud infrastructure, built for real traffic and monitoring.",
    icon: "deploy",
  },
  {
    title: "ML Advisory & Audits",
    description:
      "Technical review of existing models and pipelines, with practical recommendations to improve accuracy, cost, or reliability.",
    icon: "audit",
  },
];

export const education = [
  {
    title: "Bachelor of Science in Artificial Intelligence",
    meta: "NFC Institute of Engineering & Fertilizer Research, Faisalabad • 2024 – Present",
  },
  {
    title: "Artificial Intelligence & Machine Learning Professional Course",
    meta: "NAVTTC • Completed",
  },
  {
    title: "Intermediate (Pre-Engineering)",
    meta: "Punjab Group of Colleges • 2022 – 2024",
  },
];

export const certifications = [
  {
    title: "Artificial Intelligence & Machine Learning Professional Course",
    meta: "NAVTTC",
  },
  { title: "Deep Learning Specialization", meta: "DeepLearning.AI · Coursera" },
  { title: "NLP Specialization", meta: "DeepLearning.AI · Coursera" },
  {
    title: "Artificial Intelligence",
    meta: "DigiSkills.pk",
  },
  {
    title: "Machine Learning Internship",
    meta: "CodeAlpha",
  },
  {
    title: "Mini Document Insight Pipeline",
    meta: "Insighta Technical Assessment",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ahmad rebuilt our recommendation pipeline from the ground up and had it in production within weeks. Communication was clear the entire way, and the model outperformed our old benchmark immediately.",
    name: "Sara Khan",
    role: "Product Lead, RetailIQ",
    initials: "SK",
  },
  {
    quote:
      "One of the few ML engineers I've worked with who thinks about deployment from day one. The API he built has run in production for over a year with zero downtime.",
    name: "David Moreau",
    role: "CTO, Fintra Labs",
    initials: "DM",
  },
  {
    quote:
      "We hired Ahmad for a short computer-vision contract and ended up extending it twice. He explains trade-offs in plain language, which made planning so much easier for our non-technical stakeholders.",
    name: "Rana Aslam",
    role: "Operations Director, Manufactura",
    initials: "RA",
  },
];

export const contactLinks = [
  {
    type: "email",
    label: "Email",
    value: "mrmahmadarain@gmail.com",
    href: "mailto:mrmahmadarain@gmail.com",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-ahmad-arain",
    href: "https://www.linkedin.com/in/muhammad-ahmad-arain/",
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/mian-muhammad-ahmad",
    href: "https://github.com/mian-muhammad-ahmad",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "+92 370 7062705",
    href: "https://wa.me/923707062705",
  },
  {
    type: "location",
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: "#",
  },
];
