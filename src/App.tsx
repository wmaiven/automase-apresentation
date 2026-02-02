import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/tecnologias" element={<Technologies />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
