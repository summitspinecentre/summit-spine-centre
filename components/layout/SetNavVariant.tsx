'use client'

import { useEffect } from 'react'
import { useNavTheme, type NavVariant } from './NavThemeProvider'

interface Props {
  variant: NavVariant
}

export default function SetNavVariant({ variant }: Props) {
  const { setVariant } = useNavTheme()
  useEffect(() => {
    setVariant(variant)
    return () => setVariant('page')
  }, [variant, setVariant])
  return null
}
