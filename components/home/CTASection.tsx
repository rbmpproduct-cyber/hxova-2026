import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(38,181,165,0.12) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-40px] left-[-60px] w-[320px] h-[320px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(38,181,165,0.06) 0%, transparent 65%)' }} />

      <div className="wrap text-center relative z-10">
        <p className="font-[DM_Mono] text-[10px] font-medium tracking-[0.2em] uppercase text-teal-3/60 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-teal-3/40" />
          2026.12.03–08
          <span className="inline-block w-5 h-px bg-teal-3/40" />
        </p>

        <h2
          className="font-[Inter] font-bold text-white leading-[1.15] tracking-[-0.025em] mb-4 mx-auto"
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', maxWidth: '600px' }}
        >
          立即加入台灣最大<br />
          <span
            className="font-[Noto_Serif_TC] italic font-normal"
            style={{
              fontStyle: 'italic',
              background: 'linear-gradient(110deg, #48CFC0 0%, #26B5A5 50%, #1A8A7C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            醫療科技生態系
          </span>
        </h2>

        <p className="text-[15px] text-white/45 font-light leading-relaxed max-w-[440px] mx-auto mb-10">
          無論您是廠商、醫療機構、投資機構或國際買主，HXOVA 都有最適合您的參與方式。
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <ButtonLink href="/visitor" variant="teal" size="lg">
            免費報名參觀
          </ButtonLink>
          <ButtonLink
            href="/exhibitor-apply"
            variant="outline"
            size="lg"
            className="text-white border-white/30 hover:border-teal hover:text-teal-3"
          >
            申請參展
          </ButtonLink>
          <ButtonLink
            href="/matchmaking"
            variant="outline"
            size="lg"
            className="text-white border-white/30 hover:border-teal hover:text-teal-3"
          >
            國際買主媒合
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
