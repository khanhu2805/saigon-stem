'use client'; // !! BẮT BUỘC: Đánh dấu đây là Client Component

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, BotIcon as Robot, Users, Lightbulb } from "lucide-react"; // Đảm bảo có Lightbulb
import { useState, useEffect } from "react"; // Import useState và useEffect

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

const stemPrograms = [
  {
    title: "STEM cho học sinh Tiểu học",
    slug: "stem-tieu-hoc",
    ageGroup: "Dành cho học sinh 6-11 tuổi",
    description:
      "Chương trình STEM dành cho học sinh tiểu học, giúp các em phát triển tư duy sáng tạo và kỹ năng giải quyết vấn đề thông qua các hoạt động thực hành thú vị.",
    image: "/placeholder.svg?height=300&width=500", // Thay bằng ảnh thật
  },
  {
    title: "STEM cho học sinh THCS",
    slug: "stem-thcs",
    ageGroup: "Dành cho học sinh 11-15 tuổi",
    description:
      "Chương trình STEM dành cho học sinh trung học cơ sở, tập trung vào các dự án thực tế và ứng dụng kiến thức vào giải quyết các vấn đề trong cuộc sống.",
    image: "/placeholder.svg?height=300&width=500", // Thay bằng ảnh thật
  },
  // Thêm các chương trình STEM khác nếu có
];

const roboticsPrograms = [
  {
    title: "Robotics cho học sinh Tiểu học",
    slug: "robotics-tieu-hoc",
    ageGroup: "Dành cho học sinh 6-11 tuổi",
    description:
      "Chương trình Robotics cơ bản giúp học sinh làm quen với các khái niệm cơ bản về robot, lắp ráp và lập trình robot đơn giản.",
    image: "/placeholder.svg?height=300&width=500", // Thay bằng ảnh thật
  },
  {
    title: "Robotics cho học sinh THCS",
    slug: "robotics-thcs",
    ageGroup: "Dành cho học sinh 11-15 tuổi",
    description:
      "Chương trình Robotics cơ bản giúp học sinh làm quen với các khái niệm cơ bản về robot, lắp ráp và lập trình robot đơn giản.",
    image: "/placeholder.svg?height=300&width=500", // Thay bằng ảnh thật
  },
  // Thêm các chương trình Robotics khác nếu có
];

const digitalPrograms = [
  {
    title: "An toàn trực tuyến",
    slug: "an-toan-truc-tuyen",
    ageGroup: "Dành cho học sinh 8-12 tuổi",
    description:
      "Chương trình giúp học sinh hiểu và áp dụng các biện pháp bảo vệ thông tin cá nhân, nhận diện và phòng tránh các nguy cơ trực tuyến.",
    image: "/placeholder.svg?height=300&width=500", // Thay bằng ảnh thật
  },
  // Thêm các chương trình Digital Citizenship khác nếu có
];

const lifeSkillsPrograms = [
  {
    title: "Kỹ năng giao tiếp",
    slug: "ky-nang-giao-tiep",
    ageGroup: "Dành cho học sinh 8-12 tuổi",
    description:
      "Chương trình giúp học sinh phát triển kỹ năng giao tiếp hiệu quả, tự tin trình bày ý kiến và lắng nghe tích cực.",
    image: "/placeholder.svg?height=300&width=500", // Thay bằng ảnh thật
  },
  // Thêm các chương trình Life Skills khác nếu có
];
// --- Kết thúc dữ liệu mẫu ---


export default function ProgramsPage() {
  // State để lưu trữ tab đang được chọn, mặc định là 'stem'
  const [activeTab, setActiveTab] = useState('stem');
  const validTabs = ['stem', 'robotics', 'cds', 'kns']; // Danh sách các tab hợp lệ

  useEffect(() => {
    // Hàm này chạy một lần sau khi component được mount phía client
    const hash = window.location.hash.substring(1); // Lấy giá trị hash (bỏ dấu #)

    // Kiểm tra xem hash có phải là một tab hợp lệ không
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash); // Nếu hợp lệ, cập nhật state activeTab
    }

    // Optional: Scroll đến phần Tabs cho dễ nhìn sau khi chuyển tab từ link
    const tabsElement = document.getElementById('program-tabs');
    if (tabsElement && hash && validTabs.includes(hash)) {
      // Scroll nhẹ nhàng đến vị trí của TabsList
      tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy 1 lần khi mount

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/pic1.jpg" // Thay bằng ảnh banner thật cho trang chương trình
          alt="Chương trình đào tạo"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Chương Trình Đào Tạo
          </h1>
          <p className="max-w-2xl text-xl italic">
            Khám phá các chương trình đào tạo đa dạng, được thiết kế phù hợp với
            từng độ tuổi và nhu cầu học tập
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program-tabs" className="py-16 scroll-mt-20"> {/* Thêm ID và scroll-mt */}
        <div className="container">
          {/* Sử dụng value và onValueChange để kiểm soát Tabs bằng state */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab} // Cập nhật state khi người dùng tự click tab
            className="w-full"
          >
            <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 h-auto"> {/* h-auto để chứa text dài */}
              <TabsTrigger
                value="stem"
                className="data-[state=active]:bg-[#40C262] data-[state=active]:text-white text-sm whitespace-normal h-full py-2" // Thêm class để text tự xuống dòng
              >
                <Lightbulb className="mr-2 h-4 w-4 flex-shrink-0" /> {/* Thêm flex-shrink-0 */}
                STEM
              </TabsTrigger>
              <TabsTrigger
                value="robotics"
                className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white text-sm whitespace-normal h-full py-2"
              >
                <Robot className="mr-2 h-4 w-4 flex-shrink-0" />
                Robotics
              </TabsTrigger>
              <TabsTrigger
                value="cds"
                className="data-[state=active]:bg-[#40C262] data-[state=active]:text-white text-sm whitespace-normal h-full py-2"
              >
                <Brain className="mr-2 h-4 w-4 flex-shrink-0" />
                Kỹ Năng Công Dân Số
              </TabsTrigger>
              <TabsTrigger
                value="kns"
                className="data-[state=active]:bg-[#024AAE] data-[state=active]:text-white text-sm whitespace-normal h-full py-2"
              >
                <Users className="mr-2 h-4 w-4 flex-shrink-0" />
                Kỹ Năng Sống
              </TabsTrigger>
            </TabsList>

            {/* Nội dung các TabsContent */}
            <TabsContent value="stem" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-[#40C262]"> {/* Tăng kích thước */}
                  STEM
                </h2>
                {/* Cải thiện khả năng đọc */}
                <p className="text-base text-gray-700 leading-relaxed">
                  Chương trình STEM sáng tạo giúp học sinh phát triển tư duy
                  sáng tạo, kỹ năng giải quyết vấn đề và khả năng làm việc nhóm
                  thông qua các dự án thực tế kết hợp Khoa học, Công nghệ, Kỹ
                  thuật và Toán học.
                </p>
              </div>
              {/* Grid hiển thị các chương trình STEM */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {stemPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden flex flex-col"> {/* Thêm flex flex-col */}
                    <div className="relative h-48 w-full inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
                    <div className="relative h-48 w-full flex-shrink-0 hidden"> {/* Thêm flex-shrink-0 */}
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{program.title}</CardTitle> {/* Kích thước vừa phải */}
                      {/* Màu chữ đậm hơn */}
                      <CardDescription className="text-sm text-gray-600">{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow"> {/* flex-grow */}
                      {/* Căn trái, màu đậm hơn */}
                      <p className="line-clamp-3 text-sm text-gray-700 leading-relaxed">{program.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto"> {/* mt-auto */}
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
                <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">
                  Robotics
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Chương trình Robotics ứng dụng giúp học sinh phát triển kỹ
                  năng lập trình, tư duy logic và khả năng giải quyết vấn đề
                  thông qua việc thiết kế, lắp ráp và lập trình robot.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {roboticsPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden flex flex-col"> {/* Thêm flex flex-col */}
                    <div className="relative h-48 w-full inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
                    <div className="relative h-48 w-full flex-shrink-0 hidden"> {/* Thêm flex-shrink-0 */}
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="line-clamp-3 text-sm text-gray-700 leading-relaxed">{program.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
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

            <TabsContent value="cds" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-[#40C262]">
                  Kỹ Năng Công Dân Số
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Chương trình Kỹ năng công dân số trang bị cho học sinh các
                  kiến thức và kỹ năng cần thiết để trở thành công dân số có
                  trách nhiệm trong kỷ nguyên số, bao gồm an toàn trực tuyến, tư
                  duy phản biện và đạo đức số.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {digitalPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
                    <div className="relative h-48 w-full flex-shrink-0 hidden"> {/* Thêm flex-shrink-0 */}
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="line-clamp-3 text-sm text-gray-700 leading-relaxed">{program.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
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

            <TabsContent value="kns" className="mt-0">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">
                  Kỹ Năng Sống
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Chương trình Kỹ năng sống giúp học sinh phát triển các kỹ năng
                  thiết yếu như giao tiếp, làm việc nhóm, tự phục vụ, quản lý
                  cảm xúc và giải quyết xung đột, giúp các em tự tin và thành
                  công trong cuộc sống.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {lifeSkillsPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
                    <div className="relative h-48 w-full flex-shrink-0 hidden"> {/* Thêm flex-shrink-0 */}
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{program.ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="line-clamp-3 text-sm text-gray-700 leading-relaxed">{program.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
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