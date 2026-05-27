import { Zap, Target, Wind, GripVertical } from 'lucide-react';

export default function Features() {
  const features = [
    { title: "Định Hình Cột Sống", desc: "Nâng đỡ chuẩn y khoa, giúp tư thế thẳng tự nhiên.", icon: Target },
    { title: "Giảm Áp Lực", desc: "Giảm áp lực lên đĩa đệm ngay lập tức, hỗ trợ hồi phục.", icon: Zap },
    { title: "Vải Thông Thoáng", desc: "Lưới co giãn 4 chiều, đeo cả ngày không bí bách.", icon: Wind },
    { title: "Đai Siết Kép", desc: "Dễ dàng điều chỉnh lực siết ôm sát mọi form người.", icon: GripVertical }
  ];

  return (
    <section id="tinh-nang" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 mb-4">4 Điểm Nổi Bật Chỉ Có Ở HARUCO</h2>
          <p className="text-base sm:text-lg text-gray-700">Tối ưu hóa cho hiệu quả và sự thoải mái tuyệt đối.</p>
        </div>
        
        {/* Grid Responsive: 1 cột (Mobile) -> 2 cột (Tablet) -> 4 cột (PC) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div key={index} className="p-6 sm:p-8 bg-white rounded-3xl text-center shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col items-center">
              
              {/* Nếu dùng ảnh thay cho icon Lucide, đổi khối div này thành thẻ img */}
              {/* <img src={`/assets/icons/icon-${index}.png`} alt={item.title} className="h-16 w-16 mb-4" /> */}
              
              <div className="bg-blue-100 p-4 rounded-full text-blue-700 mb-4 sm:mb-6 flex items-center justify-center">
                <item.icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}