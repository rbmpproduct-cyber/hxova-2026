import { Eyebrow } from '@/components/ui/Eyebrow'

const STATS = [
  { value: '650+', label: '展品解決方案', sub: '涵蓋 12 大臨床場景' },
  { value: '180+', label: '參展廠商', sub: '台灣頂尖醫療科技企業' },
  { value: '30+', label: '國際媒合買主', sub: '來自 18 個國家地區' },
  { value: '5,000+', label: '預計參觀人次', sub: '醫療機構、採購主管' },
]

export function StatsSection() {
  return (
    <section className="bg-navy py-14">
      <div className="wrap">
        <div className="grid grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="font-[Inter] font-bold text-[42px] tracking-[-0.03em] leading-none mb-1.5"
                style={{
                  background: 'linear-gradient(110deg, #48CFC0 0%, #26B5A5 50%, #1A8A7C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <p className="font-[Inter] text-[14px] font-medium text-white/85 mb-0.5">
                {stat.label}
              </p>
              <p className="font-[DM_Mono] text-[10px] text-white/35 tracking-[0.04em]">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
