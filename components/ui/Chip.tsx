'use client'
import { cn } from '@/lib/utils'
interface ChipProps { label: string; active?: boolean; onClick?: () => void; className?: string }
export function Chip({ label, active, onClick, className }: ChipProps) {
  return (<button type="button" onClick={onClick} className={cn('font-[Inter] text-[12.5px] font-medium px-3.5 py-[6px] border rounded-[20px] transition-all duration-150 whitespace-nowrap cursor-pointer',active?'bg-navy border-navy text-white':'bg-transparent border-line text-ink-3 hover:border-navy hover:text-navy',className)}>{label}</button>)
}
