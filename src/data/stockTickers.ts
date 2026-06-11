export const stockTickers = [
  {
    symbol: 'FTZ',
    exchange: 'TSX-V',
    label: 'TSX-V: FTZ',
    country: 'Canada',
    sedarUrl: 'https://www.sedarplus.ca/csa-party/party/company.html?partyId=303739',
  },
  {
    symbol: 'FTZFF',
    exchange: 'OTC',
    label: 'OTC: FTZFF',
    country: 'United States',
    sedarUrl: null,
  },
] as const;

export type StockTicker = (typeof stockTickers)[number];
