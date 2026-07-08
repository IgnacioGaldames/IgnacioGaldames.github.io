# Reglas del Agente IA — ignaciogaldames.com

Este sitio es el portafolio literario de **I.A. Galdames** (Ignacio Andrés Galdames), escritor chileno de ciencia ficción y cyberpunk.  
El agente debe priorizar siempre **SEO**, **GEO (Generative Engine Optimization)** y **UX** en cualquier tarea relacionada con este proyecto.

---

## Stack del Proyecto

- **Generador de sitio:** Jekyll (Minima theme personalizado)
- **URL de producción:** `https://ignaciogaldames.com`
- **Idioma principal:** Español chileno (`es-CL`)
- **CSS:** Vanilla CSS + Bootstrap 5 (dark mode)
- **Plugins Jekyll activos:** `jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-relative-links`
- **Analytics:** Google Analytics (`G-8P2YMJKN76`)
- **Ads:** Google AdSense (`ca-pub-2691096179558388`)

---

## Reglas Obligatorias de SEO

### Title Tags
- Cada página DEBE tener un `<title>` único y descriptivo.
- Formato: `Título de Página | I.A. Galdames` o `Título | Subtítulo`
- Longitud ideal: **50–60 caracteres** (nunca superar 70).
- Usar el frontmatter `seo_title` para override del título SEO sin afectar el H1.

### Meta Descriptions
- Cada página DEBE tener una meta description única.
- Longitud ideal: **140–160 caracteres** (nunca superar 165).
- Usar el frontmatter `seo_description` para override específico.
- Deben ser escritas en español, en voz activa, con llamada a la acción implícita.

### Encabezados (H1–H6)
- **Solo un H1 por página.** El H1 debe coincidir semánticamente con el `<title>`.
- Jerarquía estricta: H1 → H2 → H3. No saltar niveles.
- Nunca usar encabezados solo por estética (usar CSS para tamaño).

### URLs y Estructura
- URLs en español, en minúsculas, con guiones (`-`), sin acentos.
- Usar `permalink` en frontmatter para URLs canónicas claras.
- Todas las páginas deben tener `<link rel="canonical">`.

### Imágenes
- Toda imagen DEBE tener `alt` descriptivo en español.
- Usar nombres de archivo semánticos (`portada-corceles-azules.jpg`, no `img001.jpg`).
- Incluir `og:image` en todas las páginas con imagen de portada o imagen del autor como fallback.

### Keywords
- Usar el frontmatter `keywords` en páginas estratégicas (libros, cuentos, sobre mí).
- Keywords principales del sitio: `escritor chileno`, `ciencia ficción chilena`, `cyberpunk latinoamericano`, `I.A. Galdames`, `Ignacio Galdames`, `Corceles Azules`.

### Sitemap y Robots
- El `sitemap.xml` debe incluir **todas** las colecciones: pages, posts, libros, cuentos.
- El `robots.txt` debe permitir acceso a todos los crawlers legítimos (incluidos crawlers de IA).
- Las páginas 404 y páginas de admin deben tener `noindex: true` en su frontmatter.

### Schema.org / Datos Estructurados
- El schema `Person` del autor es **obligatorio** en todas las páginas (está en `_includes/schema.html`).
- Para libros: usar schema `Book` con `isbn`, `datePublished`, `publisher`, `offers`.
- Para cuentos/relatos: usar schema `ShortStory`.
- Para posts del blog: usar schema `BlogPosting` con `datePublished` y `dateModified`.
- Para la homepage: usar schema `FAQPage`.
- **Nunca** dejar comas finales en JSON-LD (causa errores de validación).

---

## Reglas Obligatorias de GEO (Generative Engine Optimization)

GEO es la optimización para que los LLMs (ChatGPT, Gemini, Claude, Perplexity, etc.) mencionen y recomienden el sitio y al autor.

### llms.txt
- El archivo `/llms.txt` es el archivo GEO principal. **Siempre mantenerlo actualizado.**
- Debe listar: todos los libros (con ISBN, editorial, fecha), todos los cuentos publicados, certificaciones y formación del autor, y redes sociales.
- Formato: Markdown limpio, sin HTML, con datos estructurados claros.
- **Actualizar `llms.txt` cada vez que se publique un libro o cuento nuevo.**

### Contenido optimizado para LLMs
- Usar lenguaje factual y declarativo en las descripciones del autor y obras.
- Incluir **datos verificables**: fechas, ISBNs, nombres de editoriales, revistas donde publicó.
- Las FAQ en la homepage (`index.markdown`) son clave para GEO: deben responder preguntas reales que los usuarios harían a un LLM.
- Evitar lenguaje ambiguo o metafórico en meta descriptions y schema (los LLMs prefieren hechos concretos).

### robots.txt para crawlers de IA
- Siempre mantener permisos `Allow: /` para: `GPTBot`, `ClaudeBot`, `Google-Extended`, `Gemini`, `PerplexityBot`, `Grok`, `Meta-ExternalAgent`, `anthropic-ai`, `cohere-ai`, `YouBot`.
- **Nunca bloquear crawlers de IA** a menos que el usuario lo pida explícitamente.

### Meta GEO tags requeridas en head
Las siguientes meta tags son REQUERIDAS en `<head>` (ya configuradas en `_includes/head.html`):
- `<meta name="geo.region" content="CL">`
- `<meta name="geo.placename" content="Santiago, Chile">`
- `<meta name="ICBM" content="-33.4489, -70.6693">`
- `<meta name="DC.language" content="es-CL">`

---

## Reglas Obligatorias de UX

### Accesibilidad
- Todos los botones e inputs deben tener `aria-label` descriptivos.
- Los íconos decorativos sin texto visible deben tener `aria-hidden="true"`.
- Los íconos funcionales (links de redes sociales sin texto) deben tener `<span class="d-none">texto</span>` para lectores de pantalla.
- Mantener contraste de colores mínimo WCAG AA.

### Navegación
- El nav debe incluir `aria-label="Navegación principal"`.
- Los ítems del nav deben estar correctamente capitalizados y en español.
- Los links del nav activo deben tener `aria-current="page"`.

### IDs únicos
- **Nunca repetir IDs en la misma página.** Esto es un error de accesibilidad y HTML.
- El footer usa `id="footer-url-display"` y `id="footer-date-display"` (no "date-display").
- Todos los elementos interactivos deben tener IDs únicos y descriptivos.

### Performance
- Scripts no críticos deben tener `defer` o `async`.
- Fuentes Google Fonts deben usar `<link rel="preconnect">` antes de cargarse.
- Las imágenes grandes deben usar `loading="lazy"`.

### Español
- Todo el contenido de UI (botones, mensajes de error, placeholders) debe estar en **español**.
- La página 404 debe ser en español con link de retorno al inicio.

---

## Frontmatter recomendado por tipo de página

### Página estándar
`yaml
---
layout: page
title: "Título de la Página"
seo_title: "Título SEO optimizado"
seo_description: "Meta description de 140-160 caracteres en español."
keywords: "keyword1, keyword2, keyword3"
permalink: /url-canonica/
---
`

### Libro
`yaml
---
layout: libro
nombreItem: "Título del Libro"
seo_description: "Descripción del libro de 140-160 caracteres."
fechaPublicacion: "2024-01-01"
isbn: "978-XXXXXXXXXX"
nombreEditorial: "Editorial"
portadaItem: /assets/img/portada.jpg
---
`

### Post del blog
`yaml
---
layout: post
title: "Título del Post"
seo_description: "Meta description."
date: YYYY-MM-DD
last_modified_at: YYYY-MM-DD
image: nombre-imagen.jpg
categories: [categoria]
---
`

---

## Errores comunes a evitar

1. **Comas finales en JSON-LD** — el validador de schema.org los rechaza.
2. **IDs duplicados** — invalida el HTML y confunde a los screen readers.
3. **H1 múltiples** — daña el SEO de la página.
4. **Títulos o descripciones genéricas** — nunca usar "Página | Sitio" sin contenido descriptivo.
5. **Imágenes sin alt** — penalización de accesibilidad y SEO.
6. **URLs con mayúsculas o espacios** — siempre minúsculas con guiones.
7. **Meta descriptions duplicadas** — cada página debe tener la suya.
8. **Bloquear crawlers de IA en robots.txt** — perjudica el GEO.
9. **last_modified_at desactualizado** — actualizar al editar cualquier página estratégica.
10. **Schema sin @id** — dificulta el entity linking en Knowledge Graph de Google.
