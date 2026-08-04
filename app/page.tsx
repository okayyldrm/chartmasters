import MarketBar from "./components/MarketBar";
import PerformanceBar from "./components/PerformanceBar";

const features = [
  {
    icon: "📈",
    title: "Market Analizi",
    description:
      "Bitcoin, altcoin ve piyasa dominasyonlarına yönelik güncel teknik analizler.",
  },
  {
    icon: "🎯",
    title: "Trade Fikirleri",
    description:
      "Risk yönetimiyle birlikte paylaşılan long ve short işlem senaryoları.",
  },
  {
    icon: "🎓",
    title: "Eğitim",
    description:
      "Teknik analiz, psikoloji ve sermaye yönetimi üzerine eğitim içerikleri.",
  },
  {
    icon: "💬",
    title: "Özel Topluluk",
    description:
      "Deneyimli yatırımcıların bulunduğu aktif ve güçlü Telegram topluluğu.",
  },
  {
    icon: "⚡",
    title: "Instant Updates",
    description:
      "Piyasadaki kritik gelişmeler ve önemli haberler için hızlı bildirimler.",
  },
  {
    icon: "🛡️",
    title: "Risk Yönetimi",
    description:
      "Sermayeni korumana yardımcı olacak sistemli risk yönetimi yaklaşımı.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
  href="#"
  className="group flex items-center gap-3 text-2xl font-bold tracking-tight"
>
  <video
  autoPlay
  loop
  muted
  playsInline
  className="h-12 w-12 rounded-xl object-cover"
>
  <source src="/chartmasters-intro.mp4" type="video/mp4" />
</video>

  <span>
    CHART<span className="text-emerald-400">MASTERS</span>
  </span>
</a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#features" className="relative transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full">
              Özellikler
            </a>

            <a href="#community" className="transition hover:text-white">
              Topluluk
            </a>

            <a href="#membership" className="transition hover:text-white">
              Üyelik
            </a>

            <a href="#about" className="transition hover:text-white">
              Hakkımızda
            </a>
          </div>

          <a
            href="#community"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Topluluğa Katıl
          </a>
        </div>
      </nav>

      <section className="cm-grid-background relative overflow-hidden">
<div className="cm-glow-one pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-[40px]" />

<div className="cm-glow-two pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-cyan-500/30 blur-[40px]" />

<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
 <div className="mb-7 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
  Profesyonel Kripto Topluluğu
</div>

<h1 className="max-w-5xl text-5xl font-black leading-tight tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">  Piyasayı Takip Etme.
  <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.18)]">
    Piyasayı Okumayı Öğren.
  </span>
</h1>

<p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
  Güncel teknik analizler, eğitim içerikleri, işlem fikirleri ve profesyonel
  yatırımcılardan oluşan güçlü bir topluluk.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">            <a
  href="#community"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(16,185,129,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-lg"
>
  Topluluğa Katıl
</a>

<a
  href="#features"
  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
>
  Platformu İncele
</a>
          </div>

          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-3xl font-bold">5+</p>
              <p className="mt-2 text-sm text-zinc-500">
                5 yıllık deneyim
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-3xl font-bold">7/24</p>
              <p className="mt-2 text-sm text-zinc-500">Piyasa takibi</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-3xl font-bold">CM</p>
              <p className="mt-2 text-sm text-zinc-500">Tek ekosistem</p>
            </div>
          </div>
        </div>
      </section>
<section className="border-y border-white/10 bg-black">
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-5">
    <div className="flex items-center gap-3">
      <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

      <span className="text-sm font-bold tracking-[0.2em] text-emerald-400">
        CHARTMASTERS LIVE
      </span>
    </div>

    {[
      { title: "CM NEWS", value: "ACTIVE" },
      { title: "SIGNAL BOT", value: "ONLINE" },
      { title: "MARKET DATA", value: "LIVE" },
      { title: "SOCIAL REACH", value: "120K+" },
    ].map((item) => (
      <div key={item.title} className="flex items-center gap-2 text-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="text-zinc-500">{item.title}</span>
        <span className="font-semibold text-white">{item.value}</span>
      </div>
    ))}
  </div>
</section>

<MarketBar />
<PerformanceBar />
      <section
        id="features"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24"
      >
          <div className="relative mx-auto max-w-7xl">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[40px]" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[40px]" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Chartmasters Ekosistemi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Piyasada ilerlemek için ihtiyacın olan her şey
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Analiz, eğitim, topluluk ve risk yönetimi tek bir profesyonel platformda.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-xl"              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-2xl">
                  {feature.icon}
                </div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-zinc-500">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-12 bg-emerald-400 transition-all duration-300 group-hover:w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
  id="community"
  
  className="border-t border-white/10 bg-black px-6 py-24"
>
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
        ChartMasters Topluluğu
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Piyasayı yalnız takip etme.
        <span className="block text-emerald-400">
          Güçlü bir topluluğun parçası ol.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        ChartMasters, günlük analizlerin, piyasa haberlerinin, eğitim
        içeriklerinin ve işlem fikirlerinin tek yerde toplandığı aktif bir
        kripto topluluğudur.
      </p>

      <div className="mt-10 space-y-5">
        {[
          "Günlük Bitcoin ve altcoin analizleri",
          "Makroekonomik gelişmeler ve önemli haberler",
          "Risk yönetimi odaklı işlem senaryoları",
          "Teknik analiz ve piyasa psikolojisi eğitimleri",
        ].map((item) => (
          <div key={item} className="flex items-start gap-4">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-black">
              ✓
            </div>

            <p className="text-zinc-300">{item}</p>
          </div>
        ))}
      </div>

      <a
        href="#membership"
        className="mt-10 inline-flex rounded-full bg-emerald-400 px-8 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-300"
      >
        Topluluğa Katıl
      </a>
    </div>

    <div className="relative">
      <div className="absolute inset-0 rounded-[2rem] bg-emerald-500/20 blur-xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-sm text-zinc-500">ChartMasters</p>
            <h3 className="mt-1 text-xl font-semibold">Topluluk Akışı</h3>
          </div>

          <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400">
            Aktif
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-emerald-400">
                Bitcoin Analizi
              </p>
              <span className="text-xs text-zinc-600">09:30</span>
            </div>

            <p className="mt-3 leading-7 text-zinc-400">
              BTC önemli direnç bölgesine yaklaşıyor. Kırılım gelmeden işlem
              almak yerine fiyatın vereceği tepkiyi takip ediyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-blue-400">CM News</p>
              <span className="text-xs text-zinc-600">11:15</span>
            </div>

            <p className="mt-3 leading-7 text-zinc-400">
              Günün önemli ekonomik verileri, Fed açıklamaları ve kripto
              piyasasını etkileyebilecek gelişmeler anlık olarak paylaşılıyor.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-purple-400">
                Eğitim İçeriği
              </p>
              <span className="text-xs text-zinc-600">14:40</span>
            </div>

            <p className="mt-3 leading-7 text-zinc-400">
              Risk oranı, pozisyon büyüklüğü ve stop seviyesi belirlerken
              dikkat edilmesi gereken temel noktalar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="membership"
  className="border-t border-white/10 bg-zinc-950 px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
        Katılım Seçenekleri
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Sana uygun katılım yöntemini seç
      </h2>

      <p className="mt-6 leading-8 text-zinc-400">
        ChartMasters topluluğuna anlaşmalı borsalar üzerinden veya aylık
        üyelik yöntemiyle katılabilirsin.
      </p>
    </div>

    <div className="mt-14 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-black p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-400">
              Referanslı Katılım
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Anlaşmalı Borsa Üzerinden
            </h3>
          </div>

          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
            Önerilen
          </div>
        </div>

        <p className="mt-6 leading-8 text-zinc-400">
          Anlaşmalı borsalardan birine ChartMasters referans bağlantısıyla
          kayıt olarak topluluğa katılabilirsin.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Özel Telegram topluluğuna erişim",
            "Günlük teknik analizler",
            "CM News haber akışı",
            "Eğitim içerikleri",
            "Topluluk içi destek",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-black">
                ✓
              </div>

              <p className="text-zinc-300">{item}</p>
            </div>
          ))}
        </div>

        <a
  href="/borsalar"
  className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-8 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-300"
>
  Referansla Katıl
</a>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black p-8">
        <div>
          <p className="text-sm font-semibold text-blue-400">
            Aylık Üyelik
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Doğrudan Premium Üyelik
          </h3>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-5xl font-bold">100$</span>
          <span className="pb-2 text-zinc-500">/ aylık</span>
        </div>

        <p className="mt-6 leading-8 text-zinc-400">
          Herhangi bir borsa şartı olmadan aylık ödeme yöntemiyle premium
          topluluğa katılabilirsin.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Tüm premium içeriklere erişim",
            "Günlük piyasa analizleri",
            "İşlem senaryoları",
            "Eğitim arşivi",
            "Topluluk desteği",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 text-sm font-bold text-black">
                ✓
              </div>

              <p className="text-zinc-300">{item}</p>
            </div>
          ))}
        </div>

        <a
  href="https://t.me/CMiletisim"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-zinc-900 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400/40"
>
  Premium Üyelik İçin İletişime Geç
</a>
      </div>
    </div>

    <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-zinc-600">
      ChartMasters tarafından paylaşılan içerikler yatırım tavsiyesi değildir.
      Kripto varlıklar yüksek risk içerir.
    </p>
  </div>
</section>
<section
  id="faq"
  className="border-t border-white/10 bg-black px-6 py-24"
>
  <div className="mx-auto max-w-5xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
        Sık Sorulan Sorular
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Merak ettiklerin burada
      </h2>

      <p className="mt-6 leading-8 text-zinc-400">
        ChartMasters topluluğu ve katılım süreci hakkında en çok sorulan
        soruları senin için yanıtladık.
      </p>
    </div>

    <div className="mt-14 space-y-4">
      {[
        {
          question: "ChartMasters nedir?",
          answer:
            "ChartMasters; teknik analizlerin, piyasa haberlerinin, eğitim içeriklerinin ve işlem fikirlerinin paylaşıldığı profesyonel bir kripto topluluğudur.",
        },
        {
          question: "Topluluğa nasıl katılabilirim?",
          answer:
            "Anlaşmalı borsalardan birine ChartMasters referans bağlantısıyla kayıt olarak veya aylık premium üyelik seçeneğini kullanarak katılabilirsin.",
        },
        {
          question: "Paylaşılan işlemler yatırım tavsiyesi midir?",
          answer:
            "Hayır. Paylaşılan analizler ve işlem senaryoları yalnızca eğitim ve bilgilendirme amacı taşır. Her kullanıcı kendi risk yönetiminden sorumludur.",
        },
        {
          question: "Yeni başlayanlar topluluğa katılabilir mi?",
          answer:
            "Evet. Eğitim içerikleri ve piyasa anlatımları hem yeni başlayanlara hem de deneyimli yatırımcılara uygun şekilde hazırlanır.",
        },
        {
          question: "Destek almak için kiminle iletişime geçebilirim?",
          answer:
            "Katılım, üyelik ve hesap işlemleri için ChartMasters destek hesabı üzerinden iletişim kurabilirsin.",
        },
      ].map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-white/10 bg-zinc-950 p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
            <span>{item.question}</span>

            <span className="text-2xl text-emerald-400 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>

<footer className="border-t border-white/10 bg-zinc-950 px-6 py-12">
  <div className="mx-auto flex max-w-7xl flex-col gap-10">
    <div className="grid gap-10 md:grid-cols-3">
      <div>
        <a href="#" className="text-2xl font-bold tracking-tight">
          CHART<span className="text-emerald-400">MASTERS</span>
        </a>

        <p className="mt-5 max-w-sm leading-7 text-zinc-500">
          Teknik analiz, eğitim, piyasa haberleri ve güçlü bir yatırımcı
          topluluğu.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-white">Hızlı Bağlantılar</h3>

        <div className="mt-5 flex flex-col gap-3 text-zinc-500">
          <a href="#features" className="transition hover:text-white">
            Özellikler
          </a>

          <a href="#community" className="transition hover:text-white">
            Topluluk
          </a>

          <a href="#membership" className="transition hover:text-white">
            Üyelik
          </a>

          <a href="#faq" className="transition hover:text-white">
            Sık Sorulan Sorular
          </a>
        </div>
      </div>

      <div>
  <h3 className="font-semibold text-white">İletişim</h3>

  <div className="mt-5 flex flex-col gap-3 text-zinc-500">
    <a
      href="#membership"
      className="transition hover:text-emerald-400"
    >
      Telegram Topluluğu
    </a>

    <a
      href="https://t.me/CMiletisim"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-emerald-400"
    >
      Destek Hattı
    </a>

    <a
      href="https://x.com/LogarCrypto"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-emerald-400"
    >
      X / LogarCrypto
    </a>

    <a
      href="https://x.com/KriptoHulk"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-emerald-400"
    >
      X / KriptoHulk
    </a>
  </div>
</div>
    </div>

    <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 ChartMasters. Tüm hakları saklıdır.</p>

      <p>Paylaşımlar yatırım tavsiyesi değildir.</p>
    </div>
  </div>
</footer>
    </main>
  );
}