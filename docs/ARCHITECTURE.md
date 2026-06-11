# Fitzroy Minerals — Arquitectura del Sitio Web
**Documento de Arquitectura v1.0**
Stack: Astro · TypeScript · Content Collections · Svelte (interactive islands) · SSG

---

## 1. Arquitectura de Información

### 1.1 Sitemap

```
/                           → Home
/about                      → Sobre Fitzroy (resumen corporativo)
  /about/leadership         → Directorio y Management
  /about/corporate          → Información corporativa, contactos clave
/projects                   → Índice de proyectos
  /projects/[slug]          → Página individual de proyecto
/investors                  → Hub de Relaciones con Inversionistas
  /investors/stock          → Información bursátil (TSX-V, OTC)
  /investors/share-structure → Estructura accionaria
  /investors/presentations  → Presentaciones corporativas
  /investors/financials     → Estados financieros y MDA
  /investors/technical-reports → Reportes NI 43-101
  /investors/agm            → Annual General Meeting
  /investors/media          → Videos, cartas a accionistas, cobertura externa
  /investors/life-offering  → Ofertas LIFE (gated)
/news                       → Listado de noticias
  /news/[slug]              → Artículo de noticia individual
/contact                    → Contacto y suscripción
/legal/privacy-policy       → Política de privacidad
/legal/disclaimer           → Aviso legal
```

### 1.2 Navegación Principal

La navegación principal tiene 5 ítems de nivel 1. Cada uno resuelve una intención clara de usuario.

| Ítem | Destino | Justificación |
|---|---|---|
| About | /about | Identidad corporativa, equipo, historia |
| Projects | /projects | Activos mineros, el núcleo del negocio |
| Investors | /investors | Hub dedicado para inversionistas |
| News | /news | Flujo de comunicaciones |
| Contact | /contact | Conversión: contacto y suscripción |

**Criterio de diseño:** el sitio actual mezcla audiencias en una navegación plana. Esta arquitectura separa `About` (empresa) de `Investors` (mercado) y eleva `Projects` como elemento central — refleja que el valor de la empresa está en sus activos, no sólo en su gestión.

### 1.3 Navegación Secundaria (por sección)

**About**
- Leadership → /about/leadership
- Corporate Directory → /about/corporate

**Projects** (generada dinámicamente desde colección)
- [Project Name] → /projects/[slug]
- por cada proyecto publicado

**Investors**
- Stock Information → /investors/stock
- Share Structure → /investors/share-structure
- Presentations → /investors/presentations
- Financials → /investors/financials
- Technical Reports → /investors/technical-reports
- AGM → /investors/agm
- Media & Research → /investors/media
- LIFE Offering → /investors/life-offering

### 1.4 Footer Navigation

El footer organiza el contenido en 4 columnas:

**Columna 1 — Company**
- About
- Leadership
- Corporate Directory
- Contact

**Columna 2 — Projects**
- [links generados dinámicamente desde colección de proyectos]
- Ver todos los proyectos

**Columna 3 — Investors**
- Stock Information
- Presentations
- Financials
- Technical Reports
- AGM

**Columna 4 — Legal & Media**
- News
- Privacy Policy
- Disclaimer
- SEDAR+ (link externo)

**Justificación del footer:** el footer sirve como mapa secundario del sitio, especialmente útil para inversionistas que llegan directamente a una noticia o proyecto y necesitan navegar al hub de IR. Los links legales están separados para no contaminar la navegación principal pero accesibles siempre.

---

## 2. User Journeys

### 2.1 Inversionista Potencial

**Perfil:** analista de buy-side o retail investor que está evaluando FTZ/FTZFF por primera vez.

**Objetivos:**
- Evaluar la calidad y escala de los activos
- Entender el equipo de gestión
- Acceder a la última presentación corporativa
- Ver el precio y volumen de la acción
- Revisar los estados financieros más recientes

**Información que busca:**
- Ticker, precio, capitalización de mercado
- Proyectos: ubicación, etapa, tipo de mineralización
- Management team: credenciales y track record
- Última corporate presentation (PDF)
- Últimos estados financieros (FS + MDA)
- Noticias recientes

**Recorrido ideal:**
```
Home → (Presentation CTA) → /investors/presentations
Home → (Projects section) → /projects/[slug]
/about/leadership → verifica equipo
/investors/stock → precio actual
/investors/financials → Q más reciente
```

**Puntos críticos de experiencia:**
- La presentación corporativa más reciente debe estar visible en Home y en /investors/presentations sin fricción.
- El stock widget debe estar disponible en /investors sin requerir scroll profundo.
- Los PDFs deben abrirse directamente (no descarga forzada).

---

### 2.2 Accionista Actual

**Perfil:** persona que ya tiene posición en FTZ y visita regularmente para estar al día.

**Objetivos:**
- Leer las últimas noticias y comunicados
- Revisar resultados de exploración
- Ver materiales del AGM
- Suscribirse o mantenerse suscrito a alerts

**Información que busca:**
- Últimas noticias (news releases)
- Resultados de taladros / assay results
- Materiales AGM (circulares, proxies)
- Stock quote

**Recorrido ideal:**
```
Home → (Recent News) → /news/[slug]
/investors/agm → materiales reunión
/contact → suscripción confirmada
```

---

### 2.3 Analista Minero / Geólogo

**Perfil:** profesional técnico que evalúa la calidad geológica de los proyectos.

**Objetivos:**
- Acceder al NI 43-101 Technical Report
- Revisar resultados de perforación (assay tables, drill sections)
- Entender la geología regional y local
- Descargar mapas y figuras técnicas

**Información que busca:**
- Technical Report PDF (NI 43-101 Buen Retiro)
- Histórico de resultados de perforación
- Descripción geológica de cada proyecto
- Imágenes y secciones geológicas

**Recorrido ideal:**
```
/projects/buen-retiro → sección Geology + Results
/investors/technical-reports → descarga NI 43-101
/news → filtrar por "Exploration Results"
```

---

### 2.4 Periodista / Medios

**Perfil:** periodista de medios especializados (Mining.com, Stockhouse, BNN) o generalistas cubriendo minería en LATAM.

**Objetivos:**
- Acceder rápido a los últimos comunicados de prensa
- Obtener contacto de medios/IR
- Entender la empresa en 60 segundos

**Información que busca:**
- News releases (con versión PDF descargable)
- Contact IR (email, teléfono)
- Fact sheet / resumen ejecutivo de la empresa
- Foto de ejecutivos (no en scope v1 pero arquitectura lo soporta)

**Recorrido ideal:**
```
/news → último news release → descarga PDF
/contact → email IR
Home → About snippet → /about/leadership
```

---

### 2.5 Socio Estratégico / Contraparte

**Perfil:** empresa minera grande, fondo de PE, royalty company evaluando alianza o adquisición.

**Objetivos:**
- Entender el portafolio de proyectos y su etapa
- Evaluar los términos de propiedad (tenements, royalties)
- Contactar directamente al CEO o COO

**Información que busca:**
- Mapa y descripción de proyectos
- Stage de cada proyecto (exploration / development)
- Información de contacto ejecutivo
- Última presentación corporativa

**Recorrido ideal:**
```
/projects → índice visual de todos los proyectos
/projects/[slug] → detalle de cada activo
/about/corporate → contacto CEO/COO directo
/investors/presentations → Corporate Deck
```

---

### 2.6 Candidato Laboral

**Perfil:** geólogo o profesional minero explorando oportunidades en la empresa.

**Objetivos:**
- Entender la cultura y el equipo
- Ver en qué proyectos trabaja Fitzroy
- Contactar para enviar CV

**Información que busca:**
- Equipo de gestión y advisors
- Proyectos activos y su geografía
- Información de contacto

**Recorrido ideal:**
```
/about/leadership → conoce al equipo
/projects → entiende los activos
/contact → envía contacto
```

---

## 3. Modelo de Contenido — Astro Content Collections

### 3.1 Colección: `news`

**Propósito:** comunicados de prensa, news releases y anuncios corporativos.

**Campos:**

```typescript
// src/content/config.ts
const news = defineCollection({
  type: 'content',  // Markdown/MDX
  schema: z.object({
    title: z.string(),
    date: z.string().date(),  // ISO 8601
    summary: z.string().max(300),  // para cards y meta descriptions
    category: z.enum([
      'exploration-results',
      'corporate-update',
      'financial-disclosure',
      'agm',
      'management-change',
      'property-update',
      'capital-markets',
    ]),
    tags: z.array(z.string()).optional(),
    pdfUrl: z.string().url().optional(),  // link a PDF del news release
    relatedProject: z.string().optional(), // slug del proyecto relacionado
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});
```

**Ejemplo de frontmatter:**

```yaml
---
title: "Fitzroy Minerals Reports Assay Results from Buen Retiro Copper Project"
date: "2025-11-15"
summary: "Fitzroy reports significant copper-gold intercepts including 42m at 1.2% CuEq from BR-025."
category: exploration-results
tags: ["copper", "buen-retiro", "drilling", "chile"]
pdfUrl: "https://fitzroyminerals.com/docs/news/2025-11-15-assay-results.pdf"
relatedProject: "buen-retiro"
featured: true
draft: false
---
```

**Relaciones:** → `projects` (por `relatedProject`)

---

### 3.2 Colección: `projects`

**Propósito:** fichas técnicas de los proyectos mineros activos.

**Campos:**

```typescript
const projects = defineCollection({
  type: 'content',  // MDX (permite embeds de mapas o tablas complejas)
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    country: z.enum(['chile', 'argentina']),
    region: z.string(),
    stage: z.enum([
      'early-stage',
      'target-generation',
      'active-drilling',
      'resource-definition',
      'prefeasibility',
      'on-hold',
    ]),
    commodities: z.array(z.enum(['copper', 'gold', 'silver', 'molybdenum'])),
    areaSqKm: z.number().optional(),
    ownership: z.string().optional(),  // ej: "100% Fitzroy"
    coverImage: z.string(),  // path relativo a src/assets/
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    highlights: z.array(z.string()),  // bullet points clave para la hero
    status: z.enum(['active', 'inactive']).default('active'),
    order: z.number().default(99),  // orden de aparición en índice
    featured: z.boolean().default(false),  // aparece en Home
    technicalReportUrl: z.string().url().optional(),
  }),
});
```

**Ejemplo de frontmatter:**

```yaml
---
title: "Buen Retiro Copper Project"
slug: "buen-retiro"
country: chile
region: "Atacama Region, III Region"
stage: active-drilling
commodities: [copper, gold, silver]
areaSqKm: 45
ownership: "100% Fitzroy"
coverImage: "projects/buen-retiro/hero.jpg"
coordinates:
  lat: -27.34
  lng: -69.87
highlights:
  - "Shallow copper-gold porphyry system"
  - "Simple metallurgy — oxide-sulphide transition"
  - "15km from paved highway"
  - "42m at 1.2% CuEq (BR-025)"
status: active
order: 1
featured: true
technicalReportUrl: "https://fitzroyminerals.com/docs/ni43-101-buen-retiro-2024.pdf"
---
```

**Relaciones:** referenciado por `news.relatedProject`, `documents.relatedProject`

---

### 3.3 Colección: `people`

**Propósito:** directores, management y advisors. Reutilizable en Home (Leadership banner) y /about/leadership.

**Campos:**

```typescript
const people = defineCollection({
  type: 'content',  // Markdown (bio larga en body)
  schema: z.object({
    name: z.string(),
    role: z.string(),
    roleCategory: z.enum([
      'board',
      'management',
      'technical-advisor',
    ]),
    shortBio: z.string().max(200),  // para cards en Home
    photo: z.string().optional(),
    linkedin: z.string().url().optional(),
    order: z.number().default(99),
    active: z.boolean().default(true),
    otherRoles: z.array(z.string()).optional(),  // roles en otras empresas
  }),
});
```

**Ejemplo de frontmatter:**

```yaml
---
name: "Merlin Marr-Johnson"
role: "President and CEO, Director"
roleCategory: management
shortBio: "Over 25 years in the resources sector in technical, corporate, and capital markets roles. Geology honours from Manchester; MSc from Royal School of Mines, Imperial College."
photo: "people/merlin-marr-johnson.jpg"
linkedin: ""
order: 2
active: true
otherRoles:
  - "Non-executive Director, Salazar Resources Ltd (SRL: TSXV)"
---
```

**Body (Markdown):** bio completa para la página /about/leadership.

---

### 3.4 Colección: `documents`

**Propósito:** todos los documentos descargables: presentaciones, financials, technical reports, AGM materials.

**Campos:**

```typescript
const documents = defineCollection({
  type: 'data',  // JSON/YAML — no tienen cuerpo editorial
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
    category: z.enum([
      'corporate-presentation',
      'financial-statement',
      'mda',
      'technical-report',
      'agm-material',
      'life-offering',
      'shareholder-letter',
      'capital-report',
    ]),
    fileUrl: z.string().url(),
    thumbnailUrl: z.string().optional(),
    fiscalYear: z.number().optional(),
    quarter: z.enum(['Q1', 'Q2', 'Q3', 'Q4', 'Annual']).optional(),
    relatedProject: z.string().optional(),
    featured: z.boolean().default(false),
    restricted: z.boolean().default(false),  // para LIFE offering
  }),
});
```

**Ejemplo (YAML data file):**

```yaml
title: "Corporate Presentation — November 2025"
date: "2025-11-01"
category: corporate-presentation
fileUrl: "https://fitzroyminerals.com/docs/presentations/fitzroy-corporate-nov-2025.pdf"
thumbnailUrl: "docs/presentations/fitzroy-corporate-nov-2025-thumb.jpg"
featured: true
restricted: false
```

---

### 3.5 Colección: `media`

**Propósito:** videos, cartas a accionistas, cobertura externa (links a artículos de terceros).

**Campos:**

```typescript
const media = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
    type: z.enum(['video', 'shareholder-letter', 'external-article', 'capital-report']),
    url: z.string().url(),
    description: z.string().optional(),
    source: z.string().optional(),  // ej: "Mining.com", "YouTube"
    thumbnailUrl: z.string().optional(),
  }),
});
```

---

### 3.6 Colección: `stock` (data)

**Propósito:** datos estáticos de la estructura accionaria (se actualiza manualmente en cada reporte).

**Campos:**

```typescript
// src/data/shareStructure.ts (TypeScript, no Content Collection)
export const shareStructure = {
  asOf: "2026-01-28",
  issuedAndOutstanding: 282293754,
  stockOptions: 24325000,
  warrants: 30025368,
  fullyDiluted: 336644122,
};
```

---

## 4. Taxonomías

### 4.1 Taxonomía de Noticias (`news.category`)

| Valor | Etiqueta visible | Descripción |
|---|---|---|
| `exploration-results` | Exploration Results | Assay results, drill intersections, resource updates |
| `corporate-update` | Corporate Update | Management changes, strategy, JV announcements |
| `financial-disclosure` | Financial Disclosure | Quarterly reports, annual results, financing |
| `agm` | AGM | Annual general meeting notices and results |
| `management-change` | Management Change | New appointments, resignations, board changes |
| `property-update` | Property Update | Acquisition, staking, option, sale of properties |
| `capital-markets` | Capital Markets | Bought deals, private placements, warrants |

**Justificación:** estas 7 categorías cubren el universo completo de comunicados de una junior miner. Son mutuamente excluyentes. Permiten filtrado en /news y relacionar noticias con proyectos.

---

### 4.2 Taxonomía de Proyectos (`projects.stage`)

| Valor | Etiqueta visible | Descripción |
|---|---|---|
| `early-stage` | Early Stage | Target identification, first pass mapping |
| `target-generation` | Target Generation | Systematic sampling, geophysics |
| `active-drilling` | Active Drilling | Infill or step-out drilling in progress |
| `resource-definition` | Resource Definition | MRE estimation work |
| `prefeasibility` | Prefeasibility | PFS or FS stage |
| `on-hold` | On Hold | Paused, inactive |

**`projects.commodities`** (array, permite múltiples):
`copper` · `gold` · `silver` · `molybdenum`

**`projects.country`**:
`chile` · `argentina`

---

### 4.3 Taxonomía de Documentos (`documents.category`)

| Valor | Etiqueta visible | Sección del sitio |
|---|---|---|
| `corporate-presentation` | Corporate Presentation | /investors/presentations |
| `financial-statement` | Financial Statement | /investors/financials |
| `mda` | MD&A | /investors/financials |
| `technical-report` | Technical Report | /investors/technical-reports |
| `agm-material` | AGM Material | /investors/agm |
| `life-offering` | LIFE Offering | /investors/life-offering |
| `shareholder-letter` | Letter to Shareholders | /investors/media |
| `capital-report` | Capital Report | /investors/media |

---

### 4.4 Taxonomía de Personas (`people.roleCategory`)

| Valor | Etiqueta visible | Descripción |
|---|---|---|
| `board` | Board of Directors | Directors incluyendo Chairman |
| `management` | Management Team | CEO, COO, CFO, operational staff |
| `technical-advisor` | Technical Advisors | Craig Parry, Ken McNaughton |

**Orden de display recomendado:** board → management → technical-advisor, luego por `order` dentro de cada grupo.

---

## 5. Estructura de Carpetas

```
fitzroy-minerals/
│
├── public/                          # Assets servidos tal cual (sin procesar)
│   ├── fonts/                       # Webfonts autohospedados si aplica
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap-index.xml            # generado por @astrojs/sitemap
│
├── src/
│   │
│   ├── content/                     # Astro Content Collections
│   │   ├── config.ts                # Definición de schemas (único archivo)
│   │   ├── news/                    # .md por cada news release
│   │   │   └── 2025-11-15-assay-results.md
│   │   ├── projects/                # .mdx por cada proyecto (MDX = tablas + embeds)
│   │   │   └── buen-retiro.mdx
│   │   ├── people/                  # .md por cada persona
│   │   │   └── merlin-marr-johnson.md
│   │   ├── documents/               # .yaml por cada documento
│   │   │   ├── presentations/
│   │   │   ├── financials/
│   │   │   ├── technical-reports/
│   │   │   └── agm/
│   │   └── media/                   # .yaml por cada ítem de media
│   │
│   ├── data/                        # Datos TypeScript estáticos (no Content Collections)
│   │   ├── shareStructure.ts        # Estructura accionaria (actualizar manualmente)
│   │   ├── contactInfo.ts           # Todas las direcciones y teléfonos
│   │   ├── stockTickers.ts          # Configuración de tickers (FTZ, FTZFF)
│   │   └── siteConfig.ts            # Título del sitio, description, social handles
│   │
│   ├── pages/                       # Rutas del sitio (file-based routing de Astro)
│   │   ├── index.astro              # Home
│   │   ├── about/
│   │   │   ├── index.astro          # /about
│   │   │   ├── leadership.astro     # /about/leadership
│   │   │   └── corporate.astro      # /about/corporate
│   │   ├── projects/
│   │   │   ├── index.astro          # /projects
│   │   │   └── [slug].astro         # /projects/[slug] (dinámico SSG)
│   │   ├── investors/
│   │   │   ├── index.astro          # /investors (hub)
│   │   │   ├── stock.astro          # /investors/stock
│   │   │   ├── share-structure.astro
│   │   │   ├── presentations.astro
│   │   │   ├── financials.astro
│   │   │   ├── technical-reports.astro
│   │   │   ├── agm.astro
│   │   │   ├── media.astro
│   │   │   └── life-offering.astro
│   │   ├── news/
│   │   │   ├── index.astro          # /news
│   │   │   └── [slug].astro         # /news/[slug]
│   │   ├── contact.astro            # /contact
│   │   └── legal/
│   │       ├── privacy-policy.astro
│   │       └── disclaimer.astro
│   │
│   ├── layouts/                     # Plantillas reutilizables
│   │   ├── BaseLayout.astro         # HTML shell: head, header, footer
│   │   ├── PageLayout.astro         # Extiende Base: añade breadcrumbs, subnav
│   │   ├── ProjectLayout.astro      # Plantilla de proyecto individual
│   │   ├── NewsLayout.astro         # Plantilla de news article
│   │   └── InvestorsLayout.astro    # Plantilla con subnav de IR
│   │
│   ├── components/                  # Componentes reutilizables
│   │   ├── global/                  # Header, Footer, Nav
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MainNav.astro
│   │   │   ├── SubNav.astro
│   │   │   └── MobileMenu.svelte    # Island interactivo
│   │   ├── home/                    # Secciones de Home
│   │   │   ├── HeroBanner.astro
│   │   │   ├── VideoBanner.astro
│   │   │   ├── RecentNews.astro
│   │   │   ├── LatestPresentation.astro
│   │   │   ├── FeaturedProjects.astro
│   │   │   └── LeadershipScroll.svelte  # Island: infinite scroll
│   │   ├── project/                 # Componentes de página de proyecto
│   │   │   ├── ProjectHero.astro
│   │   │   ├── ProjectHighlights.astro
│   │   │   ├── ProjectOverview.astro
│   │   │   ├── ProjectGeology.astro
│   │   │   ├── ProjectResults.astro
│   │   │   ├── ProjectGallery.svelte    # Island: lightbox
│   │   │   └── ProjectDownloads.astro
│   │   ├── investors/               # Componentes de IR
│   │   │   ├── StockWidget.svelte       # Island: stock quote
│   │   │   ├── ShareStructureTable.astro
│   │   │   ├── DocumentList.astro
│   │   │   ├── DocumentCard.astro
│   │   │   ├── PresentationCard.astro
│   │   │   ├── FinancialTable.astro
│   │   │   └── LifeOfferingGate.svelte  # Island: yes/no gate
│   │   ├── news/                    # Componentes de noticias
│   │   │   ├── NewsCard.astro
│   │   │   ├── NewsList.astro
│   │   │   ├── NewsFilter.svelte        # Island: filtro por categoría
│   │   │   └── RelatedNews.astro
│   │   ├── people/                  # Componentes de personas
│   │   │   ├── PersonCard.astro
│   │   │   ├── PersonBio.astro
│   │   │   └── LeadershipGrid.astro
│   │   └── ui/                      # Primitivos de UI reutilizables
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       ├── Tag.astro
│   │       ├── Breadcrumbs.astro
│   │       ├── SectionHeader.astro
│   │       └── ExternalLink.astro
│   │
│   └── assets/                      # Assets procesados por Astro (imágenes)
│       ├── images/
│       │   ├── projects/
│       │   │   └── buen-retiro/
│       │   │       ├── hero.jpg
│       │   │       ├── gallery-01.jpg
│       │   │       └── map.png
│       │   ├── people/
│       │   │   └── merlin-marr-johnson.jpg
│       │   └── home/
│       │       ├── hero-bg.jpg
│       │       └── presentation-bg.jpg
│       └── docs/                    # PDFs públicos (o URLs externas, ver Sección 7)
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── .env.example                     # Variables de entorno (stock widget API key, etc.)
```

**Notas sobre las carpetas:**

- `src/content/` es la fuente de verdad editorial. Todo lo que cambia regularmente vive aquí.
- `src/data/` contiene datos estructurales que cambian raramente (estructura accionaria, contactos). TypeScript puro, con tipos explícitos.
- `src/pages/` genera rutas. Astro genera una página estática por cada archivo.
- `src/layouts/` evita duplicación de estructura HTML entre páginas relacionadas.
- `src/components/` dividida por dominio de negocio, no por tipo técnico, lo que facilita que un nuevo desarrollador encuentre componentes por contexto.
- `src/assets/` contiene imágenes que Astro procesa (redimensiona, optimiza, genera WebP/AVIF). Los PDFs pueden vivir aquí o en un bucket externo (ver Sección 7).
- `public/` contiene assets que Astro copia sin procesar: favicon, robots.txt, y cualquier archivo que necesite una URL predecible.

---

## 6. Routing

### 6.1 Rutas estáticas

```
GET /                              → src/pages/index.astro
GET /about                         → src/pages/about/index.astro
GET /about/leadership              → src/pages/about/leadership.astro
GET /about/corporate               → src/pages/about/corporate.astro
GET /projects                      → src/pages/projects/index.astro
GET /investors                     → src/pages/investors/index.astro
GET /investors/stock               → src/pages/investors/stock.astro
GET /investors/share-structure     → src/pages/investors/share-structure.astro
GET /investors/presentations       → src/pages/investors/presentations.astro
GET /investors/financials          → src/pages/investors/financials.astro
GET /investors/technical-reports   → src/pages/investors/technical-reports.astro
GET /investors/agm                 → src/pages/investors/agm.astro
GET /investors/media               → src/pages/investors/media.astro
GET /investors/life-offering       → src/pages/investors/life-offering.astro
GET /news                          → src/pages/news/index.astro
GET /contact                       → src/pages/contact.astro
GET /legal/privacy-policy          → src/pages/legal/privacy-policy.astro
GET /legal/disclaimer              → src/pages/legal/disclaimer.astro
```

### 6.2 Rutas dinámicas (generadas en build time via getStaticPaths)

```
GET /projects/[slug]               → src/pages/projects/[slug].astro
GET /news/[slug]                   → src/pages/news/[slug].astro
```

**Implementación de getStaticPaths para proyectos:**
```typescript
// src/pages/projects/[slug].astro
export async function getStaticPaths() {
  const projects = await getCollection('projects', ({ data }) => !data.status || data.status === 'active');
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}
```

**Implementación de getStaticPaths para noticias:**
```typescript
// src/pages/news/[slug].astro
export async function getStaticPaths() {
  const news = await getCollection('news', ({ data }) => !data.draft);
  return news.map((article) => ({
    params: { slug: article.slug },
    props: { article },
  }));
}
```

### 6.3 Redirects recomendados

Para compatibilidad con URLs del sitio actual (evitar 404s de links externos y SEDAR):

```javascript
// astro.config.mjs
redirects: {
  '/corporate':          '/about',
  '/corporate/management': '/about/leadership',
  '/investors/stock-info': '/investors/stock',
  '/projects/buen-retiro-copper': '/projects/buen-retiro',
}
```

---

## 7. Modelo de Datos

### 7.1 Markdown (`.md`)

**Usar para:** contenido editorial con cuerpo de texto predominante.

| Contenido | Justificación |
|---|---|
| News releases (`src/content/news/`) | Body es texto corrido: lede, paragraphs, boilerplate. Sin necesidad de componentes custom. |
| Bios de personas (`src/content/people/`) | La bio larga es texto rico pero sin tablas ni embeds. |
| Páginas legales (privacy, disclaimer) | Texto estático y largo. No requieren interactividad. |

---

### 7.2 MDX (`.mdx`)

**Usar para:** contenido editorial que requiere componentes custom dentro del cuerpo.

| Contenido | Justificación |
|---|---|
| Fichas de proyectos (`src/content/projects/`) | Necesitan tablas de drill results, potencialmente mapas embebidos, callouts de highlights. MDX permite `<DrillResultsTable />` o `<GeologyMap />` directamente en el contenido sin hardcodear datos en componentes. |

**Nota:** MDX tiene overhead. Sólo se usa donde hay necesidad real de componentes embebidos. Las noticias son siempre `.md`.

---

### 7.3 YAML / JSON (data files en Content Collections)

**Usar para:** registros de datos estructurados sin cuerpo editorial.

| Contenido | Formato | Justificación |
|---|---|---|
| Documentos (`src/content/documents/`) | `.yaml` | Son registros: título, fecha, URL, categoría. Sin cuerpo de texto. |
| Media items (`src/content/media/`) | `.yaml` | Videos y links externos: metadata + URL. |

**Preferencia YAML sobre JSON:** YAML es más legible para editores no técnicos (futuros maintainers). JSON se reserva para datos consumidos programáticamente por herramientas externas.

---

### 7.4 TypeScript (archivos en `src/data/`)

**Usar para:** datos de configuración del sitio y datos estáticos que requieren tipos explícitos o lógica de derivación.

| Archivo | Justificación |
|---|---|
| `shareStructure.ts` | La estructura accionaria tiene pocos campos, se actualiza trimestralmente, y se consume en múltiples lugares. TypeScript garantiza que si se agrega un campo nuevo, el compilador fuerza actualizar todos los consumidores. |
| `contactInfo.ts` | Direcciones y teléfonos necesitan tipado estricto para ser reusados en Footer, Contact, y Corporate Directory. |
| `stockTickers.ts` | Configuración de los tickers (símbolo, bolsa, ISIN) usada en múltiples componentes. Un sólo cambio actualiza todo el sitio. |
| `siteConfig.ts` | SEO defaults, nombre del sitio, redes sociales. Fuente única de verdad para la identidad digital. |

**Regla general:** si un dato cambia raramente y afecta múltiples partes del sitio, es TypeScript. Si cambia frecuentemente y tiene cuerpo editorial, es Content Collection.

---

## 8. Sistema de Componentes

### 8.1 Layout Components

**`BaseLayout.astro`**
- Responsabilidad: HTML completo — `<html>`, `<head>` con meta tags, `<Header>`, `<slot>`, `<Footer>`. Gestiona el tema visual base y los scripts globales.
- Props: `title`, `description`, `ogImage`, `canonicalUrl`
- Reutilización: todas las páginas del sitio

**`PageLayout.astro`**
- Responsabilidad: extiende BaseLayout. Añade breadcrumbs, subnav contextual si existe, y container de contenido.
- Props: `title`, `description`, `breadcrumbs[]`, `subnavItems[]`, `ogImage`
- Reutilización: todas las páginas interiores excepto Home

**`ProjectLayout.astro`**
- Responsabilidad: plantilla específica para páginas de proyecto. Estructura las secciones en orden fijo: Hero → Highlights → Overview → cuerpo MDX → Downloads.
- Props: `project` (colección completa del proyecto), `relatedDocuments[]`, `relatedNews[]`
- Reutilización: todas las páginas `/projects/[slug]`

**`NewsLayout.astro`**
- Responsabilidad: plantilla para artículos. Incluye header con fecha/categoría, body del article, CTA de descarga de PDF, sección de noticias relacionadas.
- Props: `article`, `relatedNews[]`
- Reutilización: todas las páginas `/news/[slug]`

**`InvestorsLayout.astro`**
- Responsabilidad: extiende PageLayout. Añade subnav persistente de IR con los 8 sub-items. El subnav indica la página activa.
- Props: `title`, `description`, `activeSection`
- Reutilización: todas las páginas bajo `/investors/`

---

### 8.2 Content Components

**`SectionHeader.astro`**
- Responsabilidad: título de sección con opcional subtítulo y CTA link. Usado en Home y páginas interiores.
- Props: `title`, `subtitle?`, `ctaLabel?`, `ctaHref?`

**`Breadcrumbs.astro`**
- Responsabilidad: breadcrumb trail semántico (nav + ol/li). Genera JSON-LD BreadcrumbList automáticamente.
- Props: `items: Array<{label: string, href?: string}>`

**`ExternalLink.astro`**
- Responsabilidad: link externo con `target="_blank" rel="noopener noreferrer"` y ícono visual indicador. Accesibilidad: anuncia "abre en nueva pestaña" para screen readers.
- Props: `href`, `label`

**`Badge.astro`**
- Responsabilidad: etiqueta visual para categorías (exploration-results, active-drilling, etc.)
- Props: `label`, `variant` (category slug — estilos definidos por CSS classes)

**`Button.astro`**
- Responsabilidad: botón o link con apariencia de botón. Dos variantes: `primary`, `secondary`.
- Props: `label`, `href?`, `onClick?`, `variant`, `external?`

---

### 8.3 Investor Components

**`DocumentCard.astro`**
- Responsabilidad: card de un documento descargable. Muestra thumbnail o ícono de documento, título, fecha, y botón de descarga que abre PDF en nueva pestaña.
- Props: `document` (tipo de colección `documents`)
- Reutilización: en todas las páginas de /investors/ que listan documentos

**`DocumentList.astro`**
- Responsabilidad: lista de DocumentCards agrupados por año o categoría. Recibe array de documentos ya filtrados.
- Props: `documents[]`, `groupBy: 'year' | 'category'`

**`PresentationCard.astro`**
- Responsabilidad: variante visual de DocumentCard optimizada para presentaciones (thumbnail prominente).
- Props: `document` (type: corporate-presentation)

**`ShareStructureTable.astro`**
- Responsabilidad: tabla de estructura accionaria. Renderiza datos de `src/data/shareStructure.ts` con formato numérico correcto.
- Props: `data` (importado de shareStructure.ts)

**`FinancialTable.astro`**
- Responsabilidad: agrupa los documentos `financial-statement` + `mda` por año fiscal y quarter. Cada fila: periodo, link FS, link MDA.
- Props: `documents[]` (filtrados por category financial-statement y mda)

**`StockWidget.svelte`** *(Svelte island)*
- Responsabilidad: embed de cotización en tiempo real o delayed. Renderiza el widget de la bolsa (iframe embed de TSX-V o servicio tercero). Hydration: `client:load`.
- Props: `ticker`, `exchange`

**`LifeOfferingGate.svelte`** *(Svelte island)*
- Responsabilidad: pantalla con aviso legal, dos botones (Yes / No). Si Yes: muestra el documento. Si No: redirige a /investors. Requiere interactividad — es la única razón de ser Svelte.
- Props: `documentUrl`

---

### 8.4 Project Components

**`ProjectHero.astro`**
- Responsabilidad: hero de página de proyecto con imagen de fondo, título, país/región, stage badge, y highlights key.
- Props: `title`, `coverImage`, `country`, `region`, `stage`, `highlights[]`

**`ProjectHighlights.astro`**
- Responsabilidad: grid de bullet points clave del proyecto. Datos del campo `highlights` del frontmatter.
- Props: `highlights[]`

**`ProjectOverview.astro`**
- Responsabilidad: tabla de datos operativos del proyecto: área, ownership, coordenadas, commodities.
- Props: `project` (entry completo)

**`ProjectGeology.astro`**
- Responsabilidad: sección de descripción geológica. El contenido viene del body MDX. Este componente es el slot receptor.
- Props: ninguno — renderiza `<slot />`

**`ProjectResults.astro`**
- Responsabilidad: sección de resultados de perforación. Puede recibir una tabla de datos o renderizar el MDX.
- Props: `slot` o `drillResults[]` opcional

**`ProjectGallery.svelte`** *(Svelte island)*
- Responsabilidad: galería de imágenes con lightbox. Hydration: `client:visible` (no carga JS hasta que el usuario scrollea a la galería).
- Props: `images: Array<{src: string, alt: string, caption?: string}>`

**`ProjectDownloads.astro`**
- Responsabilidad: sección de documentos relacionados al proyecto (Technical Report, mapas, etc.).
- Props: `documents[]` (filtrados por relatedProject)

**`ProjectCard.astro`**
- Responsabilidad: card de proyecto para el índice /projects y la sección de Home.
- Props: `project` (entry completo), `variant: 'grid' | 'featured'`

---

### 8.5 Interactive Svelte Components

Todos los componentes Svelte son islands de Astro. La regla de uso es: **sólo Svelte cuando hay estado de UI que reacciona a interacción del usuario en el browser**.

**`MobileMenu.svelte`** — `client:load`
- Responsabilidad: menú hamburguesa para mobile. Toggle de visibilidad, trap focus, cierra con Escape.
- Props: `navItems[]`, `subnavItems?`

**`LeadershipScroll.svelte`** — `client:visible`
- Responsabilidad: carrusel/scroll horizontal de PersonCards en Home. Hydration lazy — no impacta LCP.
- Props: `people[]`

**`NewsFilter.svelte`** — `client:load`
- Responsabilidad: botones de filtro por categoría en /news. Filtra la lista de noticias sin navegación de página (client-side).
- Props: `categories[]`, `initialCategory?`
- Nota arquitectural: las noticias se pasan como prop desde el build — no hay fetch en runtime. El filtrado es puramente sobre el array en memoria.

**`ProjectGallery.svelte`** — `client:visible`
- (Ver 8.4)

**`StockWidget.svelte`** — `client:load`
- (Ver 8.3)

**`LifeOfferingGate.svelte`** — `client:load`
- (Ver 8.3)

---

## 9. Página Home — Estructura y Contenido

La Home cumple tres funciones simultáneas: introducir la empresa, capturar al inversionista, y dirigir al usuario al contenido más relevante para su perfil.

### 9.1 Secciones y Jerarquía

```
1. HeroBanner
2. CompanyThesis (nuevo — no existe en sitio actual)
3. FeaturedProjects
4. RecentNews
5. LatestPresentation
6. LeadershipScroll
7. StockBar (nuevo)
```

---

**Sección 1 — HeroBanner**

Objetivo: captura de atención, posicionamiento de marca, primera impresión.

Contenido:
- Headline principal de la empresa
- Sub-headline: propuesta de valor ("copper and gold in Chile and Argentina")
- CTA primario: "View Projects" → /projects
- CTA secundario: "Latest Presentation" → /investors/presentations
- Imagen de fondo: foto de proyecto o paisaje minero

Fuente de datos: `src/data/siteConfig.ts` (headline, sub-headline, CTAs configurables)

---

**Sección 2 — CompanyThesis** *(Nueva sección recomendada)*

Objetivo: en 3 bullet points visuales, comunicar el "por qué Fitzroy" a un inversionista que llega por primera vez. No existe en el sitio actual pero es estándar en junior miners bien diseñados.

Contenido:
- 3 pilares estratégicos (ej: "Shallow systems", "Infrastructure-advantaged", "Experienced team")
- Cada pilar: ícono, título corto, 1-2 frases

Fuente de datos: `src/data/siteConfig.ts` (array `thesis[]`)

---

**Sección 3 — FeaturedProjects**

Objetivo: mostrar los activos clave. Guiar al usuario técnico hacia los proyectos.

Contenido:
- Grid de 2-3 ProjectCards
- Cada card: imagen, nombre, stage badge, país, 1 highlight
- CTA: "All Projects" → /projects

Fuente de datos: `getCollection('projects', ({ data }) => data.featured === true)` ordenado por `data.order`

---

**Sección 4 — RecentNews**

Objetivo: demostrar actividad corporativa reciente.

Contenido:
- 3 últimas noticias no-draft
- Cada item: título, fecha, categoría badge, link "Read more"
- CTA: "All News" → /news

Fuente de datos: `getCollection('news', ({ data }) => !data.draft)` ordenado por `data.date desc`, slice 3

---

**Sección 5 — LatestPresentation**

Objetivo: el documento más importante para inversionistas, accesible en un click desde Home.

Contenido:
- Imagen de fondo
- Título "Latest Corporate Presentation"
- Fecha de la presentación
- CTA: "Download PDF" → abre PDF en nueva pestaña

Fuente de datos: `getCollection('documents', ...)` filtrado por `category === 'corporate-presentation'` y `featured === true`, primer resultado por `date desc`

---

**Sección 6 — LeadershipScroll**

Objetivo: credibilidad — mostrar el equipo.

Contenido:
- Carrusel de PersonCards: foto (si disponible), nombre, rol, shortBio snippet
- CTA: "Full Team" → /about/leadership

Fuente de datos: `getCollection('people', ({ data }) => data.active)` ordenado por `data.order`

Implementación: `LeadershipScroll.svelte` con `client:visible`

---

**Sección 7 — StockBar** *(Nueva sección recomendada)*

Objetivo: inversionistas deben poder ver el estado de la acción desde Home.

Contenido:
- Ticker TSX-V: FTZ | Precio | Variación
- Ticker OTC: FTZFF | Precio | Variación
- Link: "Investor Relations" → /investors

Fuente de datos: `StockWidget.svelte` carga widget externo con `client:load`

---

## 10. Página de Proyecto — Plantilla Estándar

Esta plantilla se aplica a todos los proyectos mediante `ProjectLayout.astro` + `/projects/[slug].astro`.

### 10.1 Estructura

```
ProjectHero
  ├── Imagen de fondo (data.coverImage)
  ├── Nombre del proyecto (data.title)
  ├── País + Región (data.country, data.region)
  ├── Stage badge (data.stage)
  └── 3-4 highlights clave (data.highlights[])

ProjectHighlights
  └── Grid visual de highlights (data.highlights[])

ProjectOverview (tabla de datos operativos)
  ├── Área (data.areaSqKm)
  ├── Ownership (data.ownership)
  ├── Commodities (data.commodities[])
  └── Coordenadas (data.coordinates)

[body MDX — geología, historia, resultados]
  ├── ProjectGeology (sección del MDX)
  └── ProjectResults (sección del MDX, puede incluir tablas de assays)

ProjectGallery (Svelte island)
  └── Fotos de campo, mapas, secciones geológicas

RelatedNews
  └── Noticias con relatedProject === slug

ProjectDownloads
  └── Documentos con relatedProject === slug (Technical Report, mapas)
```

### 10.2 Fuente de Datos por Sección

| Sección | Fuente | Tipo |
|---|---|---|
| Hero | frontmatter del .mdx | Content Collection |
| Highlights | frontmatter `highlights[]` | Content Collection |
| Overview | frontmatter (área, ownership, coords) | Content Collection |
| Geology | body del .mdx | MDX Content |
| Results | body del .mdx (tablas de assays) | MDX Content |
| Gallery | frontmatter o carpeta de assets | Assets / frontmatter |
| Related News | getCollection('news') filtrado por relatedProject | Content Collection |
| Downloads | getCollection('documents') filtrado por relatedProject | Content Collection |

---

## 11. Página Investors — Hub de IR

La página `/investors` es el punto de entrada para todos los usuarios con intención financiera. Debe funcionar como dashboard de IR, no como índice de links.

### 11.1 Estructura

```
InvestorsHero
  ├── Headline: "Investor Relations"
  └── Ticker summary rápido (StockWidget)

QuickLinks (acceso rápido a sub-secciones)
  └── Grid de 8 iconos/cards: Stock · Share Structure · Presentations · Financials · Technical Reports · AGM · Media · LIFE Offering

StockSnapshot (más detallado que Home)
  ├── TSX-V: FTZ — precio, volumen, 52-week range
  └── OTC: FTZFF — precio, volumen

ShareStructureSummary
  ├── Tabla: Issued & Outstanding, Options, Warrants, Fully Diluted
  └── "As of [date]" — fecha del dato
  └── CTA: "Full Share Structure" → /investors/share-structure

LatestPresentations (3 más recientes)
  └── CTA: "All Presentations" → /investors/presentations

LatestFinancials (último quarter)
  ├── Periodo + link FS
  └── Periodo + link MDA
  └── CTA: "All Financials" → /investors/financials

TechnicalReports
  └── NI 43-101 Buen Retiro + link descarga

AGMSummary
  ├── Fecha próximo/último AGM
  ├── Ubicación
  └── CTA: "AGM Materials" → /investors/agm

ContactIR
  └── Email CEO/IR, teléfono
```

### 11.2 Sub-páginas de IR

Cada sub-página tiene layout uniforme via `InvestorsLayout.astro`:

- `/investors/stock` — StockWidget completo (dos tickers con charts históricos)
- `/investors/share-structure` — ShareStructureTable completa + notas
- `/investors/presentations` — grid de PresentationCards ordenadas por fecha desc
- `/investors/financials` — FinancialTable agrupada por año fiscal
- `/investors/technical-reports` — DocumentList filtrada por categoría
- `/investors/agm` — descripción del meeting + DocumentList de materiales
- `/investors/media` — listado de videos, cartas, artículos externos por tipo
- `/investors/life-offering` — LifeOfferingGate (Svelte island)

---

## 12. SEO

### 12.1 Metadata Strategy

Cada página define su propia metadata. La estrategia usa tres niveles de defaults:

**Nivel 1 — Default global** (`src/data/siteConfig.ts`):
```typescript
export const siteConfig = {
  siteName: "Fitzroy Minerals",
  defaultTitle: "Fitzroy Minerals | Copper & Gold Exploration in Chile and Argentina",
  defaultDescription: "Fitzroy Minerals is focused on exploring and advancing commercial copper and gold discoveries in Chile and Argentina.",
  siteUrl: "https://fitzroyminerals.com",
  twitterHandle: "@fitzroyminerals",
};
```

**Nivel 2 — Por página** (en `BaseLayout.astro`):
- `<title>`: `${pageTitle} | Fitzroy Minerals` o default si no hay pageTitle
- `<meta name="description">`: description de la página o defaultDescription
- `<link rel="canonical">`: siempre explícito, derivado de la ruta

**Nivel 3 — Por Content Collection** (automático desde frontmatter):
- Noticias: `title` del news release, `summary` como description
- Proyectos: `title` del proyecto, primeras 2 frases del body como description
- Personas: no tienen página propia, no requieren meta

### 12.2 OpenGraph Strategy

```html
<!-- En BaseLayout.astro, para todas las páginas -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Fitzroy Minerals" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:image" content={ogImage ?? defaultOgImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@fitzroyminerals" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage ?? defaultOgImage} />
```

**OG Images:** Fitzroy debe tener al menos:
- Una imagen OG default para Home e páginas sin imagen específica
- Una imagen OG por proyecto (usar el `coverImage`)
- Una imagen OG para news releases (branded template con logo + título)

### 12.3 Schema.org Recomendado

| Página | Schema | Justificación |
|---|---|---|
| Home | `Organization` | Establece identidad corporativa en Knowledge Graph |
| /about/leadership | `Person` (por cada person) | Mejora rich results para búsquedas de ejecutivos |
| /projects/[slug] | `Place` + custom | Geoposiciona el proyecto |
| /news/[slug] | `NewsArticle` | Elegibilidad para rich results de noticias |
| /investors/financials | `FinancialProduct` (parcial) | Contexto bursátil |
| Todas | `BreadcrumbList` | Sitelinks en SERP |

**Implementación mínima — Organization en Home:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fitzroy Minerals Ltd.",
  "url": "https://fitzroyminerals.com",
  "logo": "https://fitzroyminerals.com/logo.png",
  "sameAs": [
    "https://finance.yahoo.com/quote/FTZ.V/",
    "https://www.sedarplus.ca/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 1400 – 1050 West Pender Street",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "postalCode": "V6E 3S7",
    "addressCountry": "CA"
  }
}
```

### 12.4 Sitemap

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fitzroyminerals.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        // Las páginas dinámicas se incluyen automáticamente
      ],
      filter: (page) =>
        // Excluir LIFE offering de sitemap (contenido gated)
        !page.includes('/life-offering'),
    }),
  ],
});
```

### 12.5 robots.txt

```
User-agent: *
Allow: /

# No indexar el offering gated
Disallow: /investors/life-offering

Sitemap: https://fitzroyminerals.com/sitemap-index.xml
```

### 12.6 Canonical URLs

Regla: cada página tiene exactamente una canonical URL.

- Todas las páginas estáticas: canonical = URL de la ruta
- Páginas dinámicas `/news/[slug]` y `/projects/[slug]`: canonical generado desde `Astro.url`
- No hay paginación en v1 (toda la news en una sola página con filtro client-side), por lo que no hay canonical de paginación
- Asegurar `trailing slash` consistente (Astro config: `trailingSlash: 'never'`)

---

## 13. Performance

### 13.1 Image Optimization

Usar `<Image />` de `astro:assets` para todas las imágenes en `src/assets/`:

```astro
---
import { Image } from 'astro:assets';
import heroImg from '../assets/images/projects/buen-retiro/hero.jpg';
---
<Image
  src={heroImg}
  alt="Vista aérea del proyecto Buen Retiro, Región de Atacama"
  width={1200}
  height={600}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

**Estrategia:**
- Imágenes above-the-fold (hero): `loading="eager"`, `fetchpriority="high"`
- Imágenes below-the-fold: `loading="lazy"` (default)
- Formato: WebP como default, Astro genera automáticamente
- Srcset: Astro genera automáticamente múltiples tamaños
- PDFs: no se procesan — deben estar en storage externo o en `public/` sin optimización de imagen

### 13.2 Hydration Strategy

Regla: **JavaScript sólo cuando hay interacción de usuario**. El 80% del sitio debe funcionar con 0 JS de runtime.

| Componente | Directiva | Justificación |
|---|---|---|
| `MobileMenu.svelte` | `client:load` | Necesario desde el primer render en mobile |
| `StockWidget.svelte` | `client:load` | El precio bursátil es la razón principal de la visita IR |
| `LifeOfferingGate.svelte` | `client:load` | Interacción requerida antes de mostrar contenido |
| `NewsFilter.svelte` | `client:load` | El filtro debe estar disponible inmediatamente |
| `LeadershipScroll.svelte` | `client:visible` | Carrusel no está en el viewport inicial |
| `ProjectGallery.svelte` | `client:visible` | La galería está siempre below the fold |

### 13.3 Island Architecture

El patrón de islands de Astro significa que cada componente Svelte es hidratado de forma independiente. Implicaciones arquitecturales:

- Los islands no comparten estado entre sí a menos que se use un store explícito (nanostores).
- `NewsFilter.svelte` recibe el array completo de noticias como prop en build time — no hace fetch. El filtrado ocurre en memoria del cliente. Esto evita requests en runtime y mantiene la funcionalidad con 0 API calls.
- Si en el futuro se requiere un buscador de noticias más sofisticado, se puede implementar con Pagefind (static search) sin cambiar la arquitectura base.

### 13.4 Lazy Loading

**Documentos (PDFs):**
- Los PDFs nunca se cargan en el build. Son links externos (URL en el campo `fileUrl` de la colección `documents`).
- Se recomienda hostear PDFs en un CDN dedicado (AWS S3 + CloudFront, o similar) separado del sitio estático, para no inflar el bundle de build ni penalizar el LCP.
- Los DocumentCards muestran un thumbnail lightweight (JPEG optimizado) y sólo cargan el PDF cuando el usuario hace click.

**Videos:**
- Los items de tipo `video` en la colección `media` deben ser links externos (YouTube, Vimeo).
- No embebir iframes de video por defecto — usar un componente `VideoThumbnail.svelte` con `client:visible` que muestra thumbnail + play button y sólo carga el iframe al click (facade pattern).

### 13.5 Bundle y Build

```javascript
// astro.config.mjs — optimizaciones recomendadas
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',  // CSS pequeño inline, grande en archivo
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Si Svelte crece, separar en chunk propio
            // svelte: ['svelte']
          },
        },
      },
    },
  },
});
```

**Objetivos de performance (Core Web Vitals):**
- LCP < 2.5s (hero image con `loading="eager"` y `fetchpriority="high"`)
- CLS < 0.1 (dimensiones explícitas en todas las imágenes)
- INP < 200ms (islands minimal, sin renders costosos)

---

## 14. Fases de Implementación

### Phase 1 — Fundación del Proyecto
**Duración estimada:** 1 semana

**Objetivos:**
- Configurar el proyecto Astro con TypeScript
- Establecer estructura de carpetas exacta de Sección 5
- Configurar Content Collections (schema completo de `src/content/config.ts`)
- Configurar data layer (`src/data/*.ts`)
- Configurar integraciones: `@astrojs/sitemap`, `@astrojs/svelte`
- Establecer variables de entorno y `siteConfig.ts`

**Entregables:**
- Repositorio Git inicializado con estructura completa
- `src/content/config.ts` con todos los schemas definidos y validados
- `src/data/` con todos los archivos TypeScript de configuración
- `astro.config.mjs` con todas las integraciones configuradas
- `.env.example` documentado

**Criterios de éxito:**
- `npm run build` sin errores
- TypeScript sin errores (`tsc --noEmit`)
- Content Collections válidas con al menos 1 entry de prueba por colección

---

### Phase 2 — Contenido Inicial
**Duración estimada:** 1 semana

**Objetivos:**
- Migrar todo el contenido existente del sitio actual a las Content Collections
- Crear todas las entries de `people` (9 personas)
- Crear todas las entries de `projects` (todos los proyectos activos)
- Crear entries de `documents` para presentaciones y financials disponibles
- Poblar `shareStructure.ts` y `contactInfo.ts`
- Migrar noticias más recientes (últimas 20-30)

**Entregables:**
- 9 archivos `.md` en `src/content/people/`
- N archivos `.mdx` en `src/content/projects/` (uno por proyecto)
- N archivos `.yaml` en `src/content/documents/`
- Noticias migradas en `src/content/news/`
- PDFs subidos a storage definitivo con URLs correctas en `fileUrl`

**Criterios de éxito:**
- `getCollection('people')` retorna los 9 directivos con todos los campos válidos
- `getCollection('projects')` retorna todos los proyectos sin errores de schema
- `getCollection('documents')` retorna documentos con URLs funcionales (testear 5 manualmente)
- Noticias migradas con categorías correctamente asignadas

---

### Phase 3 — Layouts y Componentes Base
**Duración estimada:** 1-2 semanas

**Objetivos:**
- Implementar `BaseLayout.astro` con head completo (SEO, OG, Schema.org)
- Implementar `PageLayout.astro`, `InvestorsLayout.astro`, `NewsLayout.astro`, `ProjectLayout.astro`
- Implementar componentes globales: `Header.astro`, `Footer.astro`, `MainNav.astro`
- Implementar `MobileMenu.svelte` (primer island)
- Implementar componentes UI primitivos: Button, Badge, Breadcrumbs, SectionHeader

**Entregables:**
- Todos los layouts funcionales
- Header + Footer + Nav responsive funcionando
- MobileMenu.svelte con apertura/cierre
- Componentes UI testeados visualmente

**Criterios de éxito:**
- Lighthouse Accessibility > 90 en página de prueba con los layouts
- Sin errores de consola en desktop y mobile
- Menú mobile funcional en iOS Safari y Android Chrome

---

### Phase 4 — Proyectos
**Duración estimada:** 1-2 semanas

**Objetivos:**
- Implementar `/projects` (índice con grid de ProjectCards)
- Implementar `/projects/[slug]` (página dinámica con ProjectLayout)
- Implementar todos los Project Components (Hero, Highlights, Overview, Gallery, Downloads)
- Implementar `ProjectGallery.svelte`
- Relacionar noticias y documentos con proyectos

**Entregables:**
- Página de índice `/projects` con todos los proyectos activos
- Página de detalle para cada proyecto generada en build time
- Galería con lightbox funcional
- Sección de downloads con PDFs vinculados
- Sección de related news funcional

**Criterios de éxito:**
- `getStaticPaths` genera una ruta por cada proyecto en la colección
- Cada proyecto muestra datos correctos desde su frontmatter
- PDFs abren en nueva pestaña sin descarga forzada
- Imágenes del proyecto optimizadas (WebP, lazy loading)

---

### Phase 5 — Investors Hub
**Duración estimada:** 2 semanas

**Objetivos:**
- Implementar `/investors` (hub dashboard)
- Implementar todas las 8 sub-páginas de IR
- Implementar `StockWidget.svelte` (integración con servicio de cotizaciones)
- Implementar `ShareStructureTable.astro`
- Implementar `FinancialTable.astro` y `DocumentList.astro`
- Implementar `LifeOfferingGate.svelte`
- Implementar `PresentationCard.astro` con thumbnails

**Entregables:**
- Hub `/investors` con todas las secciones del Punto 11
- 8 sub-páginas de IR funcionando
- Stock widget mostrando FTZ y FTZFF
- LIFE Offering gate funcional
- Financials agrupados por año y quarter

**Criterios de éxito:**
- Todos los documentos en cada categoría se listan correctamente
- Stock widget carga sin bloquear el LCP
- LifeOfferingGate oculta el documento tras seleccionar "No"
- FinancialTable muestra FS y MDA por separado con links correctos

---

### Phase 6 — News
**Duración estimada:** 1 semana

**Objetivos:**
- Implementar `/news` (índice con NewsFilter)
- Implementar `/news/[slug]` (página de artículo con NewsLayout)
- Implementar `NewsFilter.svelte` (filtro client-side por categoría)
- Implementar `RelatedNews.astro`
- Migrar todas las noticias históricas restantes

**Entregables:**
- Página de índice `/news` con todas las noticias
- NewsFilter funcional por las 7 categorías
- Página individual para cada noticia
- Link de descarga PDF en cada noticia que lo tenga
- Related news basado en misma categoría o mismo proyecto relacionado

**Criterios de éxito:**
- `getStaticPaths` genera una ruta por cada noticia no-draft
- NewsFilter filtra correctamente las 7 categorías
- Noticias con PDF muestran botón de descarga funcional
- Canonical URL correcta en cada noticia

---

### Phase 7 — Home y About
**Duración estimada:** 1 semana

**Objetivos:**
- Implementar Home completa (7 secciones del Punto 9)
- Implementar `LeadershipScroll.svelte`
- Implementar `/about` (resumen corporativo)
- Implementar `/about/leadership` (grid de PersonBios)
- Implementar `/about/corporate` (directorio corporativo)
- Implementar `/contact` con formulario de suscripción

**Entregables:**
- Home completa y funcional con todas las secciones
- Carrusel de liderazgo funcional
- Páginas About con toda la información corporativa migrada
- Página de contacto con info y formulario de suscripción

**Criterios de éxito:**
- Home muestra proyectos featured, noticias recientes y presentación latest correctamente
- LeadershipScroll funciona en mobile
- Todas las personas aparecen en /about/leadership con bio completa
- Información de contacto es idéntica a la fuente de datos tipada

---

### Phase 8 — SEO, Legal y Refinamiento
**Duración estimada:** 1 semana

**Objetivos:**
- Implementar schema.org en todas las páginas (Organization, NewsArticle, BreadcrumbList, Person)
- Verificar canonical URLs en todas las rutas
- Implementar `robots.txt` y verificar sitemap generado
- Migrar y publicar páginas legales (`/legal/privacy-policy`, `/legal/disclaimer`)
- Implementar redirects del sitio antiguo
- Revisión de Lighthouse en las 5 páginas más críticas (Home, /projects/buen-retiro, /investors, /news, /about/leadership)
- Testeo cross-browser (Safari, Chrome, Firefox, Edge)
- Testeo de accesibilidad: navegación por teclado, screen reader spot-check

**Entregables:**
- Schema.org implementado y validado en Google Rich Results Test
- Sitemap validado y sin URLs rotas
- Redirects configurados y testeados
- Páginas legales publicadas y accesibles desde footer
- Informe Lighthouse: todas las páginas críticas > 90 en Performance, Accessibility, SEO
- Documentación de mantenimiento: cómo agregar noticias, proyectos, documentos

**Criterios de éxito:**
- 0 errores en Google Search Console tras indexación inicial
- LCP < 2.5s en Home y páginas de proyecto
- 0 broken links internos (`astro check` + link checker)
- Schema.org válido en Rich Results Test para NewsArticle y Organization
- Todos los redirects del sitio antiguo retornan 301, no 404

---

### Phase 9 — Deployment
**Duración estimada:** 3-5 días

**Objetivos:**
- Configurar pipeline de build y deploy (Netlify, Vercel, o Cloudflare Pages)
- Configurar dominio `fitzroyminerals.com` apuntando al nuevo sitio
- Configurar CDN para PDFs si no estaba configurado antes
- Configurar Google Search Console y verificar propiedad
- Configurar Google Analytics 4 (o alternativa privacy-first como Plausible)
- Cutover de DNS y verificación post-deploy

**Entregables:**
- Sitio en producción en la URL definitiva
- CI/CD funcionando: merge a `main` = deploy automático
- Analytics configurado y recibiendo datos
- Search Console verificado y sitemap enviado
- Monitoreo de uptime configurado

**Criterios de éxito:**
- Sitio accesible en `https://fitzroyminerals.com` con SSL
- 0 errores 404 para las rutas del sitio anterior (redirects funcionando)
- Primera sesión de Analytics registrada correctamente
- Sitemap enviado a Search Console sin errores
- Time-to-first-byte < 200ms (Cloudflare Pages o Netlify Edge Network)

---

*— Fin del documento de arquitectura v1.0 —*
*Fitzroy Minerals Web Rebuild · Arquitectura de Información y Diseño Técnico*
