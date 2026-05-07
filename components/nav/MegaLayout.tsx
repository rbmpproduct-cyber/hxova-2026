import Link from 'next/link'
import { cn } from '@/lib/utils'

// ── Shared primitives for mega menu panels ───────────────────────────────────

interface MegaLayoutProps {
  children: React.ReactNode
  wide?: boolean
}

export function MegaLayout({ children, wide }: MegaLayoutProps) {
  return (
    <div
      className={cn(
        'flex items-stretch gap-0 p-7',
        wide ? 'min-w-[680px]' : 'min-w-[420px]',
      )}
    >
      {children}
    </div>
  )
}

interface MegaColProps {
  title: string
  children: React.ReactNode
  wide?: boolean
}

export function MegaCol({ title, children, wide }: MegaColProps) {
  return (
    <div className={cn('pr-7 last:pr-0', wide ? 'min-w-[185px]' : 'min-w-[155px]')}>
      <p className="font-[DM_Mono] text-[9.5px] font-medium tracking-[0.18em] uppercase text-ink-4 mb-3.5 pb-2.5 border-b border-line-soft">
        {title}
      </p>
      {children}
    </div>
  )
}

interface MegaLinkProps {
  href: string
  children: React.ReactNode
  isNew?: boolean
}

export function MegaLink({ href, children, isNew }: MegaLinkProps) {
  return (
    <Link
      href={href}
      className="block font-[Inter] text-[13px] text-ink-2 py-1.5 transition-colors duration-150 hover:text-teal-2 no-underline"
    >
      {children}
      {isNew && (
        <span className="font-[DM_Mono] text-[8px] font-medium tracking-[0.08em] text-teal-2 bg-[rgba(38,181,165,0.1)] px-1.5 py-px rounded-[3px] ml-1 uppercase">
          NEW
        </span>
      )}
    </Link>
  )
}

export function MegaDivider() {
  return <div className="w-px bg-line-soft mx-6 self-stretch shrink-0" />
}

interface MegaCTAProps {
  children: React.ReactNode
}

export function MegaCTA({ children }: MegaCTAProps) {
  return (
    <div
      className="shrink-0 w-[200px] bg-gray-1 border-l border-line-soft
                 -mx-7 -my-7 ml-auto px-6 py-7
                 flex flex-col gap-2.5 rounded-br-xl self-stretch justify-start"
    >
      {children}
    </div>
  )
}

interface MegaBigLinkProps {
  href: string
  title: string
  subtitle: string
  isNew?: boolean
}

export function MegaBigLink({ href, title, subtitle, isNew }: MegaBigLinkProps) {
  return (
    <Link
      href={href}
      className="block px-[18px] py-3.5 border border-line border-[1.5px] rounded-[var(--r)] mb-2.5
                 transition-all duration-150 hover:border-teal hover:border-teal hover:border-teal hover:border-teal hover:border-teal hover:border-teal hover:border-teal hover:border-teal hover:border-teal hover:border-teal noWnderline"
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className="font-[Inter] text-[15px] font-semibold text-navy">{title}</span>
        {isNew && (
          <span className="font-[DM_Mono] text-[8px] font-medium tracking-[0.08em] text-teal-2 bg-[rgba(38,181,165,0.1)] px-1.5 py-px rounded-[3px] uppercase">
            NEW
          </span>
        )}
      </div>
      <p className="text-[12px] text-ink-3 font-light leading-relaxed">{subtitle}</p>
    </Link>
  )
}
