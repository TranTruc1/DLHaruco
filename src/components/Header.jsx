import { useState, useEffect } from 'react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNVduh_HHs1wp65Mlqmcq-xmeQT2TRtkiqssim1Db26y2BM9wqk3uBoNX1KUl-5sxh/exec";

export default function Header() {

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

    if (!sessionStorage.getItem("view_tracked")) {
      sessionStorage.setItem("view_tracked", "true");

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "view",
          ip: sessionID
        }),
      }).catch(() => {
        sessionStorage.removeItem("view_tracked");
      });
    }
  }, []);

  const [activeSection, setActiveSection] = useState('gioi-thieu');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'gioi-thieu', title: 'Giới thiệu' },
    { id: 'gioi-thieu-chi-tiet', title: 'Cấu tạo' },
    { id: 'tinh-nang', title: 'Tính năng' },
    { id: 'danh-gia', title: 'Đánh giá' }
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ==========================================
          ANIMATION CSS TRỰC TIẾP TRONG FILE
      ========================================== */}
      <style>{`
        @keyframes menuSlideDown {
          0% {
            opacity: 0;
            transform: scaleY(0.85) translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: scaleY(1) translateY(0);
          }
        }

        @keyframes backdropFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes menuItemFadeIn {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-menu-backdrop {
          animation: backdropFadeIn 0.2s ease forwards;
        }

        .mobile-menu-box {
          animation: menuSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: top right;
        }

        .mobile-menu-item {
          opacity: 0;
          animation: menuItemFadeIn 0.2s ease forwards;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.10s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.20s; }
      `}</style>

      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full transform-gpu antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">

            <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
              <img src="/assets/logos/logo-haruco.png" alt="Haruco Logo" className="h-10 md:h-12 w-auto object-contain" />
            </a>

            {/* Menu PC */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  
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

              
                href="#dat-hang"
                onClick={(e) => handleClick(e, 'dat-hang')}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md transition transform hover:-translate-y-0.5 inline-block animate-scale-pulse"
              >
                Mua Ngay
              </a>
            </div>

            {/* Toggle Menu Mobile */}
            <div className="md:hidden flex items-center gap-3">
              
                href="#dat-hang"
                onClick={(e) => handleClick(e, 'dat-hang')}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md transition inline-block animate-scale-pulse"
              >
                Mua Ngay
              </a>

              <button
                className="p-2 text-gray-600 focus:outline-none relative z-[80]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MENU MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Lớp phủ */}
          <div
            className="mobile-menu-backdrop fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Hộp Menu */}
          <div className="mobile-menu-box fixed top-[75px] right-4 w-48 bg-white rounded-xl p-2 shadow-2xl border border-gray-100 z-[70]">
            {navLinks.map((link) => (
              
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`mobile-menu-item block px-4 py-3 rounded-lg text-base font-medium transition ${
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