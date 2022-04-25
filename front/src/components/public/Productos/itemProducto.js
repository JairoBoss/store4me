import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Producto } from "../../../models/Producto";
import http from "../../admin/Imagen/http-common";
import ProductoService from "../../../services/Producto.service";
import PaypalService from "../../../services/Paypal.service";

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
        
        document.getElementById(`imgProducto${id}`).src = data.data;
        // setImagenLink(data.data);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const pagar = () => {
    const pago = {
      Nombres: "Jairo",
      NombreProducto: state.Nombre,
      cantidad: state.Precio,
    };
    PaypalService.create(pago).then((response) => {
      window.location.href = response.links[1].href;
    });
  };

  return (
    <>
      {loading ? <CircularProgress /> : null}
      <div className="col-4">
        <img
          id={`imgProducto${id}`}
          src="https://www.usedtextilemachines.eu/wp-content/uploads/2021/05/loader-a6178f443133606fe19006604d0cafb5-90.gif"
        />
        <h4>{state.Nombre}</h4>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
        </div>
        <p>${state.Precio}</p>
        <button onClick={() => pagar()}>Comprar</button>
      </div>
    </>
  );
};

export default ItemProducto;
