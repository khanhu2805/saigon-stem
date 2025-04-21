"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/chuong-trinh-dao-tao", label: "Chương trình đào tạo" },
  { href: "/sach", label: "Sách" },
  { href: "/tin-tuc", label: "Tin tức - sự kiện" },
  { href: "/tuyen-dung", label: "Tuyển dụng" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-16 w-16">
            {/* <div className="h-10 w-10 rounded-full bg-[#40C262] flex items-center justify-center text-white font-bold text-lg">
              SG
            </div> */}
            <Image src={"/logosgs.svg"} alt="LOGO" height={64} width={64} />
          </div>
          <span className="font-bold text-[#024AAE] md:text-lg md:inline-block">
            GIÁO DỤC SÀI GÒN
          </span>
        </Link>

        <nav className="hidden lg:flex md:items-center md:space-x-10 text-base">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors hover:text-[#40C262] hover:border-b-2 hover:border-[#40C262] py-2 px-3 rounded-xl ${
                pathname === href
                  ? "text-[#40C262] font-semibold border-b-2 border-[#40C262]"
                  : "text-[#024AAE]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* <Button className="hidden bg-[#024AAE] hover:bg-[#024AAE]/90 md:inline-flex">Đăng ký học</Button> */}

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 pt-6">
                {/* <Button className="mt-4 bg-[#024AAE] hover:bg-[#024AAE]/90">Đăng ký học</Button> */}
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors hover:text-[#40C262] ${
                      pathname === href
                        ? "text-[#40C262] font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
