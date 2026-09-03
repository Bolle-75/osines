import Link from "next/link";

const privacyContent = {
  es: {
    title: "Política de Privacidad",
    subtitle: "Información sobre el tratamiento de datos personales",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        content: (
          <>
            <p>
              El responsable del tratamiento de los datos personales
              recogidos a través de este sitio web es:
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
                <strong>Correo electrónico:</strong>{" "}
                <a
                  href="mailto:info@osines.com"
                  className="text-[#1685D8] hover:underline"
                >
                  info@osines.com
                </a>
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
        title: "2. Datos personales que podemos recoger",
        content: (
          <>
            <p>
              A través del formulario de contacto del sitio web podemos
              recoger los siguientes datos:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Nombre y apellidos.</li>
              <li>Número de teléfono.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Dirección o localidad del inmueble.</li>
              <li>Tipo de daño o servicio solicitado.</li>
              <li>Descripción del daño o de la solicitud.</li>
            </ul>

            <p className="mt-4">
              El usuario deberá proporcionar únicamente aquellos datos que
              sean necesarios para gestionar su solicitud.
            </p>
          </>
        ),
      },

      {
        title: "3. Finalidades del tratamiento",
        content: (
          <>
            <p>
              Los datos personales podrán ser tratados para las siguientes
              finalidades:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Atender y responder las solicitudes de contacto.
              </li>
              <li>
                Gestionar solicitudes relacionadas con daños, fugas,
                secado técnico, restauración u otros servicios de OSINES.
              </li>
              <li>
                Contactar con el usuario para solicitar información
                adicional necesaria para gestionar su solicitud.
              </li>
              <li>
                Preparar, cuando corresponda, presupuestos o propuestas de
                servicio.
              </li>
              <li>
                Cumplir las obligaciones legales que resulten aplicables.
              </li>
            </ul>
          </>
        ),
      },

      {
        title: "4. Base jurídica del tratamiento",
        content: (
          <>
            <p>
              La base jurídica para el tratamiento de los datos dependerá
              de la finalidad concreta.
            </p>

            <p className="mt-4">
              En particular, cuando el usuario solicite información o
              servicios de OSINES, el tratamiento podrá ser necesario para
              atender medidas precontractuales solicitadas por el propio
              usuario o para gestionar una relación contractual.
            </p>

            <p className="mt-4">
              Cuando exista una obligación legal, el tratamiento podrá
              basarse en el cumplimiento de dicha obligación.
            </p>

            <p className="mt-4">
              En otros casos en los que sea legalmente necesario, OSINES
              solicitará el consentimiento correspondiente.
            </p>
          </>
        ),
      },

      {
        title: "5. Conservación de los datos",
        content: (
          <p>
            Los datos personales se conservarán durante el tiempo necesario
            para atender la solicitud y gestionar la relación con el
            usuario. Posteriormente, podrán conservarse durante los plazos
            exigidos por las obligaciones legales aplicables.
          </p>
        ),
      },

      {
        title: "6. Destinatarios de los datos",
        content: (
          <>
            <p>
              Los datos personales podrán ser tratados por proveedores
              tecnológicos que presten servicios necesarios para el
              funcionamiento del sitio web y la gestión de las
              comunicaciones de OSINES.
            </p>

            <p className="mt-4">
              Dichos proveedores actuarán, cuando corresponda, como
              encargados del tratamiento y estarán sujetos a las
              obligaciones establecidas por la normativa aplicable en
              materia de protección de datos.
            </p>

            <p className="mt-4">
              Los datos no se venderán ni se cederán a terceros con fines
              comerciales ajenos a la prestación de los servicios de
              OSINES, salvo que exista una obligación legal o una base
              jurídica válida para ello.
            </p>
          </>
        ),
      },

      {
        title: "7. Transferencias internacionales",
        content: (
          <p>
            Cuando alguno de los proveedores utilizados por OSINES implique
            una transferencia internacional de datos personales, dicha
            transferencia se realizará de acuerdo con los requisitos
            establecidos por la normativa europea y española de protección
            de datos.
          </p>
        ),
      },

      {
        title: "8. Derechos del usuario",
        content: (
          <>
            <p>
              El usuario puede ejercer los derechos reconocidos por la
              normativa aplicable en materia de protección de datos,
              incluyendo:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Derecho de acceso.</li>
              <li>Derecho de rectificación.</li>
              <li>Derecho de supresión.</li>
              <li>Derecho a la limitación del tratamiento.</li>
              <li>Derecho a la portabilidad.</li>
              <li>Derecho de oposición.</li>
            </ul>

            <p className="mt-4">
              Para ejercer estos derechos, el usuario puede contactar con
              OSINES a través de:
            </p>

            <p className="mt-2">
              <a
                href="mailto:info@osines.com"
                className="font-semibold text-[#1685D8] hover:underline"
              >
                info@osines.com
              </a>
            </p>
          </>
        ),
      },

      {
        title: "9. Derecho a presentar una reclamación",
        content: (
          <p>
            El usuario que considere que el tratamiento de sus datos
            personales no se ajusta a la normativa aplicable puede presentar
            una reclamación ante la autoridad de control competente, en
            particular ante la Agencia Española de Protección de Datos
            (AEPD).
          </p>
        ),
      },

      {
        title: "10. Seguridad",
        content: (
          <p>
            OSINES adoptará las medidas técnicas y organizativas apropiadas
            para proteger los datos personales frente a accesos no
            autorizados, pérdida, alteración, divulgación o destrucción
            accidental o ilícita, teniendo en cuenta la naturaleza de los
            datos y los riesgos asociados al tratamiento.
          </p>
        ),
      },

      {
        title: "11. Datos de terceros",
        content: (
          <p>
            Si el usuario facilita datos personales pertenecientes a
            terceros, deberá contar previamente con una base jurídica válida
            para proporcionar dichos datos y, cuando corresponda, informar a
            las personas afectadas sobre el tratamiento.
          </p>
        ),
      },

      {
        title: "12. Datos de menores",
        content: (
          <p>
            Este sitio web no está dirigido específicamente a menores de
            edad. OSINES no pretende recoger deliberadamente datos personales
            de menores cuando no exista una base jurídica válida para ello.
          </p>
        ),
      },

      {
        title: "13. Actualización de esta política",
        content: (
          <p>
            OSINES podrá actualizar esta Política de Privacidad cuando sea
            necesario para reflejar cambios legales, técnicos,
            organizativos o relacionados con los servicios ofrecidos.
          </p>
        ),
      },

      {
        title: "14. Más información",
        content: (
          <p>
            Para obtener información adicional sobre los aspectos legales
            relacionados con el sitio web, puede consultar el{" "}
            <Link
              href="/es/aviso-legal"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Aviso Legal
            </Link>
            .
          </p>
        ),
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    subtitle: "Information about the processing of personal data",
    sections: [
      {
        title: "1. Data controller",
        content: (
          <>
            <p>
              The controller responsible for personal data collected through
              this website is:
            </p>

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
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@osines.com"
                  className="text-[#1685D8] hover:underline"
                >
                  info@osines.com
                </a>
              </p>
            </div>

            <p className="mt-4">
              The pending company details will be updated after the company
              incorporation and registration process has been completed.
            </p>
          </>
        ),
      },

      {
        title: "2. Personal data we may collect",
        content: (
          <>
            <p>
              Through the website contact form, we may collect:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Name and surname.</li>
              <li>Telephone number.</li>
              <li>Email address.</li>
              <li>Property address or location.</li>
              <li>Type of damage or requested service.</li>
              <li>Description of the damage or request.</li>
            </ul>

            <p className="mt-4">
              Users should only provide information necessary to process
              their request.
            </p>
          </>
        ),
      },

      {
        title: "3. Purposes of processing",
        content: (
          <>
            <p>Personal data may be processed to:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to contact requests.</li>
              <li>
                Manage requests relating to water damage, leak detection,
                technical drying, restoration or other OSINES services.
              </li>
              <li>
                Contact users when additional information is required.
              </li>
              <li>
                Prepare quotations or service proposals where appropriate.
              </li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </>
        ),
      },

      {
        title: "4. Legal basis",
        content: (
          <>
            <p>
              The legal basis for processing depends on the specific
              purpose.
            </p>

            <p className="mt-4">
              When a user requests information or services from OSINES,
              processing may be necessary to take pre-contractual steps at
              the user's request or to manage a contractual relationship.
            </p>

            <p className="mt-4">
              Where required by law, processing may be based on compliance
              with a legal obligation.
            </p>

            <p className="mt-4">
              Where legally necessary, OSINES will request the appropriate
              consent.
            </p>
          </>
        ),
      },

      {
        title: "5. Data retention",
        content: (
          <p>
            Personal data will be retained for as long as necessary to
            process the request and manage the relationship with the user.
            Data may subsequently be retained for periods required by
            applicable legal obligations.
          </p>
        ),
      },

      {
        title: "6. Data recipients",
        content: (
          <>
            <p>
              Personal data may be processed by technology providers that
              provide services necessary for the operation of the website
              and OSINES communications.
            </p>

            <p className="mt-4">
              Where applicable, such providers will act as data processors
              and will be subject to the requirements of applicable data
              protection legislation.
            </p>

            <p className="mt-4">
              Personal data will not be sold or disclosed to third parties
              for unrelated commercial purposes unless required by law or
              supported by a valid legal basis.
            </p>
          </>
        ),
      },

      {
        title: "7. International transfers",
        content: (
          <p>
            Where any provider used by OSINES involves an international
            transfer of personal data, the transfer will be carried out in
            accordance with applicable European and Spanish data protection
            requirements.
          </p>
        ),
      },

      {
        title: "8. User rights",
        content: (
          <>
            <p>
              Users may exercise the rights granted by applicable data
              protection legislation, including:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Right of access.</li>
              <li>Right to rectification.</li>
              <li>Right to erasure.</li>
              <li>Right to restriction of processing.</li>
              <li>Right to data portability.</li>
              <li>Right to object.</li>
            </ul>

            <p className="mt-4">
              Requests may be submitted by email:
            </p>

            <p className="mt-2">
              <a
                href="mailto:info@osines.com"
                className="font-semibold text-[#1685D8] hover:underline"
              >
                info@osines.com
              </a>
            </p>
          </>
        ),
      },

      {
        title: "9. Right to lodge a complaint",
        content: (
          <p>
            Users who believe that their personal data is being processed in
            breach of applicable legislation may lodge a complaint with the
            competent supervisory authority, including the Spanish Data
            Protection Agency (AEPD).
          </p>
        ),
      },

      {
        title: "10. Security",
        content: (
          <p>
            OSINES will implement appropriate technical and organisational
            measures to protect personal data against unauthorised access,
            loss, alteration, disclosure or accidental or unlawful
            destruction.
          </p>
        ),
      },

      {
        title: "11. Third-party data",
        content: (
          <p>
            If users provide personal data belonging to third parties, they
            must have a valid legal basis to provide such information and,
            where applicable, inform the affected individuals about the
            processing.
          </p>
        ),
      },

      {
        title: "12. Children",
        content: (
          <p>
            This website is not specifically directed at children. OSINES
            does not intentionally seek to collect children's personal data
            without a valid legal basis.
          </p>
        ),
      },

      {
        title: "13. Updates",
        content: (
          <p>
            OSINES may update this Privacy Policy when necessary to reflect
            legal, technical, organisational or service-related changes.
          </p>
        ),
      },

      {
        title: "14. Further information",
        content: (
          <p>
            Further legal information is available in the{" "}
            <Link
              href="/en/aviso-legal"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Legal Notice
            </Link>
            .
          </p>
        ),
      },
    ],
  },

  de: {
    title: "Datenschutzerklärung",
    subtitle: "Informationen zur Verarbeitung personenbezogener Daten",
    sections: [
      {
        title: "1. Verantwortlicher",
        content: (
          <>
            <p>
              Verantwortlicher für die über diese Website erhobenen
              personenbezogenen Daten ist:
            </p>

            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p>
                <strong>Firma:</strong> OSINES S.L.
              </p>
              <p className="mt-2">
                <strong>NIF:</strong> [NOCH NICHT VERGEBEN]
              </p>
              <p className="mt-2">
                <strong>Geschäftsanschrift:</strong> [NOCH OFFEN]
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
            </div>

            <p className="mt-4">
              Die noch offenen Unternehmensdaten werden nach Abschluss der
              Gründung und Registrierung ergänzt.
            </p>
          </>
        ),
      },

      {
        title: "2. Welche personenbezogenen Daten werden erhoben?",
        content: (
          <>
            <p>
              Über das Kontaktformular können folgende Daten erhoben werden:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Name und Nachname.</li>
              <li>Telefonnummer.</li>
              <li>E-Mail-Adresse.</li>
              <li>Adresse oder Ort der Immobilie.</li>
              <li>Art des Schadens bzw. gewünschte Dienstleistung.</li>
              <li>Beschreibung des Schadens oder Anliegens.</li>
            </ul>

            <p className="mt-4">
              Nutzer sollten nur die für die Bearbeitung ihrer Anfrage
              erforderlichen Angaben übermitteln.
            </p>
          </>
        ),
      },

      {
        title: "3. Zwecke der Verarbeitung",
        content: (
          <>
            <p>Die personenbezogenen Daten können verarbeitet werden, um:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Kontaktanfragen zu bearbeiten und zu beantworten.</li>
              <li>
                Anfragen zu Wasserschäden, Leckortung, technischer Trocknung,
                Wiederherstellung oder anderen OSINES-Leistungen zu bearbeiten.
              </li>
              <li>
                den Nutzer zu kontaktieren, wenn zusätzliche Informationen
                benötigt werden.
              </li>
              <li>
                gegebenenfalls Angebote oder Leistungsvorschläge zu erstellen.
              </li>
              <li>gesetzliche Verpflichtungen zu erfüllen.</li>
            </ul>
          </>
        ),
      },

      {
        title: "4. Rechtsgrundlage",
        content: (
          <>
            <p>
              Die Rechtsgrundlage für die Verarbeitung hängt vom jeweiligen
              Verarbeitungszweck ab.
            </p>

            <p className="mt-4">
              Wenn ein Nutzer Informationen oder Dienstleistungen von OSINES
              anfragt, kann die Verarbeitung zur Durchführung
              vorvertraglicher Maßnahmen auf Wunsch des Nutzers oder zur
              Durchführung eines Vertrags erforderlich sein.
            </p>

            <p className="mt-4">
              Soweit eine gesetzliche Verpflichtung besteht, kann die
              Verarbeitung auf deren Erfüllung beruhen.
            </p>

            <p className="mt-4">
              Soweit gesetzlich erforderlich, wird OSINES die entsprechende
              Einwilligung einholen.
            </p>
          </>
        ),
      },

      {
        title: "5. Speicherdauer",
        content: (
          <p>
            Personenbezogene Daten werden so lange gespeichert, wie dies zur
            Bearbeitung der Anfrage und zur Verwaltung der Geschäftsbeziehung
            erforderlich ist. Darüber hinaus können Daten für die gesetzlich
            vorgeschriebenen Zeiträume aufbewahrt werden.
          </p>
        ),
      },

      {
        title: "6. Empfänger der Daten",
        content: (
          <>
            <p>
              Personenbezogene Daten können von technischen
              Dienstleistern verarbeitet werden, die für den Betrieb der
              Website und die Kommunikation von OSINES erforderlich sind.
            </p>

            <p className="mt-4">
              Soweit erforderlich, handeln diese Dienstleister als
              Auftragsverarbeiter und unterliegen den gesetzlichen
              Datenschutzanforderungen.
            </p>

            <p className="mt-4">
              Personenbezogene Daten werden nicht zu fremden kommerziellen
              Zwecken verkauft oder weitergegeben, sofern keine gesetzliche
              Verpflichtung oder andere gültige Rechtsgrundlage besteht.
            </p>
          </>
        ),
      },

      {
        title: "7. Internationale Datenübermittlung",
        content: (
          <p>
            Soweit von OSINES eingesetzte Dienstleister eine internationale
            Übermittlung personenbezogener Daten erfordern, erfolgt diese
            entsprechend den geltenden europäischen und spanischen
            Datenschutzbestimmungen.
          </p>
        ),
      },

      {
        title: "8. Rechte der betroffenen Personen",
        content: (
          <>
            <p>
              Nutzer können die ihnen nach dem geltenden Datenschutzrecht
              zustehenden Rechte ausüben, insbesondere:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Recht auf Auskunft.</li>
              <li>Recht auf Berichtigung.</li>
              <li>Recht auf Löschung.</li>
              <li>Recht auf Einschränkung der Verarbeitung.</li>
              <li>Recht auf Datenübertragbarkeit.</li>
              <li>Recht auf Widerspruch.</li>
            </ul>

            <p className="mt-4">
              Anfragen können per E-Mail an folgende Adresse gerichtet werden:
            </p>

            <p className="mt-2">
              <a
                href="mailto:info@osines.com"
                className="font-semibold text-[#1685D8] hover:underline"
              >
                info@osines.com
              </a>
            </p>
          </>
        ),
      },

      {
        title: "9. Beschwerderecht",
        content: (
          <p>
            Betroffene Personen, die der Ansicht sind, dass ihre
            personenbezogenen Daten nicht rechtskonform verarbeitet werden,
            können sich bei der zuständigen Datenschutzaufsichtsbehörde
            beschweren, insbesondere bei der spanischen
            Datenschutzbehörde AEPD.
          </p>
        ),
      },

      {
        title: "10. Datensicherheit",
        content: (
          <p>
            OSINES wird angemessene technische und organisatorische
            Maßnahmen treffen, um personenbezogene Daten vor unbefugtem
            Zugriff, Verlust, Veränderung, Offenlegung sowie versehentlicher
            oder rechtswidriger Zerstörung zu schützen.
          </p>
        ),
      },

      {
        title: "11. Daten Dritter",
        content: (
          <p>
            Wenn Nutzer personenbezogene Daten Dritter übermitteln, müssen
            sie über eine gültige Rechtsgrundlage für die Übermittlung
            verfügen und die betroffenen Personen gegebenenfalls über die
            Verarbeitung informieren.
          </p>
        ),
      },

      {
        title: "12. Minderjährige",
        content: (
          <p>
            Diese Website richtet sich nicht speziell an Minderjährige.
            OSINES beabsichtigt nicht, personenbezogene Daten Minderjähriger
            ohne gültige Rechtsgrundlage zu erheben.
          </p>
        ),
      },

      {
        title: "13. Aktualisierung",
        content: (
          <p>
            OSINES kann diese Datenschutzerklärung aktualisieren, wenn dies
            aufgrund rechtlicher, technischer, organisatorischer oder
            dienstleistungsbezogener Änderungen erforderlich ist.
          </p>
        ),
      },

      {
        title: "14. Weitere Informationen",
        content: (
          <p>
            Weitere rechtliche Informationen finden Sie im{" "}
            <Link
              href="/de/aviso-legal"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Impressum
            </Link>
            .
          </p>
        ),
      },
    ],
  },

  ru: {
    title: "Политика конфиденциальности",
    subtitle: "Информация об обработке персональных данных",
    sections: [
      {
        title: "1. Ответственный за обработку данных",
        content: (
          <>
            <p>
              Ответственным за обработку персональных данных, собираемых через
              данный сайт, является:
            </p>

            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p>
                <strong>Компания:</strong> OSINES S.L.
              </p>
              <p className="mt-2">
                <strong>NIF:</strong> [ОЖИДАЕТ ПРИСВОЕНИЯ]
              </p>
              <p className="mt-2">
                <strong>Юридический адрес:</strong> [ОЖИДАЕТ РЕГИСТРАЦИИ]
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
            </div>

            <p className="mt-4">
              Недостающие данные будут добавлены после завершения процесса
              создания и регистрации компании.
            </p>
          </>
        ),
      },

      {
        title: "2. Какие персональные данные могут собираться",
        content: (
          <>
            <p>
              Через контактную форму сайта могут собираться:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Имя и фамилия.</li>
              <li>Номер телефона.</li>
              <li>Адрес электронной почты.</li>
              <li>Адрес или населённый пункт объекта.</li>
              <li>Тип повреждения или запрашиваемая услуга.</li>
              <li>Описание повреждения или запроса.</li>
            </ul>

            <p className="mt-4">
              Пользователь должен предоставлять только данные, необходимые
              для обработки запроса.
            </p>
          </>
        ),
      },

      {
        title: "3. Цели обработки",
        content: (
          <>
            <p>Персональные данные могут обрабатываться для:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Обработки и ответа на запросы пользователей.</li>
              <li>
                Обработки запросов, связанных с повреждениями водой, поиском
                утечек, технической сушкой, восстановлением и другими
                услугами OSINES.
              </li>
              <li>
                Связи с пользователем при необходимости получения
                дополнительной информации.
              </li>
              <li>
                Подготовки предложений или расчётов стоимости услуг.
              </li>
              <li>Соблюдения применимых законодательных требований.</li>
            </ul>
          </>
        ),
      },

      {
        title: "4. Правовое основание",
        content: (
          <>
            <p>
              Правовое основание обработки зависит от конкретной цели.
            </p>

            <p className="mt-4">
              При запросе информации или услуг OSINES обработка может быть
              необходима для выполнения преддоговорных действий по запросу
              пользователя или для исполнения договора.
            </p>

            <p className="mt-4">
              В случаях, предусмотренных законом, обработка может быть
              основана на выполнении юридического обязательства.
            </p>

            <p className="mt-4">
              В случаях, когда это требуется законом, OSINES запросит
              соответствующее согласие.
            </p>
          </>
        ),
      },

      {
        title: "5. Срок хранения данных",
        content: (
          <p>
            Персональные данные будут храниться столько, сколько необходимо
            для обработки запроса и управления отношениями с пользователем.
            После этого данные могут храниться в течение сроков,
            предусмотренных применимым законодательством.
          </p>
        ),
      },

      {
        title: "6. Получатели данных",
        content: (
          <>
            <p>
              Персональные данные могут обрабатываться технологическими
              поставщиками, предоставляющими услуги, необходимые для работы
              сайта и коммуникации OSINES.
            </p>

            <p className="mt-4">
              В соответствующих случаях такие поставщики выступают в качестве
              обработчиков данных и обязаны соблюдать применимое
              законодательство о защите данных.
            </p>

            <p className="mt-4">
              Персональные данные не продаются и не передаются третьим лицам
              для несвязанных коммерческих целей, за исключением случаев,
              предусмотренных законом или имеющих иное действительное
              правовое основание.
            </p>
          </>
        ),
      },

      {
        title: "7. Международная передача данных",
        content: (
          <p>
            Если использование какого-либо поставщика OSINES предполагает
            международную передачу персональных данных, такая передача
            осуществляется в соответствии с требованиями европейского и
            испанского законодательства о защите данных.
          </p>
        ),
      },

      {
        title: "8. Права пользователя",
        content: (
          <>
            <p>
              Пользователь может воспользоваться правами, предусмотренными
              применимым законодательством о защите данных, включая:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Право на доступ.</li>
              <li>Право на исправление.</li>
              <li>Право на удаление.</li>
              <li>Право на ограничение обработки.</li>
              <li>Право на переносимость данных.</li>
              <li>Право на возражение против обработки.</li>
            </ul>

            <p className="mt-4">
              Запрос можно направить по адресу:
            </p>

            <p className="mt-2">
              <a
                href="mailto:info@osines.com"
                className="font-semibold text-[#1685D8] hover:underline"
              >
                info@osines.com
              </a>
            </p>
          </>
        ),
      },

      {
        title: "9. Право на подачу жалобы",
        content: (
          <p>
            Пользователь, считающий, что его персональные данные
            обрабатываются с нарушением законодательства, может обратиться
            с жалобой в компетентный надзорный орган, в частности в
            Испанское агентство по защите данных (AEPD).
          </p>
        ),
      },

      {
        title: "10. Безопасность",
        content: (
          <p>
            OSINES принимает соответствующие технические и организационные
            меры для защиты персональных данных от несанкционированного
            доступа, потери, изменения, раскрытия или случайного либо
            незаконного уничтожения.
          </p>
        ),
      },

      {
        title: "11. Данные третьих лиц",
        content: (
          <p>
            Если пользователь предоставляет персональные данные третьих лиц,
            он должен иметь действительное правовое основание для их
            предоставления и, при необходимости, проинформировать
            соответствующих лиц об обработке данных.
          </p>
        ),
      },

      {
        title: "12. Несовершеннолетние",
        content: (
          <p>
            Данный сайт специально не предназначен для несовершеннолетних.
            OSINES не стремится намеренно собирать персональные данные
            несовершеннолетних без действительного правового основания.
          </p>
        ),
      },

      {
        title: "13. Обновление политики",
        content: (
          <p>
            OSINES может обновлять настоящую Политику конфиденциальности при
            необходимости в связи с изменениями законодательства, технологий,
            организации или предоставляемых услуг.
          </p>
        ),
      },

      {
        title: "14. Дополнительная информация",
        content: (
          <p>
            Дополнительная юридическая информация доступна в разделе{" "}
            <Link
              href="/ru/aviso-legal"
              className="font-semibold text-[#1685D8] hover:underline"
            >
              Правовая информация
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

export default async function PrivacyPolicyPage({
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

  const content = privacyContent[currentLocale];

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
            Die endgültigen Unternehmensdaten werden nach Abschluss der
            Gründung und Registrierung von OSINES S.L. ergänzt.
          </div>
        </div>
      </section>
    </main>
  );
}