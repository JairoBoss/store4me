import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";
import Formulario from "./formulario";
import HeaderCheckout from "./header";
import { CartProvider } from "react-use-cart";

const CheckoutForm = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | Pagar</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CartProvider>
        <Header />
        <div style={{ paddingTop: "67px" }}>
          <HeaderCheckout />
          <div style={{ paddingTop: "25px" }}>
            <Formulario />
          </div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};
export default CheckoutForm;
