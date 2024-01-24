import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Nopage } from "./pages/Nopage";
import { Home } from "./pages/Home";

function App() {
 

  return (
    //*RENDERIZAR CONTENIDO
    <BrowserRouter>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
