import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react"; // Chỉ giữ lại icon cần thiết

import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
// Bỏ import Tabs nếu không dùng ở đâu khác
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Dữ liệu mẫu (Giữ nguyên) ---
const allNews = [
 {
   title: "Khai giảng khóa học STEM mới dành cho học sinh tiểu học",
   slug: "khai-giang-khoa-hoc-stem-moi",
   date: "15/04/2025", // Cập nhật ngày tháng năm
   author: "Admin",
   category: "Tin giáo dục",
   excerpt:
     "Công ty TNHH Tư vấn và Đào tạo Giáo dục Sài Gòn vừa khai giảng khóa học STEM mới dành cho học sinh tiểu học với nhiều hoạt động thú vị.",
   image: "/placeholder.svg?height=800&width=1600", // Nên dùng ảnh thật
 },
 {
   title: "Hoạt động trải nghiệm tại trường TH Nguyễn An Ninh",
   slug: "workshop-ky-nang-song",
   date: "25/03/2025",
   author: "Admin",
   category: "Sự kiện",
   excerpt:"",
   image: "/placeholder.svg?height=800&width=1600", // Nên dùng ảnh thật
 },
 {
    title: "Tuyển sinh các lớp Robotics hè 2025",
    slug: "tuyen-sinh-robotics-he-2025",
    date: "18/03/2025",
    author: "Admin",
    category: "Sự kiện",
    excerpt:
      "Thông báo tuyển sinh các lớp Robotics hè 2025 dành cho học sinh từ 8-15 tuổi với nhiều ưu đãi hấp dẫn.",
    image: "/placeholder.svg?height=800&width=1600", // Nên dùng ảnh thật
  },
  // Thêm tin tức khác nếu cần
];
// --- Kết thúc dữ liệu mẫu ---


export default function NewsPage() {
 return (
   <main className="flex min-h-screen flex-col">
     {/* Hero Section */}
     <section className="relative h-[400px] w-full overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-[#024AAE]/80 to-[#40C262]/60 z-10"></div>
       <Image
         src="/news-images/banner.jpg" // Thay ảnh banner trang tin tức
         alt="Tin tức và sự kiện"
         fill
         className="object-cover"
         priority
       />
       <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
         <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
           Tin tức & Sự kiện
         </h1>
         <p className="max-w-2xl text-lg leading-relaxed"> {/* Thêm giãn dòng */}
           Cập nhật những tin tức mới nhất về hoạt động của công ty và các sự
           kiện nổi bật trong lĩnh vực giáo dục.
         </p>
       </div>
     </section>

     {/* News Section - Không còn Tabs */}
     <section className="py-16">
       <div className="container">
         {/* Trực tiếp hiển thị grid của tất cả tin tức */}
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           {allNews.map((news, index) => (
             <Card key={index} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"> {/* Thêm hiệu ứng đổ bóng khi hover */}
               {/* Phần ảnh và category */}
               <div className="relative h-48 w-full flex-shrink-0">
                 <Image
                   src={news.image || "/placeholder.svg"} // Nên có ảnh mặc định khác placeholder.svg
                   alt={news.title}
                   fill
                   className="object-cover"
                 />
                 {/* Hiển thị category */}
                 <div className="absolute top-2 right-2 bg-[#024AAE] px-3 py-1 text-xs font-medium text-white rounded-md shadow"> {/* Di chuyển lên góc, bo tròn */}
                   {news.category}
                 </div>
               </div>
               {/* Phần nội dung thẻ */}
               <CardHeader className="pb-2"> {/* Giảm padding bottom */}
                 {/* Thông tin ngày tháng, tác giả */}
                 <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2"> {/* Giảm kích thước chữ meta */}
                   <div className="flex items-center">
                     <Calendar className="mr-1 h-3 w-3" /> {/* Icon nhỏ hơn */}
                     {news.date}
                   </div>
                   <div className="flex items-center">
                     <User className="mr-1 h-3 w-3" /> {/* Icon nhỏ hơn */}
                     {news.author}
                   </div>
                 </div>
                 {/* Tiêu đề tin tức */}
                 <CardTitle className="line-clamp-2 text-lg font-semibold text-gray-800 hover:text-[#024AAE]"> {/* Giảm cỡ chữ, thêm hover effect */}
                   <Link href={`/tin-tuc/${news.slug}`}>
                      {news.title}
                   </Link>
                 </CardTitle>
               </CardHeader>
               <CardContent className="flex-grow pt-0"> {/* Bỏ padding top */}
                 {/* Đoạn trích */}
                 <p className="line-clamp-3 text-sm text-gray-600 leading-relaxed">{news.excerpt}</p> {/* Giảm cỡ chữ, màu đậm hơn */}
               </CardContent>
               <CardFooter className="mt-auto pt-2"> {/* Giảm padding top, mt-auto */}
                 {/* Nút đọc tiếp */}
                 <Link href={`/tin-tuc/${news.slug}`} className="w-full">
                   <Button
                     variant="ghost"
                     className="w-full justify-start p-0 text-sm text-[#024AAE] hover:text-[#40C262] hover:bg-transparent" // Căn trái, bỏ padding, đổi màu hover
                   >
                     Đọc tiếp
                     <ArrowRight className="ml-1 h-4 w-4" />
                   </Button>
                 </Link>
               </CardFooter>
             </Card>
           ))}
         </div>

         {/* Phần phân trang giữ nguyên */}
         <div className="mt-16 flex items-center justify-center"> {/* Tăng khoảng cách trên */}
           <Button variant="outline" className="mx-1 h-10 w-10 p-0">
             1
           </Button>
           <Button variant="outline" className="mx-1 h-10 w-10 p-0">
             2
           </Button>
           <Button variant="outline" className="mx-1 h-10 w-10 p-0">
             3
           </Button>
           <span className="mx-1">...</span>
           <Button variant="outline" className="mx-1 h-10 w-10 p-0">
             10
           </Button>
         </div>
       </div>
     </section>
   </main>
 );
}