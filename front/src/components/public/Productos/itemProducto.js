import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Producto } from "../../../models/Producto";
import http from "../../admin/Imagen/http-common";
import ProductoService from "../../../services/Producto.service";

const ItemProducto = ({ id }) => {
  const [state, setState] = useState({
    Nombre: "",
    Precio: "",
    Imagenes: [],
  });
  const [loading, setLoading] = useState(false);
  const [imagenLink, setImagenLink] = useState(null);

  useEffect(() => {
    loadProducto();
  }, []);

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getID(id);
      // console.log(results);
      setState(results);
      http.get("/s3url2/" + results.Imagenes[0]).then((data) => {
        console.log(data.data);
        document.getElementById(`imgProducto${id}`).src = data.data;
        // setImagenLink(data.data);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const loadImagen = () => {
    setLoading(true);
    try {
      if (state.Imagenes.length >= 1) {
        http.get("/s3url2/" + state.Imagenes[0]).then((data) => {
          setImagenLink(data.data);
          console.log(data.data);
        });
      } else {
        setLoading(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
        <button>Comprar</button>
      </div>
    </>
  );
};

export default ItemProducto;
