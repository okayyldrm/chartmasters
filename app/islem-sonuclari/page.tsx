"use client";

import { useState } from "react";

const trades = [
  {
    symbol: "BTC",
    direction: "LONG",
    source: "Logar",
    entry: "112.400",
    exit: "116.850",
    result: "+3.96%",
    status: "Kâr",
    date: "03 Ağustos 2026",
  },
  {
    symbol: "ETH",
    direction: "LONG",
    source: "CM Sinyal Botu",
    entry: "3.420",
    exit: "3.575",
    result: "+4.53%",
    status: "Kâr",
    date: "01 Ağustos 2026",
  },
  {
    symbol: "SOL",
    direction: "SHORT",
    source: "CM Sinyal Botu",
    entry: "185.20",
    exit: "191.10",
    result: "-3.19%",
    status: "Stop",
    date: "29 Temmuz 2026",
  },
  {
    symbol: "ZEC",
    direction: "LONG",
    source: "Logar",
    entry: "46.80",
    exit: "51.40",
    result: "+9.83%",
    status: "Kâr",
    date: "27 Temmuz 2026",
  },
];
const totalTrades = trades.length;

const successfulTrades = trades.filter(
  (trade) => trade.status === "Kâr"
).length;

const successRate =
  totalTrades > 0
    ? ((successfulTrades / totalTrades) * 100).toFixed(1)
    : "0";

const totalResult = trades.reduce((total, trade) => {
  const numericResult = Number(
    trade.result.replace("%", "").replace("+", "").replace(",", ".")
  );

  return total + numericResult;
}, 0);
export default function IslemSonuclariPage() {
    const [activeFilter, setActiveFilter] = useState("Tümü");

const filteredTrades = trades.filter((trade) => {
  if (activeFilter === "Tümü") return true;
  if (activeFilter === "Logar") return trade.source === "Logar";
  if (activeFilter === "CM Sinyal Botu")
    return trade.source === "CM Sinyal Botu";
  if (activeFilter === "Kâr") return trade.status === "Kâr";
  if (activeFilter === "Stop") return trade.status === "Stop";

  return true;
});
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10 px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-sm font-black text-emerald-400">
              CM
            </span>

            <span className="text-2xl font-bold tracking-tight">
              CHART<span className="text-emerald-400">MASTERS</span>
            </span>
          </a>

          <a
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Ana Sayfa
          </a>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              ChartMasters Performansı
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              İşlem sonuçları
            </h1>

            <p className="mt-6 leading-8 text-zinc-400">
              Paylaşılan işlem senaryolarının giriş, kapanış ve sonuç
              bilgilerini şeffaf şekilde inceleyebilirsin.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm text-zinc-500">Toplam İşlem</p>
              <p className="mt-3 text-4xl font-bold">24</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm text-zinc-500">Başarılı İşlem</p>
              <p className="mt-3 text-4xl font-bold text-emerald-400">18</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm text-zinc-500">Başarı Oranı</p>
              <p className="mt-3 text-4xl font-bold text-emerald-400">%75</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm text-zinc-500">Toplam Sonuç</p>
              <p className="mt-3 text-4xl font-bold text-emerald-400">
                +31.45%
              </p>
            </div>
          </div>
<div className="mt-10 flex flex-wrap gap-3">
  {["Tümü", "Logar", "CM Sinyal Botu", "Kâr", "Stop"].map((filter) => (
    <button
      key={filter}
      type="button"
      onClick={() => setActiveFilter(filter)}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
        activeFilter === filter
          ? "bg-emerald-400 text-black"
          : "border border-white/10 bg-zinc-950 text-zinc-400 hover:border-emerald-400/30 hover:text-white"
      }`}
    >
      {filter}
    </button>
  ))}
</div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
            <div className="overflow-x-auto">
<table className="w-full min-w-[1000px] text-left"><thead className="border-b border-white/10 bg-black">
                  <tr className="text-sm text-zinc-500">
                    <th className="px-6 py-5 font-medium">Varlık</th>
<th className="px-6 py-5 font-medium">Kaynak</th>
<th className="px-6 py-5 font-medium">Yön</th>
<th className="px-6 py-5 font-medium">Giriş</th>
<th className="px-6 py-5 font-medium">Kapanış</th>
<th className="px-6 py-5 font-medium">Sonuç</th>
<th className="px-6 py-5 font-medium">Durum</th>
<th className="px-6 py-5 font-medium">Tarih</th>
                  </tr>
                </thead>

                <tbody>
{filteredTrades.map((trade) => (                    <tr
                      key={`${trade.symbol}-${trade.date}`}
                      className="border-b border-white/5 transition hover:bg-white/[0.03]"
                    >
                      <td className="px-6 py-5 font-bold">{trade.symbol}</td>
<td className="px-6 py-5">
  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      trade.source === "CM Sinyal Botu"
        ? "bg-blue-400/10 text-blue-400"
        : "bg-purple-400/10 text-purple-400"
    }`}
  >
    {trade.source}
  </span>
</td>
                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            trade.direction === "LONG"
                              ? "bg-emerald-400/10 text-emerald-400"
                              : "bg-red-400/10 text-red-400"
                          }`}
                        >
                          {trade.direction}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-zinc-300">
                        {trade.entry}
                      </td>

                      <td className="px-6 py-5 text-zinc-300">
                        {trade.exit}
                      </td>

                      <td
                        className={`px-6 py-5 font-semibold ${
                          trade.status === "Kâr"
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {trade.result}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            trade.status === "Kâr"
                              ? "bg-emerald-400/10 text-emerald-400"
                              : "bg-red-400/10 text-red-400"
                          }`}
                        >
                          {trade.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-500">
                        {trade.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Tüm işlemleri anlık takip et
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-300">
              Güncel işlem senaryoları, piyasa analizleri ve özel içerikler
              ChartMasters topluluğunda paylaşılmaktadır.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex rounded-full bg-emerald-400 px-8 py-4 font-semibold text-black transition hover:bg-emerald-300"
            >
              Topluluğa Katıl
            </a>
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-zinc-600">
            Geçmiş performans gelecekteki sonuçların garantisi değildir.
            Paylaşımlar yatırım tavsiyesi değildir.
          </p>
        </div>
      </section>
    </main>
  );
}