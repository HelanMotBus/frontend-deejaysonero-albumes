import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Downloads from "../components/Downloads";
import Contact from "../components/Contact";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inicio" element={<Home />} />
        <Route path="descargas" element={<Downloads />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
