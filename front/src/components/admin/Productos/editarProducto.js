import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import CategoriaService from "../../../services/Categoria.service";
import http from "../Imagen/http-common";
import TablaProductos from "./tablaProductos";
import ProductoService from "../../../services/Producto.service";

const CrearProducto = ({ id }) => {
  const [imagenes, setImagenes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});
  const [imagenesInicialesH, setImagenesInicialesH] = useState([]);
  const [imagenesInicialesLinkH, setImagenesInicialesLink] = useState([]);

  useEffect(() => {
    loadCategorias();
    loadProducto();
  }, []);

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

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getID(id);
      ProductoService.getID(id)
        .then((response) => {
          // console.log(response.Imagenes);
          setImagenesInicialesH(response.Imagenes);

          response.Imagenes.map((imagen, index) => {
            http.get("/s3url2/" + imagen).then((data) => {
              setImagenesInicialesLink((imagenesInicialesLinkH) => [
                ...imagenesInicialesLinkH,
                data,
              ]);
            });
          });
        })
        .catch((e) => {
          console.log(e);
        });
      setState(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getUploadParams = ({ file, meta }) => {
    let body = new FormData();
    body.append("foto", file);
    return { url: "http://localhost:8080/api/s3Url", method: "post", body };
  };

  const handleChangeStatus = ({ meta, file }, status) => {};

  let imagenesArray = [];
  const handleSubmit = (files, allFiles) => {
    allFiles.map((f) => {
      let id = f.xhr.response.slice(9, -2);
      imagenesArray.push(id);
    });
    setImagenes(imagenesArray);
    setState({
      ...state,
      Imagenes: imagenesArray,
    });
  };

  const actualizarProducto = () => {
    let imagenesActualizadas = [];
    const promesa = imagenesInicialesLinkH.map((imagen, index) => {
      imagenesActualizadas.push(imagen.data.slice(44, 76));
      setState({ ...state, Imagenes: imagenesActualizadas });
    });

    Promise.all(promesa).then(() => {
      setState({ ...state, Imagenes: imagenesActualizadas });
      ProductoService.update(state)
        .then((response) => {
          console.log(response);
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
        title: "Producto creado con exito!",
      });
    });

    console.log(state);

    // regresar();
  };

  const regresar = () => {
    //https://stackoverflow.com/questions/61220508/trying-to-use-unmountcomponentatnode-from-react-dom-and-i-get-errpor-main-js
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
                <h5 className="font-weight-bolder">Editar producto</h5>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <label>Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      spellCheck="false"
                      data-ms-editor="true"
                      value={state.Nombre}
                      onChange={(e) =>
                        setState({ ...state, Nombre: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-3 col-sm-3 mt-3 mt-sm-0">
                    <label>Precio</label>
                    <input
                      className="form-control"
                      type="number"
                      value={state.Precio}
                      onChange={(e) =>
                        setState({ ...state, Precio: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label className="mt-4">Categoria</label>
                    {loading && <CircularProgress />}
                    <div>
                      <label className="select" htmlFor="slct">
                        {true ? (
                          <>
                            <select
                              id="slct"
                              required="required"
                              value={state.Categorias}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  Categorias: [e.target.value],
                                })
                              }
                            >
                              <option
                                value
                                disabled="disabled"
                                selected="selected"
                              >
                                Selecciona una categoria
                              </option>
                              {categorias.map((categoria, index) => {
                                return (
                                  <option key={index} value={categoria._id}>
                                    {categoria.Nombre}
                                  </option>
                                );
                              })}
                            </select>
                            <svg>
                              <use xlinkHref="#select-arrow-down" />
                            </svg>
                          </>
                        ) : null}
                      </label>
                      <svg className="sprites">
                        <symbol id="select-arrow-down" viewBox="0 0 10 6">
                          <polyline points="1 1 5 5 9 1" />
                        </symbol>
                      </svg>
                    </div>
                  </div>
                  <div className="col-3">
                    <label className="mt-4">Stock</label>
                    <input
                      className="form-control"
                      type="number"
                      value={state.Stock}
                      onChange={(e) =>
                        setState({ ...state, Stock: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-5">
                    <label className="mt-4">Descripcion</label>
                    <textarea
                      className="form-control"
                      spellCheck="false"
                      data-ms-editor="true"
                      value={state.Descripcion}
                      onChange={(e) =>
                        setState({ ...state, Descripcion: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label className="mt-4">Imagenes</label>
                    <div className="ql-toolbar ql-snow">
                      <Dropzone
                        inputContent="Click o arraste y suelte las imagenes aquí para subirlas"
                        inputWithFilesContent="Añadir mas imagenes"
                        submitButtonContent="Subir imagenes"
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        onSubmit={handleSubmit}
                        accept="image/*"
                      />
                    </div>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <>
                        {imagenesInicialesLinkH.map((imagen, index) => {
                          return (
                            <>
                              <br />
                              <div className="row">
                                {/* <center> */}
                                <div className="col-12 col-sm-1"></div>
                                <div className="col-12 col-sm-1"></div>
                                <div className="col-12 col-sm-1"></div>
                                <div className="col-13 col-sm-2"></div>

                                <div className="col-12 col-sm-1">
                                  <img
                                    className="w-80 border-radius-lg shadow-lg mt-1"
                                    src={imagen.data}
                                  />
                                </div>
                                <div
                                  className="col-3 col-sm-3 mt-3 mt-sm-0"
                                  style={{ paddingTop: "19px" }}
                                >
                                  <button
                                    onClick={() =>
                                      console.log(imagenesInicialesLinkH)
                                    }
                                  >
                                    Ver
                                  </button>
                                  <button
                                    onClick={() =>
                                      setImagenesInicialesLink(
                                        imagenesInicialesLinkH.filter(
                                          (item) => item.data !== imagen.data
                                        )
                                      )
                                    }
                                  >
                                    Borrar
                                  </button>
                                </div>
                                {/* </center> */}
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
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
                          onClick={() => actualizarProducto()}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CrearProducto;
