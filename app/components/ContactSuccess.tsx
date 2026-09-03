"use client";

import { useSearchParams } from "next/navigation";

type ContactSuccessProps = {
  locale: string;
};

export default function ContactSuccess({
  locale,
}: ContactSuccessProps) {
  const searchParams = useSearchParams();
  const success = searchParams.get("contact") === "success";

  if (!success) {
    return null;
  }

  const messages = {
    es: {
      title: "Solicitud enviada correctamente",
      text: "Gracias por contactar con OSINES. Hemos recibido su solicitud y nos pondremos en contacto con usted lo antes posible.",
    },
    en: {
      title: "Request sent successfully",
      text: "Thank you for contacting OSINES. We have received your request and will get back to you as soon as possible.",
    },
    de: {
      title: "Anfrage erfolgreich gesendet",
      text: "Vielen Dank für Ihre Kontaktaufnahme mit OSINES. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.",
    },
    ru: {
      title: "Запрос успешно отправлен",
      text: "Спасибо за обращение в OSINES. Мы получили ваш запрос и свяжемся с вами как можно скорее.",
    },
  } as const;

  const message =
    messages[locale as keyof typeof messages] || messages.es;

  return (
    <div className="mb-8 rounded-2xl border border-[#62B532]/30 bg-[#62B532]/5 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#62B532] text-lg font-bold text-white">
          ✓
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#123B66]">
            {message.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}