import { cn } from '@/lib/utils'

type Variant = 'teal' | 'outline' | 'navy' | 'yellow'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; size?: Size
}

const vC={teal:'bg-teal text-white hover:bg-teal-2 border-transparent',outline:'bg-transparent text-ink border border-line hover:border-teal hover:text-teal-2',navy:'bg-navy text-white hover:bg-teal-2 border-transparent',yellow:'bg-yellow text-navy hover:bg-[#f7d040] border-transparent'}
const sC={sm:'text-[11px] px-2.5 py-1',md:'text-[13.5px] px-[26px] py-[11px]',lg:'text-[14px] px-8 py-3.5'}

export function Button({variant='teal',size='md',className,children,...p}:ButtonProps){
return(<button className={cn('font-[Inter] font-semibold rounded-lg border transition-all duration-150 inline-flex items-center justify-center gap-1.5 hover:-translate-y-0.5',vC[variant],sC[size],className)} {...p}>{children}</button>)}

export function ButtonLink({variant='teal',size='md',href,className,children,...p}:any){
return(<a href={href} className={cn('font-[Inter] font-semibold rounded-lg border transition-all duration-150 inline-flex items-center justify-center gap-1.5 no-underline hover:-translate-y-0.5',vC[variant],sC[size],className)} {...p}>{children}</a>)}
