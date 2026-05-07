import Link from 'next/link'
import { MegaLayout, MegaCol, MegaLink, MegaCTA, MegaDivider } from '../MegaLayout'

export function MegaForum() {
  return (
    <MegaLayout>
      <MegaCol title="論壇總覽" wide>
        <MegaLink href="/forum#schedule">議程總覽</MegaLink>
        <MegaLink href="/forum#speakers">講者陣容</MegaLink>
        <MegaLink href="/forum#tracks">主題軌道</MegaLink>
        <MegaLink href="/forum#workshop">工作坊</MegaLink>
      </MegaCol>

      <MegaDivider />

      <MegaCol title="主題軌道" wide>
        <div className="grid grid-cols-2 gap-x-6 gap-y-0">
          <MegaLink href="/forum?track=ai">AI 醫療</MegaLink>
          <MegaLink href="/forum?track=digital">數位醫院</MegaLink>
          <MegaLink href="/forum?track=aging">高齡照護</MegaLink>
          <MegaLink href="/forum?track=biotech">生技創新</MegaLink>
          <MegaLink href="/forum?track=global">全球市場</MegaLink>
          <MegaLink href="/forum?track=startup">新創論壇</MegaLink>
        </div>
      </MegaCol>

      <MegaDivider />

      <MegaCTA>
        <Link href="/forum#register" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-teal text-white transition-colors hover:bg-teal-2 no-underline">
          論壇報名
        </Link>
        <Link href="/forum#speakers" className="block text-center font-[Inter] text-[12.5px] font-semibold py-2.5 px-3 rounded-[7px] bg-white text-navy border border-line transition-all hover:border-teal hover:text-teal-2 no-underline">
          瀏覽講者
        </Link>
      </MegaCTA>
    </MegaLayout>
  )
}
