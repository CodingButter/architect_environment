import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Author, BlogMdxFrontmatter } from "@/lib/markdown"
import { getAllBlogs } from "@/lib/markdown"
import { formatDate2, stringToDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "AriaDocs - Blog",
}

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  )
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">The latest blogs of this product</h1>
        <p className="text-muted-foreground">
          All the latest blogs and news, straight from the team.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        {blogs.map((blog) => (
          <BlogCard {...blog} key={blog.slug} slug={blog.slug} />
        ))}
      </div>
    </div>
  )
}

function BlogCard({
  date,
  title,
  description,
  slug,
  cover,
  authors,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <Link
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[400px]"
      href={`/blog/${slug}`}>
      <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>
      <div className="w-full">
        <Image
          alt={title}
          className="w-full rounded-md object-cover h-[180px] border"
          height={150}
          quality={80}
          src={cover}
          width={400}
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-[13px] text-muted-foreground">Published on {formatDate2(date)}</p>
        <AvatarGroup users={authors} />
      </div>
    </Link>
  )
}

function AvatarGroup({ users, max = 4 }: { users: Author[]; max?: number }) {
  const displayUsers = users.slice(0, max)
  const remainingUsers = Math.max(users.length - max, 0)

  return (
    <div className="flex items-center">
      {displayUsers.map((user, index) => (
        <Avatar
          className={`inline-block border-2 w-9 h-9 border-background ${
            index !== 0 ? "-ml-3" : ""
          } `}
          key={user.username}>
          <AvatarImage alt={user.username} src={user.avatar} />
          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      ))}
      {remainingUsers > 0 && (
        <Avatar className="-ml-3 inline-block border-2 border-background hover:translate-y-1 transition-transform">
          <AvatarFallback>+{remainingUsers}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
