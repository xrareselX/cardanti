import { Route, Routes } from 'react-router-dom';
import './App.css';
import BuyNow from './components/pages/BuyNow'
import Layout from './components/Layout';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>  {/**avem nevoie de layout pt ca la return, avem voie un singur parent si ala sa fie layout si in ala punem restul */}
    <Routes>
      <Route path="/buy-now" element={<BuyNow />}/>
      <Route path="/about-us" element={<AboutUs />}/>
    </Routes>
    <Footer />
    </Layout>
   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
