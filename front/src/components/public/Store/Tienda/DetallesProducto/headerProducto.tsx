import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoService from "../../../../../services/Producto.service";

const HeaderProducto = () => {
  const { id } = useParams();
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
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

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
            <h1 className="breadcrumb__title">{state.Nombre}</h1>
            <ul className="breadcrumb__list">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/tienda">Tienda</a>
              </li>
              <li>{state.Nombre}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderProducto;
