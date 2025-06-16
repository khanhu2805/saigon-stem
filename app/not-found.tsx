import Link from 'next/link';
// Sử dụng icon phù hợp hơn cho "đang xây dựng"
import { HardHat, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    // Giữ layout căn giữa
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="max-w-md">
        {/* Thay icon */}
        <HardHat className="mx-auto h-16 w-16 text-orange-500 mb-6" /> {/* Màu cam cho xây dựng */}

        {/* Bỏ mã lỗi 404 */}
        {/*
        <h1 className="text-8xl font-extrabold text-[#024AAE] mb-2">
          404
        </h1>
        */}

        {/* Thay đổi tiêu đề */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Trang không có
        </h1>

        {/* Thay đổi mô tả */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Chúng tôi đang nỗ lực hoàn thiện nội dung cho trang này. Vui lòng quay lại sau nhé. Cảm ơn sự kiên nhẫn của bạn!
        </p>

        {/* Giữ nút quay về trang chủ */}
        <Link href="/">
          <Button
            variant="outline"
            className="border-[#024AAE] text-[#024AAE] hover:bg-[#024AAE] hover:text-white px-6 py-3 text-lg"
          >
            <Home className="mr-2 h-5 w-5" />
            Về Trang Chủ
          </Button>
        </Link>
      </div>
    </main>
  );
}