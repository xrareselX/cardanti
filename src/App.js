import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import OrderCard from './components/pages/OrderCard';
import Business from "./components/pages/Business";
import How_it_works from './components/pages/How_it_works';
import Contact from './components/pages/Contact';
import Personal from './components/pages/Personal';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import {useState, useEffect} from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return unsubscribe;
}, []);

const handleLogout = async () => {
  try {
      await signOut(auth);
      navigate("/");
      console.log("User logged out");
  } catch (error) {
      console.error("Logout error:", error.message);
  }
};

  return (
    <Layout user={user} handleLogout={handleLogout}>  {/**avem nevoie de layout pt ca la return, avem voie un singur parent si ala sa fie layout si in ala punem restul */}
    <Routes>
      <Route path="/" element={<How_it_works />}/>
      <Route path="/about-us" element={<AboutUs />}/>
      <Route path="/business" element={<Business />}/>
      <Route path="/how_it_works" element={<How_it_works />}/>
      <Route path="/login" element={<Login user={user} />}/>
      <Route path="/order-card" element={<OrderCard />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/personal" element={<Personal />}/>
    </Routes>
    {location.pathname != "/login" && (
      <Footer />
    )}
    </Layout>
  );
}

export default App;
