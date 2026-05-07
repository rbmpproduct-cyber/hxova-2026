import Link from 'next/link'
import { MegaLayout, MegaCol, MegaLink, MegaCTA, MegaDivider } from '../MegaLayout'

export function MegaAbout() {
  return (
    <MegaLayout>
      <MegaCol title="關於醫科展">
        <MegaLink href="/about#overview">展覽簡介</MegaLink>
        <MegaLink href="/about#history">歷屆回顧</MegaLink>
        <MegaLink href="/about#organizer">主辦單位</MegaLink>
        <MegaLink href="/about#venue">場館資訊</MegaLink>
      </MegaCol>

      <MegaDivider />

      <MegaCol title="大會資源">
        <MegaLink href="/gallery">展後圖輯</MegaLink>
        <MegaLink href="/news">新聞媒體</MegaLink>
        <MegaLink href="/about#contact">聯絡我們</MegaLink>
      </MegaCol>

      <MegaDivider />

      <MegaCTA>
        <Link href="/visitor" className="mega-cta-btn mega-cta-primary block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-teal text-white transition-colors hover:bg-teal-2 no-underline">
          參觀報名
        </Link>
        <Link href="/exhibitor" className="mega-cta-btn block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-white text-navy border border-line transition-all hover:border-teal hover:text-teal-2 no-underline">
          申請參展
        </Link>
      </MegaCTA>
    </MegaLayout>
  )
}
