import type { Product } from '@/types'
import { cn } from '@/lib/utils'
export function ProductCard({ product, className }:any) {
  const { name, company, booth, floor, scene, type, problem, isSNQ, isNew } = product
  return (<div className={cn('bg-white border border-line-soft rounded-[10px] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-teal flex flex-col',className)}>
    <div className="w-full aspect-video bg-gradient-to-br from-[#E8F3F1] to-[#D5ECEA] flex items-center justify-center relative overflow-hidden">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(38,181,165,0.35)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      {isSNQ&&<span className="absolute top-[9px] right-[9px] bg-navy text-white font-[DM_Mono] text-[8.5px] font-medium tracking-[0.1em] uppercase px-[7px] py-[2px] rounded-[4px]">SNQ</span>}
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="flex gap-1 flex-wrap mb-[9px]">
        <span className="font-[DM_Mono] text-[8.5px] font-medium tracking-[0.07em] uppercase px-[7px] py-[2px] rounded-[4px] bg-[rgba(38,181,165,0.08)] text-teal-2 border border-[rgba(38,181,165,0.15)]">{scene}</span>
        <span className="font-[DM_Mono] text-[8.5px] font-medium tracking-[0.07em] uppercase px-[7px] py-[2px] rounded-[4px] bg-[rgba(12,29,50,0.04)] text-ink-2 border border-[rgba(12,29,50,0.08)]">{type}</span>
        {isNew&&<span className="font-[DM_Mono] text-[8.5px] font-medium tracking-[0.07em] uppercase px-[7px] py-[2px] rounded-[4px] bg-[rgba(38,181,165,0.1)] text-teal-2">新品首發</span>}
      </div>
      <h3 className="font-[Inter] text-[14.5px] font-semibold text-navy leading-snug mb-1 line-clamp-2">{name}</h3>
      <p className="text-[12.5px] text-ink-3 leading-snug font-light mb-[13px] line-clamp-2 flex-1">{problem}</p>
      <div className="flex items-center justify-between pt-[11px] border-t border-line-soft">
        <div><p className="font-[DM_Mono] text-[10px] font-medium text-teal-2 tracking-[0.04em] mb-0.5">{floor} {booth}</p><p className="text-[11px] text-ink-4 font-light">{company}</p></div>
        <div className="flex gap-1.5">
          <button className="font-[Inter] text-[11px] font-semibold text-ink-3 bg-none border border-line px-2.5 py-1 rounded-[5px] transition-all hover:border-navy hover:text-navy">详情</button>
          <button className="font-[Inter] text-[11px] font-semibold text-teal-2 bg-[rgba(38,181,165,0.08)] border border-[rgba(38,181,165,0.18)] px-2.5 py-1 rounded-[5px] transition-all hover:bg-teal-2 hover:border-teal-2 hover:text-white">預約洽請_</button>
        </div>
      </div>
    </div>
  </div>)
}
