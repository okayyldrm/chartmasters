"use client";

import { useEffect, useState } from "react";

type CoinData = {
  usd: number;
  usd_24h_change: number;
};

type MarketData = {
  bitcoin?: CoinData;
  ethereum?: CoinData;
};

type FearGreedData = {
  value: string;
  value_classification: string;
};

export default function MarketBar() {
  const [marketData, setMarketData] = useState<MarketData>({});
  const [btcDominance, setBtcDominance] = useState<number | null>(null);
  const [fearGreed, setFearGreed] = useState<FearGreedData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMarketData() {
      try {
        const [priceResponse, globalResponse, fearGreedResponse] =
          await Promise.all([
            fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
            ),
            fetch("https://api.coingecko.com/api/v3/global"),
            fetch("https://api.alternative.me/fng/?limit=1"),
          ]);

        if (!priceResponse.ok) {
          throw new Error("Fiyat verileri alınamadı.");
        }

        const priceData: MarketData = await priceResponse.json();
        setMarketData(priceData);

        if (globalResponse.ok) {
          const globalData = await globalResponse.json();

          setBtcDominance(
            globalData.data?.market_cap_percentage?.btc ?? null
          );
        }

        if (fearGreedResponse.ok) {
          const fearGreedData = await fearGreedResponse.json();

          setFearGreed(fearGreedData.data?.[0] ?? null);
        }
      } catch (error) {
        console.error("Piyasa verisi hatası:", error);
      } finally {
        setLoading(false);
      }
    }

    getMarketData();

    const interval = setInterval(getMarketData, 60000);

    return () => clearInterval(interval);
  }, []);

  function formatPrice(price?: number) {
    if (price === undefined) return "Veri alınamadı";

    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: price >= 1000 ? 0 : 2,
    }).format(price);
  }

  function formatChange(change?: number) {
    if (change === undefined) return "";

    return `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`;
  }

  function translateFearGreed(value?: string) {
    const translations: Record<string, string> = {
      "Extreme Fear": "Aşırı Korku",
      Fear: "Korku",
      Neutral: "Nötr",
      Greed: "Açgözlülük",
      "Extreme Greed": "Aşırı Açgözlülük",
    };

    return translations[value ?? ""] ?? value ?? "Veri alınamadı";
  }

  function fearGreedColor(value?: string) {
    const score = Number(value);

    if (score <= 24) return "text-red-400";
    if (score <= 44) return "text-orange-400";
    if (score <= 54) return "text-yellow-400";
    if (score <= 74) return "text-emerald-400";

    return "text-green-400";
  }

  const markets = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: marketData.bitcoin?.usd,
      change: marketData.bitcoin?.usd_24h_change,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: marketData.ethereum?.usd,
      change: marketData.ethereum?.usd_24h_change,
    },
  ];

  return (
    <section className="border-y border-white/10 bg-zinc-950/80 px-6 py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {markets.map((market) => (
          <div
            key={market.symbol}
            className="rounded-2xl border border-white/10 bg-black p-5 transition hover:border-emerald-400/30"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-white">{market.name}</p>

              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                {market.symbol}
              </span>
            </div>

            <p className="mt-4 text-xl font-bold">
              {loading ? "Yükleniyor..." : formatPrice(market.price)}
            </p>

            {!loading && (
              <p
                className={`mt-2 text-sm font-semibold ${
                  (market.change ?? 0) >= 0
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {formatChange(market.change)}
              </p>
            )}
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-black p-5 transition hover:border-emerald-400/30">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-white">BTC Dominansı</p>

            <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              BTC.D
            </span>
          </div>

          <p className="mt-4 text-xl font-bold">
            {loading
              ? "Yükleniyor..."
              : btcDominance !== null
                ? `%${btcDominance.toFixed(2)}`
                : "Veri alınamadı"}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Toplam piyasa değeri içindeki payı
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black p-5 transition hover:border-emerald-400/30">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-white">
              Korku ve Açgözlülük
            </p>

            <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              F&G
            </span>
          </div>

          <div className="mt-4 flex items-end gap-3">
            <p
              className={`text-3xl font-bold ${fearGreedColor(
                fearGreed?.value
              )}`}
            >
              {loading ? "..." : fearGreed?.value ?? "—"}
            </p>

            <p
              className={`pb-1 text-sm font-semibold ${fearGreedColor(
                fearGreed?.value
              )}`}
            >
              {loading
                ? "Yükleniyor..."
                : translateFearGreed(fearGreed?.value_classification)}
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-emerald-400 transition-all duration-700"
              style={{
                width: `${fearGreed?.value ?? 0}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}