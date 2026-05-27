import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm xử lý khi bấm vào logo cuộn mượt về đầu trang
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full transform-gpu antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          
          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <img src="/assets/logos/logo-haruco.png" alt="Logo Haruco" className="h-10 md:h-12 w-auto object-contain" />
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-700 hidden lg:block">HARUCO</span>
          </a>
          
          {/* Menu PC */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-gray-700">
            <a href="#gioi-thieu" className="hover:text-blue-600 transition">Giới thiệu</a>
            <a href="#gioi-thieu-chi-tiet" className="hover:text-blue-600 transition font-bold text-blue-600">Cấu tạo</a>
            <a href="#tinh-nang" className="hover:text-blue-600 transition">Tính năng</a>
            <a href="#danh-gia" className="hover:text-blue-600 transition">Đánh giá</a>
          </nav>

          {/* Nút CTA & Hamburger Mobile */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#dat-hang" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold transition text-sm md:text-base shadow-sm hover:shadow-md">
              Mua Ngay
            </a>
            
            {/* Nút Menu Mobile dùng SVG siêu nét */}
            <button 
              className="md:hidden text-gray-800 p-1 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                // Icon Dấu X khi đang mở menu
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icon Hamburger khi đang đóng menu
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Có hiệu ứng xổ xuống (fade + slide) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 py-4 flex flex-col space-y-4">
          <a href="#gioi-thieu" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800 text-lg">Giới thiệu</a>
          <a href="#gioi-thieu-chi-tiet" onClick={() => setIsOpen(false)} className="block font-bold text-blue-600 text-lg">Cấu tạo chi tiết</a>
          <a href="#tinh-nang" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800 text-lg">Tính năng</a>
          <a href="#danh-gia" onClick={() => setIsOpen(false)} className="block font-medium text-gray-800 text-lg">Đánh giá</a>
        </div>
      </div>
    </header>
  );
}