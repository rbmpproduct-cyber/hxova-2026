# HXOVA 2026 — React / Next.js 專案

> 由原始 HTML/CSS/JS 多頁網站轉換為 Next.js 15 App Router 專案

---

## 元件庫選型推薦

### ✅ 推薦方案：shadcn/ui 模式 + Radix UI（免費、最佳彈性）

本專案採用 **shadcn/ui 設計模式**：

- 不本安裝一整套 library，而是直接擁有每個元件的原姇碼
- 底層是 **Radix UI**（無障礙 headless primitives）
- 樣式完全走 **Tailwind CSS v4**
- 完美適配 HXOVA 自定義的 navy/teal 設計系統

**為什麼不選其他：**
- ❌ **MUI / Ant Design** — Material Design 視覺語言與 HXOVA 風格衝突，要蓋掉太多
- ❌ **Mantine** — 預設樣式很漂亮，但覆蓋主題比較繁瑣，且字體選用假設不同
- ❌ **HeroUI（前 NextUI）** — 動畫很好但 mega menu 支援有限

### 💳 如果要買付費元件：

**[Tailwind Plus](https://tailwindui.com)（$299 一次性授權）**
- Tailwind Labs 官方出品
- 包含 Marketing Site + Application UI 兩個系列
- 有多款 mega menu、product card、filter layout 直接符合 HXOVA 需求
- 程式碼可直接貼入本專案，風格最接近

---

## 技術棧

| 層級 | 選型 |
|------|------|
| 框架 | Next.js 15 App Router |
| 語言 | TypeScript 5 |
| 樣式 | Tailwind CSS v4 |
| 元件原語 | Radix UI（NavigationMenu, Tabs, Dialog, ToggleGroup） |
| 動畫 | Framer Motion（可選） |
| 圖示 | Lucide React |
| 工具 | clsx + tailwind-merge |

---

## 快速啟動

```bash
# 1. 進入資料夾
cd hxova-react

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev
# → http://localhost:3000
```

---

## 目錄結構

```
hxova-react/
├── app/
│   ├── layout.tsx              ← 根 layout，載入字體
│   ├── globals.css             ← CSS 變數 + Tailwind
│   ├── page.tsx                ← 首頁（index.html）✅ 已轉換
│   ├── listing/page.tsx        ← 解方列表 ✅ 已轉換
│   ├── about/page.tsx          ← 關於（TODO）
│   ├── exhibitor/page.tsx      ← 參展廠商（TODO）
│   ├── exhibitor-apply/page.tsx← 申請參展（TODO）
│   ├── visitor/page.tsx        ← 觀展入口（TODO）
│   ├── forum/page.tsx          ← 論壇議程（TODO）
│   ├── matchmaking/page.tsx    ← 商洽媒合（TODO）
│   ├── gallery/page.tsx        ← 展後圖輯（TODO）
│   └── news/page.tsx           ← 新聞動態（TODO）
│
├── components/
│   ├── nav/
│   │   ├── Navbar.tsx          ✅ Radix NavigationMenu mega 導覽
│   │   ├── MegaLayout.tsx      ✅ Mega panel 共用元件
│   │   └── megas/
│   │       ├── MegaAbout.tsx   ✅
│   │       ├── MegaExhibitor.tsx ✅
│   │       ├── MegaVisitor.tsx ✅
│   │       ├── MegaForum.tsx   ✅
│   │       └── MegaMatchmaking.tsx ✅
│   ├── shared/
│   │   ├── Footer.tsx          ✅
│   │   ├── SubscribeBar.tsx    ✅
│   │   └── Ticker.tsx          ✅
│   ├── ui/
│   │   ├── Button.tsx          ✅ teal / outline / navy / yellow
│   │   ├── Chip.tsx            ✅ 篩選 chip
│   │   ├── Eyebrow.tsx         ✅ 章節眉標
│   │   └── ProductCard.tsx     ✅ 展品卡片
│   └── home/
│       ├── HeroSection.tsx      ✅
│      ├── StatsSection.tsx    ✅
│       ├── SceneSection.tsx    ✅ 含場景篩選 + 6-up grid
│       └── CTASection.tsx      ✅
│
├── lib/
│   ├── utils.ts                ✅ cn() 工具
│   └── mockData.ts             ✅ 假資料（替換為真實 API）
│
└── types/
    └── index.ts                ✅ Product, Exhibitor, ForumSession…
```

---

## 剩餘頁面轉換指引

每個 TODO 頁面按照相同模式：

```tsx
// app/about/page.tsx
import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/shared/Footer'
import { SubscribeBar } from '@/components/shared/SubscribeBar'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 把 about.html 的 sections 逐一抽成元件 */}
      </main>
      <SubscribeBar />
      <Footer />
    </>
  )
}
```

---

## 真實資料接入

目前 `lib/mockData.ts` 是假資料。接 CMS 或後端 API 時：

1. 在 `app/listing/page.tsx` 改為 `async` 並用 `fetch()` 抓資料
2. 或改用 React Query / SWR（需另裝）
3. `types/index.ts` 的型別定義直接對應後端 schema 調整

---

## 設計 Token 對照

| CSS 變數 | Tailwind class | 用途 |
|----------|----------------|------|
| `--navy` | `text-navy` / `bg-navy` | 主深藍 |
| `--teal` | `text-teal` / `bg-teal` | 主綠 CTA |
| `--teal-2` | `text-teal-2` | hover 態 |
| `--ink-3` | `text-ink-3` | 次要文字 |
| `--ink-4` | `text-ink-4` | 弱化文字 |
| `--line` | `border-line` | 一般邊框 |
| `--line-soft` | `border-line-soft` | 柔和邊框 |
