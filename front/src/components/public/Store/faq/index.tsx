import Footer from "../Footer";
import Header from "../Header";
import { Helmet } from "react-helmet";
import HeaderFaq from "./header";
import Preguntas from "./preguntas";
import { CartProvider } from "react-use-cart";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | FAQ</title>
      </Helmet>
      <CartProvider>
        <Header />
        <div style={{ paddingTop: "67px" }}>
          <HeaderFaq/>
          <div style={{ paddingTop: "25px" }}>
            <Preguntas/>
          </div>
        </div>
        <Footer />
      </CartProvider>
    </>
  );
};
export default FAQ;
