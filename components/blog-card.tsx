import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Post } from "@/lib/posts"

interface BlogCardProps {
  post: Post
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage || `/placeholder.svg?height=400&width=600&query=travel+landscape+${index}`}
            alt={post.title}
            fill
            className="object-cover"
          />
          {post.featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-amber-500 hover:bg-amber-500">추천</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">{post.content.substring(0, 120)}...</p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-4 py-3 border-t bg-muted/50 flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author || "관리자"}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{new Date().toLocaleDateString("ko-KR")}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
