import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Brain, Lightbulb, BotIcon as Robot, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ConsultationForm from "@/components/consultation-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Students engaged in STEM activities"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Khơi nguồn sáng tạo - Dẫn lối tương lai
          </h1>
          <p className="mb-8 max-w-2xl text-lg sm:text-xl">
            Đồng hành cùng học sinh phát triển kỹ năng STEM, Robotics và các kỹ năng thiết yếu cho công dân toàn cầu
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-[#40C262] hover:bg-[#40C262]/90">
              Đăng ký học ngay
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#024AAE]">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE] sm:text-4xl">Giới thiệu về chúng tôi</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn là đơn vị tiên phong trong lĩnh vực đào tạo STEM, Robotics
              và kỹ năng sống cho học sinh các cấp.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-t-4 border-t-[#40C262]">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#40C262]/10">
                  <Lightbulb className="h-8 w-8 text-[#40C262]" />
                </div>
                <CardTitle>STEM sáng tạo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Phát triển tư duy sáng tạo và kỹ năng giải quyết vấn đề thông qua các dự án STEM thực tế.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#024AAE]">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#024AAE]/10">
                  <Robot className="h-8 w-8 text-[#024AAE]" />
                </div>
                <CardTitle>Robotics ứng dụng</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Học lập trình và điều khiển robot, phát triển tư duy logic và kỹ năng công nghệ.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#40C262]">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#40C262]/10">
                  <Brain className="h-8 w-8 text-[#40C262]" />
                </div>
                <CardTitle>Kỹ năng công dân số</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Trang bị kiến thức và kỹ năng cần thiết để trở thành công dân số có trách nhiệm trong kỷ nguyên số.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#024AAE]">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#024AAE]/10">
                  <Users className="h-8 w-8 text-[#024AAE]" />
                </div>
                <CardTitle>Kỹ năng sống</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Phát triển các kỹ năng thiết yếu như giao tiếp, làm việc nhóm, tự phục vụ và quản lý cảm xúc.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE] sm:text-4xl">Chương trình đào tạo nổi bật</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Khám phá các chương trình đào tạo đa dạng, được thiết kế phù hợp với từng độ tuổi và nhu cầu học tập
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.ageGroup}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/chuong-trinh-dao-tao/${program.slug}`} className="w-full">
                    <Button className="w-full bg-[#024AAE] hover:bg-[#024AAE]/90">
                      Xem chi tiết
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/chuong-trinh-dao-tao">
              <Button variant="outline" className="border-[#40C262] text-[#40C262] hover:bg-[#40C262] hover:text-white">
                Xem tất cả chương trình
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE] sm:text-4xl">Tin tức & Sự kiện</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Cập nhật những tin tức mới nhất về hoạt động của công ty và các sự kiện sắp diễn ra
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((news, index) => (
              <Card key={index}>
                <div className="relative h-48 w-full">
                  <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardDescription>{news.date}</CardDescription>
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

          <div className="mt-12 text-center">
            <Link href="/tin-tuc">
              <Button variant="outline" className="border-[#40C262] text-[#40C262] hover:bg-[#40C262] hover:text-white">
                Xem tất cả tin tức
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 bg-[#024AAE]">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center text-white">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Đăng ký nhận tư vấn</h2>
              <p className="mb-8 text-lg">
                Để lại thông tin của bạn, chúng tôi sẽ liên hệ tư vấn chi tiết về các chương trình đào tạo phù hợp với
                nhu cầu của bạn.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <BookOpen className="h-6 w-6 text-[#024AAE]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Đội ngũ chuyên nghiệp</h3>
                  <p>Giáo viên giàu kinh nghiệm, tận tâm với học sinh</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data for featured programs
const featuredPrograms = [
  {
    title: "STEM cho học sinh Tiểu học",
    slug: "stem-tieu-hoc",
    ageGroup: "Dành cho học sinh 6-11 tuổi",
    description:
      "Chương trình STEM dành cho học sinh tiểu học, giúp các em phát triển tư duy sáng tạo và kỹ năng giải quyết vấn đề thông qua các hoạt động thực hành thú vị.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Robotics nâng cao",
    slug: "robotics-nang-cao",
    ageGroup: "Dành cho học sinh 12-15 tuổi",
    description:
      "Chương trình Robotics nâng cao giúp học sinh trung học phát triển kỹ năng lập trình và điều khiển robot, tham gia các cuộc thi Robotics quốc tế.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Kỹ năng công dân số",
    slug: "ky-nang-cong-dan-so",
    ageGroup: "Dành cho học sinh 10-18 tuổi",
    description:
      "Trang bị cho học sinh các kỹ năng cần thiết để trở thành công dân số có trách nhiệm, bao gồm an toàn trực tuyến, tư duy phản biện và đạo đức số.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

// Sample data for latest news
const latestNews = [
  {
    title: "Khai giảng khóa học STEM mới dành cho học sinh tiểu học",
    slug: "khai-giang-khoa-hoc-stem-moi",
    date: "15/04/2023",
    excerpt:
      "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn vừa khai giảng khóa học STEM mới dành cho học sinh tiểu học với nhiều hoạt động thú vị.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Học sinh của chúng tôi đạt giải cao tại cuộc thi Robotics quốc tế",
    slug: "hoc-sinh-dat-giai-robotics-quoc-te",
    date: "02/04/2023",
    excerpt:
      "Đội tuyển Robotics của Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn đã xuất sắc đạt giải Nhì tại cuộc thi Robotics quốc tế vừa qua.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Workshop 'Kỹ năng sống cho học sinh thế kỷ 21'",
    slug: "workshop-ky-nang-song",
    date: "25/03/2023",
    excerpt:
      "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn tổ chức workshop 'Kỹ năng sống cho học sinh thế kỷ 21' với sự tham gia của nhiều chuyên gia giáo dục.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Tuyển sinh các lớp Robotics hè 2023",
    slug: "tuyen-sinh-robotics-he-2023",
    date: "18/03/2023",
    excerpt:
      "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn thông báo tuyển sinh các lớp Robotics hè 2023 dành cho học sinh từ 8-15 tuổi.",
    image: "/placeholder.svg?height=200&width=400",
  },
]
