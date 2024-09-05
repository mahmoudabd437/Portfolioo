import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Product from "./components/Product";
import Services from "./components/Services";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route
          path="services"
          element={
            <>
              <Services />
            </>
          }
        />
        <Route
          path="product"
          element={
            <>
              <Product />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
