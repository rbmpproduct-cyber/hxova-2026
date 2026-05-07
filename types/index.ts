// ── HXOVA Data Types ──────────────────────────────────────────────────────────

export interface Product {
  id: string
  name: string
  company: string
  booth: string
  floor: string
  scene: string          // e.g. '心血管照護'
  sceneEn: string        // e.g. 'Cardiovascular'
  type: string           // e.g. 'AI 診斷'
  problem: string        // one-liner pain point
  isSNQ: boolean
  isNew: boolean
  tags: ProductTag[]
}

export interface ProductTag {
  label: string
  variant: 'scene' | 'type'
}

export interface Exhibitor {
  id: string
  name: string
  nameEn: string
  booth: string
  floor: string
  scenes: string[]
  productCount: number
  isSNQ: boolean
}

export interface ForumSession {
  id: string
  date: string
  time: string
  title: string
  speaker: string
  speakerTitle: string
  room: string
  track: string
}

export interface NewsItem {
  id: string
  date: string
  category: string
  title: string
  excerpt: string
  isNew?: boolean
}

export interface SceneCategory {
  id: string
  name: string
  nameEn: string
  icon: string           // lucide icon name
  productCount: number
}

// Nav
export interface NavLink {
  label: string
  key: string
  href: string
  mega?: MegaKey
}

export type MegaKey = 'about' | 'exhibitor' | 'visitor' | 'forum' | 'matchmaking'
