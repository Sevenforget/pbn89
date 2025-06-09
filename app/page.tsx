import { BlogCard } from "@/components/blog-card"
import { HeroSection } from "@/components/hero-section"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">최신 블로그 글</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
