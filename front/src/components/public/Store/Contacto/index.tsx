import Footer from "../Footer";
import Header from "../Header";
import { Helmet } from "react-helmet";
import HeaderContacto from "./header";
import ContactoDetalle from "./contactoDetalles";

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | Contacto</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      <div style={{ paddingTop: "67px" }}>
        <HeaderContacto />
        <div style={{ paddingTop: "25px" }}>
          <ContactoDetalle />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contacto;
