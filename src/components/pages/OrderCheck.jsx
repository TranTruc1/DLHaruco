import { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpxLvR8v580_pSObdABIXxyTg8ag4PCiQwqbsRl71ekq2BlH_D1g6q5Gdu2pJMeIb_/exec";
const MASTER_PASSWORD = "admin121314";

export default function OrderCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Kiểm tra mật khẩu đã lưu ở LocalStorage chưa
  useEffect(() => {
    const savedPassword = localStorage.getItem("haruco_admin_token");
    if (savedPassword === MASTER_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  // Gọi lần đầu khi đăng nhập thành công
  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
    }
  }, [isAuthenticated]);

  // Hàm tải dữ liệu (Chỉ chạy khi mới vào hoặc khi bấm nút "Làm mới")
  const loadOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(SCRIPT_URL);
      const rawData = await res.json();
      
      const cleanedData = rawData.map(item => {
        const newItem = {};
        Object.keys(item).forEach(key => {
          newItem[key.trim()] = item[key];
        });
        return newItem;
      });
      
      setOrders(cleanedData.reverse());
    } catch (error) {
      alert("Lỗi kết nối dữ liệu Google Sheet!");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === MASTER_PASSWORD) {
      localStorage.setItem("haruco_admin_token", MASTER_PASSWORD);
      setIsAuthenticated(true);
    } else {
      alert("Mật khẩu không chính xác!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("haruco_admin_token");
    setIsAuthenticated(false);
    setOrders([]);
  };

  const getVal = (order, keyName, colIndex) => {
    if (order[keyName] !== undefined && order[keyName] !== "") return order[keyName];
    const values = Object.values(order);
    if (values.length > colIndex && values[colIndex] !== "") return values[colIndex];
    return "---";
  };

  const formatTime = (timeVal) => {
    if (!timeVal || timeVal === "---") return "---";
    try {
      const d = new Date(timeVal);
      if (!isNaN(d.getTime()) && typeof timeVal === 'string' && (timeVal.includes('T') || timeVal.includes('-'))) {
        const time = d.toLocaleTimeString('vi-VN', { hour12: false });
        const date = d.toLocaleDateString('vi-VN');
        return `${time} ${date}`;
      }
    } catch (e) {}
    return timeVal;
  };

  const filteredOrders = orders.filter(order => {
    const name = getVal(order, "Tên", 2)?.toString().toLowerCase() || "";
    const phone = getVal(order, "Số Phone", 4)?.toString() || "";
    return name.includes(searchTerm.toLowerCase()) || phone.includes(searchTerm);
  });

  const ipCounts = {};
  filteredOrders.forEach(order => {
    const ip = getVal(order, "IP", 6)?.toString().trim();
    if (ip && ip !== "---") {
      ipCounts[ip] = (ipCounts[ip] || 0) + 1;
    }
  });

  const ipColorMap = {};
  const colorPalette = [
    "bg-red-100 text-red-800 border-red-300",
    "bg-amber-100 text-amber-800 border-amber-300",
    "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    "bg-emerald-100 text-emerald-800 border-emerald-300",
    "bg-blue-100 text-blue-800 border-blue-300",
    "bg-orange-100 text-orange-800 border-orange-300",
    "bg-purple-100 text-purple-800 border-purple-300",
    "bg-cyan-100 text-cyan-800 border-cyan-300"
  ];
  
  let colorIndex = 0;
  Object.keys(ipCounts).forEach(ip => {
    if (ipCounts[ip] > 1) { 
      ipColorMap[ip] = colorPalette[colorIndex % colorPalette.length];
      colorIndex++;
    }
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full border border-gray-100">
          <div className="text-center mb-6">
            <span className="text-4xl">🔒</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Hệ Thống Quản Lý</h2>
            <p className="text-gray-500 text-sm mt-1">Vui lòng nhập mật khẩu Admin</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Nhập mật khẩu..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-center font-bold tracking-widest"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-md"
            >
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        
        <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-gray-50/50">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            📦 ĐƠN HÀNG <span className="text-sm font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{filteredOrders.length} đơn</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-3">
            <input 
              type="text"
              placeholder="Tìm tên hoặc SĐT..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-inner"
            />
            <button 
              onClick={loadOrders}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 disabled:opacity-50"
            >
              🔄 {loading ? "Đang tải..." : "Làm mới"}
            </button>
            <button 
              onClick={handleLogout}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-xl text-sm font-medium transition"
            >
              Đăng xuất
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading && orders.length === 0 ? (
            <div className="p-12 text-center text-gray-500 font-medium">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              Đang đồng bộ dữ liệu từ Excel...
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="p-12 text-center text-gray-400 font-medium">
              Không tìm thấy dữ liệu đơn hàng nào.
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-xs font-bold uppercase border-b border-gray-200">
                  <th className="px-6 py-4">Thời gian</th>
                  <th className="px-6 py-4">Tên sản phẩm</th>
                  <th className="px-6 py-4">Tên</th>
                  <th className="px-6 py-4">Địa chỉ</th>
                  <th className="px-6 py-4">Số Phone</th>
                  <th className="px-6 py-4">Cách thanh toán</th>
                  <th className="px-6 py-4 text-center">Check Spam (ID)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                {filteredOrders.map((order, idx) => {
                  const timeStr = formatTime(getVal(order, "Timestamp", 0));
                  const ipStr = getVal(order, "IP", 6)?.toString().trim();
                  
                  const isSpam = ipCounts[ipStr] > 1;
                  const spamClass = isSpam 
                    ? `px-3 py-1.5 rounded-md border font-bold shadow-sm ${ipColorMap[ipStr]}` 
                    : `bg-gray-100 text-gray-500 px-2 py-1 rounded border border-dashed`;

                  return (
                    <tr key={idx} className="hover:bg-blue-50/40 transition">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-500">
                        {timeStr}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold text-blue-900">
                        {getVal(order, "Tên sản phẩm", 1)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">
                        {getVal(order, "Tên", 2)}
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate" title={getVal(order, "Địa chỉ", 3)}>
                        {getVal(order, "Địa chỉ", 3)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-green-700">
                        {getVal(order, "Số Phone", 4)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold border">
                          {getVal(order, "Cách thanh toán", 5)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-mono text-xs">
                        <span className={spamClass}>
                          {ipStr}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}