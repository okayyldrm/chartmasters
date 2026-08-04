export default function BorsalarPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10 px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-5">
          <a href="/" className="text-2xl font-bold tracking-tight">
            CHART<span className="text-emerald-400">MASTERS</span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Ana Sayfa
            </a>

            <a
              href="https://t.me/CMiletisim"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Destek
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            ChartMasters Anlaşmalı Borsaları
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Kayıt olmak istediğin borsayı seç
          </h1>

          <p className="mt-6 leading-8 text-zinc-400">
            Topluluğa referanslı katılım sağlamak için aşağıdaki borsalardan
            birini seçerek ChartMasters bağlantısı üzerinden hesabını
            oluşturabilirsin.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-center">
          <p className="leading-7 text-zinc-200">
            Hesabını mutlaka aşağıdaki kayıt bağlantılarından biri üzerinden
            oluştur. Farklı bir bağlantı üzerinden açılan hesaplar referans
            sisteminde görünmeyebilir.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-emerald-400">
                  Anlaşmalı Borsa
                </p>

                <h2 className="mt-2 text-3xl font-bold">Bybit</h2>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
                Önerilen
              </div>
            </div>

            <p className="mt-6 leading-8 text-zinc-400">
              ChartMasters referans bağlantısını kullanarak Bybit hesabını
              oluşturabilir ve topluluk katılım sürecini başlatabilirsin.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black p-5">
              <p className="text-sm text-zinc-500">Referans Kodu</p>

              <p className="mt-2 text-2xl font-bold tracking-wider text-emerald-400">
                41489
              </p>
            </div>

            <a
              href="https://partner.bybit.com/b/41489"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-8 py-4 font-semibold text-black transition hover:bg-emerald-300"
            >
              Bybit ile Kayıt Ol
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-blue-400/40">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                Anlaşmalı Borsa
              </p>

              <h2 className="mt-2 text-3xl font-bold">BingX</h2>
            </div>

            <p className="mt-6 leading-8 text-zinc-400">
              ChartMasters referans bağlantısını kullanarak BingX hesabını
              oluşturabilir ve topluluk katılım sürecini başlatabilirsin.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black p-5">
              <p className="text-sm text-zinc-500">Referans Kodu</p>

              <p className="mt-2 text-2xl font-bold tracking-wider text-blue-400">
                ETYTAO
              </p>
            </div>

            <a
              href="https://bingx.com/invite/ETYTAO/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-blue-400/30 bg-blue-400/10 px-8 py-4 font-semibold text-blue-300 transition hover:bg-blue-400/20"
            >
              BingX ile Kayıt Ol
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
          <h3 className="text-2xl font-bold">Kayıt işlemini tamamladın mı?</h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-400">
            Hesabını oluşturduktan sonra kullanıcı numaranı destek ekibimize
            gönder. Referans kontrolü tamamlandıktan sonra topluluk katılım
            sürecin başlatılır.
          </p>

          <a
            href="https://t.me/CMiletisim"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            Destek Ekibine Yaz
          </a>
        </div>
      </div>
    </main>
  );
}