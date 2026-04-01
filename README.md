# Blog de Estudio - CDF

Proyecto académico desarrollado con **Astro v6**, diseñado como una plataforma de estudio hiperrápida, organizada por materias y unidades.

## 🚀 Tecnologías Principales
*   **Astro v6**: Framework orientado a contenido estático y rápido.
*   **Node.js**: `v25.8.2` (Requiere versión >20).
*   **DaisyUI v4**: `v4.12.24` (Para los componentes UI sobre Tailwind).
*   **Tailwind CSS v3**: `v3.4.19` 
*   **MDX**: Integración para renderizar componentes de Astro dentro de Markdown puro.

## 🛠️ Comandos de Desarrollo
Para correr esto en local en tu compu, seguí estos pasos:

1. **Instalar dependencias:**
   Si es la primera vez que clonás el repo, tiras:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Nota: Usamos `--legacy-peer-deps` temporalmente por un peer check entre `astro@6` y `@astrojs/tailwind` recientes).*

2. **Arrancar el servidor de prueba (modo DEV):**
   ```bash
   npm run dev
   ```
   Abrí `http://localhost:4321/` en tu navegador. Los cambios que hagas en los archivos `.mdx` o `.astro` se actualizarán solos y al instante.

3. **Construir para producción (modo PROM o PUBLICACIÓN):**
   ```bash
   npm run build
   ```
   Genera una carpeta `dist/` con todo el sitio compilado a archivos super ligeros HTML y CSS listos para subir a un hosting como Vercel, Netlify o GitHub Pages.

## ⚠️ Historial y Complicaciones (Dev Log)

Al armar este proyecto nos topamos con algunas cosas que resolvimos así:

*   **Problemas con Versiones Viejas de Node**: El proyecto original trataba de arrancar con versiones antiguas de Node. Tuvimos que hacer un upgrade de Node usando el gestor de paquetes de Windows (`winget install OpenJS.NodeJS`) para saltar a Node `v25` y tener total compatibilidad con Astro v4+.
*   **Módulo MDX**: Queriendo instalar el soporte para incrustar PDFs interactivos dentro de archivos Markdown directos (`.mdx`), tuvimos un desajuste de versiones con dependencias y lo arreglamos instalando una versión compatible (`npm install @astrojs/mdx@3`) antes del gran upgrade.
*   **Alertas de Seguridad en Dependencias**: Al correr `npm audit` nos saltaron de 3 a 5 vulnerabilidades tipo "Moderate/High" en paquetes subyacentes mágicos (como `vite` y `esbuild`). Para matarlas a cero, hicimos el valiente movimiento de tirar **`npx @astrojs/upgrade`**, escalando a **Astro v6** estable.
*   **Páginas Escondidas**: La documentación del proyecto se escondió en el pie de página ("footer") a propósito para que solo los muy curiosos puedan leer cómo está estructurada la página a nivel de código (`/docs`).

## 📁 Estructura Principal
*   `/src/pages/materia/` -> Cada carpeta acá adentro es una materia (ej: `tecnologia-energia`).
*   `/src/pages/materia/nombre/unidad-X.mdx` -> Acá es donde va el puro contenido en texto/markdown. 
*   `/src/layouts/BaseLayout.astro` -> Configuración principal (el navbar, footer, y fuentes).
*   `tailwind.config.mjs` -> Donde editamos todos los colores base (actualmente está con una super facha en negros puros y rojos/bordó).
*   `/public/pdfs/` -> Si sumás un archivo PDF local para ser descargable, va acá siempre.
