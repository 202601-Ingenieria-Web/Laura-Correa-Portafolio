"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/resume";
import { Button } from "../atoms/Button";
import { Modal } from "./Modal";

export function ProjectCard({ title, summary, details, image, technologies, links }: Project) {
  // Each card owns its own detail dialog so projects can be reused independently.
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="w-80 shrink-0 overflow-hidden rounded-md bg-white shadow-sm">
        <div className="relative h-48 bg-neutral-100">
          <Image src={image} alt={title} fill className="object-cover" sizes="320px" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
          <p className="mt-3 min-h-16 text-sm leading-6 text-neutral-500">{summary}</p>
          <Button className="mt-4 min-h-0 bg-transparent px-0 py-0 text-purple-800 shadow-none hover:bg-transparent hover:text-violet-700" onClick={() => setOpen(true)}>
            Saber más
          </Button>
        </div>
      </article>

      <Modal isOpen={open} title={title} onClose={() => setOpen(false)}>
        <div className="space-y-5">
          <p className="leading-7 text-neutral-600">{details}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold text-neutral-700">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-900">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
