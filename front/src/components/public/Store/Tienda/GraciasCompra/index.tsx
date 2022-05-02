const Gracias = () => {
    require("../../index.css");
  return (
    <div id="__next">
      <header
        className="topbar-shadow position-absolute "
        style={{ top: 0, left: 0, width: "100%", paddingTop: 25 }}
      >
        <div className="wide container">
          <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              <a href="/">
                <img
                  src="https://lezada.jamstacktemplates.dev/assets/images/logo.png"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div
        className="nothing-found-area bg-404"
        style={{
          backgroundImage:
            'url("https://lezada.jamstacktemplates.dev/assets/images/backgrounds/404-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="nothing-found-content">            
            <h1 className="space-mb--50">Gracias por su compra!</h1>
            <p className="direction-page">
              Pronto nos pondremos en contacto contigo
              <br />              
            </p>
            <p className="direction-page">
                <a href="/">Inicio</a>
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gracias;
