import Link from "next/link";

const cookieContent = {
  es: {
    title: "Política de Cookies",
    subtitle: "Información sobre el uso de cookies en este sitio web",
    sections: [
      {
        title: "1. ¿Qué son las cookies?",
        content: (
          <p>
            Las cookies son pequeños archivos de texto que pueden almacenarse
            en el dispositivo del usuario cuando visita un sitio web. Permiten
            que el sitio web recuerde determinada información y pueden
            facilitar su funcionamiento.
          </p>
        ),
      },
      {
        title: "2. Cookies utilizadas en este sitio web",
        content: (
          <>
            <p>
              OSINES procura limitar el uso de cookies y tecnologías similares
              a aquellas que sean necesarias para el funcionamiento técnico del
              sitio web.
            </p>

            <p className="mt-4">
              En la versión actual del sitio web no se han incorporado
              deliberadamente herramientas de analítica, publicidad
              personalizada o seguimiento comercial que requieran cookies no
              esenciales.
            </p>

            <p className="mt-4">
              Las tecnologías estrictamente necesarias para proporcionar y
              proteger el funcionamiento técnico del sitio web pueden
              utilizarse cuando resulten necesarias.
            </p>
          </>
        ),
      },
      {
        title: "3. Cookies técnicas o necesarias",
        content: (
          <p>
            Las cookies o tecnologías similares que sean estrictamente
            necesarias para proporcionar un servicio expresamente solicitado
            por el usuario o para permitir el funcionamiento técnico del sitio
            web podrán utilizarse sin necesidad de consentimiento cuando así lo
            permita la normativa aplicable.
          </p>
        ),
      },
      {
        title: "4. Cookies de análisis y medición",
        content: (
          <p>
            Actualmente OSINES no ha incorporado herramientas de análisis o
            medición que utilicen cookies no esenciales en la versión actual de
            este sitio web.
          </p>
        ),
      },
      {
        title: "5. Cookies publicitarias o de marketing",
        content: (
          <p>
            Actualmente no se utilizan deliberadamente cookies de publicidad,
            remarketing o seguimiento comercial en este sitio web.
          </p>
        ),
      },
      {
        title: "6. Cambios futuros",
        content: (
          <>
            <p>
              OSINES podrá incorporar en el futuro herramientas de análisis,
              comunicación, mapas, vídeos, publicidad u otros servicios de
              terceros.
            </p>

            <p className="mt-4">
              Si la incorporación de dichas herramientas implica el uso de
              cookies o tecnologías similares que requieran consentimiento,
              OSINES actualizará esta Política de Cookies y, cuando sea
              necesario, implementará el correspondiente mecanismo de
              consentimiento antes de activar dichas tecnologías.
            </p>
          </>
        ),
      },
      {
        title: "7. Gestión de cookies",
        content: (
          <p>
            El usuario puede configurar determinados aspectos relacionados con
            las cookies desde las opciones de privacidad y seguridad de su
            navegador. La desactivación de determinadas cookies técnicas puede
            afectar al funcionamiento de algunas partes del sitio web.
          </p>
        ),
      },
      {
        title: "8. Actualización de esta política",
        content: (
          <p>
            Esta Política de Cookies podrá actualizarse cuando se produzcan
            cambios en las tecnologías utilizadas en el sitio web o cuando
            resulte necesario debido a modificaciones legales o regulatorias.
          </p>
        ),
      },
      {
        title: "9. Más información",
        content: (
          <p>
            Para obtener más información sobre el tratamiento de datos
            personales, consulte nuestra{" "}
            <Link
              href="/es/politica-de-privacidad"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Política de Privacidad
            </Link>
            .
          </p>
        ),
      },
    ],
  },

  en: {
    title: "Cookie Policy",
    subtitle: "Information about the use of cookies on this website",
    sections: [
      {
        title: "1. What are cookies?",
        content: (
          <p>
            Cookies are small text files that may be stored on a user's device
            when visiting a website. They allow a website to remember certain
            information and can help provide its functionality.
          </p>
        ),
      },
      {
        title: "2. Cookies used on this website",
        content: (
          <>
            <p>
              OSINES aims to limit the use of cookies and similar technologies
              to those necessary for the technical operation of the website.
            </p>

            <p className="mt-4">
              The current version of the website does not deliberately include
              analytics, personalised advertising or commercial tracking tools
              that require non-essential cookies.
            </p>

            <p className="mt-4">
              Strictly necessary technologies may be used where required to
              provide and protect the technical operation of the website.
            </p>
          </>
        ),
      },
      {
        title: "3. Technical or necessary cookies",
        content: (
          <p>
            Cookies or similar technologies that are strictly necessary to
            provide a service expressly requested by the user or to enable the
            technical operation of the website may be used without consent
            where permitted by applicable law.
          </p>
        ),
      },
      {
        title: "4. Analytics and measurement cookies",
        content: (
          <p>
            OSINES has not currently incorporated analytics or measurement
            tools using non-essential cookies into the current version of this
            website.
          </p>
        ),
      },
      {
        title: "5. Advertising and marketing cookies",
        content: (
          <p>
            Advertising, remarketing or commercial tracking cookies are not
            deliberately used on the current version of this website.
          </p>
        ),
      },
      {
        title: "6. Future changes",
        content: (
          <>
            <p>
              OSINES may in the future incorporate analytics, communication,
              maps, video, advertising or other third-party services.
            </p>

            <p className="mt-4">
              If such services involve cookies or similar technologies that
              require consent, OSINES will update this Cookie Policy and,
              where necessary, implement the appropriate consent mechanism
              before activating those technologies.
            </p>
          </>
        ),
      },
      {
        title: "7. Cookie management",
        content: (
          <p>
            Users can manage certain cookie-related settings through the
            privacy and security settings of their browser. Disabling certain
            technical cookies may affect parts of the website.
          </p>
        ),
      },
      {
        title: "8. Updates to this policy",
        content: (
          <p>
            This Cookie Policy may be updated when technologies used on the
            website change or when updates are required due to legal or
            regulatory changes.
          </p>
        ),
      },
      {
        title: "9. Further information",
        content: (
          <p>
            For more information about the processing of personal data, please
            consult our{" "}
            <Link
              href="/en/politica-de-privacidad"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        ),
      },
    ],
  },

  de: {
    title: "Cookie-Richtlinie",
    subtitle: "Informationen zur Verwendung von Cookies auf dieser Website",
    sections: [
      {
        title: "1. Was sind Cookies?",
        content: (
          <p>
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf
            dem Gerät des Nutzers gespeichert werden können. Sie ermöglichen es
            einer Website, bestimmte Informationen zu speichern und bestimmte
            Funktionen bereitzustellen.
          </p>
        ),
      },
      {
        title: "2. Auf dieser Website verwendete Cookies",
        content: (
          <>
            <p>
              OSINES beschränkt die Verwendung von Cookies und vergleichbaren
              Technologien grundsätzlich auf solche, die für den technischen
              Betrieb der Website erforderlich sind.
            </p>

            <p className="mt-4">
              In der aktuellen Version der Website sind bewusst keine Analyse-,
              personalisierten Werbe- oder kommerziellen Tracking-Dienste
              integriert, die nicht notwendige Cookies erfordern.
            </p>

            <p className="mt-4">
              Technisch notwendige Technologien können eingesetzt werden,
              soweit sie für den sicheren und ordnungsgemäßen Betrieb der
              Website erforderlich sind.
            </p>
          </>
        ),
      },
      {
        title: "3. Technisch notwendige Cookies",
        content: (
          <p>
            Cookies oder vergleichbare Technologien, die für einen vom Nutzer
            ausdrücklich gewünschten Dienst oder für den technischen Betrieb
            der Website unbedingt erforderlich sind, können eingesetzt werden,
            soweit dies nach den geltenden gesetzlichen Bestimmungen ohne
            Einwilligung zulässig ist.
          </p>
        ),
      },
      {
        title: "4. Analyse- und Statistik-Cookies",
        content: (
          <p>
            In der aktuellen Version dieser Website verwendet OSINES derzeit
            keine bewusst integrierten Analyse- oder Statistikdienste, die
            nicht notwendige Cookies einsetzen.
          </p>
        ),
      },
      {
        title: "5. Werbe- und Marketing-Cookies",
        content: (
          <p>
            In der aktuellen Version dieser Website werden bewusst keine
            Werbe-, Remarketing- oder kommerziellen Tracking-Cookies eingesetzt.
          </p>
        ),
      },
      {
        title: "6. Zukünftige Änderungen",
        content: (
          <>
            <p>
              OSINES kann zukünftig Analyse-, Kommunikations-, Karten-, Video-,
              Werbe- oder andere Dienste von Drittanbietern integrieren.
            </p>

            <p className="mt-4">
              Sollten solche Dienste Cookies oder vergleichbare Technologien
              einsetzen, für die eine Einwilligung erforderlich ist, wird
              OSINES diese Cookie-Richtlinie aktualisieren und – soweit
              erforderlich – einen entsprechenden Einwilligungsmechanismus
              einrichten, bevor solche Technologien aktiviert werden.
            </p>
          </>
        ),
      },
      {
        title: "7. Verwaltung von Cookies",
        content: (
          <p>
            Nutzer können bestimmte Cookie-Einstellungen über die Datenschutz-
            und Sicherheitseinstellungen ihres Browsers verwalten. Die
            Deaktivierung bestimmter technisch notwendiger Cookies kann die
            Funktion einzelner Bereiche der Website beeinträchtigen.
          </p>
        ),
      },
      {
        title: "8. Aktualisierung dieser Richtlinie",
        content: (
          <p>
            Diese Cookie-Richtlinie kann aktualisiert werden, wenn sich die auf
            der Website eingesetzten Technologien ändern oder aufgrund
            gesetzlicher oder regulatorischer Änderungen eine Aktualisierung
            erforderlich ist.
          </p>
        ),
      },
      {
        title: "9. Weitere Informationen",
        content: (
          <p>
            Weitere Informationen zur Verarbeitung personenbezogener Daten
            finden Sie in unserer{" "}
            <Link
              href="/de/politica-de-privacidad"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        ),
      },
    ],
  },

  ru: {
    title: "Политика использования Cookies",
    subtitle: "Информация об использовании Cookies на данном сайте",
    sections: [
      {
        title: "1. Что такое Cookies?",
        content: (
          <p>
            Cookies — это небольшие текстовые файлы, которые могут сохраняться
            на устройстве пользователя при посещении сайта. Они позволяют сайту
            запоминать определённую информацию и обеспечивать работу отдельных
            функций.
          </p>
        ),
      },
      {
        title: "2. Cookies, используемые на сайте",
        content: (
          <>
            <p>
              OSINES стремится ограничивать использование Cookies и аналогичных
              технологий теми, которые необходимы для технической работы сайта.
            </p>

            <p className="mt-4">
              В текущей версии сайта намеренно не используются аналитические,
              персонализированные рекламные или коммерческие инструменты
              отслеживания, требующие необязательных Cookies.
            </p>

            <p className="mt-4">
              Строго необходимые технические технологии могут использоваться,
              если они необходимы для функционирования и защиты сайта.
            </p>
          </>
        ),
      },
      {
        title: "3. Технические или необходимые Cookies",
        content: (
          <p>
            Cookies или аналогичные технологии, которые строго необходимы для
            предоставления услуги, явно запрошенной пользователем, или для
            технической работы сайта, могут использоваться без отдельного
            согласия в случаях, разрешённых применимым законодательством.
          </p>
        ),
      },
      {
        title: "4. Аналитические Cookies",
        content: (
          <p>
            В текущей версии сайта OSINES не использует намеренно
            интегрированные аналитические инструменты, применяющие
            необязательные Cookies.
          </p>
        ),
      },
      {
        title: "5. Рекламные и маркетинговые Cookies",
        content: (
          <p>
            В текущей версии сайта намеренно не используются рекламные,
            ремаркетинговые или коммерческие Cookies для отслеживания.
          </p>
        ),
      },
      {
        title: "6. Будущие изменения",
        content: (
          <>
            <p>
              В будущем OSINES может добавить аналитические, коммуникационные,
              картографические, видео-, рекламные или другие сторонние сервисы.
            </p>

            <p className="mt-4">
              Если такие сервисы будут использовать Cookies или аналогичные
              технологии, требующие согласия пользователя, OSINES обновит
              настоящую Политику и, при необходимости, внедрит соответствующий
              механизм получения согласия до активации таких технологий.
            </p>
          </>
        ),
      },
      {
        title: "7. Управление Cookies",
        content: (
          <p>
            Пользователь может управлять настройками Cookies через настройки
            конфиденциальности и безопасности своего браузера. Отключение
            некоторых технических Cookies может повлиять на работу отдельных
            частей сайта.
          </p>
        ),
      },
      {
        title: "8. Обновление политики",
        content: (
          <p>
            Настоящая Политика использования Cookies может обновляться при
            изменении используемых на сайте технологий или в связи с
            изменениями законодательства.
          </p>
        ),
      },
      {
        title: "9. Дополнительная информация",
        content: (
          <p>
            Дополнительную информацию об обработке персональных данных можно
            найти в нашей{" "}
            <Link
              href="/ru/politica-de-privacidad"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Политике конфиденциальности
            </Link>
            .
          </p>
        ),
      },
    ],
  },
};

const validLocales = ["es", "en", "de", "ru"] as const;

type Locale = (typeof validLocales)[number];

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const currentLocale: Locale = validLocales.includes(
    locale as Locale
  )
    ? (locale as Locale)
    : "es";

  const content = cookieContent[currentLocale];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/${currentLocale}`}
            className="text-sm font-semibold text-[#1685D8] hover:underline"
          >
            ← OSINES
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#62B532]">
              OSINES
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#123B66] md:text-5xl">
              {content.title}
            </h1>

            <p className="mt-4 text-lg text-slate-500">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-10">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="border-b border-slate-100 pb-10 last:border-b-0"
              >
                <h2 className="text-xl font-bold text-[#123B66]">
                  {section.title}
                </h2>

                <div className="mt-4 text-sm leading-7 text-slate-600">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1685D8]/10 bg-[#1685D8]/5 p-6 text-sm leading-6 text-slate-600">
            <strong className="text-[#123B66]">
              Hinweis:
            </strong>{" "}
            Die Cookie-Richtlinie wird aktualisiert, sobald sich die auf der
            Website eingesetzten Technologien oder Dienste ändern.
          </div>
        </div>
      </section>
    </main>
  );
}