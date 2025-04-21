import Image from "next/image";
import { Award, BookOpen, Target, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/ui/fade-in-section";
import CountUp from "@/components/ui/count-up";

export default function AboutPage() {

  const timelineEvents = [
    { year: 2018, event: "" },
    { year: 2020, event: "" },
    { year: 2022, event: "" },
    { year: 2025, event: "" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#024AAE]/70 to-[#40C262]/50 z-10"></div>

        <Image
          src="/pic5.jpg" // Replace with actual image
          alt="Giới thiệu về công ty"
          fill
          className="object-cover transform transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl animate-slide-in">
            Giới thiệu
            </h1>
            <p className="max-w-3xl text-xl animate-slide-in delay-100">
            Tìm hiểu về Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn
            </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <FadeInSection vertical={true} yOffset={20} delay={0.3}>
            <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-12">
              Câu chuyện hình thành
            </h2>
          </FadeInSection>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#40C262] h-full z-0"></div>
            {timelineEvents.map((event, index) => (
              <FadeInSection key={index} vertical={true} yOffset={20} delay={0.4 + index * 0.2}>
                <div
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div
                      className="relative bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                      <h3 className="text-2xl font-bold text-[#024AAE]">{event.year}</h3>
                      <p className="mt-2 text-muted-foreground">{event.event}</p>
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#40C262] rounded-full ${
                          index % 2 === 0 ? "-right-3" : "-left-3"
                        } group-hover:scale-150 transition-transform`}
                      ></div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection vertical={true} yOffset={20} delay={0.5}>
            <div className="text-center mt-12">
              <p className="text-3xl font-semibold text-[#024AAE]">
                Đã truyền cảm hứng cho <CountUp end={5000} duration={2000} suffix="+" /> học sinh
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <FadeInSection vertical={true} yOffset={20} delay={0.3}>
            <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-12">
              Kim chỉ nam của chúng tôi
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12 text-[#024AAE]" />,
                title: "Tầm nhìn",
                desc: "Trở thành ngọn cờ đầu trong giáo dục STEM, Robotics và Kỹ năng công dân số, đào tạo công dân toàn cầu cho thế kỷ 21.",
                color: "text-[#024AAE]",
                bg: "bg-[#024AAE]/10",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-[#40C262]" />,
                title: "Sứ mệnh",
                desc: "Cung cấp giáo dục chất lượng cao, nuôi dưỡng sáng tạo và kỹ năng thiết yếu để học sinh tự tin chinh phục tương lai.",
                color: "text-[#40C262]",
                bg: "bg-[#40C262]/10",
              },
              {
                icon: <Award className="h-12 w-12 text-[#024AAE]" />,
                title: "Giá trị cốt lõi",
                desc: (
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-[#40C262] mr-2 flex-shrink-0" />
                      <span><strong>Sáng tạo:</strong> Khơi dậy tư duy đổi mới</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-[#40C262] mr-2 flex-shrink-0" />
                      <span><strong>Tận tâm:</strong> Đặt học sinh lên hàng đầu</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-[#40C262] mr-2 flex-shrink-0" />
                      <span><strong>Chất lượng:</strong> Giáo dục xuất sắc</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-[#40C262] mr-2 flex-shrink-0" />
                      <span><strong>Hợp tác:</strong> Xây dựng quan hệ bền vững</span>
                    </li>
                  </ul>
                ),
                color: "text-[#024AAE]",
                bg: "bg-[#024AAE]/10",
              },
            ].map((item, index) => (
              <FadeInSection key={index} vertical={true} yOffset={20} delay={0.3 + index * 0.2}>
                <div
                  className={`group relative p-8 rounded-xl h-full shadow-lg ${item.bg} transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#024AAE]/20 to-[#40C262]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative flex justify-center mb-6">
                    <div className={`p-4 rounded-full ${item.bg} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold text-center ${item.color} mb-4`}>{item.title}</h3>
                  <div className="text-muted-foreground text-center">{item.desc}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

// Optional CSS for animations
