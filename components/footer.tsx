import Link from "next/link"
import { MapPin, Ticket, Mail, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <MapPin className="h-6 w-6 text-rose-500" />
                <Ticket className="h-6 w-6 text-amber-500" />
              </div>
              <span className="font-bold text-xl">여행쿠폰블로그</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              여행 정보와 할인 쿠폰을 제공하는 개인 블로그입니다. 최신 여행 트렌드와 특별한 할인 혜택을 놓치지 마세요.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  여행 정보
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  할인 쿠폰
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  여행 후기
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  인기 여행지
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">뉴스레터 구독</h3>
            <p className="text-muted-foreground mb-4">최신 여행 정보와 특별 할인 쿠폰을 이메일로 받아보세요.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="px-4 py-2 rounded-md border bg-background"
                required
              />
              <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md">
                구독하기
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 여행쿠폰블로그. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
