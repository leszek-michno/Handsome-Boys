import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ScrollToTop from 'react-scroll-to-top';
import "./App.scss";
import MainPage from "./pages/polishVersion/MainPage";
// import MainPageTexe from "./components/MainPageTexe";
import Films from "./pages/polishVersion/Films";
import NavBarPl from "./components/NavBar";
import Contact from "./pages/polishVersion/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import News from "./pages/polishVersion/News";


// import Photo from './assets/images/hsb.webp'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="container">
          <NavBarPl />
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Nasze granie" element={<Films />} />
            <Route path="/Kontakt" element={<Contact />} />
            <Route path="/Koncerty" element={<News/>} />
            {/* // <Route path="/Galeria" element={<Gallery />} /> */}
            {/* // <Route path="Homepage" element={<MainEng />} /> */}
            {/* // <Route path="/News" element={<NewsEng />} /> */}
            {/* // <Route path="/Contact" element={<ContactEng />} /> */}
            {/* // <Route path="/Menu_Eng" element={<MenuEng />} /> */}
            {/* // <Route path="/Gallery" element={<GalleryEng />} /> */}
          </Routes>
        </div>
        <p>
          <Footer />
        </p>
      </div>
    </Router>
  );
}

export default App;
