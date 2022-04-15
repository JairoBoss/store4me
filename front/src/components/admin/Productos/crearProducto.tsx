import Imagen from "../Imagen/imagen";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const CrearProducto = () => {
  const [imagenes, setImagenes] = useState([]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bolder">Product Information</h5>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Minimal Bar Stool"
                      spellCheck="false"
                      data-ms-editor="true"
                    />
                  </div>
                  <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                    <label>Weight</label>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={2}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label className="mt-4">Collection</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Summer"
                      spellCheck="false"
                      data-ms-editor="true"
                    />
                  </div>
                  <div className="col-3">
                    <label className="mt-4">Price</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$90"
                      spellCheck="false"
                      data-ms-editor="true"
                    />
                  </div>
                  <div className="col-3">
                    <label className="mt-4">Quantity</label>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={50}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label className="mt-4">Description</label>
                    <p className="form-text text-muted text-xs ms-1 d-inline">
                      (optional)
                    </p>
                    <div className="ql-toolbar ql-snow">
                      <img
                        className="w-100 border-radius-lg shadow-lg mt-1"
                        src="https://mycyberuniverse.com/images/articles/Arthur/how-fix-reference-error-path-not-defined/1.png"
                        alt=""
                      />
                    </div>

                    <Carousel>
                      {imagenes.map((imagen, index) => {
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={imagen}
                            alt="First slide"
                          />
                        </Carousel.Item>;
                      })}
                    </Carousel>
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
