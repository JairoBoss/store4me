import Footer from "../Footer";
import Header from "../Header";
import HeaderAcercaDe from "./header";
import Informacion from "./informacion";
import { Helmet } from "react-helmet";
import { CartProvider } from "react-use-cart";

const AcercaDe = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | Acerca de</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CartProvider>
        <Header />
        <div style={{ paddingTop: "67px" }}>
          <HeaderAcercaDe />
          <div style={{ paddingTop: "25px" }}>
            <Informacion />
          </div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};
export default AcercaDe;
