"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n/config"
import { defaultLocale } from "@/lib/i18n/config"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
})

export function useLocale() {
  return useContext(LocaleContext)
}

export function LocaleProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`
    document.documentElement.lang = newLocale
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
