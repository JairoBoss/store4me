import Footer from "../Footer";
import Header from "../Header";
import HeaderAcercaDe from "./header";
import Informacion from "./informacion";
import {Helmet} from "react-helmet";

const AcercaDe = () => {
  return (
    <>
    <Helmet>
        <title>Lezeda | Acerca de</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Header />
      <div style={{ paddingTop: "67px" }}>
        <HeaderAcercaDe />
        <div style={{ paddingTop: "25px" }}>
            <Informacion/>
        </div>        
      </div>      
      <Footer/>      
    </>
  );
};
export default AcercaDe;
