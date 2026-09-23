"use client";

import type { IconType } from "react-icons";
import { SiApacheecharts, SiDocker, SiFastapi, SiGithubactions, SiGooglecloud, SiGooglecloudstorage, SiLangchain, SiLanggraph, SiPostgresql, SiPydantic, SiPytest, SiPython, SiRedis, SiSpacy, SiSqlalchemy, SiStreamlit, SiSwagger, SiYolo } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { LuBookText, LuBotMessageSquare, LuBrainCircuit, LuDatabaseZap, LuDrama, LuFlaskConical, LuGitCommitHorizontal, LuRadio, LuScanEye, LuServerCog, LuShapes, LuSparkles, LuTerminal, LuTrendingUp, LuZap } from "react-icons/lu";

type Entry = { icon: IconType; color: string; brand: boolean };
const INK = "#4d489a";
const concept = (icon: IconType): Entry => ({ icon, color: INK, brand: false });
const brand = (icon: IconType, color: string): Entry => ({ icon, color, brand: true });

/** Official marks (Simple Icons / Remix / VS Code icons) for every product; neutral Lucide glyphs for concepts that have no logo. */
const skillIcons: Record<string, Entry> = {
  "Machine Learning": concept(LuBrainCircuit), Classification: concept(LuShapes), Recommendation: concept(LuSparkles), Forecasting: concept(LuTrendingUp),
  "LLMs (GPT-4)": brand(RiOpenaiFill, "#000000"), "RAG Pipelines": concept(LuDatabaseZap), "Multi-Agent Systems": concept(LuBotMessageSquare), "Prompt Engineering": concept(LuTerminal),
  LangChain: brand(SiLangchain, "#1C3C3C"), LangGraph: brand(SiLanggraph, "#1C3C3C"), spaCy: brand(SiSpacy, "#09A3D5"), NLTK: concept(LuBookText), YOLO: brand(SiYolo, "#111F68"), ResNet50: concept(LuScanEye),
  Python: brand(SiPython, "#3776AB"), FastAPI: brand(SiFastapi, "#009688"), SQLAlchemy: brand(SiSqlalchemy, "#D71F00"), Pydantic: brand(SiPydantic, "#E92063"), "REST APIs": concept(LuServerCog), WebSockets: concept(LuRadio), "Async Programming": concept(LuZap),
  PostgreSQL: brand(SiPostgresql, "#4169E1"), Redis: brand(SiRedis, "#FF4438"), Alembic: concept(LuGitCommitHorizontal), "Google Cloud Run": brand(SiGooglecloud, "#4285F4"), "Google Cloud Storage": brand(SiGooglecloudstorage, "#4285F4"), Azure: brand(VscAzure, "#0078D4"), Docker: brand(SiDocker, "#2496ED"), "GitHub Actions": brand(SiGithubactions, "#2088FF"),
  Pytest: brand(SiPytest, "#0A9EDC"), Mocking: concept(LuFlaskConical), "Swagger / OpenAPI": brand(SiSwagger, "#5A9E1F"), Playwright: brand(LuDrama, "#2EAD33"), pyecharts: brand(SiApacheecharts, "#AA344D"), Streamlit: brand(SiStreamlit, "#FF4B4B"),
};

export default function SkillIcon({ label, size = 16 }: { label: string; size?: number }) {
  const entry = skillIcons[label];
  const Icon = entry?.icon ?? LuBrainCircuit;
  return <span className="tech-icon" aria-hidden="true" style={{ color: entry?.color ?? INK }}><Icon size={size} /></span>;
}
