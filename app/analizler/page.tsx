const analyses = [
  {
    symbol: "BTC",
    title: "Bitcoin Teknik Görünüm",
    direction: "Yükseliş Senaryosu",
    date: "04 Ağustos 2026",
    description:
      "Bitcoin için kritik destek ve direnç bölgeleri, olası kırılım senaryoları ve risk seviyeleri.",
  },
  {
    symbol: "ETH",
    title: "Ethereum Piyasa Analizi",
    direction: "Takip Ediliyor",
    date: "03 Ağustos 2026",
    description:
      "Ethereum fiyat yapısı, BTC karşısındaki görünümü ve önemli teknik seviyeler.",
  },
  {
    symbol: "TOTAL3",
    title: "Altcoin Piyasası Görünümü",
    direction: "Pozitif Görünüm",
    date: "02 Ağustos 2026",
    description:
      "Altcoin piyasa değeri, trend yapısı ve olası genişleme senaryoları.",
  },
];

export default function AnalizlerPage() {
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
              ChartMasters Analizleri
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Güncel piyasa analizleri
            </h1>

            <p className="mt-6 leading-8 text-zinc-400">
              Bitcoin, Ethereum, altcoin piyasası ve piyasa dominanslarına
              yönelik güncel teknik analizler.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {analyses.map((analysis) => (
              <article
                key={analysis.symbol}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                    {analysis.symbol}
                  </span>

                  <span className="text-xs text-zinc-600">
                    {analysis.date}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold">{analysis.title}</h2>

                <p className="mt-3 text-sm font-semibold text-emerald-400">
                  {analysis.direction}
                </p>

                <p className="mt-5 leading-7 text-zinc-400">
                  {analysis.description}
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex font-semibold text-white transition hover:text-emerald-400"
                >
                  Analizi İncele →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}