'use client'

// FadeIn — viewport-triggered fade + slide-up wrapper.
// Wrap any section or block element in a page file; the child renders
// server-side and animates in on the client once it enters the viewport.
// prefers-reduced-motion: animation is skipped entirely.

import { motion, useReducedMotion } from 'framer-motion'

interface FadeInProps {
  children:  React.ReactNode
  /** Delay in seconds before the animation begins. Default: 0 */
  delay?:    number
  /** Animation duration in seconds. Default: 0.6 */
  duration?: number
  /** Vertical slide distance in px. Default: 20 */
  y?:        number
  className?: string
}

export default function FadeIn({
  children,
  delay    = 0,
  duration = 0.6,
  y        = 20,
  className,
}: FadeInProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.0, 0.0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
