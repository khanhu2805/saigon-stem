import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, Cpu, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInSection from "@/components/ui/fade-in-section";
import ConsultationForm from "@/components/consultation-form";
import { useEffect, useState } from "react";
import Slideshow from "@/components/ui/slide-show";
import HexagonalImageGrid from "@/components/ui/image-grid";
import CountUp from "@/components/ui/count-up";

const slides = [
  {
    type: "video",
    src: "/video.mp4", // Replace with actual video URL
    alt: "Students building robots",
    title: "NGÀY HỘI STEM THÀNH PHỐ BIÊN HÒA, TỈNH ĐỒNG NAI",
    description: "",
  },
  {
    type: "image",
    src: "/banner-2.jpg",
    alt: "STEM project showcase",
    title: "LỄ KÝ KẾT BIÊN BẢN GHI NHỚ HỢP TÁC",
    description: "",
  },
  {
    type: "image",
    src: "/banner-3.jpg",
    alt: "Coding workshop",
    title: "NGÀY HỘI STEM CẤP TIỂU HỌC THÀNH PHỐ THỦ ĐỨC",
    description: "",
  },
  {
    type: "image",
    src: "/banner-4.jpg",
    alt: "Digital citizenship seminar",
    title:
      "NGÀY HỘI TRẢI NGHIỆM TẠI TRƯỜNG TIỂU HỌC NGUYỄN AN NINH, TP. BIÊN HOÀ",
    description: "",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Slideshow slides={slides} />
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="mx-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-center">
            <div className="lg:col-span-5">
              <FadeInSection vertical={false} xOffset={-30} delay={0.3}>
                <h2 className="text-4xl font-bold text-[#024AAE] mb-6">
                  Chúng tôi là ai?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Thành lập với sứ mệnh khơi dậy tiềm năng học sinh, chúng tôi
                  mang đến các chương trình giáo dục STEM, Robotics, kỹ năng
                  công dân số và kỹ năng sống, giúp thế hệ trẻ sẵn sàng cho kỷ
                  nguyên số.
                </p>
                <div className="mt-8 flex">
                  <Link href="/gioi-thieu">
                    <Button
                      variant="outline"
                      className="border-[#024AAE] text-[#024AAE] hover:bg-[#024AAE] hover:text-white"
                    >
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                </div>
              </FadeInSection>
            </div>
            <div className="lg:col-span-5 relative">
              <FadeInSection vertical={false} xOffset={30} delay={0.3}>
                <div className="flex space-x-4">
                  <div className="relative lg:col-span-1 w-full h-96">
                    <Image
                      src="/pic2.jpg"
                      alt="Team collaborating"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="relative lg:col-span-1 mt-20 w-full h-96">
                    <Image
                      src="/pic1.jpg"
                      alt="Team collaborating"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="relative lg:col-span-1 w-full h-96">
                    <Image
                      src="/pic3.jpg"
                      alt="Team collaborating"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-12">
            Lĩnh vực hoạt động
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "STEM",
                desc: "Khơi dậy tư duy sáng tạo qua các dự án thực tiễn.",
                icon: <Lightbulb className="h-8 w-8 text-[#40C262]" />,
              },
              {
                title: "Robotics",
                desc: "Phát triển kỹ năng công nghệ và lập trình robot.",
                icon: <Cpu className="h-8 w-8 text-[#024AAE]" />,
              },
              {
                title: "Kỹ năng công dân số",
                desc: "Trang bị kiến thức an toàn trực tuyến, tư duy phản biện và đạo đức số.",
                icon: <Globe className="h-8 w-8 text-[#40C262]" />,
              },
            ].map((service, index) => (
              <FadeInSection
                key={index}
                vertical={true}
                yOffset={20}
                delay={0.2 * index}
              >
                <Card className="group hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center h-20">
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                  <div className="p-6">
                    <Link hidden href="/chuong-trinh-dao-tao">
                      <Button
                        variant="ghost"
                        className="group-hover:text-[#024AAE]"
                      >
                        Khám phá
                      </Button>
                    </Link>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#024AAE] text-white">
      <div className="container">
        <FadeInSection vertical={true} yOffset={20} delay={0.2}>
          <h2 className="text-4xl font-bold text-center mb-12">
            Thành tựu của chúng tôi
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: 5000, suffix: "+", label: "Học sinh đào tạo" },
            { value: 300, suffix: "+", label: "Ngôi trường đã giảng dạy" },
            { value: 100, suffix: "+", label: "Hội thảo báo cáo" },
          ].map((stat, index) => (
            <FadeInSection
              key={index}
              vertical={true}
              yOffset={20}
              delay={0.2 * index}
            >
              <div>
                <p className="text-5xl font-bold">
                  <CountUp end={stat.value} duration={1500} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-lg">{stat.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="mx-20">
          <div className="relative bg-[#40C262] rounded-lg p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Đồng hành cùng chúng tôi
                </h2>
                <p className="text-lg">
                  Hãy cùng tạo nên giá trị giáo dục bền vững cho thế hệ tương
                  lai.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 text-[#024AAE]">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
