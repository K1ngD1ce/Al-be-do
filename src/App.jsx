import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./assets/image/svg/logo.svg?react";
import Header from "./components/Elements/Header/Header";
import Footer from "./components/Elements/Footer/Footer";
import Home from "./components/Pages/Home";
import Policy from "./components/Pages/Policy";

export default function App() {
  return (
    <BrowserRouter>
      <Header logo={<Logo width="212" height="20" />} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
