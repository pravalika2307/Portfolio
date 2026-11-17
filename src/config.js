export const CONFIG = {
  name: "Pravalika Palle",
  headline: "Software Engineer | Full-Stack Developer | Applied AI & GenAI Enthusiast",
  email: "pravalikareddy722@gmail.com",
  github: "https://github.com/pravalika2307",
  linkedin: "https://www.linkedin.com/in/pravalikapalle23/",
  portfolio: "https://pravalikapalle.vercel.app/",
  location: "Hyderabad, India",
  resumePath: "/Pravalika_Palle_Resume.pdf",
  resumeFileName: "Pravalika_Palle_Resume.pdf",

  bio: {
    short: "Software engineer specializing in full-stack web applications, scalable backend APIs, intelligent automation workflows, and practical LLM integration.",
    about1: "I am a Software Engineer and MCA graduate (2026) who builds reliable full-stack applications, robust backend architectures, and intelligent automation systems. My work bridges algorithmic fundamentals with practical product engineering—from designing high-throughput REST APIs and relational schemas to developing AI-assisted business automation platforms.",
    about2: "At Agile Receivables, I build Sales and Marketing Automation systems, working with CRM synchronization, lead orchestration, outreach automation, and troubleshooting production workflows. Previously at IBM Edunet Foundation, I developed machine learning pipelines with Python and Scikit-learn, boosting predictive accuracy by 18% through systematic feature engineering.",
    about3: "I value clean code, strong system design, transparent API contracts, and engineering decisions backed by measurable outcomes. I thrive in collaborative engineering teams shipping products that solve real customer problems."
  },

  skills: [
    {
      category: "Programming",
      description: "Core languages for systems, APIs, and modern web applications",
      skills: ["Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frontend",
      description: "Responsive, accessible, and high-performance user interfaces",
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      description: "High-performance RESTful APIs and ORM data layers",
      skills: ["FastAPI", "REST APIs", "SQLAlchemy"]
    },
    {
      category: "Databases",
      description: "Relational modeling, indexing, and persistent storage",
      skills: ["PostgreSQL", "SQLite"]
    },
    {
      category: "AI & GenAI",
      description: "Applied generative AI, reasoning pipelines, and LLM integrations",
      skills: ["Google Gemini API", "LLM Integration", "Prompt Engineering", "AI-powered application development"]
    },
    {
      category: "Testing & Quality",
      description: "Automated test suites, static analysis, and code quality enforcement",
      skills: ["Pytest", "Vitest", "ESLint", "Ruff"]
    },
    {
      category: "Tools & Platforms",
      description: "Modern developer tooling, deployment environments, and AI-assisted workflows",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Google Cloud Run", "GitHub Copilot", "Claude", "Cursor"]
    }
  ],

  experience: [
    {
      role: "Growth & Technology Intern",
      company: "Agile Receivables",
      period: "September 2026 – Present",
      location: "Hyderabad, India",
      type: "Internship",
      highlights: [
        "Contributing to software development and internal technology initiatives for revenue and growth operations.",
        "Building a Sales and Marketing Automation platform streamlining CRM data flows and customer outreach.",
        "Architecting CRM workflows, lead management pipelines, outreach automation, and business process automation.",
        "Exploring HubSpot integrations and CRM synchronization architecture to eliminate manual data entry bottlenecks.",
        "Investigating application issues, reproducing edge cases, and supporting active technical troubleshooting.",
        "Working with modern AI-assisted engineering workflows (GitHub Copilot, Cursor, Claude) to accelerate development velocity."
      ],
      tech: ["Python", "JavaScript", "REST APIs", "CRM Architecture", "HubSpot", "Automation"]
    },
    {
      role: "AI/ML Intern",
      company: "IBM Edunet Foundation",
      period: "June 2025 – July 2025",
      location: "Virtual / Remote",
      type: "Internship",
      highlights: [
        "Developed end-to-end machine learning solutions using Python, Pandas, NumPy, and Scikit-learn.",
        "Led data preprocessing, missing-value imputation, categorical encoding, and systematic feature engineering.",
        "Built and deployed an interactive Streamlit application enabling real-time employee salary prediction.",
        "Improved prediction accuracy by 18% through structured feature selection, hyperparameter tuning, and cross-validation."
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Machine Learning"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Completed in 2026",
      period: "2024 – 2026",
      description: "Advanced computational focus on Software Engineering, Distributed Systems, Database Management Systems, Algorithm Design, and Applied AI.",
      highlights: [
        "Specialized in backend architecture, system design patterns, and full-stack software development.",
        "Developed production-style microservices, API integrations, and AI decision systems as capstone projects."
      ]
    },
    {
      degree: "Bachelor of Science – Computer Science & Cognitive Systems",
      institution: "Undergraduate Degree",
      period: "2021 – 2024",
      grade: "CGPA: 9.1",
      description: "Rigorous foundation in computer science principles, cognitive computing, object-oriented programming, relational databases, and data structures.",
      highlights: [
        "Graduated with distinction with a CGPA of 9.1.",
        "Built core algorithmic visualizers, database management utilities, and interactive web tools."
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
      description: "An AI-powered decision intelligence platform that turns business metrics into actionable executive briefs, contextual recommendations, and interactive forecasts using the Google Gemini API with robust client-side analytical fallback logic.",
      longDescription: "SynapseIQ delivers automated strategic intelligence for business operators. It processes key performance indicators, detects anomalies, evaluates growth vectors, and leverages Google Gemini to synthesize structured executive briefs. Built with a pure React/TypeScript frontend architecture without requiring an external backend server, it features custom client-side analytical fallback logic ensuring continuous functionality even during upstream API latency.",
      tech: ["React", "TypeScript", "Google Gemini API", "Tailwind CSS", "Data Analytics"],
      metrics: [
        { label: "AI Reasoning", value: "Gemini Pro / Flash" },
        { label: "Architecture", value: "Pure Client-Side + Fallbacks" },
        { label: "Capabilities", value: "Forecasting & Briefing" }
      ],
      highlights: [
        "Contextual AI recommendation engine powered by Google Gemini API.",
        "Built-in analytical fallback logic preserving intelligence during rate limits or offline states.",
        "Interactive scenario forecasting and real-time business health score computation.",
        "Important architectural note: Pure React/TypeScript frontend application without a Python/FastAPI backend."
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
      description: "An AI-assisted recruitment platform featuring 10+ FastAPI REST endpoints, LLM-powered candidate profiling, semantic resume matching, and automated recruitment workflows—built and delivered in 24 hours at Amazon Campus.",
      longDescription: "TalentLens AI streamlines candidate screening and recruitment intelligence. Built with FastAPI and React, the system implements 10+ RESTful endpoints that parse resumes, generate structured candidate matrices, and perform semantic profile matching. The MVP was fully architected and shipped within a 24-hour sprint during the Build Beyond Limits V2 national hackathon.",
      tech: ["Python", "FastAPI", "React", "REST APIs", "LLM Integration", "Prompt Engineering"],
      metrics: [
        { label: "REST Endpoints", value: "10+ APIs" },
        { label: "Delivery Time", value: "24-Hour MVP" },
        { label: "Venue", value: "Amazon Hyderabad Campus" }
      ],
      highlights: [
        "10+ RESTful APIs for candidate profile ingestion, screening, and evaluation.",
        "LLM prompt pipelines for skills extraction and semantic alignment scoring.",
        "Functional full-stack MVP delivered in 24 hours during a national hackathon.",
        "Interactive recruiter dashboard for pipeline tracking and candidate comparison."
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
      description: "A comprehensive developer productivity platform combining Next.js, TypeScript, and FastAPI with PostgreSQL to automate software development workflows, project dependency inspection, and code-quality auditing.",
      longDescription: "DevFlow centralizes software development operations. Combining a Next.js and TypeScript frontend with a scalable FastAPI backend backed by PostgreSQL, DevFlow orchestrates automated code-quality checks, project structure analysis, and intelligent task pipelines following rigorous testing standards.",
      tech: ["Next.js", "TypeScript", "React", "FastAPI", "PostgreSQL", "Pytest"],
      metrics: [
        { label: "Frontend", value: "Next.js & TypeScript" },
        { label: "Backend", value: "FastAPI & PostgreSQL" },
        { label: "Practices", value: "Automated Testing & Linting" }
      ],
      highlights: [
        "Structured backend operations using FastAPI with asynchronous PostgreSQL connections.",
        "Modern Next.js and TypeScript frontend providing rapid client-side transitions.",
        "Automated testing and code quality practices utilizing Pytest and ESLint.",
        "Intelligent developer task queues and project dependency health analysis."
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
      description: "A graph intelligence platform modeling 39 microservices and 128 relationships. Uses React Flow and FastAPI to compute shortest paths, identify critical dependency choke points, and evaluate blast radius.",
      longDescription: "GraphScope provides visual and algorithmic observability for distributed software architectures. The platform ingests microservice topologies, mapping 39 distinct services and 128 interdependencies into a dynamic directed graph. Engineers can execute shortest-path algorithms, inspect blast radius for breaking changes, and simulate cascade failures.",
      tech: ["React", "React Flow", "FastAPI", "Python", "Graph Algorithms"],
      metrics: [
        { label: "Microservices", value: "39 Services" },
        { label: "Relationships", value: "128 Edges" },
        { label: "Algorithms", value: "BFS, Shortest-Path, Blast Radius" }
      ],
      highlights: [
        "Interactive node graph modeling 39 microservices and 128 system relationships.",
        "FastAPI backend executing real-time graph traversal and shortest-path computation.",
        "Blast-radius analysis to predict ripple effects of service degradation or API deprecation.",
        "Custom React Flow layout engine with interactive node filtering and path tracing."
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
      description: "Workforce analytics platform powered by FastAPI, SQLite, and SQLAlchemy, exposing 12+ REST APIs across 5,000+ employee records to forecast personnel costs and improve workflow efficiency by 35%.",
      longDescription: "HRlytics AI equips organizational leaders with predictive headcount analytics. By integrating 12+ REST APIs with an optimized SQLite and SQLAlchemy backend, the platform processes 5,000+ employee records, delivers automated cost forecasts, and reduced manual HR reporting workflows by 35%.",
      tech: ["React", "FastAPI", "SQLite", "SQLAlchemy", "REST APIs"],
      metrics: [
        { label: "Dataset", value: "5,000+ Records" },
        { label: "Efficiency", value: "+35% Improvement" },
        { label: "APIs", value: "12+ REST Endpoints" }
      ],
      highlights: [
        "12+ REST APIs built with FastAPI for querying complex workforce dimensions.",
        "SQLAlchemy ORM data modeling handling 5,000+ employee data points.",
        "Improved operational reporting efficiency by 35% through automated dashboards."
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
      description: "Interactive machine learning application utilizing Python, Scikit-learn, and Streamlit. Boosted prediction accuracy by 18% through iterative feature engineering, outlier filtering, and model validation.",
      longDescription: "Developed during the IBM Edunet Foundation AI/ML internship, this project applies supervised machine learning regression to structured workforce datasets. Through systematic feature engineering, variable scaling, and algorithm benchmarking, model prediction accuracy was improved by 18% over the baseline.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
      metrics: [
        { label: "Accuracy Gain", value: "+18% Over Baseline" },
        { label: "Framework", value: "Scikit-learn" },
        { label: "UI", value: "Streamlit App" }
      ],
      highlights: [
        "Trained and evaluated multiple regression algorithms (Random Forest, Gradient Boosting, Ridge).",
        "Constructed automated data cleaning and feature engineering pipelines in Pandas.",
        "Deployed an interactive Streamlit UI for instant salary prediction and model telemetry."
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
      description: "Algorithm simulation tool visualizing BFS, Dijkstra, and A* pathfinding algorithms across 50+ node topological graphs with SQLite persistent configuration states.",
      longDescription: "An interactive computer science visualization tool built with Python and Streamlit. It visually demonstrates the operational mechanics, step counters, and frontier exploration of Breadth-First Search (BFS), Dijkstra's algorithm, and A* heuristic search across dynamic grids exceeding 50+ nodes.",
      tech: ["Python", "Streamlit", "SQLite", "Algorithms"],
      metrics: [
        { label: "Algorithms", value: "BFS, Dijkstra, A*" },
        { label: "Graph Size", value: "50+ Nodes" },
        { label: "State Store", value: "SQLite" }
      ],
      highlights: [
        "Interactive step-by-step pathfinding visualization on 50+ node grids.",
        "Side-by-side comparison of uninformed vs heuristic search performance.",
        "Persistent graph states and barrier configurations using SQLite."
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
