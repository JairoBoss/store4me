import Footer from "../Footer";
import Header from "../Header";
import { Helmet } from "react-helmet";
import HeaderFaq from "./header";
import Preguntas from "./preguntas";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Lezeda | FAQ</title>
      </Helmet>
      <Header />
      <div style={{ paddingTop: "67px" }}>
        <HeaderFaq/>
        <div style={{ paddingTop: "25px" }}>
          <Preguntas/>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FAQ;
