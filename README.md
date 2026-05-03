# Hoja de vida con Next.js

Portafolio personal tipo hoja de vida construido con Next.js, React, TypeScript, TailwindCSS e íconos de `lucide-react`.

## Estructura principal

- `src/app`: rutas, layout global y página principal de Next.js.
- `src/components/atoms`: componentes base como botones y barras de progreso.
- `src/components/molecules`: componentes compuestos como cards, encabezados y diálogos.
- `src/components/organisms`: secciones grandes como menús, perfil y contenido principal.
- `src/data/resume.ts`: datos editables del portafolio. Cambia aquí nombres, textos, porcentajes, redes, educación y proyectos.
- `public/images`: imágenes del perfil, portada y proyectos.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Funcionalidades incluidas

- Menú lateral izquierdo fijo con datos personales, idiomas, lenguajes y habilidades.
- Contenido central con scroll vertical: perfil, conocimientos, educación, portafolio y footer.
- Menú derecho fijo con enlaces a redes sociales.
- Diálogo creativo en el perfil.
- Cards de portafolio con scroll horizontal y diálogo de detalle.
- Componentes reutilizables para secciones, cards, barras de progreso, diálogos y botones.
