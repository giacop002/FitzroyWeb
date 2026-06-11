export const stockTickers = {
  tsxv: {
    symbol: 'FTZ',
    exchange: 'TSX-V',
    label: 'TSX-V: FTZ',
    country: 'Canada',
    quoteUrl: 'https://www.tsx.com/trading/market-data-and-statistics/market-data/listed-company-directory/company-details/?intlsymbol=FTZ',
    sedarUrl: 'https://www.sedarplus.ca/csa-party/party/company.html?partyId=303739',
  },
  otc: {
    symbol: 'FTZFF',
    exchange: 'OTC',
    label: 'OTC: FTZFF',
    country: 'United States',
    quoteUrl: 'https://www.otcmarkets.com/stock/FTZFF/quote',
    sedarUrl: null,
  },
} as const;

export type StockTickers = typeof stockTickers;
