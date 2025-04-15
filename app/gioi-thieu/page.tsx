import Image from "next/image"
import { Award, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Giới thiệu về công ty"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Giới thiệu</h1>
          <p className="max-w-2xl text-lg">Tìm hiểu về Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-[#024AAE]">Lịch sử hình thành</h2>
            <p className="mb-6 text-lg">
              Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn được thành lập vào năm 2018 bởi một nhóm các chuyên gia
              giáo dục và công nghệ với mong muốn mang đến những phương pháp giáo dục tiên tiến, hiện đại cho học sinh
              Việt Nam.
            </p>
            <p className="mb-6 text-lg">
              Từ những ngày đầu thành lập với chỉ 5 giáo viên và 2 lớp học STEM, đến nay công ty đã phát triển mạnh mẽ
              với hơn 30 giáo viên chuyên nghiệp và mở rộng các chương trình đào tạo đa dạng bao gồm STEM, Robotics, Kỹ
              năng công dân số và Kỹ năng sống.
            </p>
            <p className="text-lg">
              Với phương châm "Khơi nguồn sáng tạo - Dẫn lối tương lai", chúng tôi luôn nỗ lực không ngừng để mang đến
              những trải nghiệm học tập tốt nhất, giúp học sinh phát triển toàn diện và sẵn sàng cho tương lai.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">Tầm nhìn - Sứ mệnh - Giá trị cốt lõi</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#024AAE]/10">
                <Target className="h-8 w-8 text-[#024AAE]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#024AAE]">Tầm nhìn</h3>
              <p>
                Trở thành đơn vị hàng đầu trong lĩnh vực đào tạo STEM, Robotics và kỹ năng sống tại Việt Nam, góp phần
                đào tạo thế hệ công dân toàn cầu có kiến thức, kỹ năng và phẩm chất cần thiết để thành công trong thế kỷ
                21.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#40C262]/10">
                <BookOpen className="h-8 w-8 text-[#40C262]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#40C262]">Sứ mệnh</h3>
              <p>
                Cung cấp các chương trình giáo dục chất lượng cao, phát triển tư duy sáng tạo và kỹ năng thiết yếu cho
                học sinh, giúp các em tự tin bước vào tương lai và sẵn sàng đối mặt với những thách thức của cuộc sống.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#024AAE]/10">
                <Award className="h-8 w-8 text-[#024AAE]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#024AAE]">Giá trị cốt lõi</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-[#40C262]">•</span>
                  <span>
                    <strong>Sáng tạo:</strong> Khuyến khích tư duy đổi mới và sáng tạo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#40C262]">•</span>
                  <span>
                    <strong>Tận tâm:</strong> Luôn đặt lợi ích của học sinh lên hàng đầu
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#40C262]">•</span>
                  <span>
                    <strong>Chất lượng:</strong> Cam kết cung cấp dịch vụ giáo dục chất lượng cao
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#40C262]">•</span>
                  <span>
                    <strong>Hợp tác:</strong> Xây dựng mối quan hệ hợp tác bền vững
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#024AAE]">Đội ngũ giáo viên</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Đội ngũ giáo viên giàu kinh nghiệm, tận tâm và nhiệt huyết của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="group overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-sm text-[#40C262]">{member.position}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data for team members
const teamMembers = [
  {
    name: "Nguyễn Văn A",
    position: "Giám đốc điều hành",
    description: "Tiến sĩ Giáo dục, 15 năm kinh nghiệm trong lĩnh vực giáo dục STEM và quản lý giáo dục.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Trần Thị B",
    position: "Trưởng phòng đào tạo",
    description: "Thạc sĩ Công nghệ Giáo dục, chuyên gia về phương pháp giảng dạy STEM và Robotics.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Lê Văn C",
    position: "Giáo viên STEM",
    description: "Kỹ sư Điện tử, 8 năm kinh nghiệm giảng dạy STEM và hướng dẫn các cuộc thi khoa học kỹ thuật.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Phạm Thị D",
    position: "Giáo viên Robotics",
    description: "Thạc sĩ Khoa học Máy tính, chuyên gia về lập trình và thiết kế robot giáo dục.",
    image: "/placeholder.svg?height=400&width=300",
  },
]
