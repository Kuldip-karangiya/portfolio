export type Accent = "indigo" | "green" | "amber" | "sky" | "rose";

export type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  accent: Accent;
  technologies: string[];
  metrics: string[];
  contribution: string[];
  problem: string;
  architecture: string;
  workflow: string;
  decisions: string[];
  outcome: string;
  evidence: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  technologies: string[];
  impact: string[];
};

export type FocusArea = { index: string; title: string; heading: string; description: string; items: string[] };

export const person = {
  name: "Kuldip Karangiya",
  firstName: "Kuldip",
  title: "AI/ML Developer",
  shortTitle: "AI/ML & Backend",
  location: "Ahmedabad, India",
  tagline: "Systems that make intelligence useful.",
  description: "Kuldip Karangiya is an AI/ML and backend developer in Ahmedabad, India, building production ML systems, LLM workflows, and dependable FastAPI services.",
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kuldip-karangiya.vercel.app";

export const contact = {
  email: "kuldipkarangiya11233@gmail.com",
  github: "https://github.com/Kuldip-karangiya",
  linkedin: "https://linkedin.com/in/kuldip07",
  resume: "/documents/Kuldip-Karangiya-Resume.pdf",
};

export const hero = {
  eyebrow: "AI/ML & BACKEND DEVELOPER",
  lines: ["Systems that make", "intelligence", "useful."],
  intro: "I’m an AI/ML and backend developer building production ML systems, LLM workflows, and the FastAPI services behind them.",
  intro2: "From the model to the API. From idea to production.",
  caption: "Real workflows. Reliable outcomes.",
  label: "DATA → INTELLIGENCE → OUTCOME",
  foot: "Based in Ahmedabad, India · Building for everywhere",
  floatingTools: ["Python", "FastAPI", "LangChain", "LangGraph", "PostgreSQL", "Redis", "Docker", "LLMs (GPT-4)", "spaCy", "Google Cloud Run", "Pytest", "Azure"],
};

export const ticker = ["AI / ML ENGINEERING", "LLM & RAG SYSTEMS", "FASTAPI BACKENDS", "COMPUTER VISION", "CLOUD DELIVERY"];

export const focusAreas: FocusArea[] = [
  { index: "01", title: "AI & MACHINE LEARNING", heading: "Models that earn their place.", description: "Classification, recommendation, and forecasting models, plus LLM workflows with RAG and multi-agent systems.", items: ["Machine Learning", "Classification", "Recommendation", "Forecasting", "LLMs (GPT-4)", "RAG Pipelines", "Multi-Agent Systems", "Prompt Engineering"] },
  { index: "02", title: "NLP & VISION", heading: "Language and visual understanding.", description: "LangChain and LangGraph pipelines, spaCy and NLTK processing, YOLO and ResNet50 for vision.", items: ["LangChain", "LangGraph", "spaCy", "NLTK", "YOLO", "ResNet50"] },
  { index: "03", title: "BACKEND ENGINEERING", heading: "Services that do the work.", description: "FastAPI services with SQLAlchemy and Pydantic, REST and WebSocket APIs, asynchronous by default.", items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "REST APIs", "WebSockets", "Async Programming"] },
  { index: "04", title: "DATA & CLOUD", heading: "A foundation that holds under load.", description: "PostgreSQL, Redis, and Alembic migrations, shipped to Google Cloud and Azure with Docker and GitHub Actions.", items: ["PostgreSQL", "Redis", "Alembic", "Google Cloud Run", "Google Cloud Storage", "Azure", "Docker", "GitHub Actions"] },
  { index: "05", title: "TESTING & TOOLING", heading: "Quality you can point at.", description: "Pytest at unit, integration, and end-to-end level, Swagger docs, Playwright, pyecharts, and Streamlit.", items: ["Pytest", "Mocking", "Swagger / OpenAPI", "Playwright", "pyecharts", "Streamlit"] },
];

export const experiences: Experience[] = [
  {
    role: "Data Scientist", company: "Bitontree Solutions", location: "Ahmedabad", period: "Jul 2025 — Present",
    summary: "Leading backend delivery for HIPAA-compliant, AI-driven healthcare workflows across ingestion, analysis, and report generation.",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Google Cloud", "Docker", "GitHub Actions"],
    impact: ["15,000+ patients supported", "10,000+ records / month", "99.9% uptime", "sub-200 ms latency"],
  },
  {
    role: "AI/ML Developer", company: "AUM Imagineering Pvt. Ltd.", location: "Ahmedabad", period: "Dec 2023 — Jul 2025",
    summary: "Deployed production ML models and NLP systems, while building a LangChain-powered farm advisory experience and real-time API integrations.",
    technologies: ["Azure", "LangChain", "spaCy", "REST APIs", "Machine Learning"],
    impact: ["3 ML models deployed", "50,000+ queries / day", "60% less inference time", "40% more weekly active users"],
  },
];

export const education = { degree: "B.Tech in Agricultural Information Technology", school: "Anand Agricultural University", period: "2020 — 2024", note: "Building the foundation, then applying it to real agricultural and healthcare problems." };

export const journey = [
  { period: "JUL 2025 — PRESENT", current: true, title: "Data Scientist", org: "Bitontree Solutions", kind: "work" as const, paragraphs: ["Leading backend delivery for a HIPAA-compliant healthcare platform: ingestion, asynchronous analysis, and report generation supporting 15,000+ patients.", "Owning the path from architecture to CI/CD, with sub-200 ms API latency and 99.9% uptime."] },
  { period: "DEC 2023 — JUL 2025", current: false, title: "AI/ML Developer", org: "AUM Imagineering Pvt. Ltd.", kind: "work" as const, paragraphs: ["Deployed three production ML models on Azure and optimised spaCy pipelines processing 50,000+ queries a day.", "Built the LangChain-powered farm advisory chatbot and mentored two interns on model evaluation."] },
  { period: "2020 — 2024", current: false, title: education.degree, org: education.school, kind: "education" as const, paragraphs: [education.note] },
];

export const about = {
  eyebrow: "THE PERSON BEHIND THE SYSTEMS",
  headline: "A builder’s mind.",
  headlineSerif: "An engineer’s discipline.",
  lede: "I connect the data, the models, and the services that make an AI product actually work.",
  paragraphs: [
    "I’m Kuldip. At Bitontree Solutions I work as a Data Scientist on AI-driven healthcare workflows: HIPAA-compliant pipelines, asynchronous processing, and the FastAPI services that keep them dependable under load.",
    "Before that I deployed production ML models and NLP systems at AUM Imagineering, including a LangChain chatbot for farmers. I build RAG pipelines, multi-agent workflows, and computer-vision systems, and I ship them with PostgreSQL, Redis, Docker, and GitHub Actions on Google Cloud and Azure.",
  ],
  principles: [
    { index: "01", title: "Start with the workflow", detail: "Understand the decision before the model." },
    { index: "02", title: "Build for reliability", detail: "Async pipelines, tests, and CI/CD by default." },
    { index: "03", title: "Measure what improves", detail: "Latency, accuracy, adoption, time saved." },
  ],
  beyond: "University-level sprinter: 4×100 m relay gold, 100 m and 200 m silver (2022–23).",
};

export const projects: Project[] = [
  {
    slug: "n1-healthcare", index: "01", category: "HEALTHCARE PLATFORM", title: "N1 Healthcare", accent: "indigo",
    tagline: "Secure records in. Clear reports out.",
    description: "An event-driven healthcare platform for secure ingestion, asynchronous analysis, personalised visualisations, and configurable clinical reports.",
    technologies: ["FastAPI", "Redis Streams", "PostgreSQL", "Google Cloud Storage", "pyecharts", "Playwright"],
    metrics: ["15,000+ patients supported", "10,000+ medical records / month", "99.9% uptime", "sub-200 ms API latency"],
    contribution: ["Architected an asynchronous FastAPI orchestration layer for AI-driven healthcare workflows.", "Built Redis Streams pipelines for concurrent record ingestion, preprocessing, and report generation.", "Designed biomarker canonicalisation using SHA-256 hashing and PostgreSQL advisory locks.", "Created personalised visualisations and configurable Markdown-to-PDF reports."],
    problem: "Clinical teams needed to ingest large volumes of medical records, keep biomarker data consistent across longitudinal patient histories, and deliver personalised reports without slowing the API.",
    architecture: "A FastAPI orchestration layer receives uploads and hands work to Redis Streams consumers for ingestion, preprocessing, and report generation. Biomarkers are canonicalised with SHA-256 hashing and guarded with PostgreSQL advisory locks. Files live in Google Cloud Storage behind signed URLs. pyecharts and Playwright render personalised charts as SVG, PNG, or PDF with caching, and Markdown-to-PDF builds configurable, multilingual reports.",
    workflow: "A record arrives through the API, is stored securely, and enters a stream. Workers preprocess it, canonicalise biomarkers, and update the patient’s longitudinal profile. The visualisation engine renders charts, the report generator assembles the document, and the API serves it in under 200 ms.",
    decisions: ["Event-driven, asynchronous design so heavy processing never blocks request latency.", "Hashing plus advisory locks make deduplication deterministic under concurrent workers.", "Cached chart rendering so repeated report views do not re-render.", "Docker and GitHub Actions CI/CD for repeatable releases across environments."],
    outcome: "15,000+ patients supported, 10,000+ records processed a month, 99.9% uptime, and sub-200 ms API latency.",
    evidence: "Figures are from the résumé and reflect the production platform. Patient data and client specifics are not shown.",
  },
  {
    slug: "farm-advisory", index: "02", category: "AGRICULTURE · NLP & LLM", title: "Intelligent Farm Advisory", accent: "green",
    tagline: "Farmers ask. Answers arrive in minutes.",
    description: "An NLP and LLM chatbot that gives farmers timely guidance through natural-language conversation and real-time weather and subsidy feeds.",
    technologies: ["NLP", "LLMs", "LangChain", "spaCy", "REST APIs"],
    metrics: ["5,000+ farmer queries / month", "85% intent-recognition accuracy", "70% fewer manual support tickets", "Under 5-minute average wait time"],
    contribution: ["Built and deployed an NLP/LLM chatbot for farmer queries.", "Integrated real-time weather and subsidy feeds through REST APIs.", "Developed a LangChain-powered experience for concurrent farmer conversations.", "Improved advisory delivery from two hours to under five minutes on average."],
    problem: "Farmers waited hours for advisory answers that depended on weather, subsidy schemes, and crop context, and support staff were buried in repetitive tickets.",
    architecture: "A LangChain-powered chatbot classifies intent, retrieves live weather and subsidy data through REST integrations, and composes answers for many concurrent farmer conversations. spaCy pipelines handle preprocessing, tuned from 800 ms down to 250 ms per query.",
    workflow: "A farmer sends a natural-language question. Intent classification routes it, real-time feeds enrich the context, the LLM drafts the guidance, and the reply returns in under five minutes on average.",
    decisions: ["Intent recognition runs first, so off-topic or ambiguous questions are handled before any LLM call.", "Live feeds instead of static knowledge, so advice reflects today’s weather and current schemes.", "Preprocessing optimised for throughput to keep 50,000+ daily queries affordable."],
    outcome: "5,000+ queries a month at 85% intent accuracy, 70% fewer manual tickets, average wait time from two hours to under five minutes, and 40% more weekly active users.",
    evidence: "Figures are from the résumé. Advisory content is informational and not a substitute for local agronomic guidance.",
  },
  {
    slug: "tiles-recommendation", index: "03", category: "COMPUTER VISION", title: "Tiles Recommendation System", accent: "amber",
    tagline: "Find the matching tile by looking.",
    description: "A visual recommendation experience that pairs a ResNet50 + k-NN pipeline with a Streamlit interface for comparison and discovery.",
    technologies: ["ResNet50", "k-NN", "Computer Vision", "Streamlit"],
    metrics: ["20,000+ catalog images", "Precision improved 72% → 89%", "35% click-through lift", "350 ms query response time"],
    contribution: ["Implemented the ResNet50 + k-NN recommendation pipeline.", "Processed a catalogue of more than 20,000 images.", "Reduced query response time from 1.2 seconds to 350 milliseconds.", "Built a Streamlit interface for visual comparison of recommended tiles."],
    problem: "Customers browsing a catalogue of more than 20,000 tile images could not find visually similar products quickly, and text search missed what they were actually looking at.",
    architecture: "ResNet50 embeddings are computed once per catalogue image and stored in a k-NN index. A Streamlit interface lets a user upload or pick a tile, fetches its nearest neighbours, and shows them side by side.",
    workflow: "An image is embedded, nearest neighbours are pulled from the index, and results are shown for visual comparison in about 350 ms.",
    decisions: ["Pretrained ResNet50 features rather than training a model from scratch.", "Precomputed embeddings so query time is an index lookup, not inference.", "Streamlit for a fast, honest interface to validate results with real users."],
    outcome: "Recommendation precision improved from 72% to 89%, click-through rose 35%, and response time fell from 1.2 seconds to 350 milliseconds.",
    evidence: "Figures are from the résumé and were measured on the production catalogue.",
  },
  {
    slug: "logiai-om", index: "04", category: "LOGISTICS AUTOMATION", title: "LogiAI OM System", accent: "sky",
    tagline: "Operations workflows with AI in the loop.",
    description: "A current logistics-automation project: AI-assisted operations workflows and dependable backend services, described here in client-safe terms.",
    technologies: ["Python", "FastAPI", "Intelligent Automation", "AI-assisted Workflows", "Backend APIs"],
    metrics: ["RFQ-to-quotation workflows", "AI-assisted vendor communication"],
    contribution: ["Backend and workflow development for operational processes such as RFQs, vendor communication, pricing, and quotation follow-ups.", "AI-assisted email and follow-up workflows built on dependable API services.", "The public overview intentionally excludes confidential client logic, credentials, and internal communication."],
    problem: "Logistics operations teams manage RFQs, vendor communication, pricing, and quotations across email threads and manual follow-ups, which is slow and easy to drop.",
    architecture: "Python and FastAPI services expose backend APIs for operational workflows, with AI-assisted steps for drafting and follow-up communication. Details are limited to a client-safe scope.",
    workflow: "A request enters the system, is structured, routed to the right workflow, and progressed with AI-assisted drafts that a person reviews before anything is sent.",
    decisions: ["Keep AI assistive: people approve outgoing communication.", "Dependable APIs first, automation second.", "Confidential logic and credentials are excluded from this public overview."],
    outcome: "Current professional project. Metrics will be published only with approved, client-safe scope.",
    evidence: "This case study describes my technical contribution only and no confidential business logic.",
  },
  {
    slug: "linkedin-parser", index: "05", category: "TALENT INTELLIGENCE", title: "LinkedIn Parser", accent: "rose",
    tagline: "Shortlists in minutes, not days.",
    description: "A profile-parsing and ranking system created to automate candidate shortlisting and make hiring workflows more efficient.",
    technologies: ["Data Processing", "Machine Learning", "Ranking Model"],
    metrics: ["50,000+ profiles parsed", "60% less manual screening", "Match rate 40% → 68%", "25 days faster hiring cycles"],
    contribution: ["Parsed over 50,000 LinkedIn profiles to automate candidate shortlisting.", "Trained and deployed a ranking model to improve recruiter match rates.", "Reduced manual screening time and accelerated average hiring cycles."],
    problem: "Recruiters screened thousands of profiles by hand, with low match rates and hiring cycles that dragged on for weeks.",
    architecture: "A parsing pipeline normalises 50,000+ LinkedIn profiles into structured records. A trained ranking model scores candidates against role requirements and produces an ordered shortlist.",
    workflow: "Profiles are parsed and cleaned, features are extracted, the ranking model orders candidates, and recruiters review the shortlist instead of the whole pool.",
    decisions: ["Structured parsing before modelling so features are reliable.", "A ranking objective rather than binary classification, so recruiters get an ordered list.", "Success measured on recruiter match rate, not only model accuracy."],
    outcome: "50,000+ profiles parsed, 60% less manual screening time, match rate up from 40% to 68%, and hiring cycles 25 days faster on average.",
    evidence: "Figures are from the résumé. Profile data was used for shortlisting only.",
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
