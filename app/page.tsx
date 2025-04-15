import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, Cpu, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInSection from "@/components/ui/fade-in-section";
import ConsultationForm from "@/components/consultation-form";
import { useEffect, useState } from "react";

const slides = [
  {
    type: "video",
    src: "/placeholder-video.mp4", // Replace with actual video URL
    alt: "Students building robots",
    title: "Khám phá Robotics",
    description: "Đào tạo thế hệ trẻ với công nghệ tiên tiến.",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=1200&width=1920",
    alt: "STEM project showcase",
    title: "Sáng tạo với STEM",
    description: "Khơi dậy tư duy qua các dự án thực tiễn.",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=1200&width=1920",
    alt: "Coding workshop",
    title: "Công nghệ dẫn đầu",
    description: "Phát triển kỹ năng lập trình cho tương lai.",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=1200&width=1920",
    alt: "Digital citizenship seminar",
    title: "Kỹ năng công dân số",
    description: "Hướng dẫn an toàn và đạo đức trong thế giới số.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#024AAE]/70 to-[#40C262]/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=1200&width=1920"
          alt="Students innovating in STEM"
          fill
          className="object-cover transform transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex h-full items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white tracking-tight md:text-6xl">
              Kiến tạo tương lai qua giáo dục sáng tạo
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn – Tiên phong trong
              STEM, Robotics và kỹ năng công dân số.
            </p>
            <Link href="/lien-he">
              <Button
                size="lg"
                className="mt-6 bg-[#40C262] hover:bg-[#024AAE] text-white text-base"
              >
                Kết nối với chúng tôi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <FadeInSection vertical={true} yOffset={20} delay={0.2}>
                <h2 className="text-4xl font-bold text-[#024AAE] mb-6">
                  Chúng tôi là ai?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Thành lập với sứ mệnh khơi dậy tiềm năng học sinh, chúng tôi
                  mang đến các chương trình giáo dục STEM, Robotics, kỹ năng
                  công dân số và kỹ năng sống, giúp thế hệ trẻ sẵn sàng cho kỷ
                  nguyên số.
                </p>
                <div className="mt-8 flex space-x-4">
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
            <div className="lg:col-span-2 relative">
              <FadeInSection vertical={true} yOffset={20} delay={0.4}>
                <div className="relative w-full h-96">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Team collaborating"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
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
                    <Link href="/chuong-trinh-dao-tao">
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
          <h2 className="text-4xl font-bold text-center mb-12">
            Thành tựu của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Năm hoạt động" },
              { value: "5000+", label: "Học sinh đào tạo" },
              { value: "50+", label: "Giải thưởng quốc tế" },
              { value: "100+", label: "Đối tác giáo dục" },
            ].map((stat, index) => (
              <FadeInSection
                key={index}
                vertical={true}
                yOffset={20}
                delay={0.2 * index}
              >
                <div>
                  <p className="text-5xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-lg">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container">
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
