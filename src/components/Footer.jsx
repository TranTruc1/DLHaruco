import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 border-t-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start gap-8">
        
        {/* Khối Thông Tin Liên Hệ */}
        <div className="w-full text-left space-y-5 text-sm sm:text-base text-gray-200">
          
          {/* Tự động lấy danh sách địa chỉ quốc gia từ config */}
          <div className="space-y-1">
            {siteConfig.locations.map((loc, index) => (
              <div key={index}>
                <strong>{loc.country}:</strong> {loc.address}
              </div>
            ))}
          </div>

          {/* Hotline & Email */}
          <div className="space-y-1">
            <div className="font-bold text-white text-base sm:text-lg">Hotline:</div>
            {siteConfig.hotlines.map((hotline, index) => (
              <div key={index}>
                <strong>{hotline.location}:</strong>{" "}
                <a href={`tel:${hotline.number}`} className="font-bold hover:text-blue-300 transition">
                  {hotline.display}
                </a>
              </div>
            ))}
            <div className="pt-2">
              <strong>Email:</strong> {siteConfig.email}
            </div>
          </div>

        </div>
        
        {/* Khối Fanpage Facebook */}
        <div className="w-full border-t border-blue-800/60 pt-6 flex flex-col items-start gap-4">
          
          <div className="bg-white rounded-lg p-3 w-full max-w-sm flex items-center gap-4 shadow-lg text-left text-gray-900">
            <img 
              src={siteConfig.facebook.avatar} 
              alt="Avatar Page" 
              className="w-12 h-12 rounded-full border border-gray-200 object-cover" 
            />
            <div className="flex-1">
              <a href={siteConfig.facebook.url} target="_blank" rel="noreferrer" className="text-blue-800 font-bold hover:underline text-sm line-clamp-1">
                {siteConfig.facebook.name}
              </a>
              <div className="text-gray-500 text-xs mt-0.5">Hơn 50.000 người theo dõi</div>
              
              <a href={siteConfig.facebook.url} target="_blank" rel="noreferrer" className="mt-1.5 inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-2.5 py-1 rounded transition">
                Thích Trang
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            © 2026 Haruco International. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}