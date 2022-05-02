const HeaderCheckout = () => {
  return (
    <div
      className="breadcrumb-area space-pt--70 space-pb--70 "
      style={{
        backgroundImage:
          'url("https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="breadcrumb__title">Checkout</h1>
            <ul className="breadcrumb__list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderCheckout;
