import Image from "next/image";
import { Award, BookOpen, Target, Users, Smile, BookHeart } from "lucide-react"; // Bỏ ChevronRight nếu không dùng
import FadeInSection from "@/components/ui/fade-in-section";
import CountUp from "@/components/ui/count-up";
import Link from "next/link";

export default function AboutPage() {
  const timelineEvents = [
    { year: 1996, event: "Xuất bản những quyển sách đầu tay trong lĩnh vực giáo dục." },
    { year: 2010, event: "Thành lập Công ty TNHH Đầu Tư Và Phát Triển Giáo Dục Sài Gòn, chuyên xuất bản và phát hành sách." },
    { year: 2021, event: "Thành lập Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn, mở rộng sang lĩnh vực đào tạo STEM, Kỹ năng công dân số và Kỹ năng sống." },
    { year: new Date().getFullYear(), event: "Không ngừng phát triển, mang đến các sản phẩm và dịch vụ giáo dục chất lượng." },
  ];

  const coreInfo = [
    {
      icon: <Target className="h-12 w-12 text-[#024AAE]" />,
      title: "Tầm nhìn",
      // Căn trái, tăng kích thước chữ, dùng màu đậm hơn
      desc: <p className="text-base text-gray-700 text-left leading-relaxed">Trở thành một trong những công ty hàng đầu chuyên về sách giáo dục và đào tạo, mang đến sản phẩm chất lượng cao, phát triển con người cả về chiều sâu lẫn độ bao phủ.</p>,
      color: "text-[#024AAE]",
      bg: "bg-[#024AAE]/10",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#40C262]" />,
      title: "Sứ mệnh",
       // Căn trái, tăng kích thước chữ, dùng màu đậm hơn
      desc: <p className="text-base text-gray-700 text-left leading-relaxed">Trang bị cho thế hệ trẻ kiến thức vững bước tương lai, góp phần rút ngắn khoảng cách phát triển của Việt Nam, xây dựng đất nước văn minh, tiến bộ và giàu lòng nhân ái.</p>,
      color: "text-[#40C262]",
      bg: "bg-[#40C262]/10",
    },
    {
      icon: <Award className="h-12 w-12 text-[#024AAE]" />,
      title: "Giá trị cốt lõi",
      desc: (
        // Tăng khoảng cách tổng thể và căn lề trái
        <div className="text-left space-y-5 mt-2">
          {/* 1. Lấy học sinh làm trung tâm - Giữ nổi bật */}
          <div className="flex items-center justify-center">
            <span className="font-bold text-lg text-[#024AAE]"> {/* Đổi màu chữ đậm hơn */ }
              LUÔN LẤY HỌC SINH LÀM TRUNG TÂM
            </span>
          </div>

          {/* 2. Đối với khách hàng - Chữ đậm hơn, kích thước base */}
          <div className="flex items-start">
            <BookHeart className="h-6 w-6 text-[#40C262] mr-3 flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-gray-800 mb-1">Đối với khách hàng:</strong> {/* Đậm hơn nữa */}
              <span className="text-base text-gray-700 leading-relaxed"> {/* Kích thước base, màu đậm hơn */}
                Mang đến những ấn phẩm chất lượng cao, đáp ứng nhu cầu của học sinh và nhà trường.
              </span>
            </div>
          </div>

          {/* 3. Đối với nội bộ - Chữ đậm hơn, kích thước base */}
          <div className="flex items-start">
            <Users className="h-6 w-6 text-[#40C262] mr-3 flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-gray-800 mb-1">Đối với nội bộ:</strong> {/* Đậm hơn nữa */}
              <span className="text-base text-gray-700 leading-relaxed"> {/* Kích thước base, màu đậm hơn */}
                Góp ý không chỉ trích, hướng dẫn không miệt thị, tôn trọng, không phân biệt đối xử.
              </span>
             </div>
          </div>
        </div>
      ),
      color: "text-[#024AAE]", // Màu tiêu đề card
      bg: "bg-[#024AAE]/10",   // Màu nền card
    },
  ];


  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#024AAE]/70 to-[#40C262]/50 z-10"></div>
        <Image
          src="/pic5.jpg"
          alt="Giới thiệu về Công ty Giáo Dục Sài Gòn"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl animate-slide-in">
            Về Chúng Tôi
          </h1>
          {/* Giảm kích thước chữ subtitle */}
          <p className="max-w-3xl text-lg animate-slide-in delay-100">
            Hành trình hơn {new Date().getFullYear() - 1996} năm đồng hành cùng giáo dục Việt Nam
          </p>
        </div>
      </section>

      {/* Lời Giới Thiệu Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <FadeInSection vertical={true} yOffset={20} delay={0.2}>
            <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-8">
              Lời Giới Thiệu
            </h2>
             {/* Căn lề trái, chữ to hơn, màu đậm hơn */}
            <div className="text-lg text-gray-700 space-y-4 text-left leading-relaxed">
              <p>
                Công ty TNHH Đầu Tư Và Phát Triển Giáo Dục Sài Gòn, thành lập năm 2010, với hơn 14 năm kinh nghiệm chuyên sâu trong lĩnh vực xuất bản, in ấn và phát hành sách tham khảo, sách bổ trợ. Chúng tôi tự hào đã mang đến hơn <Link href='/sach'><strong className="text-[#024AAE]">150 đầu sách</strong></Link> chất lượng cho học sinh cả nước.
              </p>
              <p>
                Để tiếp tục sứ mệnh phát triển giáo dục và mở rộng chiến lược, năm 2021, Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn ra đời, tập trung vào lĩnh vực đào tạo giáo dục<strong className="text-[#40C262]"> STEM, KỸ NĂNG CÔNG DÂN SỐ</strong> và <strong className="text-[#40C262]">KỸ NĂNG SỐNG</strong>, trang bị hành trang vững chắc cho thế hệ trẻ trong kỷ nguyên mới.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <FadeInSection vertical={true} yOffset={20} delay={0.3}>
            <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-16">
              Câu Chuyện Hình Thành
            </h2>
          </FadeInSection>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#40C262] h-full z-0 rounded-full"></div>
            {timelineEvents.map((event, index) => (
              <FadeInSection key={index} vertical={true} yOffset={20} delay={0.4 + index * 0.2}>
                <div
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } w-full`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-[#024AAE] mb-1">{event.year}</h3>
                      {/* Tăng kích thước chữ event, màu đậm hơn */}
                      <p className="text-base text-gray-700 leading-relaxed">{event.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                     <div className="w-5 h-5 bg-[#40C262] rounded-full border-4 border-gray-50"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Statistics Section */}
          <FadeInSection vertical={true} yOffset={20} delay={0.5}>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow">
                  <p className="text-4xl font-semibold text-[#024AAE]">
                      <CountUp end={150} duration={2000} suffix="+" />
                  </p>
                  {/* Giữ nguyên text-lg, màu đậm hơn */}
                  <p className="text-lg text-gray-700 mt-2">Đầu sách phát hành</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                  <p className="text-4xl font-semibold text-[#40C262]">
                      <CountUp end={5000} duration={2000} suffix="+" />
                  </p>
                  <p className="text-lg text-gray-700 mt-2">Học sinh đào tạo</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <FadeInSection vertical={true} yOffset={20} delay={0.3}>
            <h2 className="text-4xl font-bold text-center text-[#024AAE] mb-12">
              Kim Chỉ Nam Hoạt Động
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreInfo.map((item, index) => (
              <FadeInSection key={index} vertical={true} yOffset={20} delay={0.3 + index * 0.2}>
                <div
                  className={`group relative p-8 rounded-xl h-full shadow-lg ${item.bg} transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col`} // Bỏ items-center để text căn trái
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#024AAE]/20 to-[#40C262]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  {/* Icon vẫn căn giữa */}
                  <div className="relative flex justify-center mb-6">
                    <div className={`p-4 rounded-full ${item.bg} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                  </div>
                  {/* Title vẫn căn giữa */}
                  <h3 className={`text-2xl font-bold text-center ${item.color} mb-4`}>{item.title}</h3>
                   {/* Description căn lề theo nội dung bên trong nó (đã set text-left/text-base...) */}
                  <div className="flex-grow">{item.desc}</div> {/* Thêm flex-grow để description chiếm không gian còn lại */}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}