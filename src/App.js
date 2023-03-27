import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import OrderCard from './components/pages/OrderCard';
import Business from "./components/pages/Business";

function App() {
  return (
    <Layout>  {/**avem nevoie de layout pt ca la return, avem voie un singur parent si ala sa fie layout si in ala punem restul */}
    <Routes>
      <Route path="/about-us" element={<AboutUs />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/order-card" element={<OrderCard />}/>
      <Route path="/business" element={<Business />}/>
    </Routes>
    <Footer />
    </Layout>
  );
}

export default App;
