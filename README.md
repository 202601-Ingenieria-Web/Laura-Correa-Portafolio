# Portafolio Personal - Laura Correa Ochoa

Portafolio personal tipo hoja de vida desarrollado con **Next.js**, **React**, **TypeScript** y **TailwindCSS**. El proyecto presenta mi perfil profesional, conocimientos, formacion academica, experiencia practica y proyectos destacados en una interfaz visual, modular e interactiva.

## Proyecto Desplegado

El sitio se encuentra publicado en Vercel:

https://laura-correa-ochoa.vercel.app/

## Descripcion

Este portafolio fue construido como una hoja de vida web moderna. La pagina esta organizada en secciones que permiten explorar informacion profesional de forma clara:

- Perfil principal con fotografia y presentacion profesional.
- Sidebar con datos de contacto, idiomas, lenguajes y habilidades.
- Seccion de conocimientos con areas tecnicas clave.
- Formacion academica y tecnica.
- Portafolio de proyectos con imagenes, tecnologias y enlaces.
- Experiencia interactiva en el hero para desbloquear informacion personal y profesional.

La idea principal fue no hacer una hoja de vida estatica, sino una experiencia web con componentes reutilizables y un detalle creativo: un mini juego dentro del hero que permite descubrir partes de mi perfil.

## Funcionalidades

- Layout responsive con tres zonas principales: sidebar izquierdo, contenido central y barra social derecha.
- Hero con boton **Desbloquear perfil**, que abre un modal interactivo tipo mini quest.
- Mini juego en el modal: el usuario mueve un personaje en un tablero y desbloquea informacion sobre mi perfil.
- Cards de conocimientos con iconos de `lucide-react`.
- Seccion de educacion organizada por institucion, periodo, titulo y descripcion.
- Portafolio horizontal con proyectos destacados.
- Modal de detalle para cada proyecto.
- Datos centralizados en `src/data/resume.ts` para facilitar la edicion del contenido.
- Imagenes locales para perfil, hero y proyectos.

## Tecnologias

- **Next.js 15**
- **React 18**
- **TypeScript**
- **TailwindCSS 4**
- **Lucide React**
- **Vercel**

## Estructura Del Proyecto

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx

  components/
    atoms/
      Button.tsx
      ProgressBar.tsx

    molecules/
      EducationCard.tsx
      KnowledgeCard.tsx
      Modal.tsx
      ProjectCard.tsx
      SectionHeader.tsx

    organisms/
      HeroSection.tsx
      MainContent.tsx
      Sidebar.tsx
      SocialRail.tsx

  data/
    resume.ts

public/
  images/
```

## Secciones Principales

### Hero Interactivo

La seccion principal presenta mi nombre, rol y perfil profesional. El boton **Desbloquear perfil** abre un modal con una experiencia jugable: el usuario mueve un personaje en un tablero, recoge habilidades y desbloquea textos sobre quien soy, como pienso y que me motiva.

### Mis Conocimientos

Agrupa areas tecnicas como desarrollo full stack, agentes de IA, NLP, microservicios, datos y arquitectura.

### Educacion

Muestra mi formacion academica y tecnica, incluyendo estudios universitarios, formacion tecnica y diplomados relacionados con programacion y desarrollo web.

### Portafolio

Incluye proyectos destacados como:

- **Web Crawler UdeA**
- **News Classification Service**
- **nati.ai**
- **Agentes IA con AWS**

Cada proyecto cuenta con imagen, resumen, descripcion, tecnologias utilizadas y enlace relacionado.

## Como Ejecutar El Proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

Generar build de produccion:

```bash
npm run build
```

Ejecutar build:

```bash
npm run start
```

## Notas De Desarrollo

- `node_modules/` y `.next/` estan excluidos mediante `.gitignore`.
- El proyecto usa componentes reutilizables para mantener la interfaz organizada.
- El contenido esta separado de la estructura visual para que sea mas facil actualizar la hoja de vida sin modificar muchos componentes.

## Autora

**Laura Correa Ochoa**  
Estudiante de Ingenieria de Sistemas y desarrolladora de software.