import { Component, useState } from "react";
import http from "./http-common";
import Swal from "sweetalert2";

const Imagen = () => {
  const [state, setState] = useState({
    loading: false,
    imagen: null,
    imagenActual: 1,
    linkImagen: "",
  });

  const submitFormHandler = async (e) => {
    const file = state;
    console.log(file);
    if (file.imagen != null) {
      http.delete("/s3url3/" + state.imagen);
      setState({ ...state, loading: true });
      let data = new FormData();      
      data.append("foto", file.imagen);
      //console.log(file.imagen)

      await http.post("/s3Url", data).then((response) => {
        http
          .get("/s3url2/" + response.data.data)
          .then((response) => {
              console.log(response.data.data)
            document.getElementById("imgNoticia").src = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
        setState({
          ...state,
          linkImagen: response.data,
          loading: false,
        });
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "No ha cargado un arhivo aun.",
      });
    }
  };

  return (
    <div
      id="imagenUno"
      classNameName="form-group col-md-12"
      style={{ display: "inline" }}
    >
      <label classNameName="font-weight-bold">Imagenes para la galeria</label>
      <br></br>
      <a>Nota: en el orden que se suban, será el orden en que aparezca</a>
      <div className="container" style={{ marginTop: "10px" }}>
        <table className="table">
          <thead>
            <tr>
              <th
                className="text-center align-middle"
                style={{ width: "10%" }}
              ></th>
              <th className="text-center align-middle" style={{ width: "80%" }}>
                <img
                  id="imgNoticia"
                  style={{ marginBottom: "10px" }}
                  src={state.imagen}
                  className="img-fluid"
                  alt="Carga una imagen"
                ></img>
              </th>
              <th
                className="text-center align-middle"
                style={{ width: "10%" }}
              ></th>
            </tr>
            <tr>
              <th
                className="text-center align-middle"
                style={{ width: "10%" }}
              ></th>
              <th
                className="text-center align-middle"
                id="imagenActual"
                style={{ width: "80%" }}
              >
                {"Imagen 1"}
              </th>
              <th className="text-center align-middle" style={{ width: "10%" }}>
                <button className="btn btn-danger">
                  Eliminar imagen <i classNameName="far fa-trash-alt"></i>
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="input-group">
        <input
          style={{ marginTop: "10px" }}
          id="imagenesGaleria"
          className="custom-file-input"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setState({
              ...state,
              imagen: e.target.files[0]
            })
            
          }
        />
        <label className="custom-file-label" id="nombreImg1"></label>
        <button
          style={{ marginTop: "10px" }}
          classNameName="btn btn-success"
          type="submit"
          onClick={() => submitFormHandler()}
        >
          Cargar
        </button>
      </div>
    </div>
  );
};

export default Imagen;
