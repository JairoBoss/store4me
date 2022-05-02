const HeaderCarrito = () => {
  return (
    <div
      className="breadcrumb-area space-pt--70 space-pb--70 "
      style={{
        backgroundImage:
          'url("https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-2.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="breadcrumb__title">Carrito</h1>
            <ul className="breadcrumb__list">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>Carrito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderCarrito;
