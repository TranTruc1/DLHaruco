import { useState } from 'react';

export default function ZoomableImage({ src, alt, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Ảnh gốc hiển thị trên trang */}
      <img 
        src={src} 
        alt={alt} 
        className={`cursor-zoom-in transition-transform hover:scale-[1.02] ${className}`} 
        onClick={() => setIsOpen(true)} 
      />

      {/* Lớp phủ phóng to (chỉ render khi isOpen = true) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setIsOpen(false)} // Click ra ngoài sẽ đóng
        >
          {/* Nút X đóng */}
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-gray-300 p-2 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation(); 
              setIsOpen(false);
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Ảnh phóng to */}
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Click vào ảnh không bị đóng
          />
        </div>
      )}
    </>
  );
}