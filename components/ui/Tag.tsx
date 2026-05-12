import Link from 'next/link'
import { cn } from '@/lib/utils'

interface TagProps {
  label: string
  href?: string
  active?: boolean
  className?: string
}

export default function Tag({ label, href, active = false, className }: TagProps) {
  const base = cn(
    'inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    active
      ? 'bg-accent text-neutral-0 border-accent'
      : 'bg-transparent text-text-muted border-border hover:border-accent hover:text-accent',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {label}
      </Link>
    )
  }

  return <span className={base}>{label}</span>
}
