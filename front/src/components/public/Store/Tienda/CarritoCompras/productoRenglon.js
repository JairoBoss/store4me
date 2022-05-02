import { useCart, CartProvider } from "react-use-cart";
import { useEffect, useState } from "react";
import ProductoService from "../../../../../services/Producto.service";
import http from "../../../../admin/Imagen/http-common";

const ProductoRenglon = ({ id, cantidad }) => {
  const {
    removeItem,    
  } = useCart();
const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    Nombre: "",
    Precio: 1,
    Imagenes: "",
    Stock: 1,
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
        document.getElementById(`imagencar${id}`).src = data.data;                
      });      
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <tr>
        <td className="product-thumbnail">
          <a href="/shop/product-basic/lorem-ipsum-decor-eight">
            <img
              id={`imagencar${id}`}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              className="img-fluid"
              alt=""
            />
          </a>
        </td>
        <td className="product-name">
          <a href={`/producto/${id}`}>{state.Nombre}</a>
        </td>
        <td className="product-price">
          <span className="price">${state.Precio}</span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus">
            <input
              className="cart-plus-minus-box"
              type="text"
              defaultValue={cantidad}
            />
          </div>
        </td>
        <td className="total-price">
          <span className="price">${cantidad * state.Precio}</span>
        </td>
        <th></th>
        <td className="product-remove">
          <button onClick={() => removeItem(id)}>
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
        </td>
      </tr>
  );
};

export default ProductoRenglon;
