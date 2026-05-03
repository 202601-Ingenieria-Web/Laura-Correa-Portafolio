import { resume } from "@/data/resume";
import { HeroSection } from "./HeroSection";
import { EducationCard } from "../molecules/EducationCard";
import { KnowledgeCard } from "../molecules/KnowledgeCard";
import { ProjectCard } from "../molecules/ProjectCard";
import { SectionHeader } from "../molecules/SectionHeader";

export function MainContent() {
  return (
    <main className="min-w-0 flex-1">
      <HeroSection />

      <section className="px-5 py-14 md:px-0">
        <SectionHeader
          title="Mis conocimientos"
          description="Tecnologias y areas en las que he construido experiencia: desarrollo web, inteligencia artificial, datos, arquitectura y soluciones escalables."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resume.knowledge.map((item) => (
            <KnowledgeCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="px-5 py-10 md:px-0">
        <SectionHeader
          title="Educacion"
          description="Formacion academica y tecnica que ha fortalecido mis bases en ingenieria, programacion, desarrollo web y pensamiento logico."
        />
        <div className="mt-10 rounded-md bg-white px-7 shadow-sm md:px-10">
          {resume.education.map((item) => (
            <EducationCard key={`${item.institution}-${item.title}`} {...item} />
          ))}
        </div>
      </section>

      <section className="px-5 py-14 md:px-0">
        <SectionHeader
          title="Portafolio"
          description="Una seleccion de proyectos donde aplico desarrollo full stack, automatizacion, analisis de datos, NLP y agentes de inteligencia artificial."
        />
        <div className="mt-10 flex snap-x gap-7 overflow-x-auto pb-5">
          {resume.projects.map((project) => (
            <div key={project.title} className="snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      <footer className="mb-8 bg-white px-6 py-7 text-center text-sm font-medium text-neutral-600">
        {resume.signature.footer}
      </footer>
    </main>
  );
}
