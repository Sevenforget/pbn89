import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <Image
        src="/sunset-destination.png"
        alt="여행 배경 이미지"
        fill
        className="object-cover brightness-[0.6]"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight">특별한 여행, 특별한 할인</h1>
        <p className="mt-4 text-xl md:text-2xl text-center max-w-2xl">최고의 여행 정보와 독점 할인 쿠폰을 만나보세요</p>

        <div className="mt-8 w-full max-w-md relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="여행지, 쿠폰 검색..."
            className="w-full py-3 pl-10 pr-4 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="bg-rose-500 hover:bg-rose-600 text-white">인기 여행지</Button>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">최신 할인 쿠폰</Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}
