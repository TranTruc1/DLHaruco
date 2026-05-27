import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('gioi-thieu');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'gioi-thieu', title: 'Giới thiệu' },
    { id: 'gioi-thieu-chi-tiet', title: 'Cấu tạo' },
    { id: 'tinh-nang', title: 'Tính năng' },
    { id: 'danh-gia', title: 'Đánh giá' }
  ];

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); 
    }
  };

  // Sử dụng Fragment (<></>) để chứa Header và Menu Mobile riêng biệt
  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3">
            <img src="/assets/logos/logo-haruco.png" alt="Haruco Logo" className="w-12 h-12" />
          </a>

          {/* Menu PC */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.id 
                      ? 'text-blue-600 font-bold' 
                      : 'text-gray-700 hover:text-blue-600' 
                  }`}
                >
                  {link.title}
                </a>
              ))}
            </nav>
            
            <a 
              href="#dat-hang"
              onClick={(e) => handleClick(e, 'dat-hang')}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md transition transform hover:-translate-y-0.5 inline-block animate-scale-pulse"
            >
              Mua Ngay
            </a>
          </div>

          {/* Toggle Menu Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="#dat-hang"
              onClick={(e) => handleClick(e, 'dat-hang')}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md transition inline-block animate-scale-pulse"
            >
              Mua Ngay
            </a>
            
            <button 
              className="p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* --- MENU MOBILE VÀ LỚP PHỦ ĐẶT BÊN NGOÀI HEADER --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Lớp phủ bắt sự kiện click toàn màn hình */}
          <div 
            className="fixed inset-0 z-[60] bg-black/20" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Hộp Menu */}
          <div className="fixed top-[75px] right-4 w-48 bg-white rounded-xl p-2 shadow-2xl border border-gray-100 z-[70]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                  activeSection === link.id 
                    ? 'bg-blue-50 text-blue-700 font-bold' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}