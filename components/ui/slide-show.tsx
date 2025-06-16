"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  type: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Slideshow = ({ slides }: { slides: Slide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Thay đổi slide mỗi 5 giây
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  // --- BẮT ĐẦU THAY ĐỔI ---

  // Thêm các hàm xử lý sự kiện hover
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    // Bọc toàn bộ component trong một thẻ div và thêm sự kiện
    <div
      className="relative w-full h-full" // Đảm bảo div này có kích thước
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}

          {/* Slide overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <div className="container text-white mb-32">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-xl md:text-xl max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 hover:text-[#024AAE] text-white p-2 z-10"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-[#024AAE] text-white p-2 z-10"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Play/Pause button */}
      {/* ... (phần này vẫn giữ nguyên) ... */}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#024AAE]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div> // Thẻ đóng của div bao bọc
    // --- KẾT THÚC THAY ĐỔI ---
  );
};

export default Slideshow;