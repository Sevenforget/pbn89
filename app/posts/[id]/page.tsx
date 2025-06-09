import { Badge } from "@/components/ui/badge";
import { fetchPostFromApi } from "@/lib/api-service";
import { Calendar, ChevronLeft, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://printseptembercalendar.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <main className="min-h-screen">
        <div className="relative h-[40vh] w-full">
          <Image
            src={
              post.coverImage ||
              `/placeholder.svg?height=600&width=1200&query=travel+landscape+${post.id}`
            }
            alt={post.title}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center mt-6 space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {new Date(post.date || new Date()).toLocaleDateString(
                    "ko-KR"
                  )}
                </span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author || "관리자"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 -mt-16 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              모든 글 보기
            </Link>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-6">관련 쿠폰</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-4 rounded-lg border border-dashed border-amber-500 flex flex-col">
                <div className="text-amber-800 font-bold">여행 특별 할인</div>
                <div className="text-2xl font-bold text-amber-900 my-2">
                  20% 할인
                </div>
                <div className="text-amber-700 text-sm mb-4">
                  2023년 12월 31일까지
                </div>
                <button className="mt-auto bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md text-sm font-medium">
                  쿠폰 받기
                </button>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg border border-dashed border-blue-500 flex flex-col">
                <div className="text-blue-800 font-bold">숙박 예약 할인</div>
                <div className="text-2xl font-bold text-blue-900 my-2">
                  15% 할인
                </div>
                <div className="text-blue-700 text-sm mb-4">
                  2023년 11월 30일까지
                </div>
                <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium">
                  쿠폰 받기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
