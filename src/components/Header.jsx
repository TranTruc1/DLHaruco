import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('gioi-thieu');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Danh sách các menu và ID của từng phần tương ứng trên trang
  const navLinks = [
    { id: 'gioi-thieu', title: 'Giới thiệu' },
    { id: 'gioi-thieu-chi-tiet', title: 'Cấu tạo' }, // Tương ứng ID của AboutDetail
    { id: 'tinh-nang', title: 'Tính năng' }, // Tương ứng ID của Features
    { id: 'danh-gia', title: 'Đánh giá' } // Tương ứng ID của Reviews
  ];

  // Theo dõi vị trí cuộn trang để đổi màu menu
  useEffect(() => {
    const handleScroll = () => {
      // Cộng thêm 100px để bù trừ chiều cao của chính thanh navbar (cho chuẩn xác)
      const scrollPosition = window.scrollY + 100;

      const currentSection = navLinks.find(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kích hoạt ngay lần đầu load trang
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Xử lý khi click vào menu
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Tự động đóng menu trên mobile
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/assets/logos/logo-haruco.png" alt="Haruco Logo" className="w-12 h-12" />
        </a>

        {/* Menu PC */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`text-lg font-medium transition-colors ${
                activeSection === link.id 
                  ? 'text-blue-600 font-bold' // Màu xanh khi đang ở phần này
                  : 'text-gray-700 hover:text-blue-600' // Màu xám khi ở phần khác
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Nút Mua Ngay & Hamburger Menu Mobile */}
        <div className="flex items-center gap-4">
          <a 
            href="#dat-hang"
            onClick={(e) => handleClick(e, 'dat-hang')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md transition transform hover:-translate-y-0.5"
          >
            Mua Ngay
          </a>
          
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`block text-lg font-medium ${
                activeSection === link.id ? 'text-blue-600 font-bold' : 'text-gray-700'
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}