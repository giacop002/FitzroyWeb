export const config = { runtime: 'edge' };

const SYMBOLS = {
  ftz:   'FTZ.V',
  ftzff: 'FTZFF',
};

async function fetchPrice(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;
}

export default async function handler() {
  try {
    const [ftz, ftzff] = await Promise.all([
      fetchPrice(SYMBOLS.ftz),
      fetchPrice(SYMBOLS.ftzff),
    ]);

    if (!ftz || !ftzff) {
      return new Response(JSON.stringify({ error: 'fetch_failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ftz, ftzff }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=300',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'internal' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
