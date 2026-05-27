export default function Reviews() {
  const reviews = [
    { 
      name: "Chị Mai, 35 tuổi", 
      location: "Texas",
      job: "Làm nails",
      text: "Ngồi làm móng cho khách cả ngày đau gập cả lưng. Đeo đai này thấy đỡ hẳn mỏi, tư thế ngồi thẳng hơn, không còn gù như trước.", 
      image: "/assets/images/nguoi-mau-eo-3.png" 
    },
    { 
      name: "Cô Bình, 52 tuổi", 
      location: "Cali",
      job: "Làm nails",
      text: "Thoái hóa đốt sống làm cô hay nhức, đeo cái này vào giữ lưng chắc chắn đi lại làm việc nhà dễ lắm.", 
      image: "/assets/images/nguoi-mau-eo-2.png" 
    },
    { 
      name: "Chú Hoàng, 60 tuổi", 
      location: "Washington",
      job: "Lái xe",
      text: "Chất liệu vải rất thoáng mát, đeo cả ngày đi làm không bị bí mồ hôi. Điểm 10 cho chất lượng sản phẩm.", 
      image: "/assets/images/nguoi-mau-eo.png" 
    }
  ];

  return (
    <section id="danh-gia" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-950 mb-8 sm:mb-12">Khách Hàng Nói Gì?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left hover:shadow-md transition">
              
              {/* Ảnh đại diện khách hàng */}
              <img 
                src={rev.image} 
                alt={`Khách hàng ${rev.name}`} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md mb-4 sm:mb-6" 
              />
              
              <div className="flex-1 w-full flex flex-col">
                <div className="flex justify-center sm:justify-start text-yellow-400 mb-3 text-lg sm:text-xl">★★★★★</div>
                <p className="text-gray-700 italic mb-4 text-sm sm:text-base flex-grow">"{rev.text}"</p>
                <div className="mt-auto">
                  <div className="font-bold text-blue-700 text-lg">{rev.name}</div>
                  {/* Hiển thị Vị trí và Nghề nghiệp */}
                  <div className="text-sm text-gray-500 font-medium mt-1 flex flex-wrap gap-x-3 gap-y-1 justify-center sm:justify-start items-center">
                    <span>📍 {rev.location}</span>
                    <span className="hidden sm:inline-block">•</span>
                    <span>💼 {rev.job}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}