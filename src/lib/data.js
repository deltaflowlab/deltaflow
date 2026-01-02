
// ======================
// SITE CONFIGURATION
// ======================
export const siteConfig = {
  name: "DeltaFlow",
  tagline: "Synchronizing Intelligence with Business",
  description: "Custom AI development agency building intelligent solutions for forward-thinking companies",
  url: "https://deltaflow.ai",
  email: "contact@deltaflow.ai",
  phone: "+1 (555) 123-4567",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "United States"
  },
  social: {
    linkedin: "https://linkedin.com/company/deltaflow",
    twitter: "https://twitter.com/deltaflow",
    github: "https://github.com/deltaflow"
  }
};

// ======================
// NAVIGATION
// ======================
export const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "Process", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    {
      name: "AI Product Development",
      href: "/services/ai-development",
      description: "Custom AI solutions from concept to deployment"
    },
    {
      name: "Business Automation",
      href: "/services/business-automation",
      description: "Intelligent process automation that scales"
    },
    {
      name: "AI Consulting",
      href: "/services/ai-consulting",
      description: "Strategic guidance for AI adoption"
    }
  ]
};

// ======================
// SERVICES
// ======================
export const services = [
  {
    id: "ai-development",
    name: "AI Product Development",
    slug: "ai-development",
    tagline: "From Concept to Production AI",
    description: "We build custom AI products tailored to your business needs",
    longDescription: "Our team of AI engineers designs, develops, and deploys production-ready AI systems. From NLP applications to computer vision solutions, we handle the entire development lifecycle.",
    
    icon: "Cpu", // Lucide icon name
    
    benefits: [
      "End-to-end AI product development",
      "Custom model training and fine-tuning",
      "Production deployment and MLOps",
      "Ongoing support and optimization"
    ],
    
    useCases: [
      {
        title: "Intelligent Document Processing",
        description: "Extract and process data from unstructured documents with 95%+ accuracy"
      },
      {
        title: "Conversational AI",
        description: "Custom chatbots and virtual assistants that understand context"
      },
      {
        title: "Predictive Analytics",
        description: "ML models that forecast trends and optimize decision-making"
      }
    ],
    
    process: [
      "Discovery & Requirements",
      "Architecture Design",
      "Model Development",
      "Integration & Testing",
      "Deployment & Monitoring"
    ],
    
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "AWS SageMaker"],
    
    cta: {
      text: "Discuss Your AI Project",
      href: "/contact?service=ai-development"
    }
  },
  
  {
    id: "business-automation",
    name: "Business Process Automation",
    slug: "business-automation",
    tagline: "Automate What Matters",
    description: "Intelligent automation that eliminates repetitive work",
    longDescription: "We design and implement custom automation solutions that integrate AI with your existing workflows, reducing manual effort and improving accuracy.",
    
    icon: "Workflow",
    
    benefits: [
      "70% reduction in manual processing time",
      "Near-zero error rates",
      "24/7 automated operations",
      "Seamless integration with existing systems"
    ],
    
    useCases: [
      {
        title: "Invoice Processing",
        description: "Automated data extraction, validation, and entry"
      },
      {
        title: "Customer Support Automation",
        description: "AI-powered ticket routing and response generation"
      },
      {
        title: "Data Pipeline Automation",
        description: "Intelligent ETL processes with anomaly detection"
      }
    ],
    
    process: [
      "Process Analysis",
      "Automation Strategy",
      "Solution Development",
      "Integration",
      "Training & Handoff"
    ],
    
    technologies: ["Python", "FastAPI", "Celery", "Apache Airflow", "RPA Tools", "Custom APIs"],
    
    cta: {
      text: "Explore Automation Solutions",
      href: "/contact?service=automation"
    }
  },
  
  {
    id: "ai-consulting",
    name: "AI Strategy & Consulting",
    slug: "ai-consulting",
    tagline: "Navigate Your AI Journey",
    description: "Expert guidance for successful AI implementation",
    longDescription: "We help organizations develop AI strategies, assess feasibility, and create roadmaps for successful AI adoption.",
    
    icon: "Lightbulb",
    
    benefits: [
      "Clear AI roadmap aligned with business goals",
      "Feasibility assessment and ROI analysis",
      "Technology stack recommendations",
      "Implementation best practices"
    ],
    
    useCases: [
      {
        title: "AI Readiness Assessment",
        description: "Evaluate your data, infrastructure, and organizational readiness"
      },
      {
        title: "Custom AI Strategy",
        description: "Develop a phased implementation plan"
      },
      {
        title: "Technical Due Diligence",
        description: "Review AI vendors or evaluate acquisition targets"
      }
    ],
    
    process: [
      "Current State Analysis",
      "Opportunity Identification",
      "Strategy Development",
      "Roadmap Creation",
      "Implementation Support"
    ],
    
    technologies: ["Business Analysis", "Technical Architecture", "Change Management"],
    
    cta: {
      text: "Schedule a Consultation",
      href: "/contact?service=consulting"
    }
  },
  
  {
    id: "generative-ai",
    name: "Generative AI Solutions",
    slug: "generative-ai",
    tagline: "Create Content at Scale",
    description: "Custom LLM agents and image generation pipelines",
    longDescription: "We build tailored generative AI models that can create text, code, images, and audio, integrated seamlessly into your creative workflows.",
    
    icon: "Sparkles",
    
    benefits: [
      "Custom LLM Fine-tuning",
      "Image & Video Generation",
      "Automated Content Pipelines",
      "Creative Audits"
    ],
    
    useCases: [
      {
        title: "Marketing Automation",
        description: "Generate on-brand copy and assets instantly"
      },
      {
        title: "Code Assistants",
        description: "Internal coding tools trained on your codebase"
      },
      {
        title: "Knowledge Retrieval",
        description: "Chat with your company's entire knowledge base"
      }
    ],
    
    process: [
      "Data Collection",
      "Model Selection",
      "Fine-Tuning",
      "Application Building",
      "Deployment"
    ],
    
    technologies: ["OpenAI", "Midjourney", "Stable Diffusion", "LangChain", "Pinecone"],
    
    cta: {
      text: "Start Generating",
      href: "/contact?service=gen-ai"
    }
  }
];

// ======================
// PORTFOLIO / CASE STUDIES
// ======================
export const portfolio = [
  {
    id: "fintech-fraud-detection",
    title: "Real-Time Fraud Detection System",
    client: "Major FinTech Company",
    industry: "Financial Services",
    
    challenge: "Client was losing $2M annually to fraudulent transactions with a 40% false positive rate causing customer friction.",
    
    solution: "Built a custom ML model using ensemble methods that analyzes transaction patterns in real-time with 99.5% accuracy.",
    
    results: [
      { metric: "99.5%", label: "Fraud Detection Accuracy" },
      { metric: "$1.8M", label: "Annual Savings" },
      { metric: "85%", label: "Reduction in False Positives" },
      { metric: "<100ms", label: "Response Time" }
    ],
    
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "AWS"],
    
    testimonial: {
      quote: "DeltaFlow's solution transformed our fraud prevention. The accuracy is incredible and our customers are much happier.",
      author: "VP of Engineering",
      company: "FinTech Client"
    },
    
    image: "/images/portfolio/fintech_fraud_dashboard.png",
    featured: true
  },
  
  {
    id: "healthcare-automation",
    title: "Medical Records Processing Automation",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    
    challenge: "Manual processing of patient records was taking 5-7 days per case, creating bottlenecks in patient care.",
    
    solution: "Developed an AI-powered document processing system with HIPAA-compliant infrastructure that extracts and validates medical data.",
    
    results: [
      { metric: "95%", label: "Processing Time Reduction" },
      { metric: "4 hours", label: "Average Processing Time" },
      { metric: "98%", label: "Data Accuracy" },
      { metric: "HIPAA", label: "Compliant" }
    ],
    
    technologies: ["Python", "spaCy", "Azure ML", "FastAPI", "PostgreSQL"],
    
    testimonial: {
      quote: "This system has been transformative for our operations. Patients get faster service and our staff can focus on care.",
      author: "Chief Medical Officer",
      company: "Healthcare Network"
    },
    
    image: "/images/portfolio/healthcare_ai_interface.png",
    featured: true
  },
  
  {
    id: "ecommerce-recommendations",
    title: "Personalized Product Recommendation Engine",
    client: "E-Commerce Retailer",
    industry: "Retail",
    
    challenge: "Generic product recommendations were resulting in low conversion rates and poor customer engagement.",
    
    solution: "Built a custom recommendation engine using collaborative filtering and deep learning that personalizes product suggestions in real-time.",
    
    results: [
      { metric: "42%", label: "Increase in Conversion Rate" },
      { metric: "68%", label: "Higher Average Order Value" },
      { metric: "3.2x", label: "Engagement Improvement" },
      { metric: "Real-time", label: "Personalization" }
    ],
    
    technologies: ["Python", "PyTorch", "FastAPI", "Redis", "GCP"],
    
    testimonial: {
      quote: "The ROI was clear within the first month. Our customers love the personalized experience.",
      author: "Head of Product",
      company: "E-Commerce Client"
    },
    
    image: "/images/portfolio/ecommerce_analytics_ai.png",
    featured: true
  }
];

// ======================
// PROCESS / HOW WE WORK
// ======================
export const process = {
  headline: "Our proven process for delivering successful AI projects",
  description: "We follow a structured approach that ensures your AI solution is built right, on time, and delivers real business value.",
  
  phases: [
    {
      number: "01",
      name: "Discovery",
      duration: "1-2 weeks",
      description: "We start by deeply understanding your business, challenges, and goals",
      activities: [
        "Stakeholder interviews",
        "Process analysis",
        "Data assessment",
        "Feasibility study",
        "Success metrics definition"
      ],
      deliverables: [
        "Project scope document",
        "Technical feasibility report",
        "Preliminary timeline and budget"
      ]
    },
    {
      number: "02",
      name: "Design",
      duration: "2-3 weeks",
      description: "We architect the solution and create detailed technical specifications",
      activities: [
        "Solution architecture design",
        "Data pipeline planning",
        "Model selection and approach",
        "Integration strategy",
        "Security and compliance review"
      ],
      deliverables: [
        "Technical architecture document",
        "Detailed project plan",
        "Wireframes/mockups (if applicable)",
        "Development roadmap"
      ]
    },
    {
      number: "03",
      name: "Development",
      duration: "6-12 weeks",
      description: "Our engineers build, train, and refine your AI solution",
      activities: [
        "Data preparation and cleaning",
        "Model development and training",
        "API and integration development",
        "Testing and quality assurance",
        "Performance optimization"
      ],
      deliverables: [
        "Trained AI models",
        "Production-ready codebase",
        "API documentation",
        "Test results and metrics"
      ]
    },
    {
      number: "04",
      name: "Deployment",
      duration: "1-2 weeks",
      description: "We deploy your solution to production with proper monitoring",
      activities: [
        "Production environment setup",
        "Deployment automation",
        "Monitoring and alerting",
        "Performance tuning",
        "Team training"
      ],
      deliverables: [
        "Live production system",
        "Monitoring dashboards",
        "Documentation",
        "Training materials"
      ]
    },
    {
      number: "05",
      name: "Support",
      duration: "Ongoing",
      description: "We provide ongoing support, maintenance, and optimization",
      activities: [
        "Performance monitoring",
        "Model retraining",
        "Bug fixes and updates",
        "Feature enhancements",
        "Technical support"
      ],
      deliverables: [
        "Monthly performance reports",
        "Model updates",
        "System improvements",
        "Dedicated support channel"
      ]
    }
  ]
};

// ======================
// ABOUT / COMPANY
// ======================
export const company = {
  story: {
    headline: "We build AI that works",
    paragraphs: [
      "DeltaFlow was founded with a simple mission: make enterprise-grade AI accessible to every business. We saw too many companies struggling to implement AI effectively - either lacking the technical expertise or getting stuck with generic solutions that didn't fit their needs.",
      "Our team of AI engineers and consultants brings deep expertise in machine learning, automation, and software development. We've built AI systems for Fortune 500 companies and fast-growing startups alike.",
      "Today, we're proud to be the AI development partner for companies across finance, healthcare, retail, and technology. Every project we take on is an opportunity to solve real problems with intelligent solutions."
    ]
  },
  
  values: [
    {
      icon: "Target",
      title: "Results-Driven",
      description: "We measure success by business outcomes, not technical metrics"
    },
    {
      icon: "Shield",
      title: "Quality First",
      description: "Every solution we build meets production-grade standards"
    },
    {
      icon: "Users",
      title: "Partnership",
      description: "We're your long-term AI development partner, not just a vendor"
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "We stay at the forefront of AI technology and best practices"
    }
  ],
  
  team: {
    headline: "World-class AI engineers",
    description: "Our team combines deep technical expertise with business acumen",
    size: "25+ engineers",
    locations: ["San Francisco", "New York", "Remote"],
    expertise: [
      "Machine Learning Engineers",
      "AI Researchers",
      "Full-Stack Developers",
      "DevOps Engineers",
      "Product Managers"
    ]
  },
  
  stats: [
    { value: "50+", label: "AI Projects Delivered" },
    { value: "25+", label: "Expert Engineers" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "$10M+", label: "Client ROI Generated" }
  ]
};

// ======================
// TESTIMONIALS
// ======================
export const testimonials = [
  {
    quote: "DeltaFlow transformed our operations. The AI system they built processes in hours what used to take days.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechCorp",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "Working with DeltaFlow was seamless. They understood our business and delivered exactly what we needed.",
    author: "Michael Rodriguez",
    title: "VP Engineering",
    company: "FinanceHub",
    image: "/images/testimonials/michael.jpg"
  },
  {
    quote: "The ROI was clear within months. This is the AI partner every company needs.",
    author: "Emily Watson",
    title: "Head of Product",
    company: "RetailCo",
    image: "/images/testimonials/emily.jpg"
  }
];

// ======================
// CLIENT LOGOS
// ======================
export const clients = [
  { id: "techcorp", name: "TechCorp", logo: "/images/clients/techcorp.svg" },
  { id: "financehub", name: "FinanceHub", logo: "/images/clients/financehub.svg" },
  { id: "retailco", name: "RetailCo", logo: "/images/clients/retailco.svg" },
  { id: "healthplus", name: "HealthPlus", logo: "/images/clients/healthplus.svg" },
  { id: "dataflow", name: "DataFlow", logo: "/images/clients/dataflow.svg" },
  { id: "automate", name: "AutoMate", logo: "/images/clients/automate.svg" }
];

// ======================
// FAQ
// ======================
export const faqs = [
  {
    id: "project-timeline",
    category: "General",
    question: "How long does a typical AI project take?",
    answer: "Most projects take 10-16 weeks from kickoff to deployment. This includes discovery (1-2 weeks), design (2-3 weeks), development (6-12 weeks), and deployment (1-2 weeks). We provide a detailed timeline during discovery."
  },
  {
    id: "pricing",
    category: "General",
    question: "What's the investment range for an AI project?",
    answer: "Projects typically range from $75K to $500K+ depending on complexity. We provide a detailed proposal with fixed pricing after the discovery phase."
  },
  {
    id: "company-size",
    category: "General",
    question: "Do you work with startups or only enterprises?",
    answer: "We work with both. Our sweet spot is companies with 50-5000 employees, but we evaluate each project individually based on business impact and technical fit."
  },
  {
    id: "post-deployment",
    category: "Process",
    question: "What happens after deployment?",
    answer: "We offer ongoing support packages that include monitoring, maintenance, model retraining, and feature enhancements. Many clients choose annual support contracts."
  },
  {
    id: "data-science-team",
    category: "Technical",
    question: "Do we need our own data science team?",
    answer: "No. We can handle the entire project independently. However, we integrate seamlessly with your existing engineering and product teams."
  },
  {
    id: "technologies",
    category: "Technical",
    question: "What technologies do you use?",
    answer: "We're technology-agnostic and choose the best tools for each project. Common stack: Python, TensorFlow/PyTorch, FastAPI, React, AWS/GCP/Azure. We document everything clearly."
  },
  {
    id: "data-requirements",
    category: "Technical",
    question: "How much data do we need for an AI project?",
    answer: "It depends on the project. For custom ML models, typically 10K+ labeled examples. For LLM-based solutions, we can work with smaller datasets using fine-tuning and prompt engineering. We assess data requirements during discovery."
  },
  {
    id: "ownership",
    category: "Legal",
    question: "Who owns the code and models?",
    answer: "You do. All code, models, and intellectual property developed for your project belongs to you. We sign IP assignment agreements as part of our standard contracts."
  },
  {
    id: "security-compliance",
    category: "Security",
    question: "Are your solutions secure and compliant?",
    answer: "Yes. We follow security best practices and can build HIPAA, SOC2, and GDPR-compliant solutions. We perform security audits and can work within your compliance requirements."
  },
  {
    id: "maintenance",
    category: "Process",
    question: "Do you provide ongoing maintenance?",
    answer: "Yes. We offer flexible support packages including 24/7 monitoring, model retraining, bug fixes, and feature updates. Support can be hourly, monthly retainer, or annual contracts."
  },
  {
    id: "guarantees",
    category: "General",
    question: "Do you guarantee specific accuracy or performance?",
    answer: "We set realistic performance targets during discovery based on your data and requirements. While we can't guarantee specific metrics before seeing your data, we don't consider a project complete until agreed-upon benchmarks are met."
  },
  {
    id: "payment-terms",
    category: "Business",
    question: "What are your payment terms?",
    answer: "Typically 30% upfront, 40% at halfway milestone, and 30% upon deployment. For longer projects, we can arrange monthly billing. We're flexible and can accommodate your procurement process."
  },
  {
    id: "location",
    category: "General",
    question: "Do you work with remote clients?",
    answer: "Absolutely. We work with clients globally and are experienced with remote collaboration. We adapt our communication schedule to your timezone."
  },
  {
    id: "nda",
    category: "Legal",
    question: "Can you sign an NDA?",
    answer: "Yes, we regularly work under NDAs and can sign yours or provide ours. We take confidentiality seriously and all team members sign confidentiality agreements."
  },
  {
    id: "demo",
    category: "Process",
    question: "Can we see a demo before committing?",
    answer: "During the discovery phase, we often build a proof-of-concept or prototype to validate the approach. This helps ensure the solution will work before full development begins."
  }
];

export const faqCategories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "process", name: "Process" },
  { id: "technical", name: "Technical" },
  { id: "business", name: "Business" },
  { id: "legal", name: "Legal" },
  { id: "security", name: "Security" }
];

// ======================
// MASTERED TECHNOLOGIES
// ======================
export const masteredTechnologies = [
  { id: "tech-python", name: "Python" },
  { id: "tech-tensorflow", name: "TensorFlow" },
  { id: "tech-pytorch", name: "PyTorch" },
  { id: "tech-openai", name: "OpenAI" },
  { id: "tech-langchain", name: "LangChain" },
  { id: "tech-aws", name: "AWS" },
  { id: "tech-gcp", name: "Google Cloud" },
  { id: "tech-fastapi", name: "FastAPI" },
  { id: "tech-nextjs", name: "Next.js" },
  { id: "tech-react", name: "React" },
  { id: "tech-docker", name: "Docker" },
  { id: "tech-k8s", name: "Kubernetes" },
  { id: "tech-postgres", name: "PostgreSQL" },
  { id: "tech-redis", name: "Redis" },
  { id: "tech-kafka", name: "Kafka" }
];

// ======================
// CONTACT FORM
// ======================
export const contactForm = {
  serviceOptions: [
    { value: "ai-development", label: "AI Product Development" },
    { value: "business-automation", label: "Business Automation" },
    { value: "ai-consulting", label: "AI Consulting" },
    { value: "not-sure", label: "Not Sure - Need Guidance" }
  ],
  
  budgetOptions: [
    { value: "under-100k", label: "Under $100K" },
    { value: "100k-250k", label: "$100K - $250K" },
    { value: "250k-500k", label: "$250K - $500K" },
    { value: "500k-plus", label: "$500K+" },
    { value: "not-sure", label: "Not Sure" }
  ],
  
  timelineOptions: [
    { value: "urgent", label: "< 1 month" },
    { value: "normal", label: "1-3 months" },
    { value: "flexible", label: "3-6 months" },
    { value: "exploring", label: "Just Exploring" }
  ]
};
