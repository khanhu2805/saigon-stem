import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Đặt URL cơ sở cho website, hữu ích cho việc tạo URL tuyệt đối cho sitemap và canonical.
  metadataBase: new URL('https://giaoducsaigon.edu.vn'), // << THAY TÊN MIỀN CỦA BẠN TẠI ĐÂY

  title:'Giáo Dục Sài Gòn - Đào Tạo STEM, Kỹ Năng Sống & Công Dân Số', 
  description: 'Công ty TNHH Tư Vấn Và Đào Tạo Giáo Dục Sài Gòn - Chuyên cung cấp các chương trình đào tạo STEM, kỹ năng sống, kỹ năng công dân số và xuất bản sách giáo dục chất lượng cao, góp phần trang bị kiến thức cho thế hệ trẻ Việt Nam.',

  openGraph: {
    title: 'Giáo Dục Sài Gòn - Tiên Phong Giáo Dục STEM & Kỹ Năng Tương Lai',
    description: 'Khám phá các giải pháp giáo dục toàn diện, chương trình đào tạo STEM, kỹ năng sống và sách tham khảo chất lượng từ Giáo Dục Sài Gòn.',
    url: 'https://giaoducsaigon.edu.vn', 
    siteName: 'Giáo Dục Sài Gòn',
    images: [
      {
        url: '/logosgs.png', 
        width: 1200,
        height: 630,
        alt: 'Logo Giáo Dục Sài Gòn và hình ảnh hoạt động',
      },
    ],
    locale: 'vi_VN', 
    type: 'website', 
  },

  // Thêm các biểu tượng (favicon) cho website
  icons: {
    icon: 'favicon_io/favicon.ico', // Favicon chuẩn
    shortcut: '/favicon-16x16.png', // Favicon kích thước nhỏ
    apple: '/apple-touch-icon.png', // Icon cho thiết bị Apple
    // other: [ // Có thể thêm các kích thước khác
    //   { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    // ],
  },

  // Từ khóa chung cho website (Google ít dựa vào thẻ keywords này nữa, nhưng có thể thêm nếu muốn)
  keywords: ['Giáo Dục Sài Gòn', 'đào tạo STEM', 'kỹ năng sống', 'công dân số', 'sách giáo dục', 'TPHCM', 'sách', 'giáo dục sài gòn', 'tư vấn và đào tạo giáo dục sài gòn', 'saigon stem', 'sài gòn stem', 'đầu tư và phát triển giáo dục sài gòn'],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'