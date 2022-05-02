import React from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { Component, useState, useEffect } from "react";
import http from "./http-common";
import Swal from 'sweetalert2'

const SimpleDropZone = () => {
  const data = "fde744cb1dbfac574b27ce316cdc6753";

  const [imagenes, setImagenes] = useState([]);
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

  let imagenesArray = [];
  // Return array of uploaded files after submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(allFiles);
    allFiles.map((f) => {
      let id = f.xhr.response.slice(9, -2);
      console.log(f.xhr.response.slice(9, -2));
      console.log(f.xhr.response);

      http.get("/s3url2/" + id).then((response) => {
        console.log(response.data);
        imagenesArray.push(response.data);
      });
    });
    setImagenes(imagenesArray);
    console.log(imagenes);

    // setImagenes(imagenes);
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
    </>
  );
};

export default SimpleDropZone;
