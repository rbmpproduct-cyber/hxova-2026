'use client'

interface TickItem {
  highlight?: string
  text: string
}

const TICK_ITEMS: TickItem[] = [
  { highlight: '2026.04.28', text: '參展申請開放中，早鳥優惠截止 06.30' },
  { text: '國際買主媒合申請現已開放' },
  { highlight: '500+', text: '件解決方案展品上線預覽' },
  { text: '論壇議程即將公布，敬請期待' },
  { text: '線上展廳 Beta 版正式開放' },
]

// Double for seamless loop
const ALL_ITEMS = [...TICK_ITEMS, ...TICK_ITEMS]

export function Ticker() {
  return (
    <div className="overflow-hidden bg-navy py-2.5">
      <div className="max-w-[1360px] mx-auto px-12">
        <div className="flex items-center">
          {/* Badge */}
          <span className="font-[DM_Mono] text-[8.5px] font-medium tracking-[0.16em] uppercase bg-teal text-navy-2 px-2.5 py-[3px] rounded shrink-0 mr-[18px]">
            即時動態
          </span>

          {/* Scrolling track */}
          <div
            className="flex items-center gap-10 whitespace-nowrap w-max"
            style={{ animation: 'tickMove 32s linear infinite' }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {ALL_ITEMS.map((item, i) => (
              <span
                key={i}
                className="font-[Inter] text-[12px] text-white/52 flex items-center gap-2"
              >
                <span className="w-[3px] h-[3px] rounded-full bg-teal shrink-0" />
                {item.highlight && (
                  <strong className="text-white/85 font-medium">{item.highlight}</strong>
                )}
                {' '}{item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
