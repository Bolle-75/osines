"use client";

import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "es";

  function changeLanguage(locale: string) {
    const parts = pathname.split("/");

    if (parts[1] && languages.some((language) => language.code === parts[1])) {
      parts[1] = locale;
    } else {
      parts.splice(1, 0, locale);
    }

    router.push(parts.join("/") || `/${locale}`);
  }

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      {languages.map((language) => {
        const active = currentLocale === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            className={`rounded-full px-3 py-1.5 transition ${
              active
                ? "bg-[#123B66] text-white"
                : "text-slate-500 hover:bg-[#1685D8]/10 hover:text-[#1685D8]"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
