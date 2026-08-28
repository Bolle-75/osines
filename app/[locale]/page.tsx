import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { locales, translations, type Locale } from "../i18n/translations";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  const currentLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "es";

  const t = translations[currentLocale];

  return (
    <main className="min-h-screen bg-white text-[#123B66]">
      {/* =========================
          HEADER
      ========================== */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* LOGO */}
          <a href={`/${currentLocale}`} className="flex items-center">
            <Image
              src="/osines-logo.png"
              alt="OSINES"
              width={220}
              height={80}
              priority
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a
              href={`/${currentLocale}#inicio`}
              className="transition hover:text-[#1685D8]"
            >
              {t.nav.home}
            </a>

            <a
              href={`/${currentLocale}#servicios`}
              className="transition hover:text-[#1685D8]"
            >
              {t.nav.services}
            </a>

            <a
              href={`/${currentLocale}#nosotros`}
              className="transition hover:text-[#1685D8]"
            >
              {t.nav.about}
            </a>

            <a
              href={`/${currentLocale}#contacto`}
              className="transition hover:text-[#1685D8]"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* LANGUAGES */}
          <LanguageSwitcher />
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
      >
        <div className="absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-[#1685D8]/5" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[450px] w-[450px] rounded-full bg-[#62B532]/5" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
          {/* HERO TEXT */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#1685D8]/20 bg-[#1685D8]/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#1685D8]">
              {t.hero.badge}
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero.title1}
              <br />
              {t.hero.title2}
              <br />
              <span className="text-[#1685D8]">
                {t.hero.title3}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              {t.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`/${currentLocale}#contacto`}
                className="rounded-full bg-[#123B66] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1685D8]"
              >
                {t.hero.primaryButton}
              </a>

              <a
                href={`/${currentLocale}#servicios`}
                className="rounded-full border border-[#123B66]/20 px-7 py-4 text-sm font-semibold text-[#123B66] transition hover:border-[#1685D8] hover:text-[#1685D8]"
              >
                {t.hero.secondaryButton}
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-[420px] w-[420px] items-center justify-center">
              <div className="absolute h-[330px] w-[330px] rounded-full bg-[#1685D8]/5" />

              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#1685D8]/10" />

              <svg
                viewBox="0 0 120 150"
                className="relative h-64 w-52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                    M60 8
                    C60 8 22 54 22 88
                    C22 118 38 140 60 140
                    C82 140 98 118 98 88
                    C98 54 60 8 60 8Z
                  "
                  stroke="#1685D8"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================== */}
      <section
        id="servicios"
        className="bg-slate-50 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.18em] text-[#1685D8]">
              {t.services.label}
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#123B66] sm:text-5xl">
              {t.services.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t.services.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, index) => (
              <div
                key={service}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#62B532]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-xl font-bold text-[#123B66]">
                  {service}
                </h3>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#1685D8] transition-all group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          TARGET GROUPS
      ========================== */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.18em] text-[#1685D8]">
              {t.target.label}
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#123B66] sm:text-5xl">
              {t.target.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.target.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:border-[#1685D8] hover:shadow-lg"
              >
                <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#123B66]">
                  <span className="text-lg text-white">+</span>
                </div>

                <h3 className="text-xl font-bold text-[#123B66]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
      <section
        id="nosotros"
        className="bg-[#123B66] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold tracking-[0.18em] text-[#62B532]">
            {t.about.label}
          </span>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {t.about.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================== */}
      <section
        id="contacto"
        className="px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-slate-50 p-10 sm:p-14">
            <span className="text-sm font-semibold tracking-[0.18em] text-[#1685D8]">
              {t.contact.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#123B66] sm:text-5xl">
              {t.contact.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {t.contact.description}
            </p>

            <div className="mt-8">
              <a
                href="mailto:info@osines.com"
                className="inline-flex rounded-full bg-[#123B66] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1685D8]"
              >
                {t.contact.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="border-t border-slate-200 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} OSINES
          </span>

          <span>
            {t.footer}
          </span>
        </div>
      </footer>
    </main>
  );
}