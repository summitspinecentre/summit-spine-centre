'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type NavVariant = 'hero' | 'page'

interface NavThemeContextValue {
  variant: NavVariant
  setVariant: (v: NavVariant) => void
}

const NavThemeContext = createContext<NavThemeContextValue>({
  variant: 'page',
  setVariant: () => {},
})

export function useNavTheme() {
  return useContext(NavThemeContext)
}

export default function NavThemeProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<NavVariant>('page')
  return (
    <NavThemeContext.Provider value={{ variant, setVariant }}>
      {children}
    </NavThemeContext.Provider>
  )
}
