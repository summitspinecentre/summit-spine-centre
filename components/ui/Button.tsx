'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { fireGAEvent, isBookingHref } from '@/lib/analytics'

interface ButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  'aria-label'?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-accent text-neutral-0 hover:bg-accent/85 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  secondary:
    'bg-transparent border border-accent text-accent hover:bg-accent hover:text-neutral-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-accent hover:text-accent/80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  'aria-label': ariaLabel,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-150 outline-none',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
    className,
  )

  if (href) {
    const handleBookingClick = isBookingHref(href)
      ? () => fireGAEvent('booking_cta_click', { label, source: 'cta_button' })
      : undefined
    const sharedAttrs = {
      className:   base,
      'aria-label': ariaLabel ?? label,
      onClick:     handleBookingClick,
    }
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" {...sharedAttrs}>
        {label}
      </a>
    ) : (
      <Link href={href} {...sharedAttrs}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      className={base}
    >
      {label}
    </button>
  )
}
