import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { Paypal } from "../../../../../models/Paypal";
import ProductoRenglon from "./productoRenglon";
import PaypalService from "../../../../../services/Paypal.service";
const Formulario = () => {
  const { isEmpty, items, emptyCart } = useCart();

  const [state, setState] = useState<Paypal>();
  useEffect(() => {
    setState({
      ...state,
      Productos: productosid,
      cantidad: String(total),
    });
  }, []);

  const validarInformacion = () => {
    if (state.Pais == undefined) {
      setState({
        ...state,
        Pais: "Mexico",
      });
    }

    PaypalService.create(state).then((response) => {
      emptyCart();
      window.location.href = response.links[1].href;      
    });
  };

  let total = 0;
  let productosid = [];
  return (
    <div className="checkout-area space-mt--r130 space-mb--r130">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="lezada-form">
              <form
                className="checkout-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="row row-40">
                  <div className="col-lg-7 space-mb--20">
                    <div id="billing-form" className="space-mb--40">
                      <h4 className="checkout-title">Direccion de entrega</h4>
                      <div className="row">
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Nombre(s) *</label>
                          <input
                            type="text"
                            placeholder="Nombre(s)"
                            onChange={(e) =>
                              setState({ ...state, Nombres: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Apellidos *</label>
                          <input
                            type="text"
                            placeholder="Apellidos"
                            onChange={(e) =>
                              setState({ ...state, Apellidos: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Email *</label>
                          <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) =>
                              setState({ ...state, Email: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Telefono *</label>
                          <input
                            type="text"
                            placeholder="Telefono"
                            onChange={(e) =>
                              setState({ ...state, Telefono: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-12 space-mb--20">
                          <label>Dirrecion*</label>
                          <input
                            type="text"
                            placeholder="Calle"
                            onChange={(e) =>
                              setState({ ...state, Calle: e.target.value })
                            }
                          />
                          <input
                            type="text"
                            placeholder="Colonia"
                            onChange={(e) =>
                              setState({ ...state, Colonia: e.target.value })
                            }
                          />
                          <input
                            type="text"
                            placeholder="Indicacion"
                            onChange={(e) =>
                              setState({ ...state, Indicacion: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Pais*</label>
                          <select
                            onChange={(e) =>
                              setState({ ...state, Pais: e.target.value })
                            }
                          >
                            <option value="Mexico">Mexico</option>
                            <option value="E.U.">Estados Unidos</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Ciudad *</label>
                          <input
                            type="text"
                            placeholder="Ciudad"
                            onChange={(e) =>
                              setState({ ...state, Ciudad: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Estado *</label>
                          <input
                            type="text"
                            placeholder="Estado"
                            onChange={(e) =>
                              setState({ ...state, Estado: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-md-6 col-12 space-mb--20">
                          <label>Codigo postal *</label>
                          <input
                            type="text"
                            placeholder="Codigo postal"
                            onChange={(e) =>
                              setState({
                                ...state,
                                CodigoPostal: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-12 space-mb--50">
                        <h4 className="checkout-title">Carrito de compras</h4>
                        <div className="checkout-cart-total">
                          <h4>
                            Producto <span>Total</span>
                          </h4>
                          <ul>
                            {items &&
                              items.map((item, index) => {
                                total = total + item.price * item.quantity;
                                productosid.push([
                                  item.id,
                                  String(item.quantity),
                                ]);
                                return (
                                  <ProductoRenglon
                                    key={index}
                                    id={item.id}
                                    cantidad={item.quantity}
                                  />
                                );
                              })}
                          </ul>
                          <p>
                            Sub Total <span>${total}</span>
                          </p>
                          <p>
                            Shipping Fee <span>$150.00</span>
                          </p>
                          <h4>
                            Total <span>${total + 150}</span>
                          </h4>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="lezada-button lezada-button--medium space-mt--20"
                          onClick={() => validarInformacion()}
                        >
                          Ir a Paypal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
