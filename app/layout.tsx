import type { Metadata } from 'next'
import { Inter, DM_Mono, Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-dm-mono', display: 'swap' })
const notoSansTc = Noto_Sans_TC({ subsets: ['chinese-traditional'], weight: ['300','400','500','700'], variable: '--font-noto-sans', display: 'swap' })
const notoSerifTc = Noto_Serif_TC({ subsets: ['chinese-traditional'], weight: ['400'], style: ['italic'], variable: '--font-noto-serif', display: 'swap' })
export const metadata={title:'HXOVA 2026 — 台灣醫療科技解決方案入口',description:'台灣醫療科技本專案'}
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html lang="zh-TW" className={`${inter.variable} ${dmMono.variable} ${notoSansTc.variable} ${notoSerifTc.variable}`}><body>{children}</body></html>)}
