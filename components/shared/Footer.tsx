import Link from 'next/link'

const FOOTER_LINKS = [
  {
    title: '關於',
    links: [
      { label: '展覽介紹', href: '/about' },
      { label: '主辦單位', href: '/about#organizer' },
      { label: '場館資訊', href: '/about#venue' },
      { label: '歷屆回顧', href: '/about#history' },
    ],
  },
  {
    title: '參與',
    links: [
      { label: '申請參展', href: '/exhibitor-apply' },
      { label: '參觀報名', href: '/visitor' },
      { label: '商洽媒合', href: '/matchmaking' },
      { label: '論壇報名', href: '/forum' },
    ],
  },
  {
    title: '資源',
    links: [
      { label: '解方列表', href: '/listing' },
      { label: '新聞動態', href: '/news' },
      { label: '展後圖輯', href: '/gallery' },
      { label: '參展商手冊', href: '/exhibitor#manual' },
    ],
  },
  {
    title: '聯絡',
    links: [
      { label: '聯絡我們', href: '/about#contact' },
      { label: '媒體詢問', href: '/about#media' },
      { label: '業務洽談', href: '/exhibitor#contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#091525] pt-[52px] pb-7 border-t border-white/5">
      <div className="max-w-[1360px] mx-auto px-12">
        {/* Main grid */}
        <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-9 mb-11">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-[26px] h-[26px] rounded-[5px] flex items-center justify-center
                           font-[Noto_Serif_TC] text-[11px] text-navy-2"
                style={{ background: 'linear-gradient(110deg, #48CFC0 0%, #26B5A5 50%, #1A8A7C 100%)' }}
              >
                醫
              </div>
              <span className="font-[Inter] text-[14px] font-semibold text-white tracking-[0.08em]">
                HXOVA
              </span>
            </div>
            <p className="text-[11.5px] text-white/26 leading-relaxed font-light">
              台灣醫療科技解決方案入口<br />
              Healthcare Expo Taiwan
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(col => (
            <div key={col.title}>
              <p className="font-[DM_Mono] text-[9px] font-medium tracking-[0.18em] uppercase text-white/30 mb-3.5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-[7px] list-none p-0">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-[Inter] text-[12px] text-white/42 font-light transition-colors hover:text-white/80 no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-[22px] flex justify-between items-center">
          <p className="font-[DM_Mono] text-[10px] text-white/20 tracking-[0.04em]">
            © 2026 HXOVA Healthcare Expo Taiwan. All rights reserved.
          </p>
          <p className="font-[DM_Mono] text-[9px] text-white/15 tracking-[0.1em] uppercase">
            Powered by <span className="text-teal opacity-50">HXOVA</span> Platform
          </p>
        </div>
      </div>
    </footer>
  )
}
