import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Menu from "./pages/Menu";
import Carrinho from "pages/Carrinho";
import Estoque from "pages/Estoque";
import Update from "pages/Update";
import Add from "pages/Add";
import Cadastro from "pages/Cadastro";
import Produto from "pages/Produto";
import { ClienteProvider } from "context/ClienteContext";

function Approutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <ClienteProvider>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/usuario" element={<Cadastro />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ClienteProvider>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default Approutes;
