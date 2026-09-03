import Link from "next/link";

const legalContent = {
  es: {
    title: "Aviso Legal",
    subtitle: "Información legal del sitio web",
    sections: [
      {
        title: "1. Datos identificativos",
        content: (
          <>
            <p>
              El presente sitio web es titularidad de:
            </p>

            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p>
                <strong>Razón social:</strong> OSINES S.L.
              </p>
              <p className="mt-2">
                <strong>NIF:</strong> [PENDIENTE DE ASIGNACIÓN]
              </p>
              <p className="mt-2">
                <strong>Domicilio social:</strong> [PENDIENTE DE REGISTRO]
              </p>
              <p className="mt-2">
                <strong>Registro Mercantil:</strong> [PENDIENTE DE REGISTRO]
              </p>
              <p className="mt-2">
                <strong>Correo electrónico:</strong>{" "}
                <a
                  href="mailto:info@osines.com"
                  className="text-[#1685D8] hover:underline"
                >
                  info@osines.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Dominio:</strong> osines.com
              </p>
            </div>

            <p className="mt-4">
              Los datos identificativos pendientes serán actualizados una
              vez finalizado el proceso de constitución y registro de la
              sociedad.
            </p>
          </>
        ),
      },
      {
        title: "2. Objeto del sitio web",
        content: (
          <p>
            El presente sitio web tiene como finalidad proporcionar
            información sobre los servicios ofrecidos por OSINES en materia
            de detección de fugas, daños por agua, secado técnico,
            recuperación y restauración de inmuebles, así como facilitar el
            contacto con la empresa y la solicitud de información o
            servicios.
          </p>
        ),
      },
      {
        title: "3. Condiciones de uso",
        content: (
          <>
            <p>
              El acceso y uso de este sitio web atribuye la condición de
              usuario e implica la aceptación de las presentes condiciones
              de uso.
            </p>

            <p className="mt-4">
              El usuario se compromete a utilizar el sitio web de forma
              diligente, lícita y conforme a la legislación aplicable, así
              como a no realizar actividades que puedan perjudicar,
              sobrecargar, dañar o impedir el normal funcionamiento del
              sitio web.
            </p>
          </>
        ),
      },
      {
        title: "4. Propiedad intelectual e industrial",
        content: (
          <>
            <p>
              Todos los contenidos del sitio web, incluyendo, entre otros,
              textos, imágenes, fotografías, logotipos, diseños, elementos
              gráficos, estructura, código fuente y demás elementos, están
              protegidos por la legislación aplicable en materia de propiedad
              intelectual e industrial.
            </p>

            <p className="mt-4">
              Salvo autorización expresa, queda prohibida la reproducción,
              distribución, comunicación pública, transformación o cualquier
              otra forma de explotación de los contenidos del sitio web.
            </p>

            <p className="mt-4">
              El nombre OSINES y sus elementos identificativos podrán estar
              protegidos por los derechos de propiedad industrial que
              correspondan.
            </p>
          </>
        ),
      },
      {
        title: "5. Responsabilidad",
        content: (
          <>
            <p>
              OSINES procura que la información publicada en este sitio web
              sea correcta y esté actualizada, pero no garantiza que los
              contenidos sean permanentemente completos, exactos o estén
              libres de errores.
            </p>

            <p className="mt-4">
              OSINES no será responsable de los daños que pudieran derivarse
              de interferencias, interrupciones, virus informáticos, averías
              telefónicas o desconexiones en el funcionamiento operativo del
              sistema electrónico, siempre que dichas circunstancias sean
              ajenas a su control.
            </p>

            <p className="mt-4">
              La información publicada en este sitio web tiene carácter
              general y no sustituye una inspección técnica o valoración
              profesional específica del inmueble o del daño.
            </p>
          </>
        ),
      },
      {
        title: "6. Enlaces externos",
        content: (
          <p>
            En caso de que este sitio web incluya enlaces a páginas o
            servicios de terceros, OSINES no asume responsabilidad sobre sus
            contenidos, disponibilidad o políticas de privacidad y cookies.
            El acceso a dichos sitios se realizará bajo la responsabilidad
            del usuario.
          </p>
        ),
      },
      {
        title: "7. Protección de datos personales",
        content: (
          <p>
            El tratamiento de los datos personales que puedan facilitarse a
            través de este sitio web se realizará de acuerdo con la normativa
            aplicable en materia de protección de datos personales.
          </p>
        ),
      },
      {
        title: "8. Cookies",
        content: (
          <p>
            Este sitio web podrá utilizar cookies u otras tecnologías
            similares. La información detallada sobre su utilización se
            encuentra disponible en la{" "}
            <Link
              href="/es/politica-de-cookies"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Política de Cookies
            </Link>
            .
          </p>
        ),
      },
      {
        title: "9. Legislación aplicable",
        content: (
          <p>
            La relación entre OSINES y los usuarios del sitio web se regirá
            por la legislación española aplicable, sin perjuicio de las
            disposiciones imperativas que pudieran resultar aplicables en
            materia de consumidores y usuarios.
          </p>
        ),
      },
      {
        title: "10. Actualización de la información",
        content: (
          <p>
            OSINES se reserva el derecho de modificar, actualizar o eliminar
            en cualquier momento los contenidos y la información publicada
            en este sitio web, especialmente cuando resulte necesario para
            adaptarlos a cambios legales, técnicos o empresariales.
          </p>
        ),
      },
    ],
  },

  en: {
    title: "Legal Notice",
    subtitle: "Legal information about this website",
    sections: [
      {
        title: "1. Identification details",
        content: (
          <>
            <p>This website is operated by:</p>

            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p>
                <strong>Company name:</strong> OSINES S.L.
              </p>
              <p className="mt-2">
                <strong>NIF:</strong> [PENDING]
              </p>
              <p className="mt-2">
                <strong>Registered office:</strong> [PENDING]
              </p>
              <p className="mt-2">
                <strong>Commercial Registry:</strong> [PENDING]
              </p>
              <p className="mt-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@osines.com"
                  className="text-[#1685D8] hover:underline"
                >
                  info@osines.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Domain:</strong> osines.com
              </p>
            </div>

            <p className="mt-4">
              The pending identification details will be updated once the
              company incorporation and registration process has been
              completed.
            </p>
          </>
        ),
      },
      {
        title: "2. Purpose of the website",
        content: (
          <p>
            This website provides information about OSINES services,
            including leak detection, water damage services, technical
            drying, recovery and restoration of properties. It also allows
            users to contact the company and request information or services.
          </p>
        ),
      },
      {
        title: "3. Terms of use",
        content: (
          <>
            <p>
              Accessing and using this website gives the user the status of
              user and implies acceptance of these terms of use.
            </p>

            <p className="mt-4">
              Users agree to use the website lawfully, diligently and in
              accordance with applicable legislation and not to carry out
              activities that may damage, overload or disrupt its normal
              operation.
            </p>
          </>
        ),
      },
      {
        title: "4. Intellectual and industrial property",
        content: (
          <>
            <p>
              All website content, including texts, images, photographs,
              logos, designs, graphics, structure, source code and other
              elements, is protected by applicable intellectual and industrial
              property legislation.
            </p>

            <p className="mt-4">
              Unless expressly authorised, reproduction, distribution, public
              communication, transformation or any other form of exploitation
              of the website content is prohibited.
            </p>
          </>
        ),
      },
      {
        title: "5. Liability",
        content: (
          <>
            <p>
              OSINES makes reasonable efforts to ensure that the information
              published on this website is accurate and up to date. However,
              it cannot guarantee that all content will always be complete,
              accurate or free from errors.
            </p>

            <p className="mt-4">
              The information provided on this website is general in nature
              and does not replace a specific technical inspection or
              professional assessment of a property or damage.
            </p>
          </>
        ),
      },
      {
        title: "6. External links",
        content: (
          <p>
            If this website contains links to third-party websites or
            services, OSINES is not responsible for their content,
            availability, privacy policies or cookie policies.
          </p>
        ),
      },
      {
        title: "7. Personal data protection",
        content: (
          <p>
            Personal data provided through this website will be processed in
            accordance with applicable data protection legislation.
          </p>
        ),
      },
      {
        title: "8. Cookies",
        content: (
          <p>
            This website may use cookies or similar technologies. Detailed
            information is available in the{" "}
            <Link
              href="/en/politica-de-cookies"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Cookie Policy
            </Link>
            .
          </p>
        ),
      },
      {
        title: "9. Applicable law",
        content: (
          <p>
            The relationship between OSINES and website users shall be
            governed by applicable Spanish law, without prejudice to
            mandatory consumer protection provisions that may apply.
          </p>
        ),
      },
      {
        title: "10. Updates",
        content: (
          <p>
            OSINES reserves the right to modify, update or remove website
            content and information whenever necessary, particularly to
            reflect legal, technical or business changes.
          </p>
        ),
      },
    ],
  },

  de: {
    title: "Impressum",
    subtitle: "Rechtliche Informationen zu dieser Website",
    sections: [
      {
        title: "1. Angaben zum Unternehmen",
        content: (
          <>
            <p>Betreiber dieser Website ist:</p>

            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p>
                <strong>Firma:</strong> OSINES S.L.
              </p>
              <p className="mt-2">
                <strong>NIF:</strong> [NOCH NICHT VERGEBEN]
              </p>
              <p className="mt-2">
                <strong>Sitz / Geschäftsanschrift:</strong> [NOCH OFFEN]
              </p>
              <p className="mt-2">
                <strong>Registro Mercantil:</strong> [NOCH OFFEN]
              </p>
              <p className="mt-2">
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:info@osines.com"
                  className="text-[#1685D8] hover:underline"
                >
                  info@osines.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Domain:</strong> osines.com
              </p>
            </div>

            <p className="mt-4">
              Die noch offenen Unternehmensdaten werden nach Abschluss der
              Gründung und Registrierung der Gesellschaft ergänzt.
            </p>
          </>
        ),
      },
      {
        title: "2. Zweck der Website",
        content: (
          <p>
            Diese Website informiert über die Leistungen von OSINES in den
            Bereichen Leckortung, Wasserschäden, technische Trocknung,
            Wiederherstellung und Sanierung von Immobilien. Außerdem
            ermöglicht sie die Kontaktaufnahme und die Anfrage von
            Informationen oder Dienstleistungen.
          </p>
        ),
      },
      {
        title: "3. Nutzungsbedingungen",
        content: (
          <>
            <p>
              Mit dem Zugriff auf und der Nutzung dieser Website erkennt der
              Nutzer diese Nutzungsbedingungen an.
            </p>

            <p className="mt-4">
              Der Nutzer verpflichtet sich, die Website rechtmäßig,
              sorgfältig und entsprechend den geltenden gesetzlichen
              Bestimmungen zu nutzen.
            </p>
          </>
        ),
      },
      {
        title: "4. Geistiges und gewerbliches Eigentum",
        content: (
          <>
            <p>
              Sämtliche Inhalte dieser Website, einschließlich Texte, Bilder,
              Fotografien, Logos, Designs, Grafiken, Struktur und Quellcode,
              sind durch die geltenden Bestimmungen zum geistigen und
              gewerblichen Eigentum geschützt.
            </p>

            <p className="mt-4">
              Eine Vervielfältigung, Verbreitung, öffentliche Wiedergabe,
              Bearbeitung oder sonstige Nutzung ist ohne ausdrückliche
              Genehmigung nicht gestattet.
            </p>
          </>
        ),
      },
      {
        title: "5. Haftung",
        content: (
          <>
            <p>
              OSINES bemüht sich um korrekte und aktuelle Informationen auf
              dieser Website. Eine dauerhafte Gewähr für Vollständigkeit,
              Richtigkeit und Fehlerfreiheit kann jedoch nicht übernommen
              werden.
            </p>

            <p className="mt-4">
              Die Informationen auf dieser Website dienen allgemeinen
              Informationszwecken und ersetzen keine konkrete technische
              Untersuchung oder fachliche Bewertung eines Gebäudes oder
              Schadens.
            </p>
          </>
        ),
      },
      {
        title: "6. Externe Links",
        content: (
          <p>
            Sofern diese Website Links zu Websites oder Diensten Dritter
            enthält, übernimmt OSINES keine Verantwortung für deren Inhalte,
            Verfügbarkeit sowie deren Datenschutz- oder Cookie-Bestimmungen.
          </p>
        ),
      },
      {
        title: "7. Datenschutz",
        content: (
          <p>
            Personenbezogene Daten, die über diese Website übermittelt
            werden, werden entsprechend den geltenden
            Datenschutzbestimmungen verarbeitet.
          </p>
        ),
      },
      {
        title: "8. Cookies",
        content: (
          <p>
            Diese Website kann Cookies oder ähnliche Technologien verwenden.
            Weitere Informationen enthält die{" "}
            <Link
              href="/de/politica-de-cookies"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Cookie-Richtlinie
            </Link>
            .
          </p>
        ),
      },
      {
        title: "9. Anwendbares Recht",
        content: (
          <p>
            Für die Beziehung zwischen OSINES und den Nutzern dieser Website
            gilt das anwendbare spanische Recht, unbeschadet zwingender
            Verbraucherschutzbestimmungen.
          </p>
        ),
      },
      {
        title: "10. Aktualisierung",
        content: (
          <p>
            OSINES behält sich das Recht vor, Inhalte und Informationen dieser
            Website jederzeit zu ändern, zu aktualisieren oder zu entfernen,
            insbesondere aufgrund rechtlicher, technischer oder
            unternehmerischer Änderungen.
          </p>
        ),
      },
    ],
  },

  ru: {
    title: "Правовая информация",
    subtitle: "Юридическая информация о сайте",
    sections: [
      {
        title: "1. Информация о компании",
        content: (
          <>
            <p>Владельцем данного сайта является:</p>

            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p>
                <strong>Название компании:</strong> OSINES S.L.
              </p>
              <p className="mt-2">
                <strong>NIF:</strong> [ОЖИДАЕТ ПРИСВОЕНИЯ]
              </p>
              <p className="mt-2">
                <strong>Юридический адрес:</strong> [ОЖИДАЕТ РЕГИСТРАЦИИ]
              </p>
              <p className="mt-2">
                <strong>Торговый реестр:</strong> [ОЖИДАЕТ РЕГИСТРАЦИИ]
              </p>
              <p className="mt-2">
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:info@osines.com"
                  className="text-[#1685D8] hover:underline"
                >
                  info@osines.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Домен:</strong> osines.com
              </p>
            </div>

            <p className="mt-4">
              Недостающие данные будут добавлены после завершения процесса
              создания и регистрации компании.
            </p>
          </>
        ),
      },
      {
        title: "2. Назначение сайта",
        content: (
          <p>
            Сайт предоставляет информацию об услугах OSINES в области
            обнаружения утечек, устранения последствий повреждений водой,
            технической сушки, восстановления и ремонта объектов недвижимости,
            а также позволяет связаться с компанией и запросить услуги.
          </p>
        ),
      },
      {
        title: "3. Условия использования",
        content: (
          <>
            <p>
              Использование данного сайта означает принятие настоящих условий
              использования.
            </p>

            <p className="mt-4">
              Пользователь обязуется использовать сайт законным и надлежащим
              образом и не предпринимать действий, способных нарушить его
              нормальную работу.
            </p>
          </>
        ),
      },
      {
        title: "4. Интеллектуальная собственность",
        content: (
          <>
            <p>
              Все материалы сайта, включая тексты, изображения, фотографии,
              логотипы, дизайн, графические элементы, структуру и исходный код,
              защищены применимым законодательством об интеллектуальной и
              промышленной собственности.
            </p>

            <p className="mt-4">
              Без специального разрешения запрещается воспроизводить,
              распространять или иным образом использовать материалы сайта.
            </p>
          </>
        ),
      },
      {
        title: "5. Ответственность",
        content: (
          <>
            <p>
              OSINES стремится поддерживать информацию на сайте точной и
              актуальной, однако не гарантирует постоянную полноту и
              безошибочность опубликованных материалов.
            </p>

            <p className="mt-4">
              Информация на сайте носит общий характер и не заменяет конкретную
              техническую проверку или профессиональную оценку объекта либо
              повреждения.
            </p>
          </>
        ),
      },
      {
        title: "6. Внешние ссылки",
        content: (
          <p>
            Если сайт содержит ссылки на сторонние сайты или сервисы, OSINES не
            несёт ответственности за их содержание, доступность и правила
            обработки персональных данных или использования cookies.
          </p>
        ),
      },
      {
        title: "7. Защита персональных данных",
        content: (
          <p>
            Персональные данные, предоставленные через данный сайт, будут
            обрабатываться в соответствии с применимым законодательством о
            защите персональных данных.
          </p>
        ),
      },
      {
        title: "8. Cookies",
        content: (
          <p>
            Сайт может использовать cookies и аналогичные технологии.
            Подробная информация будет представлена в{" "}
            <Link
              href="/ru/politica-de-cookies"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Политике использования Cookies
            </Link>
            .
          </p>
        ),
      },
      {
        title: "9. Применимое законодательство",
        content: (
          <p>
            Отношения между OSINES и пользователями сайта регулируются
            применимым законодательством Испании, без ущерба для обязательных
            норм защиты прав потребителей.
          </p>
        ),
      },
      {
        title: "10. Обновление информации",
        content: (
          <p>
            OSINES оставляет за собой право в любое время изменять, обновлять
            или удалять опубликованную на сайте информацию, в частности в связи
            с изменениями законодательства, техническими или корпоративными
            изменениями.
          </p>
        ),
      },
    ],
  },
};

const validLocales = ["es", "en", "de", "ru"] as const;

type Locale = (typeof validLocales)[number];

export default async function LegalNoticePage({
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

  const content = legalContent[currentLocale];

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
            <strong className="text-[#123B66]">Hinweis:</strong>{" "}
            Die endgültigen Unternehmensdaten werden nach Abschluss der
            Gründung und Registrierung von OSINES S.L. ergänzt.
          </div>
        </div>
      </section>
    </main>
  );
}