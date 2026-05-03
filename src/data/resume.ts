import {
  Bot,
  BookOpen,
  BrainCircuit,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  Rocket,
  Server,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Centralized content: update this file to personalize the whole resume without touching layout components.
export type SkillLevel = {
  name: string;
  level: number;
};

export type Knowledge = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Education = {
  institution: string;
  period: string;
  role: string;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  summary: string;
  details: string;
  image: string;
  technologies: string[];
  links: { label: string; href: string }[];
};

export const resume = {
  person: {
    name: "Laura Correa Ochoa",
    title: "Estudiante de Ingeniería de Sistemas y desarrolladora de software",
    highlight: "Full Stack Developer",
    profileImage: "/images/FotoCV.jpg",
    heroImage: "/images/Foto.jpg",
    shortProfile:
      "Desarrolladora full stack con experiencia en frontend, backend, microservicios, asistentes digitales, NLP y soluciones basadas en LLMs.",
    about:
      "Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia y desarrolladora de software. He trabajado en desarrollo frontend y backend, procesamiento de lenguaje natural, asistentes digitales, arquitecturas RAG y soluciones de inteligencia artificial aplicadas a automatización y bots conversacionales.",
  },
  contact: [
    { label: "Ciudad", value: "Medellín, Colombia", icon: MapPin },
    { label: "Teléfono", value: "305 322 6428", icon: Phone },
    { label: "Correo", value: "laura.correa10@udea.edu.co", icon: Mail },
  ],
  languages: [
    { name: "Inglés B2", level: 80 },
  ],
  programming: [
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 82 },
    { name: "Java", level: 78 },
  ],
  extras: [
    "Angular y React",
    "NestJS y Spring Boot",
    "MongoDB, SQL Server y PostgreSQL",
    "Azure OpenAI, GPT y Bot Framework",
    "AWS Bedrock, Strands Agents SDK y MCP",
    "Langfuse y monitoreo de agentes",
  ],
  knowledge: [
    {
      title: "Desarrollo full stack",
      description: "Frontend con Angular y React; backend con NestJS, Java y Spring Boot.",
      icon: MonitorSmartphone,
    },
    {
      title: "Agentes de IA",
      description: "Creación de agentes con AWS Bedrock, Strands Agents SDK, MCP y AgentCore.",
      icon: Bot,
    },
    {
      title: "NLP y LLMs",
      description: "Procesamiento de lenguaje natural, RAG, análisis semántico y clasificación.",
      icon: BrainCircuit,
    },
    {
      title: "Microservicios",
      description: "Servicios escalables, integraciones externas, autenticación y facturación.",
      icon: Server,
    },
    {
      title: "Datos y búsqueda",
      description: "Optimización de consultas, manejo de grandes volúmenes y bases SQL/NoSQL.",
      icon: Database,
    },
    {
      title: "Arquitectura",
      description: "Diseño de soluciones costo-eficientes para asistentes digitales y plataformas IA.",
      icon: Network,
    },
  ],
  education: [
    {
      institution: "Universidad de Antioquia",
      period: "2021 - Actualidad",
      role: "Estudiante",
      title: "Ingeniería de Sistemas",
      description:
        "Formación en desarrollo de software, arquitectura, bases de datos, ingeniería web e inteligencia artificial aplicada.",
    },
    {
      institution: "SENA",
      period: "2020 - 2022",
      role: "Técnica",
      title: "Programación de Software",
      description:
        "Formación técnica orientada a desarrollo de aplicaciones, fundamentos de programación y construcción de soluciones web.",
    },
    {
      institution: "Pontificia Universidad Javeriana",
      period: "120 horas",
      role: "Diplomado",
      title: "Codificación y programación",
      description:
        "Profundización en lógica de programación, fundamentos de codificación y construcción de software.",
    },
    {
      institution: "Universidad de Caldas",
      period: "800 horas",
      role: "Diplomado",
      title: "Programación con énfasis en aplicaciones web",
      description:
        "Formación enfocada en desarrollo web, construcción de aplicaciones y buenas prácticas de programación.",
    },
  ],
  projects: [
    {
      title: "Web Crawler UdeA",
      summary: "Crawler para portales de noticias usado en un proyecto de impacto investigativo.",
      details:
        "Servicio encargado de rastrear y recolectar noticias desde portales web para apoyar la medición del impacto de la investigación de la Universidad de Antioquia. El proyecto sirve como base para alimentar procesos posteriores de clasificación y análisis.",
      image: "/images/webcrawler.png",
      technologies: ["Python", "Web scraping", "News crawling", "Data pipelines"],
      links: [{ label: "Github", href: "https://github.com/LauraCorreaO/Web-Crawler-UdeA" }],
    },
    {
      title: "News Classification Service",
      summary: "Servicio para clasificar noticias y analizar su impacto semántico y emocional.",
      details:
        "Microservicio orientado a clasificar noticias relacionadas con la Universidad de Antioquia, realizar semantic analysis, sentiment analysis y calcular indicadores de impacto para apoyar la lectura de resultados investigativos en medios digitales.",
      image: "/images/sentimentAnalisys.png",
      technologies: ["Python", "NLP", "Sentiment analysis", "Semantic analysis"],
      links: [{ label: "Github", href: "https://github.com/LauraCorreaO/News_classification_service" }],
    },
    {
      title: "nati.ai",
      summary: "Plataforma de agentes conversacionales impulsados por LLMs e inteligencia artificial.",
      details:
        "Plataforma de asistentes conversacionales donde he trabajado tanto en frontend con Angular como en backend con NestJS. Mi participación incluye desarrollo de interfaces, microservicios, integraciones, autenticación e investigación de capacidades basadas en LLMs.",
      image: "/images/nati.png",
      technologies: ["Angular", "NestJS", "LLMs", "Microservicios"],
      links: [{ label: "Sitio web", href: "https://nati.ai/" }],
    },
    {
      title: "Agentes IA con AWS",
      summary: "Investigación e implementación de agentes con tecnologías AWS y observabilidad.",
      details:
        "Trabajo reciente enfocado en creación de agentes de IA con AWS Bedrock y migración hacia Strands Agents SDK. También incluye exploración de MCP, AgentCore y monitoreo de agentes con Langfuse para mejorar trazabilidad, evaluación y operación.",
      image: "/images/iaAgent.jpg",
      technologies: ["AWS Bedrock", "Strands Agents SDK", "MCP", "Langfuse"],
      links: [{ label: "Referencia", href: "https://aws.amazon.com/bedrock/" }],
    },
  ],
  socials: [
    { label: "Github", href: "https://github.com/LauraCorreaO", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/laura-correa-08581b117/", icon: Linkedin },
    { label: "nati.ai", href: "https://nati.ai/", icon: Globe2 },
  ],
  signature: {
    iconSet: [Sparkles, Rocket, TerminalSquare, BookOpen, GraduationCap],
    footer: "2026 - Hoja de vida desarrollada con Next.js, TypeScript y TailwindCSS",
  },
};
