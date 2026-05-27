export default function Warranty() {
  return (
    <section id="bao-hanh" className="py-12 sm:py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-lg border-2 border-blue-100 overflow-hidden flex flex-col md:flex-row items-center">
          
          {/* Khối huy hiệu / Logo */}
          <div className="bg-blue-600 text-white p-8 md:p-10 flex flex-col justify-center items-center w-full md:w-1/3 h-full text-center">
            <svg className="w-16 h-16 mb-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-extrabold mb-2">HARUCO JAPAN</h2>
            <p className="font-medium text-blue-100">Cam kết chất lượng</p>
          </div>

          {/* Nội dung chi tiết bảo hành */}
          <div className="p-8 md:p-10 w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Chính Sách Bảo Hành Chính Hãng</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-0.5">✔️</span>
                <div>
                  <strong className="text-gray-900">Bảo hành 12 tháng:</strong> Hỗ trợ đổi mới nếu sản phẩm gặp lỗi do nhà sản xuất.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">❌</span>
                <div>
                  <strong className="text-gray-900">Từ chối bảo hành:</strong> Không áp dụng với trường hợp rách, cháy, cắt sửa do tác động bên ngoài.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-0.5">📝</span>
                <div>
                  <strong className="text-gray-900">Điều kiện:</strong> Khách hàng vui lòng cung cấp thông tin đơn hàng khi yêu cầu bảo hành.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-0.5">📱</span>
                <div>
                  <strong className="text-gray-900">Xác thực chính hãng:</strong> Vui lòng quét mã QR trên thẻ bảo hành đi kèm trong hộp để kích hoạt và tránh mua phải hàng giả, kém chất lượng.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}