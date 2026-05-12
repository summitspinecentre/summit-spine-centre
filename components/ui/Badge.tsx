import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'accent' | 'muted'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-dun text-eerie-black',
  accent:  'bg-accent text-neutral-0',
  muted:   'bg-hemlock-50 text-ebony',
}

export default function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-sm font-medium rounded-full',
        variants[variant],
        className,
      )}
    >
      {label}
    </span>
  )
}
