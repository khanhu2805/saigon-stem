import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Tin tức và sự kiện"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Tin tức & Sự kiện</h1>
          <p className="max-w-2xl text-lg">
            Cập nhật những tin tức mới nhất về hoạt động của công ty và các sự kiện sắp diễn ra
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-4">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white">
                Tất cả
              </TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white">
                Tin giáo dục
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white">
                Sự kiện
              </TabsTrigger>
              <TabsTrigger value="stories" className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white">
                Câu chuyện học viên
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allNews.map((news, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      <div className="absolute top-0 right-0 bg-[#024AAE] px-3 py-1 text-sm font-medium text-white">
                        {news.category}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {news.date}
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          {news.author}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{news.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/tin-tuc/${news.slug}`} className="w-full">
                        <Button variant="ghost" className="w-full text-[#024AAE] hover:bg-[#024AAE]/10">
                          Đọc tiếp
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allNews
                  .filter((news) => news.category === "Tin giáo dục")
                  .map((news, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-[#024AAE] px-3 py-1 text-sm font-medium text-white">
                          {news.category}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {news.date}
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            {news.author}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3">{news.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/tin-tuc/${news.slug}`} className="w-full">
                          <Button variant="ghost" className="w-full text-[#024AAE] hover:bg-[#024AAE]/10">
                            Đọc tiếp
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allNews
                  .filter((news) => news.category === "Sự kiện")
                  .map((news, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-[#024AAE] px-3 py-1 text-sm font-medium text-white">
                          {news.category}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {news.date}
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            {news.author}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3">{news.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/tin-tuc/${news.slug}`} className="w-full">
                          <Button variant="ghost" className="w-full text-[#024AAE] hover:bg-[#024AAE]/10">
                            Đọc tiếp
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="stories" className="mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allNews
                  .filter((news) => news.category === "Câu chuyện học viên")
                  .map((news, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-[#024AAE] px-3 py-1 text-sm font-medium text-white">
                          {news.category}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {news.date}
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            {news.author}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3">{news.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/tin-tuc/${news.slug}`} className="w-full">
                          <Button variant="ghost" className="w-full text-[#024AAE] hover:bg-[#024AAE]/10">
                            Đọc tiếp
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 flex items-center justify-center">
            <Button variant="outline" className="mx-1 h-10 w-10 p-0">
              1
            </Button>
            <Button variant="outline" className="mx-1 h-10 w-10 p-0">
              2
            </Button>
            <Button variant="outline" className="mx-1 h-10 w-10 p-0">
              3
            </Button>
            <span className="mx-1">...</span>
            <Button variant="outline" className="mx-1 h-10 w-10 p-0">
              10
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data for news
const allNews = [
  {
    title: "Khai giảng khóa học STEM mới dành cho học sinh tiểu học",
    slug: "khai-giang-khoa-hoc-stem-moi",
    date: "15/04/2023",
    author: "Admin",
    category: "Tin giáo dục",
    excerpt:
      "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn vừa khai giảng khóa học STEM mới dành cho học sinh tiểu học với nhiều hoạt động thú vị.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Học sinh của chúng tôi đạt giải cao tại cuộc thi Robotics quốc tế",
    slug: "hoc-sinh-dat-giai-robotics-quoc-te",
    date: "02/04/2023",
    author: "Admin",
    category: "Tin giáo dục",
    excerpt:
      "Đội tuyển Robotics của Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn đã xuất sắc đạt giải Nhì tại cuộc thi Robotics quốc tế vừa qua.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Workshop 'Kỹ năng sống cho học sinh thế kỷ 21'",
    slug: "workshop-ky-nang-song",
    date: "25/03/2023",
    author: "Admin",
    category: "Sự kiện",
    excerpt:
      "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn tổ chức workshop 'Kỹ năng sống cho học sinh thế kỷ 21' với sự tham gia của nhiều chuyên gia giáo dục.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Tuyển sinh các lớp Robotics hè 2023",
    slug: "tuyen-sinh-robotics-he-2023",
    date: "18/03/2023",
    author: "Admin",
    category: "Sự kiện",
    excerpt:
      "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn thông báo tuyển sinh các lớp Robotics hè 2023 dành cho học sinh từ 8-15 tuổi.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Câu chuyện của bé Minh - Từ nhút nhát đến tự tin",
    slug: "cau-chuyen-cua-be-minh",
    date: "10/03/2023",
    author: "Admin",
    category: "Câu chuyện học viên",
    excerpt:
      "Câu chuyện về hành trình thay đổi của bé Minh từ một học sinh nhút nhát trở thành một học sinh tự tin sau khi tham gia khóa học Kỹ năng sống.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Hành trình chinh phục giải thưởng Robotics của nhóm học sinh lớp 7",
    slug: "hanh-trinh-chinh-phuc-giai-thuong",
    date: "05/03/2023",
    author: "Admin",
    category: "Câu chuyện học viên",
    excerpt:
      "Câu chuyện về hành trình nỗ lực và chinh phục giải thưởng Robotics của nhóm học sinh lớp 7 tại Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn.",
    image: "/placeholder.svg?height=200&width=400",
  },
]
