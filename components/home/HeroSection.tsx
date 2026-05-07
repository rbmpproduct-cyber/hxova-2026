import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ButtonLink } from '@/components/ui/Button'
import { Ticker } from '@/components/shared/Ticker'
import { Building2, Search, Users } from 'lucide-react'

// Hero feature cards — mock data
const HERO_CARDS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal-2)" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    iconBg: 'bg-teal-pale',
    scene: '心血管照護',
    sceneColor: 'text-teal-2',
    badge: { label: 'SNQ', style: 'bg-navy text-white' },
    title: 'AI 心臟風險評估平台',
    booth: '4F · M820',
    company: '奧克泰醫療科技',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82C4" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    iconBg: 'bg-[#EEF3FB]',
    scene: 'AI 影像診斷',
    sceneColor: 'text-[#3B82C4]',
    badge: { label: '新品首發', style: 'bg-[rgba(38,181,165,0.1)] text-teal-2' },
    title: '精準定位手術導航系統',
    booth: '4F · N310',
    company: '宸鑫醫療儀器',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C5CBF" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    iconBg: 'bg-[#F3F0FB]',
    scene: '高齡照護',
    sceneColor: 'text-[#7C5CBF]',
    badge: null,
    title: '遠距居家照護監測系統',
    booth: '1F · A215',
    company: '薈康科技',
  },
]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #F7FBFA 0%, #EDF7F5 40%, #F0F6FB 100%)',
        minHeight: '88vh',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(38,181,165,0.1) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-40px] left-[-60px] w-[360px] h-[360px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(48,147,215,0.06) 0%, transparent 65%)' }} />

      {/* Content */}
      <div className="wrap flex-1 grid grid-cols-2 gap-0 items-center pt-[72px] pb-14 relative z-10">
        {/* Left: copy */}
        <div className="pr-16">
          <Eyebrow>台灣醫療科技展 2026 · 第十屆</Eyebrow>

          <h1 className="font-[Inter] font-bold text-navy leading-[1.1] tracking-[-0.025em] mb-3"
              style={{ fontSize: 'clamp(34px, 3.8vw, 54px)' }}>
            探索台灣<br />
            <span
              className="font-[Noto_Serif_TC] italic font-normal"
              style={{
                fontSize: 'clamp(36px, 4vw, 58px)',
                background: 'linear-gradient(110deg, #48CFC0 0%, #26B5A5 50%, #1A8A7C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              醫療解決方案
            </span>
          </h1>

          <p className="text-[15px] text-ink-3 leading-[1.75] max-w-[440px] mb-2.5 font-light">
            以臨床場景為入口，整合台灣醫療科技、智慧醫療與照護應用，協助國際買主、醫療機構與合作夥伴快速找到可洽談的解決方案。
          </p>
          <p className="font-[DM_Mono] text-[11px] text-ink-4 tracking-[0.06em] mb-8">
            2026.12.03–08 &nbsp;·&nbsp; 台北南港展覽館 1館
          </p>

          <div className="flex gap-2.5 flex-wrap mb-5">
            <ButtonLink href="/listing" variant="teal">探索解決方案</ButtonLink>
            <ButtonLink href="/visitor" variant="outline">參觀報名</ButtonLink>
          </div>

          <Link
            href="/exhibitor"
            className="font-[Inter] text-[12.5px] text-ink-4 inline-flex items-center gap-1.5 transition-colors hover:text-teal-2 no-underline"
          >
            <Building2 size={13} strokeWidth={2} />
            申請參展
          </Link>
        </div>

        {/* Right: floating product preview cards */}
        <div className="relative h-[480px]">
          {/* Card background */}
          <div className="absolute inset-0 rounded-[20px] bg-white/70 backdrop-blur-sm border border-[rgba(38,181,165,0.12)] overflow-hidden shadow-[0_24px_60px_rgba(12,29,50,0.08)]">
            <div className="absolute top-[-40px] right-[-40px] w-[280px] h-[280px] rounded-full"
                 style={{ background: 'radial-gradient(circle, rgba(38,181,165,0.1) 0%, transparent 70%)' }} />
            <div className="absolute bottom-[-20px] left-[-20px] w-[220px] h-[220px] rounded-full"
                 style={{ background: 'radial-gradient(circle, rgba(48,147,215,0.06) 0%, transparent 70%)' }} />
          </div>

          {/* "10" watermark */}
          <div className="absolute right-[-10px] bottom-[-20px] font-[Inter] text-[200px] font-bold text-[rgba(38,181,165,0.05)] leading-none pointer-events-none select-none tracking-[-0.05em] z-0">
            10
          </div>

          {/* Cards stack */}
          <div className="absolute z-10 top-7 left-7 right-7 flex flex-col gap-3">
            {HERO_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-white/92 backdrop-blur-lg border border-white/80 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.07)] flex items-start gap-3.5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)]"
              >
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center shrink-0`}>
                  {card.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`font-[DM_Mono] text-[8.5px] tracking-[0.06em] uppercase ${card.sceneColor}`}>
                      {card.scene}
                    </span>
                    {card.badge && (
                      <span className={`font-[DM_Mono] text-[8px] px-1.5 py-px rounded-[3px] tracking-[0.06em] ${card.badge.style}`}>
                        {card.badge.label}
                      </span>
                    )}
                  </div>
                  <p className="font-[Inter] text-[13.5px] font-semibold text-navy leading-snug mb-0.5">
                    {card.title}
                  </p>
                  <p className="font-[DM_Mono] text-[10px] text-ink-4">
                    {card.booth} &nbsp;·&nbsp; {card.company}
                  </p>
                </div>
                <button className="font-[Inter] text-[10.5px] font-semibold text-teal-2 bg-[rgba(38,181,165,0.08)] border border-[rgba(38,181,165,0.2)] px-[9px] py-1 rounded-[5px] whitespace-nowrap shrink-0">
                  預約洽談
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <Ticker />
    </section>
  )
}
