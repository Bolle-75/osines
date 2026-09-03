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
      <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a
            href={`/${currentLocale}`}
            className="flex items-center"
          >
            <Image
              src="/osines-logo.png"
              alt="OSINES"
              width={220}
              height={80}
              priority
              className="h-14 w-auto object-contain"
            />
          </a>

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


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {t.services.items.map((service, index) => (

              <div
                key={service}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold tracking-[0.15em] text-[#62B532]">
                    0{index + 1}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1685D8]/10 text-[#1685D8] transition duration-300 group-hover:bg-[#1685D8] group-hover:text-white">
                    <span className="text-lg">+</span>
                  </div>

                </div>


                <div className="mt-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123B66] transition duration-300 group-hover:bg-[#1685D8]">

                  <span className="text-2xl font-light text-white">
                    {index === 0 && "⌕"}
                    {index === 1 && "◌"}
                    {index === 2 && "◒"}
                    {index === 3 && "↗"}
                  </span>

                </div>


                <h3 className="mt-8 text-xl font-bold leading-tight text-[#123B66]">
                  {service}
                </h3>

                <div className="mt-8 h-1 w-10 rounded-full bg-[#1685D8] transition-all duration-300 group-hover:w-20" />

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


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="border-t border-slate-200 px-6 py-8 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">

          <span>
            © {new Date().getFullYear()} OSINES
          </span>

          <div className="flex flex-col gap-1 sm:items-end">
            <span>
              {t.footer}
            </span>
            <a
              href="mailto:info@osines.com"
              className="transition hover:text-[#1685D8]"
            >
              info@osines.com
            </a>
          </div>

        </div>

      </footer>

    </main>
  );
}