import { cn } from '@/lib/utils'
interface EyebrowProps { children: React.ReactNode; inverted?: boolean; className?: string }
export function Eyebrow({ children, inverted, className }: EyebrowProps) {
  return (<div className={cn('font-[DM_Mono] text-[10px] font-medium tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2 before:content-[""] before:w-5 before:h-px before:shrink-0',inverted?'text-white/40 before:bg-teal-3':'text-ink-4 before:bg-teal',className)}>{children}</div>)
}
