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
        <div className="grid grid-cols-1 space-x-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Về chúng tôi</h3>
            <div className="flex items-center space-x-2 mb-8">
              <Image src={"/logosgs.png"} alt="LOGO" height={64} width={64} />
              <span className="font-bold">GIÁO DỤC SÀI GÒN</span>
            </div>
            <span className="font-bold italic">Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn</span>
            <p className="mt-3 mb-8">
              Đơn vị tiên
              phong trong lĩnh vực đào tạo STEM, Robotics, kỹ năng công dân số và kỹ năng sống cho
              học sinh các cấp.
            </p>
            <span className="font-bold italic">Công ty TNHH Đầu tư và Phát triển Giáo dục Sài Gòn</span>
            <p className="mt-3">
            Đơn vị tiên
              phong trong lĩnh vực đào tạo STEM, Robotics, kỹ năng công dân số và kỹ năng sống cho
              học sinh các cấp.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Chi nhánh HCM</h3>
            <div className="space-y-3 text-base">
            <p className="font-bold italic">Quận Gò Vấp</p>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>362/4/22 Đường Thống Nhất, Phường 16, Quận Gò Vấp, TP. Hồ Chí Minh</p>
              </div>
              <p className="font-bold italic">Quận 12</p>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>Số 26 đường TL 19, Khu phố 3B, Phường Thạnh Lộc, Quận 12, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>Căn nhà số 19, Khu nhà ở CBCNVC Văn phòng B - Nhà khách Tổng Liên đoàn lao động Việt Nam, Đường TL17, Khu phố 3B, Phường Thạnh Lộc, Quận 12, TP. Hồ Chí Minh</p>
              </div>
              <p className="font-bold italic">Văn phòng đại diện</p>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>36 Lê Quý Đôn, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>0906 697 918</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>saigonstemhr@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Chi nhánh Đồng Nai</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>81/70 Khu phố 11, Phường Tân Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>0834 432 761</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>gdsg.dnai@gmail.com</p>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="mb-4 text-lg font-bold">Chương trình đào tạo</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chuong-trinh-dao-tao/stem" className="hover:text-[#40C262]">
                  STEM sáng tạo
                </Link>
              </li>
              <li>
                <Link href="/chuong-trinh-dao-tao/robotics" className="hover:text-[#40C262]">
                  Robotics ứng dụng
                </Link>
              </li>
              <li>
                <Link href="/chuong-trinh-dao-tao/cong-dan-so" className="hover:text-[#40C262]">
                  Kỹ năng công dân số
                </Link>
              </li>
              <li>
                <Link href="/chuong-trinh-dao-tao/ky-nang-song" className="hover:text-[#40C262]">
                  Kỹ năng sống
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="mb-4 text-lg font-bold">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/SaigonStem2023"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#024AAE] hover:bg-[#40C262] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@SAIGONSTEM"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#024AAE] hover:bg-[#40C262] hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 font-medium">Đăng ký nhận tin</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full rounded-l-md border-0 bg-white px-3 py-2 text-[#024AAE] placeholder:text-gray-400 focus:outline-none"
                />
                <button className="rounded-r-md bg-[#40C262] px-4 py-2 font-medium text-white hover:bg-[#40C262]/90">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Giáo dục Sài Gòn. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
