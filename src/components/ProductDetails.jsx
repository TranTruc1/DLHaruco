export default function ProductDetails() {
  return (
    <section id="chi-tiet" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Chi tiết đai */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Thiết Kế Đột Phá, Hỗ Trợ Toàn Diện</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Đai Lưng Haruco kết hợp công nghệ định hình tiên tiến với chất liệu cao cấp để mang lại hiệu quả tối đa và sự thoải mái khi sử dụng.
          </p>
          <div className="bg-gray-50 p-2 sm:p-4 rounded-2xl shadow-inner overflow-hidden aspect-[3/2]">
             <img 
               src="/assets/images/chi-tiet-dai.png" 
               alt="Cận cảnh lớp lưới chấm hạt từ tính bên trong đai" 
               className="w-full h-full object-cover rounded-xl" 
             />
          </div>
        </div>

        {/* Hộp sản phẩm */}
        <div className="order-1 lg:order-2">
          <div className="bg-sky-100 p-2 rounded-2xl shadow-xl overflow-hidden aspect-[3/2]">
             <img 
               src="/assets/images/hop-san-pham.png" 
               alt="Vỏ hộp màu xanh dương pastel và đai lưng đen Haruco" 
               className="w-full h-full object-cover rounded-xl bg-white" 
             />
          </div>
          <p className="text-base sm:text-lg text-gray-700 mt-4 sm:mt-6 italic text-center lg:text-left">
            Sản phẩm được bảo chứng chất lượng bởi các chuyên gia Nhật Bản, với thiết kế hoa anh đào và núi Phú Sĩ biểu tượng.
          </p>
        </div>

      </div>
    </section>
  );
}