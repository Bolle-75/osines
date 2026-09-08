import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ContactForm from "../components/ContactForm";
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

  const formText = {
    es: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo electrónico",
      property: "Dirección / localidad",
      damage: "Tipo de daño",
      description: "Descripción del daño",
      damagePlaceholder: "Cuéntenos brevemente qué ha ocurrido...",
      selectDamage: "Seleccione una opción",
      water: "Daños por agua",
      leak: "Fuga / filtración",
      drying: "Necesidad de secado",
      restoration: "Restauración",
      other: "Otro",
      mold: "Problemas de moho",
      send: "ENVIAR SOLICITUD",
      note: "Nos pondremos en contacto con usted lo antes posible.",
      required: "Campos obligatorios",
    },

    en: {
      name: "Name",
      phone: "Phone",
      email: "Email address",
      property: "Address / location",
      damage: "Type of damage",
      description: "Damage description",
      damagePlaceholder: "Briefly tell us what happened...",
      selectDamage: "Select an option",
      water: "Water damage",
      leak: "Leak / water ingress",
      drying: "Drying required",
      restoration: "Restoration",
      other: "Other",
      mold: "Mould problems",
      send: "SEND REQUEST",
      note: "We will contact you as soon as possible.",
      required: "Required fields",
    },

    de: {
      name: "Name",
      phone: "Telefon",
      email: "E-Mail-Adresse",
      property: "Adresse / Ort",
      damage: "Art des Schadens",
      description: "Schadensbeschreibung",
      damagePlaceholder: "Beschreiben Sie kurz, was passiert ist...",
      selectDamage: "Bitte auswählen",
      water: "Wasserschaden",
      leak: "Leckage / Wassereintritt",
      drying: "Trocknung erforderlich",
      restoration: "Wiederherstellung",
      mold: "Schimmelprobleme",
      other: "Sonstiges",
      send: "ANFRAGE SENDEN",
      note: "Wir werden uns schnellstmöglich bei Ihnen melden.",
      required: "Pflichtfelder",
    },

    ru: {
      name: "Имя",
      phone: "Телефон",
      email: "Электронная почта",
      property: "Адрес / населённый пункт",
      damage: "Тип повреждения",
      description: "Описание повреждения",
      damagePlaceholder: "Кратко расскажите, что произошло...",
      selectDamage: "Выберите вариант",
      water: "Повреждение водой",
      leak: "Утечка / проникновение воды",
      drying: "Необходима сушка",
      restoration: "Восстановление",
      other: "Другое",
      mold: "Проблемы с плесенью",
      send: "ОТПРАВИТЬ ЗАПРОС",
      note: "Мы свяжемся с вами как можно скорее.",
      required: "Обязательные поля",
    },
  }[currentLocale];

  return (
    <main className="min-h-screen bg-white text-[#123B66]">

      {/* =========================
          HEADER
      ========================== */}
      {/* =========================
          HEADER
      ========================== */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a
            href={`/${currentLocale}`}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/osines-logo.png"
              alt="OSINES"
              width={220}
              height={80}
              priority
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#123B66] lg:flex">
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

          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href={`/${currentLocale}#contacto`}
              className="hidden rounded-full bg-[#123B66] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#1685D8] sm:inline-flex"
            >
              {t.hero.primaryButton}
            </a>
          </div>
        </div>
      </header>

          {/* =========================
    HERO
========================== */}
<section
  id="inicio"
  className="relative isolate min-h-[760px] overflow-hidden bg-white"
>
  {/* HERO BILD – GESAMTE BREITE */}
  <div className="absolute inset-0 -z-0">
    <Image
      src="/osines-hero-thermografie.jpg"
      alt="Inspección profesional de humedad con cámara termográfica"
      fill
      priority
      sizes="100vw"
      className="object-cover object-[68%_center]"
    />

    {/* GLEICHMÄSSIGER VERLAUF VON LINKS NACH RECHTS */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[38%] via-white/65 via-[58%] to-transparent" />

    {/* LEICHTER BLAUER TON AM RECHTEN RAND */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1685D8]/10" />
  </div>

  {/* HERO INHALT */}
  <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 sm:px-10 lg:px-12 xl:px-16">
    <div className="max-w-[620px] py-20">

      <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1685D8]">
        {currentLocale === "de" && "PROFESSIONELLE LÖSUNGEN"}
        {currentLocale === "es" && "SOLUCIONES PROFESIONALES"}
        {currentLocale === "en" && "PROFESSIONAL SOLUTIONS"}
        {currentLocale === "ru" && "ПРОФЕССИОНАЛЬНЫЕ РЕШЕНИЯ"}
      </span>

      <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-[#123B66] sm:text-6xl xl:text-[68px]">
        {currentLocale === "de" && (
          <>
            Wir machen sichtbar,
            <br />
            was verborgen
            <br />
            <span className="text-[#1685D8]">bleibt.</span>
          </>
        )}

        {currentLocale === "es" && (
          <>
            Hacemos visible
            <br />
            lo que permanece
            <br />
            <span className="text-[#1685D8]">oculto.</span>
          </>
        )}

        {currentLocale === "en" && (
          <>
            We make visible
            <br />
            what remains
            <br />
            <span className="text-[#1685D8]">hidden.</span>
          </>
        )}

        {currentLocale === "ru" && (
          <>
            Мы делаем видимым
            <br />
            то, что остаётся
            <br />
            <span className="text-[#1685D8]">скрытым.</span>
          </>
        )}
      </h1>

      <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
        {currentLocale === "de" &&
          "Leckortung, technische Trocknung, Wiederherstellung und Schimmelbeseitigung – professionell koordiniert an der Costa Blanca."}

        {currentLocale === "es" &&
          "Detección de fugas, secado técnico, restauración y eliminación de moho – soluciones profesionales en la Costa Blanca."}

        {currentLocale === "en" &&
          "Leak detection, technical drying, restoration and mould removal – professional solutions across the Costa Blanca."}

        {currentLocale === "ru" &&
          "Поиск утечек, техническая сушка, восстановление и удаление плесени — профессиональные решения на Коста-Бланке."}
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={`/${currentLocale}#contacto`}
          className="inline-flex items-center rounded-full bg-[#1685D8] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#1685D8]/20 transition hover:bg-[#123B66]"
        >
          {t.hero.primaryButton}
          <span className="ml-3 text-lg">→</span>
        </a>

        <a
          href={`/${currentLocale}#servicios`}
          className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-sm font-bold text-[#123B66] backdrop-blur-sm transition hover:border-[#1685D8] hover:text-[#1685D8]"
        >
          {t.hero.secondaryButton}
        </a>
      </div>

      <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-slate-200/80 pt-7">
        <div>
          <div className="text-xl font-bold text-[#1685D8]">01</div>
          <p className="mt-2 text-sm font-bold text-[#123B66]">
            {currentLocale === "es"
              ? "Respuesta rápida"
              : currentLocale === "en"
                ? "Fast response"
                : currentLocale === "ru"
                  ? "Быстрая реакция"
                  : "Schnelle Reaktion"}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {currentLocale === "es"
              ? "Cuando más lo necesita"
              : currentLocale === "en"
                ? "When you need us most"
                : currentLocale === "ru"
                  ? "Когда это особенно важно"
                  : "Wenn Sie uns am dringendsten brauchen"}
          </p>
        </div>

        <div>
          <div className="text-xl font-bold text-[#1685D8]">02</div>
          <p className="mt-2 text-sm font-bold text-[#123B66]">
            {currentLocale === "es"
              ? "Tecnología avanzada"
              : currentLocale === "en"
                ? "Advanced technology"
                : currentLocale === "ru"
                  ? "Современная технология"
                  : "Moderne Technik"}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {currentLocale === "es"
              ? "Resultados precisos"
              : currentLocale === "en"
                ? "Precise results"
                : currentLocale === "ru"
                  ? "Точные результаты"
                  : "Präzise Ergebnisse"}
          </p>
        </div>

        <div>
          <div className="text-xl font-bold text-[#1685D8]">03</div>
          <p className="mt-2 text-sm font-bold text-[#123B66]">
            {currentLocale === "es"
              ? "Profesionales cualificados"
              : currentLocale === "en"
                ? "Qualified professionals"
                : currentLocale === "ru"
                  ? "Квалифицированные специалисты"
                  : "Qualifizierte Fachkräfte"}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {currentLocale === "es"
              ? "Su propiedad en buenas manos"
              : currentLocale === "en"
                ? "Your property in safe hands"
                : currentLocale === "ru"
                  ? "Ваша недвижимость в надёжных руках"
                  : "Ihre Immobilie in guten Händen"}
        </p>
         </div>
      </div>
    </div>
  </div>
</section>



      {/* =========================
          SERVICES
      ========================== */}
      <section
        id="servicios"
        className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-10"
      >

        <div className="absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#1685D8]/5" />

        <div className="absolute bottom-[-180px] left-[-160px] h-[400px] w-[400px] rounded-full bg-[#62B532]/5" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 max-w-3xl">

            <span className="text-sm font-semibold tracking-[0.18em] text-[#1685D8]">
              {t.services.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#123B66] sm:text-5xl">
              {t.services.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {t.services.description}
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
  {[...t.services.items,
    currentLocale === "de"
      ? "Schimmelbeseitigung"
      : currentLocale === "es"
        ? "Eliminación de moho"
        : currentLocale === "en"
          ? "Mould removal"
          : "Удаление плесени"
  ].map((service, index) => (
    <div
      key={service}
      className="group relative overflow-hidden rounded-none border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
 <div className="relative -mx-8 -mt-8 mb-7 aspect-square overflow-hidden rounded-none">
  
   <Image
    src={[
      "/services/01-detection-leaks.jpg",
      "/services/02-technical-drying.jpg",
      "/services/03-water-damage.jpg",
      "/services/04-restoration.jpg",
      "/services/05-mold-removal.jpg",
    ][index]}
    alt={service}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
    className="object-cover transition duration-500 group-hover:scale-105"
  />
</div>

<div className="flex items-center justify-between">
  <span className="text-sm font-bold tracking-[0.15em] text-[#62B532]">
    {String(index + 1).padStart(2, "0")}
  </span>

  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF5FF] text-xl text-[#1685D8]">
    +
  </div>
</div>

<div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123B66]">
  <span className="text-white">
  {index === 0 && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 5 5" />
    </svg>
  )}

  {index === 1 && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M4 8c2.5-3 5.5-3 8 0s5.5 3 8 0" />
      <path d="M4 12c2.5-3 5.5-3 8 0s5.5 3 8 0" />
      <path d="M4 16c2.5-3 5.5-3 8 0s5.5 3 8 0" />
    </svg>
  )}

  {index === 2 && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M12 3s-6 6.2-6 11a6 6 0 0 0 12 0c0-4.8-6-11-6-11Z" />
      <path d="M9.5 16a3 3 0 0 0 5 1.5" />
    </svg>
  )}

  {index === 3 && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M5 19 19 5" />
      <path d="M10 5h9v9" />
    </svg>
  )}

  {index === 4 && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  )}
</span>
</div>

<h3 className="mt-5 text-xl font-bold leading-tight text-[#123B66]">
  {service}
</h3>

<div className="mt-4 h-1 w-16 rounded-full bg-[#1685D8]" />

<p className="mt-5 text-sm leading-6 text-[#123B66]">
  {currentLocale === "es" &&
    [
      "Localización precisa de fugas de agua sin daños innecesarios.",
      "Secado profesional de edificios, paredes, suelos y techos.",
      "Reparación y renovación tras daños por agua.",
      "Tratamiento profesional y prevención de nuevos daños.",
      "Control de humedad, documentación y asesoramiento.",
    ][index]}

  {currentLocale === "en" &&
    [
      "Precise leak detection without unnecessary damage.",
      "Professional drying of buildings, walls, floors and ceilings.",
      "Repair and restoration after water damage.",
      "Professional treatment and prevention of further damage.",
      "Moisture control, documentation and professional advice.",
    ][index]}

  {currentLocale === "de" &&
    [
      "Präzise Leckortung ohne unnötige Schäden.",
      "Professionelle Trocknung von Gebäuden, Wänden, Böden und Decken.",
      "Reparatur und Wiederherstellung nach Wasserschäden.",
      "Professionelle Behandlung und Vorbeugung neuer Schäden.",
      "Feuchtigkeitskontrolle, Dokumentation und Beratung.",
    ][index]}

  {currentLocale === "ru" &&
    [
      "Точное обнаружение утечек воды без лишних повреждений.",
      "Профессиональная сушка зданий, стен, полов и потолков.",
      "Ремонт и восстановление после повреждений водой.",
      "Профессиональная обработка и предотвращение новых повреждений.",
      "Контроль влажности, документация и консультация.",
    ][index]}
</p>

<div className="mt-5 text-sm font-semibold text-[#1685D8]">
  {currentLocale === "es" && "Saber más →"}
  {currentLocale === "en" && "Learn more →"}
  {currentLocale === "de" && "Mehr erfahren →"}
  {currentLocale === "ru" && "Подробнее →"}
</div>
</div>
      
  ))}
</div>


          <div className="mt-12 flex flex-col justify-between gap-6 rounded-[2rem] bg-[#123B66] px-8 py-8 text-white sm:flex-row sm:items-center sm:px-10">

            <div>

              <p className="text-xl font-semibold">

                {currentLocale === "de" &&
                  "Ein Schaden. Ein Ansprechpartner."}

                {currentLocale === "es" &&
                  "Un daño. Un solo contacto."}

                {currentLocale === "en" &&
                  "One claim. One point of contact."}

                {currentLocale === "ru" &&
                  "Один ущерб. Один контакт."}

              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">

                {currentLocale === "de" &&
                  "Von der ersten Schadenaufnahme bis zur Wiederherstellung – professionell koordiniert."}

                {currentLocale === "es" &&
                  "Desde la primera evaluación hasta la restauración, todo coordinado profesionalmente."}

                {currentLocale === "en" &&
                  "From the initial assessment to restoration, professionally coordinated from start to finish."}

                {currentLocale === "ru" &&
                  "От первичной оценки до восстановления — профессиональная координация на каждом этапе."}

              </p>

            </div>


            <a
              href={`/${currentLocale}#contacto`}
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#123B66] transition hover:bg-[#62B532] hover:text-white"
            >
              {t.hero.primaryButton}
            </a>

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

                  <span className="text-lg text-white">
                    +
                  </span>

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
        className="relative overflow-hidden bg-[#123B66] px-6 py-24 text-white lg:px-10"
      >

        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#1685D8]/10" />


        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="text-sm font-semibold tracking-[0.18em] text-[#62B532]">
              {t.about.label}
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/70">
              {t.about.description}
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* FEATURE 1 */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1685D8] text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-8 text-xl font-bold">

                {currentLocale === "de" &&
                  "Technische Kompetenz"}

                {currentLocale === "es" &&
                  "Competencia técnica"}

                {currentLocale === "en" &&
                  "Technical expertise"}

                {currentLocale === "ru" &&
                  "Техническая компетентность"}

              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">

                {currentLocale === "de" &&
                  "Moderne Technik und strukturierte Verfahren für eine zuverlässige Schadenanalyse."}

                {currentLocale === "es" &&
                  "Tecnología moderna y procedimientos estructurados para un análisis fiable de los daños."}

                {currentLocale === "en" &&
                  "Modern technology and structured processes for reliable damage assessment."}

                {currentLocale === "ru" &&
                  "Современные технологии и структурированные процессы для надежной оценки повреждений."}

              </p>

            </div>


            {/* FEATURE 2 */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#62B532] text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-8 text-xl font-bold">

                {currentLocale === "de" &&
                  "Schnelle Reaktion"}

                {currentLocale === "es" &&
                  "Respuesta rápida"}

                {currentLocale === "en" &&
                  "Fast response"}

                {currentLocale === "ru" &&
                  "Быстрое реагирование"}

              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">

                {currentLocale === "de" &&
                  "Schnelle Koordination und klare Abläufe helfen dabei, Folgeschäden zu begrenzen."}

                {currentLocale === "es" &&
                  "Una coordinación rápida y procesos claros ayudan a limitar los daños posteriores."}

                {currentLocale === "en" &&
                  "Fast coordination and clear processes help minimize further damage."}

                {currentLocale === "ru" &&
                  "Быстрая координация и четкие процессы помогают минимизировать дальнейшие повреждения."}

              </p>

            </div>


            {/* FEATURE 3 */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-bold text-[#123B66]">
                03
              </div>

              <h3 className="mt-8 text-xl font-bold">

                {currentLocale === "de" &&
                  "Transparente Dokumentation"}

                {currentLocale === "es" &&
                  "Documentación transparente"}

                {currentLocale === "en" &&
                  "Transparent documentation"}

                {currentLocale === "ru" &&
                  "Прозрачная документация"}

              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">

                {currentLocale === "de" &&
                  "Klare Dokumentation schafft Nachvollziehbarkeit für Kunden, Hausverwaltungen und Versicherungen."}

                {currentLocale === "es" &&
                  "Una documentación clara facilita la trazabilidad para clientes, administradores y aseguradoras."}

                {currentLocale === "en" &&
                  "Clear documentation provides transparency for customers, property managers and insurers."}

                {currentLocale === "ru" &&
                  "Понятная документация обеспечивает прозрачность для клиентов, управляющих и страховых компаний."}

              </p>

            </div>

          </div>


          <div className="mt-12 border-t border-white/10 pt-10">

            <div className="grid gap-8 md:grid-cols-2 md:items-center">

              <div>

                <p className="text-2xl font-semibold leading-tight sm:text-3xl">

                  {currentLocale === "de" &&
                    "Wir kümmern uns um den Schaden – Sie behalten den Überblick."}

                  {currentLocale === "es" &&
                    "Nos ocupamos del daño para que usted mantenga el control."}

                  {currentLocale === "en" &&
                    "We take care of the damage so you stay in control."}

                  {currentLocale === "ru" &&
                    "Мы занимаемся повреждением, а вы сохраняете контроль."}

                </p>

              </div>


              <div>

                <p className="text-sm leading-7 text-white/60">

                  {currentLocale === "de" &&
                    "OSINES verbindet technische Kompetenz, moderne Verfahren und eine strukturierte Betreuung – vom ersten Kontakt bis zur Wiederherstellung."}

                  {currentLocale === "es" &&
                    "OSINES combina competencia técnica, métodos modernos y una gestión estructurada desde el primer contacto hasta la restauración."}

                  {currentLocale === "en" &&
                    "OSINES combines technical expertise, modern methods and structured service from the first contact through to restoration."}

                  {currentLocale === "ru" &&
                    "OSINES объединяет техническую компетентность, современные методы и структурированное сопровождение от первого контакта до восстановления."}

                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CONTACT / SERVICE REQUEST
      ========================== */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-white px-6 py-24 lg:px-10"
      >

        <div className="absolute right-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-[#1685D8]/5" />

        <div className="absolute bottom-[-200px] left-[-180px] h-[450px] w-[450px] rounded-full bg-[#62B532]/5" />


        <div className="relative mx-auto max-w-7xl">

          {/* CONTACT HEADER */}
          <div className="mb-14 max-w-3xl">

            <span className="text-sm font-semibold tracking-[0.18em] text-[#1685D8]">
              {t.contact.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#123B66] sm:text-5xl lg:text-6xl">
              {t.contact.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {t.contact.description}
            </p>

          </div>


          {/* CONTACT GRID */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">


            {/* LEFT INFORMATION */}
            <div className="rounded-[2rem] bg-[#123B66] p-8 text-white sm:p-10">

              <span className="text-sm font-semibold tracking-[0.18em] text-[#62B532]">
                OSINES
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">

                {currentLocale === "de" &&
                  "Ein Schaden braucht eine schnelle Reaktion."}

                {currentLocale === "es" &&
                  "Un daño requiere una respuesta rápida."}

                {currentLocale === "en" &&
                  "Damage requires a fast response."}

                {currentLocale === "ru" &&
                  "Повреждение требует быстрой реакции."}

              </h3>

              <p className="mt-6 text-base leading-7 text-white/65">

                {currentLocale === "de" &&
                  "Teilen Sie uns die wichtigsten Informationen mit. Wir kümmern uns um die nächsten Schritte."}

                {currentLocale === "es" &&
                  "Facilítenos la información más importante y nos ocuparemos de los siguientes pasos."}

                {currentLocale === "en" &&
                  "Provide us with the key information and we will take care of the next steps."}

                {currentLocale === "ru" &&
                  "Предоставьте нам основную информацию, и мы займёмся дальнейшими шагами."}

              </p>


              <div className="mt-10 space-y-6">

                {/* DIRECT EMAIL */}
                <a
                  href="mailto:info@osines.com"
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#1685D8]/40 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-[#62B532]">@</span>
                  </div>

                  <div>
                    <p className="font-semibold">info@osines.com</p>
                    <p className="mt-1 text-sm text-white/50">
                      {currentLocale === "de" && "Direkter Kontakt per E-Mail."}
                      {currentLocale === "es" && "Contacto directo por correo electrónico."}
                      {currentLocale === "en" && "Direct contact by email."}
                      {currentLocale === "ru" && "Прямой контакт по электронной почте."}
                    </p>
                  </div>
                </a>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-[#62B532]">01</span>
                  </div>

                  <div>
                    <p className="font-semibold">

                      {currentLocale === "de" && "Schaden melden"}
                      {currentLocale === "es" && "Comunicar el daño"}
                      {currentLocale === "en" && "Report the damage"}
                      {currentLocale === "ru" && "Сообщить о повреждении"}

                    </p>

                    <p className="mt-1 text-sm text-white/50">

                      {currentLocale === "de" && "Kurze Angaben zum Schaden."}
                      {currentLocale === "es" && "Información básica sobre el daño."}
                      {currentLocale === "en" && "Basic information about the damage."}
                      {currentLocale === "ru" && "Основная информация о повреждении."}

                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-[#62B532]">02</span>
                  </div>

                  <div>
                    <p className="font-semibold">

                      {currentLocale === "de" && "OSINES prüft"}
                      {currentLocale === "es" && "OSINES analiza"}
                      {currentLocale === "en" && "OSINES assesses"}
                      {currentLocale === "ru" && "OSINES оценивает"}

                    </p>

                    <p className="mt-1 text-sm text-white/50">

                      {currentLocale === "de" && "Wir prüfen Ihre Angaben."}
                      {currentLocale === "es" && "Analizamos la información recibida."}
                      {currentLocale === "en" && "We assess the information provided."}
                      {currentLocale === "ru" && "Мы оцениваем предоставленную информацию."}

                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-[#62B532]">03</span>
                  </div>

                  <div>
                    <p className="font-semibold">

                      {currentLocale === "de" && "Nächste Schritte"}
                      {currentLocale === "es" && "Siguientes pasos"}
                      {currentLocale === "en" && "Next steps"}
                      {currentLocale === "ru" && "Следующие шаги"}

                    </p>

                    <p className="mt-1 text-sm text-white/50">

                      {currentLocale === "de" && "Wir melden uns bei Ihnen."}
                      {currentLocale === "es" && "Nos pondremos en contacto con usted."}
                      {currentLocale === "en" && "We will get back to you."}
                      {currentLocale === "ru" && "Мы свяжемся с вами."}

                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

             <ContactForm
             locale={currentLocale}
             formText={formText}
             />

              
            </div>

          </div>

        </div>
      </section>

    <footer className="border-t border-slate-200 px-6 py-8 lg:px-10">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
    <span>
      © {new Date().getFullYear()} OSINES
    </span>

    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <span>{t.footer}</span>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href={`/${currentLocale}/aviso-legal`}
          className="transition hover:text-[#1685D8]"
        >
          {currentLocale === "es" && "Aviso Legal"}
          {currentLocale === "en" && "Legal Notice"}
          {currentLocale === "de" && "Impressum"}
          {currentLocale === "ru" && "Правовая информация"}
        </a>

        <a
          href={`/${currentLocale}/politica-de-privacidad`}
          className="transition hover:text-[#1685D8]"
        >
          {currentLocale === "es" && "Privacidad"}
          {currentLocale === "en" && "Privacy"}
          {currentLocale === "de" && "Datenschutz"}
          {currentLocale === "ru" && "Конфиденциальность"}
        </a>

        <a
          href={`/${currentLocale}/politica-de-cookies`}
          className="transition hover:text-[#1685D8]"
        >
          {currentLocale === "es" && "Cookies"}
          {currentLocale === "en" && "Cookies"}
          {currentLocale === "de" && "Cookies"}
          {currentLocale === "ru" && "Cookies"}
        </a>

        <a
          href="mailto:info@osines.com"
          className="transition hover:text-[#1685D8]"
        >
          info@osines.com
        </a>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}