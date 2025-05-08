import './assets/css/style.css';
import './assets/css/reset.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductItem from './components/ProductItem';
import Cart from './pages/Cart';
import ScrollToTop from './components/scrollToTop';
import Payment from './pages/Payment';
import Delievery from './pages/Delievery';
import Contacts from './pages/Contacts';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter basename="/bentsai">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delievery" element={<Delievery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
