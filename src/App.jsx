import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductDetails from './components/ProductDetails'
import AboutDetail from './components/AboutDetail'
import Features from './components/Features'
import Reviews from './components/Reviews'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'
import OrderCheck from './components/pages/OrderCheck'
import InvoicePage from './components/pages/Invoicepage ' // ✅ Trang hóa đơn mới

// Component chứa toàn bộ giao diện trang chủ (Landing Page)
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductDetails />
        <AboutDetail />
        <Features />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
    </div>
  )
}

// Thiết lập định tuyến (Routing) cho App
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Trang đích bán hàng */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ Trang hóa đơn sau khi đặt hàng thành công */}
        <Route path="/invoice" element={<InvoicePage />} />

        {/* Trang quản trị: Check đơn hàng */}
        <Route path="/app/donhang" element={<OrderCheck />} />
      </Routes>
    </Router>
  )
}