export const CONFIG = {
  name: "Pravalika Palle",
  headline: "Software Engineer & Full-Stack Developer",
  tagline: "Applied AI & GenAI Enthusiast",
  email: "pravalikareddy722@gmail.com",
  github: "https://github.com/pravalika2307",
  linkedin: "https://www.linkedin.com/in/pravalikapalle23/",
  portfolio: "https://pravalikapalle.vercel.app/",
  location: "Hyderabad, India",
  resumePath: "/resume.pdf",
  resumeFileName: "resume.pdf",
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",

  heroStatement: "Building resilient full-stack systems, high-throughput APIs, and applied AI automation with engineering precision.",

  bio: {
    short: "Software engineer specializing in full-stack web architectures, FastAPI backend systems, intelligent automation pipelines, and applied LLM workflows.",
    statement: "I bridge algorithmic fundamentals with real product engineering—from designing high-throughput REST APIs and relational schemas to developing automated sales and marketing workflows.",
    highlights: [
      { number: "01", label: "Backend & Systems", desc: "FastAPI, PostgreSQL, SQLAlchemy & RESTful architecture" },
      { number: "02", label: "Applied Intelligence", desc: "Google Gemini API, prompt pipelines & analytical fallbacks" },
      { number: "03", label: "Automation Velocity", desc: "CRM synchronization, outreach workflows & ML regression" }
    ]
  },

  skills: [
    {
      category: "Programming",
      description: "Systems, APIs & script execution",
      skills: ["Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frontend",
      description: "Performant, accessible UI layers",
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      description: "Scalable APIs & ORM data models",
      skills: ["FastAPI", "REST APIs", "SQLAlchemy"]
    },
    {
      category: "Databases",
      description: "Relational modeling & indexing",
      skills: ["PostgreSQL", "SQLite"]
    },
    {
      category: "AI & GenAI",
      description: "LLM reasoning & prompt pipelines",
      skills: ["Google Gemini API", "LLM Integration", "Prompt Engineering", "AI-powered application development"]
    },
    {
      category: "Testing & Quality",
      description: "Automated test suites & linters",
      skills: ["Pytest", "Vitest", "ESLint", "Ruff"]
    },
    {
      category: "Tools & Platforms",
      description: "Cloud runtimes & AI developer tools",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Google Cloud Run", "GitHub Copilot", "Claude", "Cursor"]
    }
  ],

  experience: [
    {
      role: "Growth & Technology Intern",
      company: "Agile Receivables",
      period: "Sep 2026 – Present",
      location: "Hyderabad, India",
      type: "Internship",
      highlights: [
        "Architecting a Sales and Marketing Automation platform streamlining CRM data flows and customer outreach.",
        "Developing automated CRM workflows, lead management pipelines, and business process automation.",
        "Exploring HubSpot integrations and CRM synchronization architecture to eliminate manual bottlenecks.",
        "Supporting application troubleshooting and leveraging AI-assisted workflows (Copilot, Cursor, Claude)."
      ],
      tech: ["Python", "JavaScript", "REST APIs", "CRM Workflows", "HubSpot", "Automation"]
    },
    {
      role: "AI/ML Intern",
      company: "IBM Edunet Foundation",
      period: "Jun 2025 – Jul 2025",
      location: "Virtual / Remote",
      type: "Internship",
      highlights: [
        "Engineered end-to-end machine learning models using Python, Pandas, NumPy, and Scikit-learn.",
        "Boosted model prediction accuracy by 18% through iterative feature engineering and cross-validation.",
        "Delivered an interactive Streamlit application enabling real-time employee salary prediction."
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Machine Learning"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Completed in 2026",
      period: "2024 – 2026",
      description: "Advanced computational focus on Software Engineering, Distributed Systems, Database Management Systems, and Algorithm Design.",
      highlights: [
        "Advanced System Design and API architectures.",
        "Full-stack capstones with intelligent decision systems."
      ]
    },
    {
      degree: "Bachelor of Science – Computer Science & Cognitive Systems",
      institution: "Undergraduate Degree",
      period: "2021 – 2024",
      grade: "CGPA: 9.1",
      description: "Core computer science principles, cognitive computing, object-oriented design, relational schemas, and data structures.",
      highlights: [
        "Graduated with distinction with a 9.1 CGPA.",
        "Built baseline desktop tools, graph visualizers, and database managers."
      ]
    }
  ],

  projects: [
    {
      id: "synapseiq",
      title: "SynapseIQ",
      tagline: "AI Decision Intelligence Platform",
      badge: "Flagship Project",
      tier: "flagship",
      category: "Applied AI & Analytics",
      description: "AI-powered decision platform transforming business metrics into executive briefs, contextual recommendations, and interactive forecasts using Google Gemini with client-side analytical fallback logic.",
      longDescription: "SynapseIQ processes business KPIs, detects growth anomalies, and synthesizes strategic executive briefs using Google Gemini. Architected cleanly as a React/TypeScript client-side platform without requiring an external backend server, it features custom deterministic analytical fallback logic ensuring continuous operations even under upstream API limits.",
      tech: ["React", "TypeScript", "Google Gemini API", "Tailwind CSS"],
      metrics: [
        { label: "AI Engine", value: "Gemini Pro / Flash" },
        { label: "Architecture", value: "Client-Side + Fallbacks" },
        { label: "Outputs", value: "Briefs & Forecasts" }
      ],
      highlights: [
        "Contextual AI recommendation engine powered by Google Gemini API.",
        "Built-in analytical fallback logic preserving intelligence during rate limits or offline states.",
        "Interactive scenario forecasting and real-time business health score computation.",
        "Pure React/TypeScript client application without a Python/FastAPI backend."
      ],
      github: "https://github.com/pravalika2307/SynapseIQ",
      live: "https://synapseiq-ai.vercel.app/#/dashboard/brief",
      featured: true
    },
    {
      id: "talentlens",
      title: "TalentLens AI",
      tagline: "AI Recruitment & Candidate Intelligence",
      badge: "National Hackathon MVP",
      tier: "featured",
      category: "Full-Stack AI",
      description: "Recruitment intelligence platform featuring 10+ FastAPI REST endpoints, LLM-powered candidate analysis, and semantic scoring—built and shipped in 24 hours at Amazon Campus.",
      longDescription: "Streamlines technical screening with 10+ RESTful FastAPI endpoints that parse resumes, generate structured candidate matrices, and perform semantic alignment scoring. Built and delivered in a 24-hour sprint during the Build Beyond Limits V2 national hackathon.",
      tech: ["Python", "FastAPI", "React", "REST APIs", "LLM Integration", "Prompt Engineering"],
      metrics: [
        { label: "REST Endpoints", value: "10+ APIs" },
        { label: "Delivery Time", value: "24-Hour Sprint" },
        { label: "Venue", value: "Amazon Campus" }
      ],
      highlights: [
        "10+ RESTful APIs for candidate profile ingestion, screening, and evaluation.",
        "LLM prompt pipelines for skills extraction and semantic alignment scoring.",
        "Functional full-stack MVP delivered in 24 hours during a national hackathon."
      ],
      github: "https://github.com/pravalika2307/talent-lens",
      live: null,
      featured: true
    },
    {
      id: "devflow",
      title: "DevFlow",
      tagline: "AI-Powered Developer Platform",
      badge: "Full-Stack Architecture",
      tier: "featured",
      category: "Developer Tooling",
      description: "Developer productivity platform combining Next.js, TypeScript, and FastAPI with PostgreSQL to automate workflow analysis, dependency inspection, and code-quality auditing.",
      longDescription: "DevFlow unifies development operations with a Next.js/TypeScript frontend and an asynchronous FastAPI backend backed by PostgreSQL, orchestrating automated code-quality checks and task queues.",
      tech: ["Next.js", "TypeScript", "React", "FastAPI", "PostgreSQL", "Pytest"],
      metrics: [
        { label: "Frontend", value: "Next.js & TypeScript" },
        { label: "Backend", value: "FastAPI & PostgreSQL" },
        { label: "Quality", value: "Pytest & ESLint" }
      ],
      highlights: [
        "Asynchronous FastAPI operations connecting to PostgreSQL.",
        "Next.js and TypeScript frontend with rapid client-side transitions.",
        "Automated testing and code quality practices utilizing Pytest and ESLint."
      ],
      github: "https://github.com/pravalika2307/DevFlow",
      live: null,
      featured: true
    },
    {
      id: "graphscope",
      title: "GraphScope",
      tagline: "Graph Intelligence & Microservice Analysis",
      badge: "Systems & Algorithms",
      tier: "featured",
      category: "Distributed Systems",
      description: "Observability platform modeling 39 microservices and 128 relationships. Uses React Flow and FastAPI to compute shortest paths and evaluate blast radius.",
      longDescription: "Models distributed architecture topologies into a dynamic directed graph of 39 microservices and 128 interdependencies. Evaluates shortest paths, service dependencies, and blast-radius failure simulations.",
      tech: ["React", "React Flow", "FastAPI", "Python", "Graph Algorithms"],
      metrics: [
        { label: "Microservices", value: "39 Services" },
        { label: "Relationships", value: "128 Edges" },
        { label: "Algorithms", value: "BFS & Blast Radius" }
      ],
      highlights: [
        "Interactive node graph modeling 39 microservices and 128 system relationships.",
        "FastAPI backend executing real-time graph traversal and shortest-path computation.",
        "Blast-radius analysis to predict ripple effects of service degradation."
      ],
      github: "https://github.com/pravalika2307/GraphScope",
      live: null,
      featured: true
    },
    {
      id: "hrlytics",
      title: "HRlytics AI",
      tagline: "Workforce Analytics Platform",
      badge: "Hackathon Project",
      tier: "standard",
      category: "Analytics & APIs",
      description: "Workforce platform powered by FastAPI, SQLite, and SQLAlchemy, exposing 12+ REST APIs across 5,000+ employee records to forecast costs and boost workflow efficiency by 35%.",
      longDescription: "Processes 5,000+ employee records through 12+ REST endpoints, delivering automated personnel cost forecasts and reducing manual HR reporting workflows by 35%.",
      tech: ["React", "FastAPI", "SQLite", "SQLAlchemy", "REST APIs"],
      metrics: [
        { label: "Dataset", value: "5,000+ Records" },
        { label: "Efficiency", value: "+35% Gain" },
        { label: "APIs", value: "12+ REST Endpoints" }
      ],
      highlights: [
        "12+ REST APIs built with FastAPI for querying complex workforce metrics.",
        "SQLAlchemy ORM data modeling handling 5,000+ employee records.",
        "Improved operational reporting efficiency by 35% through automation."
      ],
      github: "https://github.com/pravalika2307/HRlytics-AI",
      live: null,
      featured: false
    },
    {
      id: "salary-prediction",
      title: "Employee Salary Prediction",
      tagline: "Machine Learning Regression Application",
      badge: "Machine Learning",
      tier: "standard",
      category: "Data Science",
      description: "Interactive machine learning application with Scikit-learn and Streamlit, improving prediction accuracy by 18% through feature engineering and model benchmarking.",
      longDescription: "Developed during the IBM Edunet AI/ML internship, this application benchmarks regression algorithms on workforce datasets, achieving an 18% accuracy improvement over baseline models.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
      metrics: [
        { label: "Accuracy Gain", value: "+18% Over Baseline" },
        { label: "Framework", value: "Scikit-learn" },
        { label: "Interface", value: "Streamlit UI" }
      ],
      highlights: [
        "Trained multiple regression algorithms (Random Forest, Gradient Boosting, Ridge).",
        "Constructed automated data cleaning and feature engineering pipelines in Pandas.",
        "Deployed interactive Streamlit UI for instant salary prediction."
      ],
      github: "https://github.com/pravalika2307/employee-salary-prediction_app",
      live: null,
      featured: false
    },
    {
      id: "shortest-path",
      title: "Shortest Path Visualizer",
      tagline: "Graph Algorithm Simulation Tool",
      badge: "Algorithms",
      tier: "standard",
      category: "Algorithms",
      description: "Algorithm simulation tool visualizing BFS, Dijkstra, and A* pathfinding algorithms across 50+ node graphs with SQLite state persistence.",
      longDescription: "An interactive computer science visualization tool built with Python and Streamlit demonstrating step-by-step frontier exploration of BFS, Dijkstra, and A* on 50+ node topological graphs.",
      tech: ["Python", "Streamlit", "SQLite", "Algorithms"],
      metrics: [
        { label: "Algorithms", value: "BFS, Dijkstra, A*" },
        { label: "Graph Size", value: "50+ Nodes" },
        { label: "Storage", value: "SQLite" }
      ],
      highlights: [
        "Step-by-step pathfinding visualization on 50+ node grids.",
        "Side-by-side comparison of uninformed vs heuristic search performance.",
        "Persistent graph configurations using SQLite."
      ],
      github: "https://github.com/pravalika2307/Shortest-Path-Visualizer",
      live: null,
      featured: false
    }
  ],

  achievements: [
    {
      title: "Build Beyond Limits V2 – Amazon Campus",
      category: "National Hackathon",
      date: "2026",
      venue: "Amazon Campus, Hyderabad",
      summary: "Architected and delivered TalentLens AI, an AI candidate intelligence platform with 10+ REST APIs, within a strict 24-hour sprint during a national-level hackathon.",
      tags: ["FastAPI", "React", "LLM Integration", "24hr MVP"]
    },
    {
      title: "Buildathon by React Hyderabad",
      category: "Community Hackathon",
      date: "2026",
      venue: "Hyderabad Developer Hub",
      summary: "Developed HRlytics AI, a workforce analytics engine utilizing FastAPI, SQLite, and SQLAlchemy with 12+ REST endpoints and interactive business dashboards.",
      tags: ["React.js", "FastAPI", "SQLAlchemy", "Analytics"]
    },
    {
      title: "React Hyderabad Developer Community",
      category: "Technical Community",
      date: "Active",
      venue: "Hyderabad Tech Ecosystem",
      summary: "Engaged participant in modern frontend, React 19, and full-stack engineering workshops, contributing to collaborative developer knowledge sharing.",
      tags: ["Community", "Frontend", "Full-Stack", "Knowledge Sharing"]
    },
    {
      title: "Applied AI & Open Source Engineering",
      category: "Open Source",
      date: "Continuous",
      venue: "GitHub",
      summary: "Actively publishing open-source applications, machine learning experiments, and full-stack developer platforms on GitHub.",
      tags: ["Open Source", "Python", "TypeScript", "GitHub"]
    }
  ]
};
