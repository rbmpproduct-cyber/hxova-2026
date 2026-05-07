import Link from 'next/link'
import { MegaLayout, MegaCol, MegaLink, MegaCTA, MegaDivider, MegaBigLink } from '../MegaLayout'

export function MegaExhibitor() {
  return (
    <MegaLayout wide>
      <div className="flex-1">
        <MegaBigLink
          href="/exhibitor-apply"
          title="申請參展"
          subtitle="早鳥優惠截止 2026.06.30，立即鎖定攤位"
        />
        <MegaBigLink
          href="/exhibitor#reports"
          title="參展效益報告"
          subtitle="歷屆採購洽談數據、媒體覆蓋與品牌曝光"
          isNew
        />
      </div>

      <MegaDivider />

      <MegaCol title="參展資訊">
        <MegaLink href="/exhibitor#overview">參展總覽</MegaLink>
        <MegaLink href="/exhibitor#packages">攤位方案</MegaLink>
        <MegaLink href="/exhibitor#layout">展區平面圖</MegaLink>
        <MegaLink href="/exhibitor#faq">常見問題</MegaLink>
      </MegaCol>

      <MegaDivider />

      <MegaCol title="資源下載">
        <MegaLink href="/exhibitor#manual">參展商手冊</MegaLink>
        <MegaLink href="/exhibitor#media">媒體素材包</MegaLink>
        <MegaLink href="/exhibitor#badge">通行證申請</MegaLink>
      </MegaCol>

      <MegaCTA>
        <Link href="/exhibitor-apply" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-[#F5C518] text-navy transition-colors hover:bg-[#f7d040] no-underline">
          立即申請參展
        </Link>
        <Link href="/exhibitor" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-teal text-white transition-colors hover:bg-teal-2 no-underline">
          了解更多
        </Link>
        <Link href="/exhibitor#contact" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-white text-navy border border-line transition-all hover:border-teal hover:text-teal-2 no-underline">
          聯絡業務
        </Link>
        {/* QR code block */}
        <div className="mt-2">
          <p className="font-[DM_Mono] text-[9px] tracking-[0.12em] uppercase text-ink-4 mb-2 text-center">
            掃碼報名參展
          </p>
          <div className="flex justify-center">
            <QRPlaceholder />
          </div>
        </div>
      </MegaCTA>
    </MegaLayout>
  )
}

// SVG placeholder QR (replace with real QR image in production)
function QRPlaceholder() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect width="72" height="72" fill="#f5f5f5" rx="4"/>
      <rect x="8" y="8" width="20" height="20" rx="2" fill="#0C1D32"/>
      <rect x="11" y="11" width="14" height="14" rx="1" fill="white"/>
      <rect x="13" y="13" width="10" height="10" fill="#0C1D32"/>
      <rect x="44" y="8" width="20" height="20" rx="2" fill="#0C1D32"/>
      <rect x="47" y="11" width="14" height="14" rx="1" fill="white"/>
      <rect x="49" y="13" width="10" height="10" fill="#0C1D32"/>
      <rect x="8" y="44" width="20" height="20" rx="2" fill="#0C1D32"/>
      <rect x="11" y="47" width="14" height="14" rx="1" fill="white"/>
      <rect x="13" y="49" width="10" height="10" fill="#0C1D32"/>
      <rect x="34" y="34" width="6" height="6" fill="#0C1D32"/>
      <rect x="42" y="34" width="6" height="6" fill="#0C1D32"/>
      <rect x="50" y="34" width="6" height="6" fill="#0C1D32"/>
      <rect x="34" y="42" width="6" height="6" fill="#0C1D32"/>
      <rect x="50" y="42" width="6" height="6" fill="#0C1D32"/>
      <rect x="34" y="50" width="6" height="6" fill="#0C1D32"/>
      <rect x="42" y="50" width="6" height="6" fill="#0C1D32"/>
    </svg>
  )
}
