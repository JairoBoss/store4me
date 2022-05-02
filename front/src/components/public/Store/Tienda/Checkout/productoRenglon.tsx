import { useEffect, useState } from "react";
import ProductoService from "../../../../../services/Producto.service";

const ProductoRenglon = ({ id, cantidad }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    Nombre: "",
    Precio: 1,
  });

  useEffect(() => {
    loadProducto();
  }, []);

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getID(id);
      setState(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li>
      {state.Nombre} x {cantidad}
      <span>${state.Precio}</span>
    </li>
  );
};
export default ProductoRenglon;
