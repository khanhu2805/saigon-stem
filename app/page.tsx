import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Cpu, Globe, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInSection from "@/components/ui/fade-in-section";
import ConsultationForm from "@/components/consultation-form";
import Slideshow from "@/components/ui/slide-show";
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

const programs = [
  {
    title: "STEM",
    desc: "Khơi dậy tư duy sáng tạo qua các dự án thực tiễn.",
    icon: <Lightbulb className="h-8 w-8 text-[#40C262]" />,
    tabValue: "stem",
  },
  {
    title: "Robotics",
    desc: "Phát triển kỹ năng công nghệ và lập trình robot.",
    icon: <Cpu className="h-8 w-8 text-[#024AAE]" />,
    tabValue: "robotics",
  },
  {
    title: "Kỹ năng công dân số",
    desc: "Trang bị kiến thức an toàn trực tuyến, tư duy phản biện và đạo đức số.",
    icon: <Globe className="h-8 w-8 text-[#40C262]" />,
    tabValue: "digital",
  },
  {
    title: "Kỹ năng sống",
    desc: "Trang bị kỹ năng thiết yếu để tự tin và thành công.",
    icon: <Users className="h-8 w-8 text-[#024AAE]" />,
    tabValue: "life",
  },
];

const sampleBooks = [
  {
    title: "Khám phá STEM Diệu Kỳ",
    coverImage: "/book-covers/stem-dieu-ky.jpg", // Example path
    slug: "kham-pha-stem-dieu-ky",
  },
  {
    title: "Lập Trình Robot Vui Nhộn",
    coverImage: "/book-covers/robot-vui-nhon.jpg", // Example path
    slug: "lap-trinh-robot-vui-nhon",
  },
  {
    title: "Công Dân Số Thông Minh",
    coverImage: "/book-covers/cong-dan-so.jpg", // Example path
    slug: "cong-dan-so-thong-minh",
  },
  {
    title: "Bí Kíp Kỹ Năng Sống",
    coverImage: "/book-covers/ky-nang-song.jpg", // Example path
    slug: "bi-kip-ky-nang-song",
  },
  {
    title: "Khoa Học Quanh Em",
    coverImage: "/book-covers/khoa-hoc-quanh-em.jpg", // Example path
    slug: "khoa-hoc-quanh-em",
  },
  {
    title: "Thí Nghiệm Tại Nhà",
    coverImage: "/book-covers/thi-nghiem-tai-nha.jpg", // Example path
    slug: "thi-nghiem-tai-nha",
  },
  // Add more books if needed
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
        <div className="container">
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
            <div className="lg:col-span-5 relative mt-5">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {programs.map((service, index) => (
              <FadeInSection
                key={index}
                vertical={true}
                yOffset={20}
                delay={0.2 * index}
              >
                <Link href={`/chuong-trinh-dao-tao#${service.tabValue}`}>
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
                    <div className="p-6 flex justify-center">
                      <Button
                        variant="outline"
                        className="border-[#024AAE] text-[#024AAE] hover:bg-[#024AAE] hover:text-white"
                      >
                        Khám phá
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </FadeInSection>
            ))}
          </div>

          {/* === BẮT ĐẦU KHỐI COMMENT SÁCH === */}
          {/*
          <FadeInSection yOffset={20} delay={0.2}>
             <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-12">
               Các đầu sách đã phát hành
             </h2>
           </FadeInSection> 
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
             {sampleBooks.slice(0, 6).map((book, index) => ( 
               <FadeInSection
                 key={book.slug}
                 vertical={true}
                 yOffset={20}
                 delay={0.1 * index} 
               >
                 <Link href={`/sach/${book.slug}`} className="group block"> 
                   <div className="aspect-[2/3] relative overflow-hidden rounded-md shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                     <Image
                       src={book.coverImage}
                       alt={book.title}
                       fill
                       sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16.6vw" 
                       className="object-cover"
                     />
                   </div>
                 </Link>
               </FadeInSection>
             ))}
           </div>
           <FadeInSection yOffset={20} delay={0.7}>
             <div className="mt-12 text-center">
               <Link href="/sach">
                 <Button
                   variant="outline"
                   className="border-[#024AAE] text-[#024AAE] hover:bg-[#024AAE] hover:text-white"
                 >
                   Xem tất cả sách
                   <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
               </Link>
             </div>
           </FadeInSection>
           */}
          {/* === KẾT THÚC KHỐI COMMENT SÁCH === */}
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
              { value: 150, suffix: "+", label: "Đầu sách phát hành" },
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
                    <CountUp
                      end={stat.value}
                      duration={1500}
                      suffix={stat.suffix}
                    />
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
