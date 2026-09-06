"use client";

import { useState } from "react";

type ContactFormProps = {
  locale: string;
  formText: {
    name: string;
    phone: string;
    email: string;
    property: string;
    damage: string;
    description: string;
    damagePlaceholder: string;
    selectDamage: string;
    water: string;
    leak: string;
    drying: string;
    restoration: string;
    mold: string;
    other: string;
    send: string;
    note: string;
    required: string;
  };
};

export default function ContactForm({
  locale,
  formText,
}: ContactFormProps) {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSending(true);
    setSuccess(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      {success && (
        <div className="mb-8 rounded-2xl border border-[#62B532]/30 bg-[#62B532]/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#62B532] text-lg font-bold text-white">
              ✓
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#123B66]">
                {locale === "de" && "Anfrage erfolgreich gesendet"}
                {locale === "es" && "Solicitud enviada correctamente"}
                {locale === "en" && "Request sent successfully"}
                {locale === "ru" && "Запрос успешно отправлен"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {locale === "de" &&
                  "Vielen Dank für Ihre Kontaktaufnahme mit OSINES. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden."}

                {locale === "es" &&
                  "Gracias por contactar con OSINES. Hemos recibido su solicitud y nos pondremos en contacto con usted lo antes posible."}

                {locale === "en" &&
                  "Thank you for contacting OSINES. We have received your request and will get back to you as soon as possible."}

                {locale === "ru" &&
                  "Спасибо за обращение в OSINES. Мы получили ваш запрос и свяжемся с вами как можно скорее."}
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm font-semibold text-red-700">
            {locale === "de" &&
              "Die Anfrage konnte nicht gesendet werden."}

            {locale === "es" &&
              "No se ha podido enviar la solicitud."}

            {locale === "en" &&
              "The request could not be sent."}

            {locale === "ru" &&
              "Не удалось отправить запрос."}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input
          type="hidden"
          name="locale"
          value={locale}
        />

        {/* NAME + PHONE */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#123B66]">
              {formText.name}
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder={formText.name}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#123B66] outline-none transition placeholder:text-slate-400 focus:border-[#1685D8] focus:bg-white focus:ring-2 focus:ring-[#1685D8]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#123B66]">
              {formText.phone}
            </label>

            <input
              type="tel"
              name="phone"
              required
              placeholder={formText.phone}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#123B66] outline-none transition placeholder:text-slate-400 focus:border-[#1685D8] focus:bg-white focus:ring-2 focus:ring-[#1685D8]/10"
            />
          </div>
        </div>

        {/* EMAIL + PROPERTY */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#123B66]">
              {formText.email}
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder={formText.email}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#123B66] outline-none transition placeholder:text-slate-400 focus:border-[#1685D8] focus:bg-white focus:ring-2 focus:ring-[#1685D8]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#123B66]">
              {formText.property}
            </label>

            <input
              type="text"
              name="property"
              required
              placeholder={formText.property}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#123B66] outline-none transition placeholder:text-slate-400 focus:border-[#1685D8] focus:bg-white focus:ring-2 focus:ring-[#1685D8]/10"
            />
          </div>
        </div>

        {/* DAMAGE TYPE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#123B66]">
            {formText.damage}
          </label>

          <select
            name="damage"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#123B66] outline-none transition focus:border-[#1685D8] focus:bg-white focus:ring-2 focus:ring-[#1685D8]/10"
          >
            <option value="" disabled>
              {formText.selectDamage}
            </option>

            <option value="water">
              {formText.water}
            </option>

            <option value="leak">
              {formText.leak}
            </option>

            <option value="drying">
              {formText.drying}
            </option>

            <option value="restoration">
              {formText.restoration}
            </option>

            <option value="mold">
              {formText.mold}
            </option>

            <option value="other">
              {formText.other}
            </option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#123B66]">
            {formText.description}
          </label>

          <textarea
            name="description"
            required
            rows={5}
            placeholder={formText.damagePlaceholder}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#123B66] outline-none transition placeholder:text-slate-400 focus:border-[#1685D8] focus:bg-white focus:ring-2 focus:ring-[#1685D8]/10"
          />
        </div>

        {/* SUBMIT */}
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            {formText.required}
          </p>

          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-[#123B66] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#1685D8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending
              ? locale === "de"
                ? "WIRD GESENDET..."
                : locale === "es"
                ? "ENVIANDO..."
                : locale === "en"
                ? "SENDING..."
                : "ОТПРАВКА..."
              : formText.send}
          </button>
        </div>
<p className="mx-auto max-w-2xl text-center text-xs leading-5 text-slate-400">
  {locale === "es" && (
    <>
      Sus datos serán tratados para gestionar su solicitud de servicio.
      Puede consultar nuestra{" "}
      <a
        href="/es/politica-de-privacidad"
        className="font-semibold text-[#1685D8] hover:underline"
      >
        Política de Privacidad
      </a>
      .
    </>
  )}

  {locale === "en" && (
    <>
      Your data will be processed to manage your service request.
      Please see our{" "}
      <a
        href="/en/politica-de-privacidad"
        className="font-semibold text-[#1685D8] hover:underline"
      >
        Privacy Policy
      </a>
      .
    </>
  )}

  {locale === "de" && (
    <>
      Ihre Daten werden zur Bearbeitung Ihrer Serviceanfrage verarbeitet.
      Weitere Informationen finden Sie in unserer{" "}
      <a
        href="/de/politica-de-privacidad"
        className="font-semibold text-[#1685D8] hover:underline"
      >
        Datenschutzerklärung
      </a>
      .
    </>
  )}

  {locale === "ru" && (
    <>
      Ваши данные будут обрабатываться для рассмотрения вашего запроса.
      Подробнее см. в нашей{" "}
      <a
        href="/ru/politica-de-privacidad"
        className="font-semibold text-[#1685D8] hover:underline"
      >
        Политике конфиденциальности
      </a>
      .
    </>
  )}
</p>
        <p className="text-center text-xs text-slate-400">
          {formText.note}
        </p>
      </form>
    </div>
  );
}