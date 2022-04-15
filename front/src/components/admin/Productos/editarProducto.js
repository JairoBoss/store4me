import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { Producto } from "../../../models/Producto";
import ProductoService from "../../../services/Producto.service";
import CategoriaService from "../../../services/Categoria.service";
import Swal from "sweetalert2";
import "../Categorias/estilos.css";
import ReactDOM from "react-dom";
import TablaProductos from "./tablaProductos";
import SimpleDropZone from "../Imagen/imagen2";
import { ComboBox } from "@progress/kendo-react-dropdowns";

const EditarProducto = ({ id }) => {
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [categoriasNombre, setCategoriasNombre] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    loadProducto();
    loadCategorias();
    let arrayCat = []
    categorias.map((categoria, index)=>{
      arrayCat.push(categoria.Nombre);
    })
    setCategoriasNombre(arrayCat);
    console.log(categoriasNombre)
  }, []);

  const loadProducto = async () => {
    setLoading(true);
    try {
      const result = await ProductoService.getID(id);
      setDatos(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const loadCategorias = async () => {
    setLoading(true);
    try {
      const results = await CategoriaService.getAll();
      setCategorias(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const ActualizarProducto = () => {
    ProductoService.update(datos)
      .then((response) => {})
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
      title: "Producto editada con exito!",
    });

    regresar();
  };

  const regresar = () => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<TablaProductos />, divDash);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bolder">Editar producti</h5>
                {JSON.stringify(datos)}
                <SimpleDropZone />
                
                {!categoriasNombre ? (
                  <CircularProgress />
                ) : (
                
                  <ComboBox
                    style={{
                      width: "300px",
                    }}
                    data={categoriasNombre}
                    value={value}
                    onChange={(e) => setValue(e.value)}
                  />
                )}
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
                          onClick={() => ActualizarProducto()}
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

export default EditarProducto;
