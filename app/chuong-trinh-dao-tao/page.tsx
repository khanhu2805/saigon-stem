import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, BotIcon as Robot, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Chương trình đào tạo"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Chương trình đào tạo
          </h1>
          <p className="max-w-2xl text-lg">
            Khám phá các chương trình đào tạo đa dạng, được thiết kế phù hợp với
            từng độ tuổi và nhu cầu học tập
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="stem" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger
                value="stem"
                className="data-[state=active]:bg-[#40C262] data-[state=active]:text-white"
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                STEM sáng tạo
              </TabsTrigger>
              <TabsTrigger
                value="robotics"
                className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white"
              >
                <Robot className="mr-2 h-4 w-4" />
                Robotics ứng dụng
              </TabsTrigger>
              <TabsTrigger
                value="digital"
                className="data-[state=active]:bg-[#40C262] data-[state=active]:text-white"
              >
                <Brain className="mr-2 h-4 w-4" />
                Kỹ năng công dân số
              </TabsTrigger>
              <TabsTrigger
                value="life"
                className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white"
              >
                <Users className="mr-2 h-4 w-4" />
                Kỹ năng sống
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stem" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#40C262]">
                  STEM sáng tạo
                </h2>
                <p className="text-muted-foreground">
                  Chương trình STEM sáng tạo giúp học sinh phát triển tư duy
                  sáng tạo, kỹ năng giải quyết vấn đề và khả năng làm việc nhóm
                  thông qua các dự án thực tế kết hợp Khoa học, Công nghệ, Kỹ
                  thuật và Toán học.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {stemPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/chuong-trinh-dao-tao/stem/${program.slug}`}
                        className="w-full"
                      >
                        <Button className="w-full bg-[#40C262] hover:bg-[#40C262]/90">
                          Xem chi tiết
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="robotics" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#024AAE]">
                  Robotics ứng dụng
                </h2>
                <p className="text-muted-foreground">
                  Chương trình Robotics ứng dụng giúp học sinh phát triển kỹ
                  năng lập trình, tư duy logic và khả năng giải quyết vấn đề
                  thông qua việc thiết kế, lắp ráp và lập trình robot.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {roboticsPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/chuong-trinh-dao-tao/robotics/${program.slug}`}
                        className="w-full"
                      >
                        <Button className="w-full bg-[#024AAE] hover:bg-[#024AAE]/90">
                          Xem chi tiết
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#40C262]">
                  Kỹ năng công dân số
                </h2>
                <p className="text-muted-foreground">
                  Chương trình Kỹ năng công dân số trang bị cho học sinh các
                  kiến thức và kỹ năng cần thiết để trở thành công dân số có
                  trách nhiệm trong kỷ nguyên số, bao gồm an toàn trực tuyến, tư
                  duy phản biện và đạo đức số.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {digitalPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/chuong-trinh-dao-tao/cong-dan-so/${program.slug}`}
                        className="w-full"
                      >
                        <Button className="w-full bg-[#40C262] hover:bg-[#40C262]/90">
                          Xem chi tiết
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="life" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#024AAE]">
                  Kỹ năng sống
                </h2>
                <p className="text-muted-foreground">
                  Chương trình Kỹ năng sống giúp học sinh phát triển các kỹ năng
                  thiết yếu như giao tiếp, làm việc nhóm, tự phục vụ, quản lý
                  cảm xúc và giải quyết xung đột, giúp các em tự tin và thành
                  công trong cuộc sống.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {lifeSkillsPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/chuong-trinh-dao-tao/ky-nang-song/${program.slug}`}
                        className="w-full"
                      >
                        <Button className="w-full bg-[#024AAE] hover:bg-[#024AAE]/90">
                          Xem chi tiết
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}

// Missing import for Lightbulb
import { Lightbulb } from "lucide-react";

// Sample data for STEM programs
const stemPrograms = [
  {
    title: "STEM cho học sinh Tiểu học",
    slug: "stem-tieu-hoc",
    ageGroup: "Dành cho học sinh 6-11 tuổi",
    description:
      "Chương trình STEM dành cho học sinh tiểu học, giúp các em phát triển tư duy sáng tạo và kỹ năng giải quyết vấn đề thông qua các hoạt động thực hành thú vị.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "STEM cho học sinh THCS",
    slug: "stem-thcs",
    ageGroup: "Dành cho học sinh 11-15 tuổi",
    description:
      "Chương trình STEM dành cho học sinh trung học cơ sở, tập trung vào các dự án thực tế và ứng dụng kiến thức vào giải quyết các vấn đề trong cuộc sống.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "STEM cho học sinh THPT",
    slug: "stem-thpt",
    ageGroup: "Dành cho học sinh 15-18 tuổi",
    description:
      "Chương trình STEM nâng cao dành cho học sinh trung học phổ thông, chuẩn bị cho các em tham gia các cuộc thi khoa học kỹ thuật và định hướng nghề nghiệp.",
    image: "/placeholder.svg?height=300&width=500",
  },
];

// Sample data for Robotics programs
const roboticsPrograms = [
  {
    title: "Robotics cơ bản",
    slug: "robotics-co-ban",
    ageGroup: "Dành cho học sinh 8-12 tuổi",
    description:
      "Chương trình Robotics cơ bản giúp học sinh làm quen với các khái niệm cơ bản về robot, lắp ráp và lập trình robot đơn giản.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Robotics nâng cao",
    slug: "robotics-nang-cao",
    ageGroup: "Dành cho học sinh 12-15 tuổi",
    description:
      "Chương trình Robotics nâng cao giúp học sinh phát triển kỹ năng lập trình và điều khiển robot phức tạp hơn, tham gia các cuộc thi Robotics.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Robotics chuyên sâu",
    slug: "robotics-chuyen-sau",
    ageGroup: "Dành cho học sinh 15-18 tuổi",
    description:
      "Chương trình Robotics chuyên sâu giúp học sinh phát triển các dự án robot phức tạp, ứng dụng trí tuệ nhân tạo và chuẩn bị cho các cuộc thi quốc tế.",
    image: "/placeholder.svg?height=300&width=500",
  },
];

// Sample data for Digital Citizenship programs
const digitalPrograms = [
  {
    title: "An toàn trực tuyến",
    slug: "an-toan-truc-tuyen",
    ageGroup: "Dành cho học sinh 8-12 tuổi",
    description:
      "Chương trình giúp học sinh hiểu và áp dụng các biện pháp bảo vệ thông tin cá nhân, nhận diện và phòng tránh các nguy cơ trực tuyến.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Tư duy phản biện trong thời đại số",
    slug: "tu-duy-phan-bien",
    ageGroup: "Dành cho học sinh 12-15 tuổi",
    description:
      "Chương trình giúp học sinh phát triển kỹ năng đánh giá thông tin, nhận diện tin giả và xây dựng tư duy phản biện trong thời đại số.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Đạo đức số và trách nhiệm trực tuyến",
    slug: "dao-duc-so",
    ageGroup: "Dành cho học sinh 15-18 tuổi",
    description:
      "Chương trình giúp học sinh hiểu và áp dụng các nguyên tắc đạo đức số, xây dựng danh tiếng số tích cực và trở thành công dân số có trách nhiệm.",
    image: "/placeholder.svg?height=300&width=500",
  },
];

// Sample data for Life Skills programs
const lifeSkillsPrograms = [
  {
    title: "Kỹ năng giao tiếp",
    slug: "ky-nang-giao-tiep",
    ageGroup: "Dành cho học sinh 8-12 tuổi",
    description:
      "Chương trình giúp học sinh phát triển kỹ năng giao tiếp hiệu quả, tự tin trình bày ý kiến và lắng nghe tích cực.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Kỹ năng làm việc nhóm",
    slug: "ky-nang-lam-viec-nhom",
    ageGroup: "Dành cho học sinh 12-15 tuổi",
    description:
      "Chương trình giúp học sinh phát triển kỹ năng làm việc nhóm, hợp tác và giải quyết xung đột trong nhóm.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Kỹ năng quản lý cảm xúc",
    slug: "ky-nang-quan-ly-cam-xuc",
    ageGroup: "Dành cho học sinh 15-18 tuổi",
    description:
      "Chương trình giúp học sinh nhận diện, hiểu và quản lý cảm xúc của bản thân, xây dựng sự tự tin và khả năng ứng phó với áp lực.",
    image: "/placeholder.svg?height=300&width=500",
  },
];
