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

    console.log("=== OSINES E-MAIL ERFOLGREICH GESENDET ===");



const locale = formData.get("locale")?.toString() || "es";

return NextResponse.redirect(
  new URL(`/${locale}?contact=success`, request.url),
  303
);
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