export async function GET() {
  try {
    const [priceResponse, globalResponse, fearGreedResponse] =
      await Promise.all([
        fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
          {
            next: { revalidate: 60 },
          }
        ),
        fetch("https://api.coingecko.com/api/v3/global", {
          next: { revalidate: 60 },
        }),
        fetch("https://api.alternative.me/fng/?limit=1", {
          next: { revalidate: 300 },
        }),
      ]);

    if (!priceResponse.ok) {
      throw new Error(`CoinGecko fiyat hatası: ${priceResponse.status}`);
    }

    const priceData = await priceResponse.json();

    const globalData = globalResponse.ok
      ? await globalResponse.json()
      : null;

    const fearGreedData = fearGreedResponse.ok
      ? await fearGreedResponse.json()
      : null;

    return Response.json({
      bitcoin: priceData.bitcoin ?? null,
      ethereum: priceData.ethereum ?? null,
      btcDominance:
        globalData?.data?.market_cap_percentage?.btc ?? null,
      fearGreed: fearGreedData?.data?.[0] ?? null,
    });
  } catch (error) {
    console.error("Market API hatası:", error);

    return Response.json(
      {
        error: "Piyasa verileri alınamadı.",
      },
      {
        status: 500,
      }
    );
  }
}