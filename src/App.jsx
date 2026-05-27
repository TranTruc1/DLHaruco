import Header from './components/Header'
import Hero from './components/Hero'
import ProductDetails from './components/ProductDetails'
import AboutDetail from './components/AboutDetail'
import Features from './components/Features'
import Reviews from './components/Reviews'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'

export default function App() {
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