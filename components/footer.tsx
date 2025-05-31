import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#024AAE] text-white">
      <div className="w-full px-14 py-12">
        <div className="grid grid-cols-1 gap-y-10 md:gap-x-8 md:grid-cols-2 lg:grid-cols-4"> {/* Thêm gap-y-10 cho mobile */}
          {/* Cột 1: Về chúng tôi */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Về chúng tôi</h3>
            <div className="flex items-center space-x-2 mb-4"> {/* Giảm mb-8 thành mb-4 */}
              <Image src={"/logosgs.png"} alt="LOGO" height={64} width={64} />
              <span className="font-bold">GIÁO DỤC SÀI GÒN</span>
            </div>
            <span className="font-bold italic">Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn</span>
            <p className="mt-3 mb-6 md:mb-8"> {/* Thêm mt-3, thay đổi mb */}
              Đơn vị tiên
              phong trong lĩnh vực đào tạo STEM, Robotics, kỹ năng công dân số và kỹ năng sống cho
              học sinh các cấp.
            </p>
            <span className="font-bold italic mt-4 block">Công ty TNHH Đầu tư và Phát triển Giáo dục Sài Gòn</span> {/* Thêm mt-4 block */}
            <p className="mt-3"> {/* Thêm mt-3 */}
            Đơn vị có hơn 15 năm kinh nghiệm chuyên xuất bản và phát hành sách tham khảo, sách bổ trợ với danh mục hơn 140 đầu sách uy tín.
            </p>
          </div>

          {/* Cột 2: Chi nhánh HCM */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Chi nhánh HCM</h3>
            {/* Phần này đã có space-y-3, ta sẽ điều chỉnh mt cho các nhóm tiêu đề bên trong */}
            <div className="space-y-3 text-base">
              {/* Quận Gò Vấp */}
              <div>
                <p className="font-bold italic">Quận Gò Vấp</p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>362/4/22 Đường Thống Nhất, Phường 16, Quận Gò Vấp, TP. Hồ Chí Minh</p>
                </div>
              </div>

              {/* Quận 12 */}
              <div className="mt-5 md:mt-3"> {/* mt LỚN hơn trên mobile, nhỏ hơn trên desktop */}
                <p className="font-bold italic">Quận 12</p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>Số 26 đường TL 19, Khu phố 3B, Phường Thạnh Lộc, Quận 12, TP. Hồ Chí Minh</p>
                </div>
                {/* Khoảng cách giữa 2 địa chỉ trong cùng quận 12 */}
                <div className="flex items-start space-x-3 mt-2"> {/* Thêm mt-2 nhỏ ở đây */}
                  <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>Căn nhà số 19, Khu nhà ở CBCNVC Văn phòng B - Nhà khách Tổng Liên đoàn lao động Việt Nam, Đường TL17, Khu phố 3B, Phường Thạnh Lộc, Quận 12, TP. Hồ Chí Minh</p>
                </div>
              </div>

              {/* Văn phòng đại diện */}
              <div className="mt-5 md:mt-3"> {/* mt LỚN hơn trên mobile, nhỏ hơn trên desktop */}
                <p className="font-bold italic">Văn phòng đại diện</p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>36 Lê Quý Đôn, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
                </div>
              </div>

              {/* Thông tin liên hệ của Chi nhánh HCM */}
              <div className="mt-5 md:mt-3"> {/* mt LỚN hơn trên mobile, nhỏ hơn trên desktop */}
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>0906 697 918</p>
                </div>
              </div>
              <div className="mt-2 md:mt-1"> {/* Khoảng cách nhỏ cho email */}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>saigonstemhr@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột 3: Chi nhánh Đồng Nai */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Chi nhánh Đồng Nai</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>81/70 Khu phố 11, Phường Tân Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai</p>
              </div>
              {/* Thông tin liên hệ của Chi nhánh Đồng Nai */}
              <div className="mt-5 md:mt-3"> {/* mt LỚN hơn trên mobile, nhỏ hơn trên desktop */}
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>0834 432 761</p>
                </div>
              </div>
              <div className="mt-2 md:mt-1"> {/* Khoảng cách nhỏ cho email */}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#40C262]" />
                  <p>gdsg.dnai@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột 4: Kết nối và Đăng ký nhận tin */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.facebook.com/SaigonStem2023"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#024AAE] hover:bg-[#40C262] hover:text-white"
                aria-label="Facebook Giáo Dục Sài Gòn"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@saigonstem" // Cập nhật link Youtube nếu có
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#024AAE] hover:bg-[#40C262] hover:text-white"
                aria-label="Youtube Giáo Dục Sài Gòn"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 md:mt-4"> {/* mt LỚN hơn trên mobile, nhỏ hơn trên desktop */}
              <h4 className="mb-2 font-medium">Đăng ký nhận tin</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full rounded-l-md border-0 bg-white px-3 py-2 text-[#024AAE] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40C262]"
                />
                <button className="rounded-r-md bg-[#40C262] px-4 py-2 font-medium text-white hover:bg-[#40C262]/90 focus:outline-none focus:ring-2 focus:ring-white">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 border-t border-white/20 pt-6 text-center"> {/* Tăng mt */}
          <p>
            © {new Date().getFullYear()} Giáo dục Sài Gòn. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}