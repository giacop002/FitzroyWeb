export const siteConfig = {
  siteName: 'Fitzroy Minerals',
  defaultTitle: 'Fitzroy Minerals | Copper & Gold Exploration in Chile and Argentina',
  defaultDescription:
    'Fitzroy Minerals is focused on exploring and advancing commercial copper and gold discoveries in Chile and Argentina.',
  siteUrl: 'https://fitzroyminerals.com',
  twitterHandle: '@fitzroyminerals',
  defaultOgImage: '/og-default.jpg',

  // Thesis pillars — shown in the CompanyThesis section on Home
  thesis: [
    {
      title: 'Shallow, High-Grade Systems',
      description:
        'Focused on shallow copper-gold porphyry targets with good grade and simple oxide-sulphide metallurgy.',
    },
    {
      title: 'Infrastructure-Advantaged',
      description:
        'Projects located close to roads, power, and water — reducing capital requirements for future development.',
    },
    {
      title: 'Experienced Team',
      description:
        'Management and advisors with decades of discovery and development experience in the Americas.',
    },
  ],
} as const;
