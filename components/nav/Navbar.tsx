'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MegaAbout } from './megas/MegaAbout'
import { MegaExhibitor } from './megas/MegaExhibitor'
import { MegaVisitor } from './megas/MegaVisitor'
import { MegaForum } from './megas/MegaForum'
import { MegaMatchmaking } from './megas/MegaMatchmaking'

// Pages that activate the "解方列表" switch
const LISTING_PAGES = ['/listing', '/exhibitor', '/exhibitor-apply']

export function Navbar() {
  const pathname = usePathname()
  const isListing = LISTING_PAGES.some(p => pathname.startsWith(p))

  return (
    <header className="sticky top-0 z-[500] h-[60px] bg-white/97 backdrop-blur-xl border-b border-[#EBF0F5]">
      <NavigationMenu.Root className="flex items-center h-full max-w-[1360px] mx-auto px-12">

        {/* ── Logo ─────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-0 mr-9 shrink-0 no-underline">
          <span className="font-[Inter] text-[20px] font-extrabold text-navy tracking-[-0.03em] leading-none">
            HX<span className="text-teal-2">OVA</span>
          </span>
          <div className="w-px h-[22px] bg-line mx-3 shrink-0" />
          <span className="font-[DM_Mono] text-[8.5px] text-ink-4 tracking-[0.1em] uppercase leading-tight whitespace-nowrap">
            Healthcare<br />Expo Taiwan
          </span>
        </Link>

        {/* ── Nav Links ─────────────────────────────────────────── */}
        <NavigationMenu.List className="flex list-none gap-0 mr-auto p-0">

          <NavItem label="關於醫科展" href="/about"  mega={<MegaAbout />}       pathname={pathname} megaId="about" />
          <NavItem label="參展廠商"   href="/exhibitor" mega={<MegaExhibitor />}  pathname={pathname} megaId="exhibitor" />
          <NavItem label="觀展入口"   href="/visitor"  mega={<MegaVisitor />}    pathname={pathname} megaId="visitor" />
          <NavItem label="論壇與議程" href="/forum"    mega={<MegaForum />}      pathname={pathname} megaId="forum" />
          <NavItem label="商洽媒合"   href="/matchmaking" mega={<MegaMatchmaking />} pathname={pathname} megaId="matchmaking" />

          {/* News — no mega */}
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                href="/news"
                className={cn(
                  'font-[Inter] text-[13px] text-ink-3 px-3 h-[60px] flex items-center',
                  'transition-colors duration-150 hover:text-navy relative group',
                  'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-teal-2',
                  'after:scale-x-0 after:transition-transform after:duration-200 after:origin-center',
                  'hover:after:scale-x-100',
                  pathname === '/news' && 'text-navy font-semibold after:scale-x-100',
                )}
              >
                新聞動態
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        {/* ── Right Actions ─────────────────────────────────────── */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/visitor"
            className="font-[Inter] text-[12.5px] text-ink-3 px-2.5 py-1.5 rounded-[5px]
                       flex items-center gap-1.5 transition-all duration-150
                       hover:text-navy hover:bg-gray-1"
          >
            <User size={13} strokeWidth={2} />
            我是民眾
          </Link>

          <div className="w-px h-5 bg-line" />

          {/* Explore / Listing switch */}
          <div className="flex items-center bg-[#EAECF0] border border-[#D0D5DD] rounded-lg p-[3px] gap-0.5">
            <Link
              href="/"
              className={cn(
                'font-[Inter] text-[12.5px] font-medium text-ink-3 px-[13px] py-[5px] rounded-[5px]',
                'border-none transition-all duration-150 whitespace-nowrap inline-block leading-[1.4]',
                'hover:text-navy',
                !isListing && 'bg-white text-navy font-semibold shadow-[0_1px_3px_rgba(12,29,50,0.12),0_0_0_0.5px_rgba(12,29,50,0.06)]',
              )}
            >
              探索展覽
            </Link>
            <Link
              href="/listing"
              className={cn(
                'font-[Inter] text-[12.5px] font-medium text-ink-3 px-[13px] py-[5px] rounded-[5px]',
                'border-none transition-all duration-150 whitespace-nowrap inline-block leading-[1.4]',
                'hover:text-navy',
                isListing && 'bg-white text-navy font-semibold shadow-[0_1px_3px_rgba(12,29,50,0.12),0_0_0_0.5px_rgba(12,29,50,0.06)]',
              )}
            >
              解方列表
            </Link>
          </div>
        </div>

        {/* Radix viewport for mega panels */}
        <NavigationMenu.Viewport
          className={cn(
            'absolute top-[60px] left-0',
            'bg-white rounded-b-xl shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]',
            'data-[state=open]:animate-fade-in-down data-[state=closed]:opacity-0',
            'overflow-hidden transition-all duration-200 z-[450]',
          )}
        />
      </NavigationMenu.Root>
    </header>
  )
}

// ── NavItem with optional mega panel ─────────────────────────────────────────
interface NavItemProps {
  label: string
  href: string
  pathname: string
  megaId: string
  mega?: React.ReactNode
}

function NavItem({ label, href, pathname, megaId, mega }: NavItemProps) {
  const isActive =
    pathname === href ||
    pathname.startsWith(href + '/') ||
    // edge: exhibitor-apply is child of exhibitor
    (megaId === 'exhibitor' && pathname.startsWith('/exhibitor-apply'))

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={cn(
          'font-[Inter] text-[13px] text-ink-3 px-3 h-[60px]',
          'flex items-center gap-1 cursor-default select-none',
          'transition-colors duration-150 hover:text-navy relative',
          'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-teal-2',
          'after:scale-x-0 after:transition-transform after:duration-200 after:origin-center',
          'hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[state=open]:text-navy',
          isActive && 'text-navy font-semibold after:scale-x-100',
          // Remove default Radix trigger styling
          'bg-transparent border-none outline-none',
        )}
      >
        {label}
        <span className="text-[8px] opacity-40 font-normal transition-transform duration-200 data-[state=open]:rotate-180">
          ∨
        </span>
      </NavigationMenu.Trigger>

      <NavigationMenu.Content
        className={cn(
          'absolute top-0 left-0',
          'data-[motion=from-start]:animate-fade-in-down',
          'data-[motion=from-end]:animate-fade-in-down',
        )}
      >
        {mega}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}
