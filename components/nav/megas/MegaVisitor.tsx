import Link from 'next/link'
import { MegaLayout, MegaCol, MegaLink, MegaCTA, MegaDivider, MegaBigLink } from '../MegaLayout'

export function MegaVisitor() {
  return (
    <MegaLayout wide>
      <div className="flex-1">
        <MegaBigLink
          href="/visitor#register"
          title="立即報名參觀"
          subtitle="免費入場，提前報名享優先入館資格"
        />
      </div>

      <MegaDivider />

      <MegaCol title="觀展指南">
        <MegaLink href="/visitor#overview">觀展總覽</MegaLink>
        <MegaLink href="/visitor#badge">通行證取得</MegaLink>
        <MegaLink href="/visitor#transport">交通資訊</MegaLink>
        <MegaLink href="/visitor#map">場館地圖</MegaLink>
      </MegaCol>

      <MegaDivider />

      <MegaCol title="服務">
        <MegaLink href="/matchmaking">買主媒合</MegaLink>
        <MegaLink href="/visitor#app">官方 App</MegaLink>
        <MegaLink href="/visitor#faq">常見問題</MegaLink>
      </MegaCol>

      <MegaCTA>
        <Link href="/visitor#register" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-teal text-white transition-colors hover:bg-teal-2 no-underline">
          免費報名參觀
        </Link>
        <Link href="/matchmaking" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-white text-navy border border-line transition-all hover:border-teal hover:text-teal-2 no-underline">
          申請買主媒合
        </Link>
      </MegaCTA>
    </MegaLayout>
  )
}
