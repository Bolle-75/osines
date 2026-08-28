export const locales = ["es", "en", "de", "ru"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  es: {
    language: "Español",

    nav: {
      home: "INICIO",
      services: "SERVICIOS",
      about: "NOSOTROS",
      contact: "CONTACTO",
    },

    hero: {
      badge: "SOLUCIONES PROFESIONALES",
      title1: "Detección.",
      title2: "Secado.",
      title3: "Restauración.",
      description:
        "Soluciones profesionales para daños por agua, detección de fugas, secado técnico y restauración.",
      primaryButton: "SOLICITAR SERVICIO",
      secondaryButton: "NUESTROS SERVICIOS",
    },

    services: {
      label: "SERVICIOS",
      title: "Soluciones profesionales.",
      description:
        "Tecnología, experiencia y respuesta profesional para cada tipo de daño.",
      items: [
        "Detección de fugas",
        "Secado técnico",
        "Daños por agua",
        "Restauración",
      ],
    },

    target: {
      label: "PARA QUIÉN",
      title: "Soluciones para cada necesidad.",
      items: [
        {
          title: "ASEGURADORAS",
          description:
            "Gestión profesional de siniestros y documentación técnica.",
        },
        {
          title: "ADMINISTRADORES DE FINCAS",
          description:
            "Respuesta rápida y coordinación profesional de los trabajos.",
        },
        {
          title: "PARTICULARES",
          description:
            "Ayuda profesional para recuperar su vivienda o propiedad.",
        },
      ],
    },

    about: {
      label: "SOBRE NOSOTROS",
      title: "Profesionalidad, tecnología y respuesta rápida.",
      description:
        "Nuestro objetivo es detectar el problema, controlar el daño y recuperar los espacios afectados de forma profesional y eficiente.",
    },

    contact: {
      label: "CONTACTO",
      title: "Estamos aquí para ayudarte.",
      description:
        "Contacta con OSINES y cuéntanos qué necesitas. Nuestro equipo estudiará tu caso.",
      button: "CONTACTAR CON OSINES",
    },

    footer: "DETECCIÓN · SECADO · RESTAURACIÓN",
  },

  en: {
    language: "English",

    nav: {
      home: "HOME",
      services: "SERVICES",
      about: "ABOUT US",
      contact: "CONTACT",
    },

    hero: {
      badge: "PROFESSIONAL SOLUTIONS",
      title1: "Detection.",
      title2: "Drying.",
      title3: "Restoration.",
      description:
        "Professional solutions for water damage, leak detection, technical drying and restoration.",
      primaryButton: "REQUEST SERVICE",
      secondaryButton: "OUR SERVICES",
    },

    services: {
      label: "SERVICES",
      title: "Professional solutions.",
      description:
        "Technology, experience and professional response for every type of damage.",
      items: [
        "Leak detection",
        "Technical drying",
        "Water damage",
        "Restoration",
      ],
    },

    target: {
      label: "WHO WE SERVE",
      title: "Solutions for every need.",
      items: [
        {
          title: "INSURANCE COMPANIES",
          description:
            "Professional claims management and technical documentation.",
        },
        {
          title: "PROPERTY MANAGERS",
          description:
            "Fast response and professional coordination of services.",
        },
        {
          title: "PRIVATE CUSTOMERS",
          description:
            "Professional help to restore your home or property.",
        },
      ],
    },

    about: {
      label: "ABOUT US",
      title: "Professionalism, technology and fast response.",
      description:
        "Our goal is to identify the problem, control the damage and professionally restore affected areas.",
    },

    contact: {
      label: "CONTACT",
      title: "We are here to help.",
      description:
        "Contact OSINES and tell us what you need. Our team will assess your case.",
      button: "CONTACT OSINES",
    },

    footer: "DETECTION · DRYING · RESTORATION",
  },

  de: {
    language: "Deutsch",

    nav: {
      home: "STARTSEITE",
      services: "LEISTUNGEN",
      about: "ÜBER UNS",
      contact: "KONTAKT",
    },

    hero: {
      badge: "PROFESSIONELLE LÖSUNGEN",
      title1: "Ortung.",
      title2: "Trocknung.",
      title3: "Wiederherstellung.",
      description:
        "Professionelle Lösungen bei Wasserschäden, Leckageortung, technischer Trocknung und Wiederherstellung.",
      primaryButton: "SERVICE ANFORDERN",
      secondaryButton: "UNSERE LEISTUNGEN",
    },

    services: {
      label: "LEISTUNGEN",
      title: "Professionelle Lösungen.",
      description:
        "Technologie, Erfahrung und professionelle Betreuung für jeden Schaden.",
      items: [
        "Leckageortung",
        "Technische Trocknung",
        "Wasserschäden",
        "Wiederherstellung",
      ],
    },

    target: {
      label: "FÜR WEN",
      title: "Lösungen für jeden Bedarf.",
      items: [
        {
          title: "VERSICHERUNGEN",
          description:
            "Professionelle Schadenbearbeitung und technische Dokumentation.",
        },
        {
          title: "HAUSVERWALTUNGEN",
          description:
            "Schnelle Reaktion und professionelle Koordination der Arbeiten.",
        },
        {
          title: "PRIVATKUNDEN",
          description:
            "Professionelle Hilfe bei der Wiederherstellung Ihrer Immobilie.",
        },
      ],
    },

    about: {
      label: "ÜBER UNS",
      title: "Professionalität, Technologie und schnelle Reaktion.",
      description:
        "Unser Ziel ist es, das Problem zu erkennen, den Schaden zu kontrollieren und betroffene Bereiche professionell wiederherzustellen.",
    },

    contact: {
      label: "KONTAKT",
      title: "Wir sind für Sie da.",
      description:
        "Kontaktieren Sie OSINES und erzählen Sie uns, was Sie benötigen. Unser Team prüft Ihren Fall.",
      button: "OSINES KONTAKTIEREN",
    },

    footer: "ORTUNG · TROCKNUNG · WIEDERHERSTELLUNG",
  },

  ru: {
    language: "Русский",

    nav: {
      home: "ГЛАВНАЯ",
      services: "УСЛУГИ",
      about: "О НАС",
      contact: "КОНТАКТ",
    },

    hero: {
      badge: "ПРОФЕССИОНАЛЬНЫЕ РЕШЕНИЯ",
      title1: "Обнаружение.",
      title2: "Сушка.",
      title3: "Восстановление.",
      description:
        "Профессиональные решения при повреждениях водой, обнаружении утечек, технической сушке и восстановлении.",
      primaryButton: "ЗАКАЗАТЬ УСЛУГУ",
      secondaryButton: "НАШИ УСЛУГИ",
    },

    services: {
      label: "УСЛУГИ",
      title: "Профессиональные решения.",
      description:
        "Технологии, опыт и профессиональный подход для любого типа повреждений.",
      items: [
        "Обнаружение утечек",
        "Техническая сушка",
        "Повреждения водой",
        "Восстановление",
      ],
    },

    target: {
      label: "ДЛЯ КОГО",
      title: "Решения для любых потребностей.",
      items: [
        {
          title: "СТРАХОВЫЕ КОМПАНИИ",
          description:
            "Профессиональное ведение страховых случаев и техническая документация.",
        },
        {
          title: "УПРАВЛЯЮЩИЕ НЕДВИЖИМОСТЬЮ",
          description:
            "Быстрое реагирование и профессиональная координация работ.",
        },
        {
          title: "ЧАСТНЫЕ КЛИЕНТЫ",
          description:
            "Профессиональная помощь в восстановлении вашего дома или объекта.",
        },
      ],
    },

    about: {
      label: "О НАС",
      title: "Профессионализм, технологии и быстрое реагирование.",
      description:
        "Наша цель — определить проблему, контролировать повреждения и профессионально восстановить пострадавшие помещения.",
    },

    contact: {
      label: "КОНТАКТ",
      title: "Мы готовы вам помочь.",
      description:
        "Свяжитесь с OSINES и расскажите, что вам необходимо. Наша команда рассмотрит ваш случай.",
      button: "СВЯЗАТЬСЯ С OSINES",
    },

    footer: "ОБНАРУЖЕНИЕ · СУШКА · ВОССТАНОВЛЕНИЕ",
  },
} as const;