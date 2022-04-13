import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { Categoria } from "../../../models/Categoria";
import CategoriaService from "../../../services/Categoria.service";
import Swal from "sweetalert2";
import "./estilos.css";
const EditarCategoria = ({id}) => {
  // const [datos, setDatos] = useState({
  //   _id: "",
  //   Nombre: "",
  //   Descripcion: "",
  // });
  const [datos, setDatos] = useState<Categoria>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = async () => {
    setLoading(true);
    try {
      const result = await CategoriaService.getID(id);
      setDatos(result);
      console.log(datos);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const ActualizarCategoria = () => {
    CategoriaService.update(datos)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
      Swal.fire({
        icon: "success",
        title: "Noticia actualizada con exito!",
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bolder">Editar categoria</h5>
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
                        <button className="buttonCancel">Cancelar</button>
                      </div>
                      <div className="col-12 col-sm-3">
                        <button className="buttonSave" onClick={() => ActualizarCategoria()}>Guardar</button>
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

export default EditarCategoria;
