import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import AdminShopUpload from './pages/AdminShopUpload';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Auth />} />
          <Route path="admin/shop" element={<AdminShopUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
