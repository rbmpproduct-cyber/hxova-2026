'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'
import { MOCK_PRODUCTS } from '@/lib/mockData'
import { ProductCard } from '@/components/ui/ProductCard'

const SCENES = [
  { id: 'all',      name: '全部',      nameEn: 'All' },
  { id: 'cardio',   name: '心血管照護', nameEn: 'Cardiovascular' },
  { id: 'imaging',  name: 'AI 影像診斷', nameEn: 'AI Imaging' },
  { id: 'elderly',  name: '高齡照護',   nameEn: 'Elderly Care' },
  { id: 'surgery',  name: '手術導航',   nameEn: 'Surgical Nav' },
  { id: 'mental',   name: '心理健康',   nameEn: 'Mental Health' },
  { id: 'chronic',  name: '慢病管理',   nameEn: 'Chronic Disease' },
]

export function SceneSection() {
  const [activeScene, setActiveScene] = useState('all')

  const filtered = activeScene === 'all'
    ? MOCK_PRODUCTS.slice(0, 6)
    : MOCK_PRODUCTS.filter(p => p.scene === SCENES.find(s => s.id === activeScene)?.name).slice(0, 6)

  // Fallback to first 6 if filter returns empty
  const displayed = filtered.length > 0 ? filtered : MOCK_PRODUCTS.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="wrap">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <Eyebrow>解決方案地圖</Eyebrow>
            <h2 className="font-[Inter] font-bold text-navy leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}>
              按臨床場景探索
              <em className="font-[Noto_Serif_TC] italic font-normal text-teal-2 not-italic" style={{ fontStyle: 'italic' }}>解決方案</em>
            </h2>
          </div>
          <Link
            href="/listing"
            className="font-[Inter] text-[13px] font-semibold text-ink-2 flex items-center gap-1.5 px-3.5 py-[7px] border border-line border-[1.5px] rounded-[7px] bg-white transition-all hover:border-teal hover:text-teal-2 no-underline shrink-0 mb-1 group"
          >
            查看全部
            <span className="transition-transform group-hover:translate-x-[3px]">→</span>
          </Link>
        </div>

        {/* Scene filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {SCENES.map(scene => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className={cn(
                'font-[Inter] text-[13px] font-medium px-4 py-[10px] rounded-[10px] border',
                'transition-all duration-150 cursor-pointer',
                activeScene === scene.id
                  ? 'bg-teal-pale border-teal'
                  : 'bg-white border-line hover:bg-teal-pale hover:border-teal',
              )}
            >
              <span className={cn(
                'font-[Inter] text-[13px] font-semibold mb-0.5 leading-snug block',
                activeScene === scene.id ? 'text-navy' : 'text-navy',
              )}>
                {scene.name}
              </span>
              <span className={cn(
                'font-[DM_Mono] text-[9px] tracking-[0.04em] block',
                activeScene === scene.id ? 'text-teal-2' : 'text-ink-4',
              )}>
                {scene.nameEn}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-5">
          {displayed.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
