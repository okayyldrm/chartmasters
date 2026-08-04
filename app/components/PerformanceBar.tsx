const stats = [
  {
    label: "Toplam İşlem",
    value: "4",
  },
  {
    label: "Başarı Oranı",
    value: "%75",
  },
  {
    label: "Kârlı İşlem",
    value: "3",
  },
  {
    label: "Stop",
    value: "1",
  },
];

export default function PerformanceBar() {
  return (
    <section className="relative z-20 px-6">
      <div className="mx-auto -mt-3 max-w-4xl">
        <a
          href="/islem-sonuclari"
          className="group block rounded-[2rem] border border-white/10 bg-black/75 p-5 shadow-[0_20px_80px_rgba(16,185,129,0.12)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-sm">
                    📊
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                      Canlı Performans
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      ChartMasters işlem sonuçları
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />

                <span className="text-xs font-semibold text-emerald-400">
                  Güncel
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-center"
                >
                  <p
                    className={`text-2xl font-black ${
                      stat.label === "Stop"
                        ? "text-red-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <p className="text-xs text-zinc-600">
                Geçmiş performans gelecekteki sonuçların garantisi değildir.
              </p>

              <span className="shrink-0 text-sm font-semibold text-zinc-300 transition group-hover:text-emerald-400">
                Sonuçları incele →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}