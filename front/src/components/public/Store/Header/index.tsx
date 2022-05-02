import { useCart, CartProvider } from "react-use-cart";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const { totalUniqueItems } = useCart();
  require("../index.css");
  return (
    <CartProvider>
      <header className="topbar-shadow is-sticky">
        <div className="wide container">
          <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              <button className="d-none">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
                </svg>
              </button>
              <a href="/">
                <img
                  src="https://lezada.jamstacktemplates.dev/assets/images/logo.png"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop/left-sidebar">Tienda</a>
                </li>
                <li>
                  <a href="/acerca-de">Acerca de</a>
                </li>
                <li className="position-relative">
                  <a href="/contacto">Contacto</a>
                </li>
              </ul>
            </nav>
            <div className="header-content__icons space-pl--15">
              <ul className="d-none d-lg-block">
                <li>
                  <a href="/login">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="/carrito">
                  <button>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        transform="rotate(-1.057 159.995 423.97) scale(.99997)"
                        cx={160}
                        cy={424}
                        rx={24}
                        ry={24}
                      />
                      <ellipse
                        transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)"
                        cx="384.5"
                        cy={424}
                        rx={24}
                        ry={24}
                      />
                      <path d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z" />
                    </svg>
                    {totalUniqueItems >= 1 ? (
                      <span className="count">{totalUniqueItems}</span>
                    ) : null}
                  </button>
                  </a>
                </li>
              </ul>
              <ul className="d-block d-lg-none">
                <li>
                  <a href="/other/cart">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        transform="rotate(-1.057 159.995 423.97) scale(.99997)"
                        cx={160}
                        cy={424}
                        rx={24}
                        ry={24}
                      />
                      <ellipse
                        transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)"
                        cx="384.5"
                        cy={424}
                        rx={24}
                        ry={24}
                      />
                      <path d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z" />
                    </svg>
                    {totalUniqueItems >= 1 ? (
                      <span className="count">{totalUniqueItems}</span>
                    ) : null}
                  </a>
                </li>
                <li>
                  <button onClick={() => setMobile(true)}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {mobile ? (
          <div className="offcanvas-mobile-menu active">
            <div className="offcanvas-mobile-menu__overlay-close" />
            <div className="offcanvas-mobile-menu__wrapper">
              <button
                className="offcanvas-mobile-menu__close"
                onClick={() => setMobile(false)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
                </svg>
              </button>
              <div className="offcanvas-mobile-menu__content-wrapper">
                <div className="offcanvas-mobile-menu__content">
                  <nav
                    className="offcanvas-mobile-menu__navigation"
                    id="offcanvas-mobile-menu__navigation"
                  >
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop/left-sidebar">Tienda</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/">Acerca de</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/">Contacto</a>
                      </li>
                    </ul>
                  </nav>

                  <div className="offcanvas-mobile-menu__widgets">
                    <div className="contact-widget space-mb--30">
                      <ul>
                        <li>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" />
                          </svg>
                          <a href="/other/login-register">Login</a>
                        </li>
                        <li>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M335.7 32H177.1C158.8 32 144 46.6 144 64.9v381c0 18.4 14.8 34.1 33.1 34.1h158.5c18.3 0 32.3-15.7 32.3-34.1v-381C368 46.6 354 32 335.7 32zM241 55h30c2.2 0 4 1.8 4 4s-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4s1.8-4 4-4zm15.5 410c-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4zm93.5-49H162c-1.1 0-2-.9-2-2V85c0-1.1.9-2 2-2h188c1.1 0 2 .9 2 2v329c0 1.1-.9 2-2 2z" />
                          </svg>
                          <a href="tel://12452456012">(1245) 2456 012 </a>
                        </li>
                        <li>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                          </svg>
                          <a href="mailto:info@yourdomain.com">
                            info@yourdomain.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-widget">
                      <a href="https://www.twitter.com" target="_blank">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com" target="_blank">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
                          <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
                        </svg>
                      </a>
                      <a href="https://www.facebook.com" target="_blank">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                        </svg>
                      </a>
                      <a href="https://www.pinterest.com" target="_blank">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 32C132.3 32 32 132.3 32 256c0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48 20.1 5.9 41.4 9.2 63.5 9.2 123.7 0 224-100.3 224-224C480 132.3 379.7 32 256 32z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </CartProvider>
  );
};
export default Header;
