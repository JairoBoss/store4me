import { Helmet } from "react-helmet";
const NotFound = () => {
  require("./index.css");
  return (
    <>
      <Helmet>
        <title>Lezeda | 404</title>
      </Helmet>
      <div id="noEncontrada">
        <section className="notFound">
          <div className="img">
            <img
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
            />
            <img
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
          <div className="text">
            <a style={{color: "red", fontSize: "70px"}}>404</a>
            <br/>
            <br/>
            <a style={{color: "white", fontSize: "30px"}}>PAGINA NO ENCONTRADA</a>
            <br/>
            <br/>
            <a style={{color: "white", fontSize: "15px"}}>IR AL INICIO?</a>
            <br/>
            <br/>
            <a href="/" className="yes">
              SI
            </a>
            <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
          </div>
        </section>
      </div>
    </>
  );
};
export default NotFound;
