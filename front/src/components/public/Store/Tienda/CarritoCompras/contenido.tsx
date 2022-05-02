import { useCart, CartProvider } from "react-use-cart";
import { useEffect } from "react";
import ProductoRenglon from "./productoRenglon";
import CarritoVacio from "./carritoVacio";

const ContenidoCarrito = () => {
  const { isEmpty, items, emptyCart } = useCart();

  if (isEmpty) return <CarritoVacio />;
  let total = 0;
  return (
    <div className="cart-content space-mt--r130 space-mb--r130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="product-name" colSpan={2}>
                    Productos
                  </th>
                  <th className="product-price">Precio</th>
                  <th className="product-quantity">Cantidad</th>
                  <th className="product-subtotal">Total</th>
                  <th></th>
                  <th className="product-remove">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item, index) => {
                    total = total + item.price * item.quantity;
                    return (
                      <>
                        <ProductoRenglon
                          id={item.id}
                          cantidad={item.quantity}
                        />
                      </>
                    );
                  })}
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>TOTAL</th>
                  <td className="total">${total}</td>
                  <td>
                    {" "}
                    <a
                      className="lezada-button lezada-button--medium"
                      href="/pagar"
                    >
                      Ir a pagar
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-mb--r100 col-lg-12">
            <div className="cart-coupon-area space-pt--30 space-pb--30">
              <div className="align-items-center row">
                <div className="space-mb-mobile-only--30 col-lg-7">
                  <div className="lezada-form coupon-form">
                    <form></form>
                  </div>
                </div>
                <div className="text-left text-lg-right col-lg-5">
                  <button
                    className="lezada-button lezada-button--medium"
                    onClick={() => emptyCart()}
                  >
                    Limpiar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContenidoCarrito;
