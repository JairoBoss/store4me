import { useEffect, useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import ProductoService from "../../../../services/Producto.service";
import http from "../../../admin/Imagen/http-common";

const ItemProducto = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    Nombre: "",
    Precio: "",
    Imagenes: [],
  });

  useEffect(() => {
    loadProducto();
  }, []);

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getID(id);

      setState(results);
      http.get("/s3url2/" + results.Imagenes[0]).then((data) => {
        document.getElementById(`imagen${id}1`).src = data.data;        
        ProductoCarrito.imagen = data.data;
      });
      http.get("/s3url2/" + results.Imagenes[1]).then((data) => {
        document.getElementById(`imagen${id}2`).src = data.data;
      });
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
    quantity: 1,
    imagen: ""
  };
  const { addItem } = useCart();
  require("../index.css");
  return (
    <div className="space-mb--r50 col-lg-4 col-md-6">
      <div className="product-grid">
        <div className="product-grid__image">
          <a className="image-wrap" href={`/producto/${id}`}>
            <img
              id={`imagen${id}1`}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              className="img-fluid"
              alt={state.Nombre}
            />
            <img
              id={`imagen${id}2`}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              className="img-fluid"
              alt={state.Nombre}
            />
          </a>
        </div>
        <div className="product-grid__content">
          <div className="title">
            <h3>
              <a href="/shop/product-basic/lorem-ipsum-decor-one">
                {state.Nombre}
              </a>
            </h3>
            <a onClick={() => addItem(ProductoCarrito, 1)}>Añadir al carro</a>
          </div>
          <div className="price">
            <span className="discounted-price">${state.Precio}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemProducto;
