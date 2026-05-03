"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Gamepad2,
  RotateCcw,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { useState } from "react";
import { resume } from "@/data/resume";
import { Button } from "../atoms/Button";
import { Modal } from "../molecules/Modal";

const boardSize = 5;

const behindCode = [
  {
    question: "Quien soy?",
    lockedText: "Encuentra Frontend para desbloquear esta historia.",
    answer:
      "Soy una desarrolladora en formacion constante: combino ingenieria web, pensamiento analitico y curiosidad por la inteligencia artificial para construir soluciones que resuelvan problemas reales.",
  },
  {
    question: "Como pienso?",
    lockedText: "Encuentra IA para revelar mi forma de resolver problemas.",
    answer:
      "Me gusta entender primero el problema, separar lo complejo en piezas pequenas y luego convertir esas ideas en interfaces, servicios y automatizaciones que sean faciles de usar y mantener.",
  },
  {
    question: "Que me mueve?",
    lockedText: "Encuentra Mision para completar el perfil.",
    answer:
      "Me motivan los proyectos donde la tecnologia mejora un proceso, ahorra tiempo o acerca informacion importante a las personas. Por eso me interesan los asistentes digitales, NLP, RAG y los productos web bien construidos.",
  },
];

const gameItems = [
  {
    id: "frontend",
    label: "Frontend",
    position: { x: 4, y: 0 },
    icon: Code2,
    storyIndex: 0,
  },
  {
    id: "ia",
    label: "IA",
    position: { x: 2, y: 2 },
    icon: BrainCircuit,
    storyIndex: 1,
  },
  {
    id: "mision",
    label: "Mision",
    position: { x: 4, y: 4 },
    icon: Target,
    storyIndex: 2,
  },
];

const startPosition = { x: 0, y: 0 };

export function HeroSection() {
  const [open, setOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [player, setPlayer] = useState(startPosition);
  const [collected, setCollected] = useState<string[]>([]);
  const { person } = resume;
  const selectedStory = collected.length > 0 ? behindCode[activeStory] : null;
  const xp = Math.min(collected.length * 335, 1000);
  const xpPercent = Math.min(collected.length * 34, 100);
  const unlockedStoryIndexes = collected.map((collectedId) => gameItems.find((gameItem) => gameItem.id === collectedId)?.storyIndex);

  function movePlayer(xChange: number, yChange: number) {
    const nextPosition = {
      x: Math.min(Math.max(player.x + xChange, 0), boardSize - 1),
      y: Math.min(Math.max(player.y + yChange, 0), boardSize - 1),
    };
    const unlockedItem = gameItems.find(
      (item) => item.position.x === nextPosition.x && item.position.y === nextPosition.y,
    );

    setPlayer(nextPosition);

    if (!unlockedItem) {
      return;
    }

    setCollected((current) => {
      if (current.includes(unlockedItem.id)) {
        return current;
      }

      setActiveStory(unlockedItem.storyIndex);
      return [...current, unlockedItem.id];
    });
  }

  function resetGame() {
    setPlayer(startPosition);
    setCollected([]);
    setActiveStory(0);
  }

  return (
    <section className="grid min-h-[420px] items-center gap-8 bg-white px-7 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-14">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase text-purple-800">Perfil profesional</p>
        <h2 className="text-4xl font-black leading-tight text-neutral-900 md:text-5xl">
          Soy {person.name}
          <span className="block bg-gradient-to-r from-purple-950 to-violet-700 bg-clip-text text-transparent">{person.highlight}</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">{person.shortProfile}</p>
        <Button className="mt-8" onClick={() => setOpen(true)}>
          Desbloquear perfil
        </Button>
      </div>

      <div className="relative mx-auto h-80 w-full max-w-sm self-end overflow-hidden rounded-lg bg-purple-50 shadow-sm">
        <Image src={person.heroImage} alt={person.name} fill className="object-cover object-[62%_50%]" sizes="360px" priority />
      </div>

      <Modal isOpen={open} title="Perfil desbloqueado" onClose={() => setOpen(false)}>
        <div className="space-y-5 text-neutral-600">
          <div className="rounded-lg border border-purple-100 bg-gradient-to-br from-white via-purple-50 to-white p-5 shadow-sm">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-sm bg-purple-900 px-2 py-1 text-xs font-black uppercase text-white">
                    <Gamepad2 size={14} />
                    Mini quest
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-sm border border-purple-200 bg-white px-2 py-1 text-xs font-bold uppercase text-purple-900">
                    <BadgeCheck size={14} />
                    {collected.length} / {gameItems.length} habilidades
                  </span>
                </div>
                <p className="text-2xl font-black leading-tight text-neutral-900">{person.name}</p>
                <p className="mt-1 text-sm font-semibold text-neutral-600">Mueve el personaje y desbloquea el perfil profesional.</p>
              </div>

              <button
                type="button"
                onClick={resetGame}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-purple-200 bg-white px-3 text-sm font-bold text-purple-900 transition hover:border-purple-400 hover:bg-purple-50"
              >
                <RotateCcw size={16} />
                Reiniciar
              </button>
            </div>

            <div className="mb-5">
              <div className="mb-1 flex items-center justify-between text-xs font-black uppercase text-purple-900">
                <span>XP desbloqueada</span>
                <span>{xp} / 1000</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-900 via-violet-600 to-fuchsia-500" style={{ width: `${xpPercent}%` }} />
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
              <div className="grid grid-cols-5 gap-2 rounded-lg border border-purple-100 bg-white p-3 shadow-sm">
                {Array.from({ length: boardSize * boardSize }).map((_, index) => {
                  const x = index % boardSize;
                  const y = Math.floor(index / boardSize);
                  const isPlayer = player.x === x && player.y === y;
                  const item = gameItems.find((gameItem) => gameItem.position.x === x && gameItem.position.y === y);
                  const isCollected = item ? collected.includes(item.id) : false;
                  const ItemIcon = item?.icon;

                  return (
                    <div
                      key={`${x}-${y}`}
                      className={`grid aspect-square min-h-12 place-items-center rounded-md border text-xs font-black transition ${
                        isPlayer
                          ? "border-purple-900 bg-purple-900 text-white shadow-sm"
                          : "border-purple-100 bg-purple-50 text-purple-900"
                      }`}
                    >
                      {isPlayer ? (
                        <Gamepad2 size={22} />
                      ) : ItemIcon && !isCollected ? (
                        <ItemIcon size={21} />
                      ) : isCollected ? (
                        <Star size={18} className="fill-purple-200 text-purple-700" />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div className="rounded-md border border-purple-100 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase text-purple-900">
                    <Sparkles size={15} />
                    {selectedStory ? "Acabas de desbloquear" : "Objetivo"}
                  </div>
                  {selectedStory ? (
                    <>
                      <p className="text-lg font-black leading-tight text-neutral-900">{selectedStory.question}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-neutral-700">{selectedStory.answer}</p>
                    </>
                  ) : (
                    <p className="text-sm font-semibold leading-6 text-neutral-700">
                      Recoge Frontend, IA y Mision para revelar el perfil detras del codigo.
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span />
                  <button
                    type="button"
                    onClick={() => movePlayer(0, -1)}
                    className="grid min-h-11 place-items-center rounded-md bg-purple-900 text-white transition hover:bg-purple-950"
                    aria-label="Mover arriba"
                  >
                    <ArrowUp size={18} />
                  </button>
                  <span />
                  <button
                    type="button"
                    onClick={() => movePlayer(-1, 0)}
                    className="grid min-h-11 place-items-center rounded-md bg-purple-900 text-white transition hover:bg-purple-950"
                    aria-label="Mover izquierda"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => movePlayer(0, 1)}
                    className="grid min-h-11 place-items-center rounded-md bg-purple-900 text-white transition hover:bg-purple-950"
                    aria-label="Mover abajo"
                  >
                    <ArrowDown size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => movePlayer(1, 0)}
                    className="grid min-h-11 place-items-center rounded-md bg-purple-900 text-white transition hover:bg-purple-950"
                    aria-label="Mover derecha"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {gameItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-bold ${
                  collected.includes(item.id)
                    ? "border-purple-200 bg-purple-50 text-purple-900"
                    : "border-neutral-200 bg-white text-neutral-400"
                }`}
              >
                <Star size={16} className="shrink-0 fill-purple-200 text-purple-800" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-neutral-900">
              <Sparkles size={19} className="text-purple-800" />
              <p className="text-sm font-black uppercase">Misiones desbloqueadas</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {behindCode.map((item, index) => {
                const isUnlocked = unlockedStoryIndexes.includes(index);

                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => setActiveStory(index)}
                    disabled={!isUnlocked}
                    className={`rounded-md border px-3 py-3 text-left transition ${
                      activeStory === index
                        ? "border-purple-800 bg-purple-900 text-white shadow-sm"
                        : isUnlocked
                          ? "border-purple-100 bg-purple-50 text-purple-900 hover:border-purple-300"
                          : "cursor-not-allowed border-neutral-200 bg-neutral-50 text-neutral-400"
                    }`}
                  >
                    <span className="block text-sm font-black">{item.question}</span>
                    <span className={`mt-2 block text-xs font-semibold leading-5 ${activeStory === index ? "text-purple-100" : ""}`}>
                      {isUnlocked ? item.answer : item.lockedText}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </Modal>
    </section>
  );
}
