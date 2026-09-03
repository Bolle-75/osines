import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const property = formData.get("property")?.toString().trim() || "";
    const damage = formData.get("damage")?.toString().trim() || "";
    const description =
      formData.get("description")?.toString().trim() || "";

    const locale = formData.get("locale")?.toString() || "es";

    if (!name || !phone || !email || !property || !damage || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Bitte füllen Sie alle Pflichtfelder aus.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    // =========================================================
    // 1. E-MAIL AN OSINES
    // =========================================================

    await transporter.sendMail({
      from: `"OSINES Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "info@osines.com",
      replyTo: email,
      subject: `Neue Schadenanfrage – ${name}`,
      text: `
Neue Schadenanfrage über die OSINES Website

Name:
${name}

Telefon:
${phone}

E-Mail:
${email}

Adresse / Ort:
${property}

Schadenart:
${damage}

Beschreibung:
${description}

--------------------------------
OSINES
info@osines.com
      `,
    });

    // =========================================================
    // 2. BESTÄTIGUNGS-E-MAIL AN DEN KUNDEN
    // =========================================================

    const customerMessages = {
      es: {
        subject: "OSINES – Hemos recibido su solicitud",
        title: "Gracias por contactar con OSINES",
        text: `Hemos recibido correctamente su solicitud de servicio.

Nuestro equipo revisará la información proporcionada y se pondrá en contacto con usted lo antes posible.

Datos recibidos:

Nombre: ${name}
Teléfono: ${phone}
Dirección / localidad: ${property}

Tipo de daño:
${damage}

Descripción:
${description}

--------------------------------
OSINES
Detección · Secado · Restauración
info@osines.com
        `,
      },

      en: {
        subject: "OSINES – We have received your request",
        title: "Thank you for contacting OSINES",
        text: `We have successfully received your service request.

Our team will review the information provided and contact you as soon as possible.

Information received:

Name: ${name}
Phone: ${phone}
Address / location: ${property}

Type of damage:
${damage}

Description:
${description}

--------------------------------
OSINES
Detection · Drying · Restoration
info@osines.com
        `,
      },

      de: {
        subject: "OSINES – Wir haben Ihre Anfrage erhalten",
        title: "Vielen Dank für Ihre Kontaktaufnahme mit OSINES",
        text: `Wir haben Ihre Serviceanfrage erfolgreich erhalten.

Unser Team wird die übermittelten Informationen prüfen und sich schnellstmöglich mit Ihnen in Verbindung setzen.

Übermittelte Daten:

Name: ${name}
Telefon: ${phone}
Adresse / Ort: ${property}

Art des Schadens:
${damage}

Beschreibung:
${description}

--------------------------------
OSINES
Ortung · Trocknung · Wiederherstellung
info@osines.com
        `,
      },

      ru: {
        subject: "OSINES – Мы получили ваш запрос",
        title: "Спасибо за обращение в OSINES",
        text: `Мы успешно получили ваш запрос на обслуживание.

Наша команда рассмотрит предоставленную информацию и свяжется с вами как можно скорее.

Полученная информация:

Имя: ${name}
Телефон: ${phone}
Адрес / населённый пункт: ${property}

Тип повреждения:
${damage}

Описание:
${description}

--------------------------------
OSINES
Обнаружение · Сушка · Восстановление
info@osines.com
        `,
      },
    } as const;

    const customerMessage =
      customerMessages[locale as keyof typeof customerMessages] ||
      customerMessages.es;

    await transporter.sendMail({
      from: `"OSINES" <${process.env.SMTP_USER}>`,
      to: email,
      subject: customerMessage.subject,
      text: customerMessage.text,
    });

    console.log("=== OSINES E-MAILS ERFOLGREICH GESENDET ===");

    return NextResponse.json({
      success: true,
      message: customerMessage.title,
    });
  } catch (error) {
    console.error("=== OSINES E-MAIL FEHLER ===");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Die Anfrage konnte nicht gesendet werden.",
      },
      { status: 500 }
    );
  }
}