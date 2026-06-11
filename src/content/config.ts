import { defineCollection, z } from 'astro:content';

// ─── NEWS ────────────────────────────────────────────────────────────────────
// Press releases and corporate announcements. One .md file per release.

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
    summary: z.string().max(300),
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
    pdfUrl: z.string().url().optional(),
    relatedProject: z.string().optional(), // slug of related project
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// Mining project profiles. One .mdx file per project (MDX for drill tables etc.)

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
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
    ownership: z.string().optional(),
    coverImage: z.string(), // relative path inside src/assets/images/
    coordinates: z
      .object({
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
    highlights: z.array(z.string()),
    status: z.enum(['active', 'inactive']).default('active'),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    technicalReportUrl: z.string().url().optional(),
  }),
});

// ─── PEOPLE ──────────────────────────────────────────────────────────────────
// Directors, management, and technical advisors.
// Short bio in frontmatter (for cards); full bio in Markdown body.

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    roleCategory: z.enum(['board', 'management', 'technical-advisor']),
    shortBio: z.string().max(250),
    photo: z.string().optional(), // relative path inside src/assets/images/people/
    linkedin: z.string().url().optional(),
    order: z.number().default(99),
    active: z.boolean().default(true),
    otherRoles: z.array(z.string()).optional(),
  }),
});

// ─── DOCUMENTS ───────────────────────────────────────────────────────────────
// All downloadable documents: presentations, financials, technical reports,
// AGM materials, LIFE offerings. Stored as YAML data files (no body text).

const documents = defineCollection({
  type: 'data',
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
    relatedProject: z.string().optional(), // slug of related project
    featured: z.boolean().default(false),
    restricted: z.boolean().default(false), // true = LIFE offering gate
  }),
});

// ─── MEDIA ───────────────────────────────────────────────────────────────────
// Videos, shareholder letters, external articles, capital reports.
// External links only — no hosted content.

const media = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
    type: z.enum(['video', 'shareholder-letter', 'external-article', 'capital-report']),
    url: z.string().url(),
    description: z.string().optional(),
    source: z.string().optional(), // e.g. "Mining.com", "YouTube"
    thumbnailUrl: z.string().optional(),
  }),
});

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

export const collections = {
  news,
  projects,
  people,
  documents,
  media,
};
