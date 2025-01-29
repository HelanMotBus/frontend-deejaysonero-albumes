import { Route, Routes, BrowserRouter } from "react-router-dom";
import Content from "../components/Content";
import Home from "../components/Home";
import Downloads from "../components/Downloads";
import Contact from "../components/Contact";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="inicio" element={<Home/>} />
          <Route path="descargas" element={<Downloads/>}/>
          <Route path="contacto" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
