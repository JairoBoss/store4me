import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";
import ContenidoCarrito from "./contenido";
import HeaderCarrito from "./header";
import { CartProvider } from "react-use-cart";

const CarritoCompras = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | Carrito</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CartProvider>
        <Header />
        <div style={{ paddingTop: "67px" }}>
          <HeaderCarrito />
          <div style={{ paddingTop: "25px" }}>
            <ContenidoCarrito />
          </div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};
export default CarritoCompras;
