"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-[#40C262] flex items-center justify-center text-white font-bold text-lg">
              SG
            </div>
          </div>
          <span className="hidden font-bold text-[#024AAE] md:inline-block">Giáo dục Sài Gòn</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-[#40C262]">
            Trang chủ
          </Link>
          <Link
            href="/gioi-thieu"
            className="text-sm font-medium text-foreground transition-colors hover:text-[#40C262]"
          >
            Giới thiệu
          </Link>
          <Link
            href="/chuong-trinh-dao-tao"
            className="text-sm font-medium text-foreground transition-colors hover:text-[#40C262]"
          >
            Chương trình đào tạo
          </Link>
          <Link href="/tin-tuc" className="text-sm font-medium text-foreground transition-colors hover:text-[#40C262]">
            Tin tức
          </Link>
          <Link
            href="/tuyen-dung"
            className="text-sm font-medium text-foreground transition-colors hover:text-[#40C262]"
          >
            Tuyển dụng
          </Link>
          <Link href="/lien-he" className="text-sm font-medium text-foreground transition-colors hover:text-[#40C262]">
            Liên hệ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden bg-[#024AAE] hover:bg-[#024AAE]/90 md:inline-flex">Đăng ký học</Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 pt-6">
                <Link
                  href="/"
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#40C262]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/gioi-thieu"
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#40C262]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/chuong-trinh-dao-tao"
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#40C262]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chương trình đào tạo
                </Link>
                <Link
                  href="/tin-tuc"
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#40C262]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tin tức
                </Link>
                <Link
                  href="/tuyen-dung"
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#40C262]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tuyển dụng
                </Link>
                <Link
                  href="/lien-he"
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#40C262]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Liên hệ
                </Link>
                <Button className="mt-4 bg-[#024AAE] hover:bg-[#024AAE]/90">Đăng ký học</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
