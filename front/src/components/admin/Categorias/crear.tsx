import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { Categoria } from "../../../models/Categoria";
import CategoriaService from "../../../services/Categoria.service";
import Swal from "sweetalert2";
import "./estilos.css";
import ReactDOM from "react-dom";
import TablaCategorias from "./tabla";
const CrearCategoria = () => {
  const [datos, setDatos] = useState<Categoria>({
      Nombre: "",
      Descripcion: "",

  });

  const guardarCategoria = () => {    
    CategoriaService.create(datos)
      .then((response) => {
        
      })
      .catch((e) => {
        console.log(e);
      });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Categoria creada con exito!",
    });

    regresar();
  };

  const regresar = () => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<TablaCategorias />, divDash);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bolder">Crear categoria</h5>
                {JSON.stringify(datos)}
                {!datos ? (
                  <CircularProgress />
                ) : (
                  <>
                    <div className="row">
                      <div className="col-12 col-sm-9">
                        <label>Nombre</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Minimal Bar Stool"
                          spellCheck="false"
                          data-ms-editor="true"
                          value={datos.Nombre}
                          onChange={(e) =>
                            setDatos({
                              ...datos,
                              Nombre: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-9">
                        <label>Descripcion</label>
                        <textarea
                          className="form-control"
                          defaultValue="Minimal Bar Stool"
                          spellCheck="false"
                          data-ms-editor="true"
                          value={datos.Descripcion}
                          onChange={(e) =>
                            setDatos({
                              ...datos,
                              Descripcion: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-12 col-sm-3">
                        <button
                          className="buttonCancel"
                          onClick={() => regresar()}
                        >
                          Cancelar
                        </button>
                      </div>
                      <div className="col-12 col-sm-3">
                        <button
                          className="buttonSave"
                          onClick={() => guardarCategoria()}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearCategoria;