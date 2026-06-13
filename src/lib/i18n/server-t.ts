import { cookies } from "next/headers"
import { defaultLocale, type Locale } from "./config"
import esMessages from "@/messages/es.json"
import enMessages from "@/messages/en.json"

const messages = { es: esMessages, en: enMessages } as const

function lookup(obj: Record<string, unknown>, key: string): string {
  const parts = key.split(".")
  let current: unknown = obj
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return key
    }
  }
  return String(current)
}

export async function getServerT() {
  const cookieStore = await cookies()
  const locale = (cookieStore.get("locale")?.value as Locale) || defaultLocale
  const dict = messages[locale]

  return {
    t: (key: string) => lookup(dict as Record<string, unknown>, key),
    locale,
  }
}
