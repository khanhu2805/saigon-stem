import Image from "next/image";
import Link from "next/link";
import { FileText, Landmark, ShieldCheck, ExternalLink, BookOpenCheck, BadgeCheck } from "lucide-react";
import FadeInSection from "@/components/ui/fade-in-section";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LegalBasisPage() {
  // --- QUAN TRỌNG: HÃY THAY THẾ DỮ LIỆU MẪU DƯỚI ĐÂY BẰNG THÔNG TIN THỰC TẾ CỦA CÔNG TY BẠN ---
  const teachingLicensesData = [
    {
      companyName: "Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn",
      companyColorClass: "text-[#024AAE]", // Màu cho tên công ty này
      licenses: [
        {
          title: "Giấy Chứng Nhận Đăng Ký Hoạt Động Giáo Dục Nghề Nghiệp",
          number: "[Điền số giấy phép TV&ĐT GDNN]",
          issuedBy: "[Điền tên cơ quan cấp GP GDNN cho Công ty TV&ĐT]",
          issueDate: "[Điền ngày cấp GP GDNN cho Công ty TV&ĐT]",
          expiryDate: "[Điền ngày hết hạn (nếu có) GP GDNN cho Công ty TV&ĐT]",
          scope: "[Điền phạm vi hoạt động được cấp theo GP GDNN của Công ty TV&ĐT, ví dụ: Bồi dưỡng kiến thức STEM, Robotics, Tin học ứng dụng, Kỹ năng mềm...]",
          documentLink: "/co-so-phap-ly/GCN-DKHD-GDNN-CTY-TVDT.pdf",
          icon: <BookOpenCheck className="h-8 w-8 text-blue-600" />,
        },
        // {
        //   title: "Giấy Phép Thành Lập Trung Tâm Đào Tạo Kỹ Năng",
        //   number: "[Điền số giấy phép TTĐT Kỹ Năng]",
        //   issuedBy: "[Điền tên cơ quan cấp GP TTĐT Kỹ Năng cho Công ty TV&ĐT]",
        //   issueDate: "[Điền ngày cấp GP TTĐT Kỹ Năng cho Công ty TV&ĐT]",
        //   expiryDate: "[Điền ngày hết hạn (nếu có) GP TTĐT Kỹ Năng cho Công ty TV&ĐT]",
        //   scope: "[Điền các kỹ năng được phép đào tạo theo GP TTĐT của Công ty TV&ĐT, ví dụ: Kỹ năng sống, kỹ năng công dân số...]",
        //   documentLink: "/co-so-phap-ly/GP-ThanhLap-TrungTamKyNang-CTY-TVDT.pdf", // (Tùy chọn)
        //   icon: <BadgeCheck className="h-8 w-8 text-green-600" />,
        // },
        // Thêm các giấy phép dạy học khác của Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn (nếu có)
        // {
        //   title: "[Tên giấy phép khác]",
        //   number: "[Số giấy phép]",
        //   issuedBy: "[Cơ quan cấp]",
        //   issueDate: "[Ngày cấp]",
        //   scope: "[Phạm vi hoạt động]",
        //   documentLink: "/path/to/your/document.pdf",
        //   icon: <FileText className="h-8 w-8 text-purple-600" />,
        // },
      ]
    },
    // Công ty TNHH Đầu Tư Và Phát Triển Giáo Dục Sài Gòn thường liên quan đến xuất bản sách.
    // Nếu công ty này cũng có giấy phép liên quan trực tiếp đến hoạt động DẠY HỌC hoặc TẬP HUẤN, hãy thêm vào đây.
    // Nếu không, bạn có thể bỏ qua phần này hoặc chỉ để lại thông tin doanh nghiệp chung ở dưới.
    // {
    //   companyName: "Công ty TNHH Đầu Tư Và Phát Triển Giáo Dục Sài Gòn",
    //   companyColorClass: "text-[#40C262]", // Màu cho tên công ty này
    //   licenses: [
    //     {
    //       title: "Giấy Phép Liên Quan Đến Đào Tạo/Tập Huấn (Nếu có)",
    //       number: "[Điền số giấy phép]",
    //       issuedBy: "[Điền tên cơ quan cấp]",
    //       issueDate: "[Điền ngày cấp]",
    //       scope: "[Điền phạm vi hoạt động]",
    //       documentLink: "/co-so-phap-ly/GP-DaoTao-CTY-DTPT.pdf", // (Tùy chọn)
    //       icon: <FileText className="h-8 w-8 text-orange-600" />,
    //     },
    //   ]
    // }
  ];
  // --- KẾT THÚC PHẦN DỮ LIỆU CẦN THAY THẾ ---

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
        {/* <Image
          src="/pic_introduce.jpg" // Bạn có thể thay bằng ảnh banner phù hợp hơn với chủ đề pháp lý/giáo dục
          alt="Cơ sở pháp lý và Giấy phép dạy học - Giáo Dục Sài Gòn"
          fill
          className="object-cover"
          priority
        /> */}
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Cơ Sở Pháp Lý & Giấy Phép
          </h1>
          <p className="max-w-2xl text-xl italic">
            Hoạt động giáo dục minh bạch, tuân thủ pháp luật, vì thế hệ tương lai.
          </p>
        </div>
      </section>

      {/* Teaching Licenses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <FadeInSection vertical={true} yOffset={20} delay={0.2}>
            <h2 className="text-3xl font-bold text-center text-[#024AAE] mb-8">
              Giấy Phép Hoạt Động Giáo Dục & Đào Tạo
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn cam kết tuân thủ đầy đủ các quy định pháp luật hiện hành trong lĩnh vực giáo dục. Dưới đây là các giấy phép và chứng nhận quan trọng liên quan đến hoạt động giảng dạy và đào tạo của chúng tôi:
            </p>
          </FadeInSection>

          {teachingLicensesData.map((companyGroup, groupIndex) => (
            <div key={groupIndex} className="mb-12">
              <FadeInSection vertical={true} yOffset={20} delay={0.3 + groupIndex * 0.2}>
                <h3 className={`text-2xl font-semibold mb-6 ${companyGroup.companyColorClass}`}>
                  {companyGroup.companyName}
                </h3>
              </FadeInSection>
              {companyGroup.licenses && companyGroup.licenses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {companyGroup.licenses.map((license, index) => (
                    <FadeInSection key={index} vertical={true} yOffset={20} delay={0.35 + groupIndex * 0.2 + index * 0.1}>
                      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-current" style={{ borderColor: companyGroup.companyColorClass === 'text-[#024AAE]' ? '#024AAE' : '#40C262' }}>
                        <CardHeader className="pb-3">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 pt-1">{license.icon}</div>
                            <CardTitle className="text-lg md:text-xl leading-tight">{license.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-1.5 text-sm text-gray-700">
                          <p><strong>Số GP/GCN:</strong> {license.number}</p>
                          <p><strong>Cơ quan cấp:</strong> {license.issuedBy}</p>
                          <p><strong>Ngày cấp:</strong> {license.issueDate}</p>
                          {license.expiryDate && <p><strong>Hiệu lực đến:</strong> {license.expiryDate}</p>}
                          <div>
                            <strong>Phạm vi hoạt động:</strong>
                            <ul className="list-disc list-inside ml-4 mt-1 text-gray-600">
                              {license.scope.split(',').map(s => s.trim()).filter(s => s).map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                          </div>
                        </CardContent>
                        {license.documentLink && license.documentLink !== "#" && (
                          <CardFooter className="pt-3">
                            <Link href={license.documentLink} target="_blank" rel="noopener noreferrer" className="w-full">
                              <Button variant="outline" className={`w-full hover:border-current hover:text-current ${companyGroup.companyColorClass.replace('text-', 'border-').replace('text-', 'hover:text-')}`}>
                                Xem Văn Bản Gốc <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </CardFooter>
                        )}
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              ) : (
                 <FadeInSection vertical={true} yOffset={20} delay={0.35 + groupIndex * 0.2}>
                  <p className="text-gray-600 italic pl-4">Thông tin về giấy phép dạy học của đơn vị này đang được cập nhật.</p>
                 </FadeInSection>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* General Legal Information Section */}
      {/* <section className="py-16 bg-white">
        <div className="container">
          <FadeInSection vertical={true} yOffset={20} delay={0.2}>
            <h2 className="text-3xl font-bold text-center text-[#024AAE] mb-12">
              Thông Tin Chung Về Doanh Nghiệp
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection vertical={true} yOffset={20} delay={0.3}>
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-[#024AAE]/10 py-4">
                  <CardTitle className="text-xl font-semibold text-[#024AAE]">
                    <Landmark className="inline-block h-6 w-6 mr-2" />
                    Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                  <p><strong>Tên đầy đủ:</strong> CÔNG TY TRÁCH NHIỆM HỮU HẠN TƯ VẤN VÀ ĐÀO TẠO GIÁO DỤC SÀI GÒN</p>
                  <p><strong>Mã số thuế:</strong> [Điền mã số thuế của Công ty TV & ĐT]</p>
                  <p><strong>Ngày thành lập:</strong> [Điền ngày thành lập của Công ty TV & ĐT]</p>
                  <p><strong>Địa chỉ trụ sở chính:</strong> 362/4/22 Đường Thống Nhất, Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam.</p>
                  <p><strong>Người đại diện theo pháp luật:</strong> [Điền tên người đại diện của Công ty TV & ĐT]</p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection vertical={true} yOffset={20} delay={0.4}>
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-[#40C262]/10 py-4">
                  <CardTitle className="text-xl font-semibold text-[#40C262]">
                    <Landmark className="inline-block h-6 w-6 mr-2" />
                    Công ty TNHH Đầu Tư Và Phát Triển Giáo Dục Sài Gòn
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                   <p><strong>Tên đầy đủ:</strong> CÔNG TY TRÁCH NHIỆM HỮU HẠN ĐẦU TƯ VÀ PHÁT TRIỂN GIÁO DỤC SÀI GÒN</p>
                  <p><strong>Mã số thuế:</strong> [Điền mã số thuế của Công ty ĐT & PT]</p>
                  <p><strong>Ngày thành lập:</strong> [Điền ngày thành lập của Công ty ĐT & PT]</p>
                  <p><strong>Địa chỉ trụ sở chính:</strong> 362/4/22 Đường Thống Nhất, Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam.</p>
                  <p><strong>Người đại diện theo pháp luật:</strong> [Điền tên người đại diện của Công ty ĐT & PT]</p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section> */}

      <FadeInSection vertical={true} yOffset={20} delay={0.5}>
        <div className="container pt-2 pb-16">
          <div className="text-center text-gray-700 bg-blue-50 p-8 rounded-lg shadow-md border border-blue-200">
            <ShieldCheck className="inline-block h-10 w-10 mb-3 text-[#024AAE]" />
            <p className="text-lg font-semibold mb-3">
              Giáo Dục Sài Gòn cam kết hoạt động theo đúng Hiến pháp và Pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
            </p>
            <p className="text-sm">
              Nếu bạn có bất kỳ thắc mắc nào về cơ sở pháp lý hoặc cần cung cấp thông tin chi tiết hơn, xin vui lòng{" "}
              <Link href="/lien-he" className="text-[#024AAE] hover:underline font-semibold">
                liên hệ với bộ phận pháp chế của chúng tôi
              </Link>
              .
            </p>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}