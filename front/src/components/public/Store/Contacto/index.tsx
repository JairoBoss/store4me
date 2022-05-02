import Footer from "../Footer";
import Header from "../Header";
import { Helmet } from "react-helmet";
import HeaderContacto from "./header";
import ContactoDetalle from "./contactoDetalles";
import { CartProvider } from "react-use-cart";

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | Contacto</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CartProvider>
        <Header />
        <div style={{ paddingTop: "67px" }}>
          <HeaderContacto />
          <div style={{ paddingTop: "25px" }}>
            <ContactoDetalle />
          </div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};
export default Contacto;
