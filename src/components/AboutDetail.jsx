import ZoomableImage from './ZoomableImage';

export default function AboutDetail() {
  return (
    <section id="gioi-thieu-chi-tiet" className="bg-white pb-12 md:pb-24 border-t border-gray-100">
      
      {/* Phần Banner Tiêu Đề - Thu gọn padding trên mobile (py-8) */}
      <div className="bg-sky-50 py-8 md:py-16 mb-8 md:mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Thu nhỏ font chữ tiêu đề trên mobile (text-2xl) */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-snug">
            Cấu Tạo Vượt Trội Của Đai Lưng <span className="text-blue-700">HARUCO</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Sự kết hợp hoàn hảo giữa công nghệ định hình vật lý và liệu pháp nhiệt tự nhiên từ Nhật Bản, mang lại hiệu quả bảo vệ cột sống toàn diện.
          </p>
        </div>
      </div>

      {/* Rút ngắn khoảng cách giữa các khối trên mobile (space-y-12) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-20">

        {/* Khối 1: 4 Thanh Inox & Ảnh Công Nghệ Cột Sống */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 w-full">
            {/* Sử dụng ảnh công nghệ mô phỏng cột sống bạn vừa up */}
            <ZoomableImage src="/assets/images/image_f97782.png" alt="Công nghệ định hình cột sống Nhật Bản" className="w-full rounded-xl md:rounded-2xl shadow-md border border-gray-100" />
          </div>
          <div className="flex-1">
            <div className="inline-block bg-blue-100 text-blue-700 font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm mb-3">Định hình vật lý</div>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Hệ Thống 4 Thanh Inox Chắc Chắn</h3>
            <p className="text-gray-700 text-sm md:text-lg mb-4">Đai được trang bị 4 thanh inox cao cấp chạy dọc theo đường cong sinh lý của thắt lưng, ứng dụng công nghệ chuẩn Nhật.</p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700 font-medium">
              <li className="flex items-start gap-2"><span>✅</span> Nâng đỡ toàn bộ khu vực cột sống thắt lưng.</li>
              <li className="flex items-start gap-2"><span>✅</span> Mở rộng khoảng cách các đốt sống, giảm chèn ép.</li>
              <li className="flex items-start gap-2"><span>✅</span> Ép tư thế ngồi/đứng thẳng tự nhiên, chống gù.</li>
            </ul>
          </div>
        </div>

        {/* Khối 2: Công nghệ tự nóng */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm mb-3">Liệu pháp nhiệt</div>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Cơ Chế Đá Từ Tính Tự Sinh Nhiệt</h3>
            <p className="text-gray-700 text-sm md:text-lg mb-4">Sử dụng 2 miếng đệm chứa đá núi lửa tự nhiên. Khi tiếp xúc với cơ thể, các hạt từ tính sẽ tự động sinh nhiệt an toàn.</p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700 font-medium">
              <li className="flex items-start gap-2"><span>🔥</span> Làm ấm sâu vùng thắt lưng, giúp giãn cơ nhanh chóng.</li>
              <li className="flex items-start gap-2"><span>🔥</span> Tăng cường tuần hoàn máu tại khu vực tổn thương.</li>
              <li className="flex items-start gap-2"><span>🔥</span> Làm nóng vùng bụng, hỗ trợ đào thải mỡ thừa.</li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <ZoomableImage src="/assets/images/tu-nong.jpg" alt="Miếng dán tự nóng lưng và bụng" className="w-full rounded-xl md:rounded-2xl shadow-md border border-gray-100" />
          </div>
        </div>

        {/* Khối 3: Hình ảnh đa chức năng */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 w-full grid grid-cols-2 gap-3 md:gap-4">
            <ZoomableImage src="/assets/images/giam-dau.jpg" alt="Giảm đau cột sống" className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-sm" />
            <ZoomableImage src="/assets/images/da-chuc-nang.jpg" alt="Hỗ trợ giảm mỡ bụng" className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-sm" />
          </div>
          <div className="flex-1 mt-2 md:mt-0">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Tác Dụng Kép: Khỏe Lưng - Gọn Dáng</h3>
            <p className="text-gray-700 text-sm md:text-lg mb-3">Không chỉ là một thiết bị hỗ trợ y tế chống thoát vị đĩa đệm, thiết kế ôm sát kết hợp cơ chế tản nhiệt còn biến Haruco thành trợ thủ đắc lực giúp vòng 2 săn chắc hơn.</p>
            <p className="text-gray-700 text-sm md:text-lg">Phù hợp cho cả người cao tuổi bị đau nhức xương khớp và dân văn phòng ngồi nhiều.</p>
          </div>
        </div>

        {/* Khối 4: Hướng dẫn sử dụng */}
        <div className="bg-sky-50 rounded-2xl md:rounded-3xl p-5 md:p-12 text-center shadow-inner">
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Hướng Dẫn Sử Dụng Đai Tự Nóng</h3>
          <div className="max-w-3xl mx-auto mb-6 md:mb-8">
            <ZoomableImage src="/assets/images/huong-dan.jpg" alt="3 bước sử dụng đai Haruco" className="w-full rounded-lg md:rounded-xl shadow-sm border-2 md:border-4 border-white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm">
              <div className="text-blue-600 font-bold text-lg md:text-xl mb-1 md:mb-2">Bước 1</div>
              <p className="text-gray-700 text-sm md:text-base">Lắp miếng đá trắng to vào giữa đai (lưng), miếng đá nhỏ vào phía bên phải (bụng).</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm">
              <div className="text-blue-600 font-bold text-lg md:text-xl mb-1 md:mb-2">Bước 2</div>
              <p className="text-gray-700 text-sm md:text-base">Đeo đai sao cho miếng đá to tiếp xúc với lưng, miếng đá nhỏ tiếp xúc với bụng.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm">
              <div className="text-blue-600 font-bold text-lg md:text-xl mb-1 md:mb-2">Bước 3</div>
              <p className="text-gray-700 text-sm md:text-base">Căn chỉnh và dán chặt 2 lớp dây đai để đảm bảo độ siết ôm sát vào cơ thể.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}