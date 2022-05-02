import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriaService from "../../../../../services/Categoria.service";
import ProductoService from "../../../../../services/Producto.service";
import http from "../../../../admin/Imagen/http-common";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const ProductoDetalle = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const { addItem } = useCart();
  const [categoria, setCategoria] = useState({
    Nombre: "",
  });
  const [state, setState] = useState({
    Nombre: "",
    Precio: "",
    Descripcion: "",
    Imagenes: [],
    Stock: 1,
    Categorias: [],
  });
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    loadProducto();
  }, []);

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getID(id);
      results.Imagenes.map((id) => {
        http.get("/s3url2/" + id).then((data) => {
          setImagenes((imagenes) => [...imagenes, data.data]);
          ProductoCarrito.imagen = imagenes[0];
        });
      });
      console.log(imagenes);
      console.log(results);
      const results2 = await CategoriaService.getID(results.Categorias[0]);
      setCategoria(results2);
      setState(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const ProductoCarrito = {
    id: id,
    name: state.Nombre,
    price: state.Precio,
    quantity: cantidad,
    imagen: ""
  };

  const agregarCarro = () =>{
    addItem(ProductoCarrito, cantidad);
    // navigate("/");
  }

  return (
    <div className="product-details space-mt--r100 space-mb--r100">
      <div className="container">
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="row">
            <div className="space-mb-mobile-only--50 col-lg-6">
              <div className="product-large-image-wrapper space-mb--n10">
                {imagenes.map((imagen, index) => {
                  return (
                    <div key={index}>
                      <div className="react_lightgallery_item"></div>
                      <div className="single-image space-mb--10">
                        <img src={imagen} className="img-fluid" alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ position: "sticky", top: 90 }}>
                <div className="product-content">
                  <div className="product-content__rating-wrap d-block d-sm-flex space-mb--20">
                    <div className="product-content__rating space-mr--20">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="yellow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="yellow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="yellow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="yellow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="yellow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="product-content__title space-mb--20">
                    {state.Nombre}
                  </h2>
                  <div className="product-content__price space-mb--20">
                    <span className="main-price">${state.Precio}</span>
                  </div>
                  <div className="product-content__description space-mb--30">
                    <p>{state.Descripcion}</p>
                  </div>
                  <div className="product-content__size-color"></div>
                  <div className="product-content__quantity space-mb--40">
                    <div className="product-content__quantity__title">
                      Cantidad
                    </div>
                    <div className="cart-plus-minus">
                      {/* <button className="qtybutton">-</button> */}
                      <input
                        className="cart-plus-minus-box"
                        type="number"
                        defaultValue={1}
                        max={state.Stock}
                        min="1"
                        onChange={(e) => setCantidad(e.target.value)}
                      />
                      {/* <button className="qtybutton">+</button> */}
                    </div>
                  </div>
                  <div className="product-content__button-wrapper d-flex align-items-center">
                    <button
                      className="lezada-button lezada-button--medium product-content__cart space-mr--10"
                      href="/"
                      onClick={() => agregarCarro()}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                  <div className="product-content__other-info space-mt--50">
                    <table>
                      <tbody>
                        <tr className="single-info">
                          <td className="title">SKU: </td>
                          <td className="value">{id}</td>
                        </tr>
                        <tr className="single-info">
                          <td className="title">Categoria: </td>
                          <td className="value">
                            <a
                              id="categoriaid"
                              href={`/categoria/${state.Categorias[0]}`}
                            >
                              {categoria.Nombre}
                            </a>
                          </td>
                        </tr>
                        <tr className="single-info">
                          <td className="title">Compartir en: </td>
                          <td className="value">
                            <ul className="social-icons">
                              <li>
                                <a href="https://www.twitter.com">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="https://www.facebook.com">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 320 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="https://www.youtube.com">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductoDetalle;
