import React from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { Component, useState, useEffect } from "react";
import http from "./http-common";
import Swal from "sweetalert2";

const SimpleDropZone = () => {
  const data = "fde744cb1dbfac574b27ce316cdc6753";

  const [state, setState] = useState([]);
  const [imagen, setImage] = useState();

    // Payload data and url to upload files
  const getUploadParams = ({ file, meta }) => {
    let body = new FormData();
    body.append("foto", file);

    return { url: "http://localhost:8080/api/s3Url", method: "post", body };
  };

  // Return the current status of files being uploaded
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  let imagenes = [];
  // Return array of uploaded files after submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(allFiles);
    allFiles.map((f) => {
      let id = f.xhr.response.slice(9, -2);
      console.log(f.xhr.response.slice(9, -2));
      console.log(f.xhr.response);

      http.get("/s3url2/" + id).then((response) => {
        console.log(response.data);
        imagenes.push(response.data);
      });
    });
    setState(imagenes);
    console.log(state);
    // allFiles.map((f) => {
    //   http
    //     .get("/s3url2/" + f.xhr.id.slice(0, -2))
    //     .then((response) => {
    //       console.log(`Respues:${response.data}, id:${f.meta.id.slice(0, -2)}`);
    //       imagenes.push(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });

    // setState(imagenes);
  };

  /**
   * getUploadParams()
   * Esa es para guardar todo basicamente es la ultima parte
   */

  return (
    <>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
      />
      {/* {state &&
        state.map((imagen, index) => {
          <img src={imagen} />;
        })} */}
    </>
  );
};

export default SimpleDropZone;
