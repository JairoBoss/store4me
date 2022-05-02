import Carrusel from "./Carrusel";
import Footer from "./Footer";
import Header from "./Header";
import Lista from "./Tienda/lista";
import { CartProvider, useCart } from "react-use-cart";

const Home = () => {
  return (
    <div id="__next">
      <CartProvider>
        <Header />
        <Carrusel />
        <Lista />
        <Footer />
      </CartProvider>
    </div>
  );
};
export default Home;
