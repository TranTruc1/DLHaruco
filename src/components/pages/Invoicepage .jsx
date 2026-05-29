import { useSearchParams, useNavigate } from "react-router-dom";
import { siteConfig } from "../../config";

export default function InvoicePage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const orderId  = params.get("orderId")  || "—";
  const name     = params.get("name")     || "—";
  const phone    = params.get("phone")    || "—";
  const address  = params.get("address")  || "—";
  const payment  = params.get("payment")  || "—";
  const price    = parseFloat(params.get("price") || "0");

  const formatPrice = (p) => `$${p.toFixed(2)}`;

  const orderDate = new Date().toLocaleDateString("vi-VN", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center px-4 py-12">

      {/* Card hóa đơn */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

        {/* Header xanh */}
        <div className="bg-blue-700 px-8 py-7 flex flex-col items-center text-white text-center">
          {/* Icon check */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight mb-1">Đặt Hàng Thành Công!</h1>
          <p className="text-blue-100 text-sm">Cảm ơn bạn đã tin dùng Đai Lưng HARUCO</p>
        </div>

        {/* Mã đơn hàng nổi bật */}
        <div className="bg-blue-50 border-b border-blue-100 px-8 py-4 flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">Mã đơn hàng</span>
          <span className="text-blue-700 font-extrabold text-lg tracking-widest">{orderId}</span>
        </div>

        {/* Thông tin đơn hàng */}
        <div className="px-8 py-6 space-y-4">
          <Row label="Ngày đặt" value={orderDate} />
          <Row label="Sản phẩm" value="Đai lưng HARUCO" bold />
          <Row label="Họ tên" value={name} />
          <Row label="Số điện thoại" value={phone} />
          <Row label="Địa chỉ giao" value={address} />
          <Row label="Thanh toán" value={payment} />

          {/* Tổng tiền */}
          <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
            <span className="font-bold text-gray-700 text-base">Tổng thanh toán</span>
            <span className="text-2xl font-extrabold text-blue-700">{formatPrice(price)}</span>
          </div>
        </div>

        {/* Note */}
        <div className="mx-8 mb-6 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4 text-sm text-yellow-800">
          <strong>Lưu ý:</strong> Đội ngũ Haruco sẽ liên hệ xác nhận đơn hàng của bạn qua số điện thoại trong vòng 24h. Vui lòng giữ máy để nhận cuộc gọi.
        </div>

        {/* Actions */}
        <div className="px-8 pb-8 flex flex-col gap-3">
          <a
            href={siteConfig.facebook.url}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center transition"
          >
            Nhắn tin qua Fanpage Facebook
          </a>
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium rounded-xl transition"
          >
            ← Quay về trang chủ
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 text-center text-xs text-gray-400">
          Hotline: <a href={`tel:${siteConfig.orderHotline.number}`} className="text-blue-600 font-semibold">{siteConfig.orderHotline.display}</a>
          {" · "}
          {siteConfig.email}
        </div>
      </div>
    </div>
  );
}

// Helper component cho mỗi hàng thông tin
function Row({ label, value, bold = false }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-sm text-gray-500 shrink-0 pt-0.5">{label}</span>
      <span className={`text-sm text-right ${bold ? "font-bold text-gray-900" : "text-gray-700"}`}>{value}</span>
    </div>
  );
}