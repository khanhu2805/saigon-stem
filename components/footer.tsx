import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#024AAE] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Về chúng tôi</h3>
            <div className="flex items-center space-x-2">
              <Image src={"/logosgs.svg"} alt="LOGO" height={64} width={64} />
              <span className="font-bold">Giáo dục Sài Gòn</span>
            </div>
            <p className="mt-4">
              Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn - Đơn vị tiên phong trong lĩnh vực đào tạo STEM, Robotics
              và kỹ năng sống cho học sinh các cấp.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Chi nhánh HCM</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>36 Lê Quý Đôn, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>0123456789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>saigonstemhr@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Chi nhánh Đồng Nai</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>bla blabla</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>0123456789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-[#40C262]" />
                <p>saigonstemhr@gmail.com</p>
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
            &copy; {new Date().getFullYear()} Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn. Tất cả quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
