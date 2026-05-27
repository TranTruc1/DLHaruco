import { siteConfig } from '../config';

export default function OrderForm() {
  const giaGoc = 350;
  const giaGiam = 210;
  const phanTramGiam = Math.round(((giaGoc - giaGiam) / giaGoc) * 100);
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  // Hàm xử lý khi click vào nút gọi
  const handleCallClick = (e) => {
    const isConfirmed = window.confirm(`Bạn có muốn gọi đến số ${siteConfig.orderHotline.display} để đặt hàng không?`);
    if (!isConfirmed) {
      e.preventDefault(); // Hủy gọi nếu khách chọn Cancel/Không
    }
  };

  return (
    <section id="dat-hang" className="py-8 lg:py-16 bg-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 bg-white shadow-2xl rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-100 p-4 lg:p-10">
          
          {/* Cột 1: Thông tin giá & Chính sách */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-950 mb-2 lg:mb-4 text-center lg:text-left">
              Sở Hữu Đai Lưng <span className="text-blue-700">HARUCO</span>
            </h2>
            <p className="text-sm lg:text-lg text-gray-700 mb-4 text-center lg:text-left">
              Nhận ưu đãi giảm <span className="font-bold text-red-500">{phanTramGiam}%</span> ngay hôm nay.
              <span className="hidden lg:inline"> Số lượng có hạn!</span>
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-5 lg:mb-6">
              <div className="text-gray-400 line-through text-xl lg:text-2xl">{formatPrice(giaGoc)}</div>
              <div className="text-3xl lg:text-5xl font-extrabold text-blue-700">{formatPrice(giaGiam)}</div>
            </div>
            
            <div className="bg-blue-50 p-4 lg:p-5 rounded-xl lg:rounded-2xl border border-blue-100 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-2xl lg:text-3xl">🛡️</span>
              <span className="font-bold text-blue-900 text-base lg:text-xl">Bảo hành 12 tháng lỗi 1 đổi 1</span>
            </div>
          </div>

          {/* Cột 2: Nút Gọi Điện Đặt Hàng */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white rounded-xl lg:rounded-2xl p-5 lg:p-8 border-2 border-dashed border-blue-200 mt-4 lg:mt-0">
            
            <div className="hidden lg:flex w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-6 animate-bounce shadow-md">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center">Gọi Để Nhận Ưu Đãi</h3>
            
            <p className="hidden lg:block text-gray-600 mb-8 text-center leading-relaxed">
              Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ tư vấn size cho bạn 24/7. Miễn phí vận chuyển!
            </p>
            
            {/* Sử dụng onClick và lấy số từ orderHotline */}
            <a 
              href={`tel:${siteConfig.orderHotline.number}`} 
              onClick={handleCallClick}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-extrabold py-3.5 lg:py-4 px-6 lg:px-10 rounded-xl text-lg lg:text-2xl transition flex items-center justify-center gap-2 lg:gap-3 shadow-lg hover:shadow-red-500/40 hover:-translate-y-1 transform cursor-pointer"
            >
              <span className="text-xl lg:text-2xl">📞</span> {siteConfig.orderHotline.display}
            </a>
            <p className="mt-3 lg:mt-4 text-[13px] lg:text-sm text-gray-500 font-medium text-center">Bấm vào nút bên trên để gọi ngay</p>
          </div>

        </div>
      </div>
    </section>
  );
}