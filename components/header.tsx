"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, MapPin, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <MapPin className="h-6 w-6 text-rose-500" />
              <Ticket className="h-6 w-6 text-amber-500" />
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">여행쿠폰블로그</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            홈
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            여행 정보
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            할인 쿠폰
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            여행 후기
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <form className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="검색..." className="w-48 pl-8 md:w-64 lg:w-80" />
            </div>
          </form>

          <ModeToggle />

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">메뉴 열기</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <MapPin className="h-6 w-6 text-rose-500" />
                <Ticket className="h-6 w-6 text-amber-500" />
              </div>
              <span className="font-bold text-xl">여행쿠폰블로그</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">메뉴 닫기</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-6">
            <Link href="/" className="flex items-center py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              홈
            </Link>
            <Link
              href="#"
              className="flex items-center py-2 text-lg font-medium text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              여행 정보
            </Link>
            <Link
              href="#"
              className="flex items-center py-2 text-lg font-medium text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              할인 쿠폰
            </Link>
            <Link
              href="#"
              className="flex items-center py-2 text-lg font-medium text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              여행 후기
            </Link>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="검색..." className="w-full pl-8" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
