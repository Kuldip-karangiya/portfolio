/** Skills that have an official logo. Plain data so server components can use it; icons live in components/SkillIcon.tsx. */
export const brandSkills = ["LLMs (GPT-4)", "LangChain", "LangGraph", "spaCy", "YOLO", "Python", "FastAPI", "SQLAlchemy", "Pydantic", "PostgreSQL", "Redis", "Google Cloud Run", "Google Cloud Storage", "Azure", "Docker", "GitHub Actions", "Pytest", "Swagger / OpenAPI", "Playwright", "pyecharts", "Streamlit"];
export const isBrand = (label: string) => brandSkills.includes(label);
