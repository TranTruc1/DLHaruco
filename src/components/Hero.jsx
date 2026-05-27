export default function Hero() {
  // Cấu hình giá giống như bên OrderForm để nút bấm tự động nhảy %
  const giaGoc = 350;
  const giaGiam = 210;
  const phanTramGiam = Math.round(((giaGoc - giaGiam) / giaGoc) * 100);

  return (
    <section id="gioi-thieu" className="py-8 sm:py-16 lg:py-24 bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Khối nội dung chữ */}
        <div className="flex-1 text-center lg:text-left w-full mt-4 lg:mt-0">
          
          <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 shadow-sm">
            ✨ Giải pháp bảo vệ cột sống hàng đầu
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4 sm:mb-6">
            Đai Lưng Cột Sống <br className="hidden sm:block" />
            <span className="text-blue-700">HARUCO</span> <br className="hidden lg:block" />
            Chuẩn Nhật Bản
          </h1>
          
          <p className="text-sm sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Ứng dụng công nghệ định hình tiên tiến. Hỗ trợ nâng đỡ cột sống, giảm đau thoát vị đĩa đệm và điều chỉnh tư thế thẳng tự nhiên ngay tại nhà.
          </p>
          
          {/* Khu vực nút bấm hành động */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <a 
              href="#dat-hang" 
              className="w-full sm:w-auto text-center whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
            >
              Đặt Hàng - Giảm {phanTramGiam}%
            </a>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-700 font-medium">
              <div className="flex text-yellow-400 text-xl tracking-widest">★★★★★</div>
              <span className="text-xs sm:text-sm">10.000+ Khách tin dùng</span>
            </div>
          </div>

        </div>

        {/* Khối chứa hình ảnh */}
        <div className="flex-1 w-full max-w-md lg:max-w-xl mx-auto">
          <div className="bg-white p-3 sm:p-4 rounded-[2rem] shadow-2xl overflow-hidden border border-white/50 relative">
             <img 
               src="/assets/images/banner-co-ba.png" 
               alt="Cô lớn tuổi mỉm cười cầm hộp và đai Haruco" 
               className="w-full h-full object-cover rounded-2xl shadow-inner" 
             />
          </div>
        </div>

      </div>
    </section>
  );
}