import { useState, useEffect } from "react";
import { siteConfig } from '../config'; 

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzDYK-SiO87P1TACLyrKCBWuYNWQuuFKUsTUpSg2OWaN2EgyTSBqWMiVVm7G1dNG94O/exec";

const init = {
  product: "Đai lưng Haruco",
  name: "",
  address: "",
  phone: "",
  payment: "", 
  ip: "Đang tạo mã...", 
};

export default function OrderForm() {
  const giaGoc = 350;
  const giaGiam = 210;
  const phanTramGiam = Math.round(((giaGoc - giaGiam) / giaGoc) * 100);
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const [form, setForm] = useState(init);
  const [status, setStatus] = useState("idle");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [countdown, setCountdown] = useState(5); 

  useEffect(() => {
    let sessionID = localStorage.getItem("haruco_session_id");
    
    if (!sessionID) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      sessionID = "";
      for (let i = 0; i < 10; i++) {
        sessionID += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      localStorage.setItem("haruco_session_id", sessionID);
    }
    
    setForm((prev) => ({ ...prev, ip: sessionID }));
  }, []);

  useEffect(() => {
    let timer;
    if (status === "success") {
      setCountdown(5); 
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus("idle"); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer); 
    };
  }, [status]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectPayment = (methodName) => {
    setForm((prev) => ({ ...prev, payment: methodName }));
    setShowPaymentModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.payment) {
      alert("Vui lòng chọn phương thức thanh toán!");
      setShowPaymentModal(true);
      return;
    }

    setStatus("loading");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" }, 
        body: JSON.stringify(form),
      });
      
      setStatus("success");
      setForm((prev) => ({ ...init, ip: prev.ip })); 
    } catch {
      setStatus("error");
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <section id="dat-hang" className="py-8 lg:py-16 bg-sky-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white shadow-2xl rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-100 p-4 lg:p-10">
          
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

          <div className="flex-1 w-full max-w-md mx-auto mt-4 lg:mt-0">
            <div className="bg-gray-50/50 p-5 lg:p-8 rounded-xl lg:rounded-2xl border border-gray-100 shadow-inner">
              <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">Đăng Ký Đặt Hàng</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition" 
                    placeholder="Họ và tên *" 
                    required 
                  />
                </div>

                <div>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition" 
                    placeholder="Số PHONE*" 
                    required 
                  />
                </div>

                <div>
                  <textarea 
                    name="address" 
                    value={form.address} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition resize-none" 
                    rows="2" 
                    placeholder="Địa chỉ nhận hàng (USA) *" 
                    required
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="button" 
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-left bg-white focus:ring-2 focus:ring-blue-300 outline-none transition flex justify-between items-center"
                  >
                    <span className={form.payment ? "text-gray-900 font-bold" : "text-gray-400"}>
                      {form.payment || "Chọn cách thanh toán *"}
                    </span>
                    <span className="text-gray-400">▼</span>
                  </button>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-extrabold py-3.5 rounded-xl text-lg transition mt-2 shadow-lg hover:shadow-red-500/40 hover:-translate-y-0.5 transform flex justify-center items-center gap-2"
                >
                  🛒 Xác Nhận Đặt Hàng
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {status === "loading" && (
        <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4 shadow-lg"></div>
          <div className="text-xl font-bold text-blue-800 animate-pulse">Đang xử lý đơn hàng...</div>
          <p className="text-gray-500 mt-2 text-sm">Vui lòng không đóng trình duyệt</p>
        </div>
      )}

      {status === "success" && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full flex flex-col items-center text-center shadow-2xl scale-100 transform transition-transform animate-fade-in-up">
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-ping"></div>
              <div className="relative w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10 text-green-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Đặt Thành Công!</h3>
            <p className="text-gray-600 font-medium mb-6">
              Cảm ơn bạn. Đội ngũ Haruco sẽ liên hệ lại sớm nhất để xác nhận đơn hàng.
            </p>
            <div className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-500">
              Tự động đóng sau <span className="font-bold text-red-500 text-base">{countdown}</span> giây
            </div>
          </div>
        </div>
      )}

      {/* Modal Chọn Phương Thức Thanh Toán - Cập nhật để nhận object */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl relative">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center border-b pb-3">Cách thanh toán</h3>
            
            <div className="space-y-3">
              {siteConfig.paymentMethods.map((method) => (
                <button
                  key={method.name}
                  type="button"
                  onClick={() => handleSelectPayment(method.name)}
                  className={`w-full text-left px-5 py-3 border rounded-xl transition-all ${
                    form.payment === method.name 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className={`font-medium ${form.payment === method.name ? 'text-blue-700' : 'text-gray-800'}`}>
                    {method.name}
                  </div>
                  {/* Hiển thị dòng mô tả nếu config có dữ liệu */}
                  {method.desc && (
                    <div className={`text-xs mt-0.5 ${form.payment === method.name ? 'text-blue-500' : 'text-gray-500'}`}>
                      {method.desc}
                    </div>
                  )}
                </button>
              ))}
            </div>

            <button 
              type="button" 
              onClick={() => setShowPaymentModal(false)} 
              className="mt-6 w-full py-2.5 text-center text-gray-500 font-medium hover:text-gray-800 transition"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </section>
  );
}