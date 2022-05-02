import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AuthContext, IAuthContext } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/public/login";
import { FullPageLoading } from "./components/FullPageLoading";
import Admin from "./components/admin";
import Home from "./components/public/Store";
import AcercaDe from "./components/public/Store/Acerca de";
import Contacto from "./components/public/Store/Contacto/index";
import FAQ from "./components/public/Store/faq";
import NotFound from "./components/public/Store/NotFound";
import DetalleProducto from "./components/public/Store/Tienda/DetallesProducto";
import CarritoCompras from "./components/public/Store/Tienda/CarritoCompras";
import Checkout from "./components/public/Store/Tienda/Checkout";
import Gracias from "./components/public/Store/Tienda/GraciasCompra";

function App() {
  const { currentUser, checkUser } = useContext(AuthContext) as IAuthContext;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);
  const publicRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/preguntas-frecuentes" element={<FAQ />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/carrito" element={<CarritoCompras />} />
      <Route path="/pagar" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
      {/* 15 minutos */}
      <Route path="/gracias-por-comprar" element={<Gracias />} />
    </Routes>
  );

  const userRoutes = (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>user</h1>
          </>
        }
      />
    </Routes>
  );

  const adminRoutes = (
    <Routes>
      <Route path="/admin-panel" element={<Admin />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/preguntas-frecuentes" element={<FAQ />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/carrito" element={<CarritoCompras />} />
      <Route path="/pagar" element={<Checkout />} />
      <Route path="/gracias-por-comprar" element={<Gracias />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  const getRoute = () => {
    if (loading) {
      return (
        <Routes>
          <Route path="/" element={<FullPageLoading />} />
        </Routes>
      );
    }

    if (!currentUser) return publicRoutes;

    if (currentUser) {
      return adminRoutes;
    } else {
      return userRoutes;
    }
  };
  return (
    <>
      <BrowserRouter>{getRoute()}</BrowserRouter>
    </>
  );
}

export default App;
