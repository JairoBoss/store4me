import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";
import HeaderProducto from './headerProducto';
import ProductoDetalle from './productoDetalle';
import { CartProvider } from "react-use-cart";
const DetalleProducto = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | Producto</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CartProvider> 
        <Header />
        <div style={{ paddingTop: "67px" }}>
          <HeaderProducto />
          <div style={{ paddingTop: "25px" }}>
            <ProductoDetalle />
          </div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};
export default DetalleProducto;
