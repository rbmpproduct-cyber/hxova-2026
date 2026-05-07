import Link from 'next/link'
import { MegaLayout, MegaCol, MegaLink, MegaCTA, MegaDivider } from '../MegaLayout'

export function MegaMatchmaking() {
  return (
    <MegaLayout>
      <MegaCol title="媒合服務">
        <MegaLink href="/matchmaking#overview">服務介紹</MegaLink>
        <MegaLink href="/matchmaking#buyer">國際買主申請</MegaLink>
        <MegaLink href="/matchmaking#schedule">媒合日程</MegaLink>
        <MegaLink href="/matchmaking#faq">FAQ</MegaLink>
      </MegaCol>

      <MegaDivider />

      <MegaCol title="適合對象">
        <MegaLink href="/matchmaking#buyer">醫院採購主管</MegaLink>
        <MegaLink href="/matchmaking#buyer">國際經銷商</MegaLink>
        <MegaLink href="/matchmaking#buyer">投資機構</MegaLink>
        <MegaLink href="/matchmaking#buyer">政府衛生部門</MegaLink>
      </MegaCol>

      <MegaCTA>
        <Link href="/matchmaking#apply" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-teal text-white transition-colors hover:bg-teal-2 no-underline">
          申請媒合
        </Link>
        <Link href="/matchmaking" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-white text-navy border border-line transition-all hover:border-teal hover:text-teal-2 no-underline">
          了解更多
        </Link>
      </MegaCTA>
    </MegaLayout>
  )
}
