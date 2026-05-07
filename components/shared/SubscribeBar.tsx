'use client'

import { useState } from 'react'

export function SubscribeBar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: connect to newsletter API
    setSubmitted(true)
  }

  return (
    <div className="bg-white border-t border-line py-7">
      <div className="max-w-[1360px] mx-auto px-12">
        <div className="flex items-center justify-between gap-7">
          <p className="font-[Inter] text-[14px] font-semibold text-navy">
            訂閱展覽最新消息
            <span className="text-ink-3 font-light ml-1">· 不錯過任何重要動態</span>
          </p>

          {submitted ? (
            <p className="font-[Inter] text-[13px] text-teal-2 font-medium">
              ✓ 訂閱成功，感謝您！
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="輸入您的 Email"
                required
                className="px-4 py-[9px] border border-line border-[1.5px] rounded-[7px]
                           text-[13px] w-60 bg-gray-1 text-navy font-[Inter]
                           outline-none transition-colors focus:border-teal"
              />
              <button
                type="submit"
                className="px-5 py-[9px] bg-navy text-white border-none rounded-[7px]
                           font-[Inter] text-[13px] font-semibold transition-colors hover:bg-teal-2"
              >
                訂閱
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
