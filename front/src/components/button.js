import React, { Component } from "react";

export default class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };

    this.image = this.nameHandler.bind(this);
  }

  nameHandler(e) {
    this.setState({ image: e.target.files[0] });
    document.getElementById("nombre").innerHTML = e.target.files[0].name;
  }

  async submitFormHandler(e) {
    e.preventDefault();
    const file = this.state;
    console.log(file);

    //obtener la url segura
    const { url } = await fetch("http://localhost:8080/api/s3Url").then((res) =>
      res.json()
    );
    //await fetch('http://localhost:9595/s3Url',file);
    //console.log(url );
    //publicar la imagen directamente en el s3 bucket
    //let r = JSON.stringify(url)+".jpeg"
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.image.type,
        //"Content-Type": "multipart/form-data",
      },
      body: file.image,
    });
    /*console.log(response);
        const imageUrl = url.split('?')[0];
        console.log(imageUrl);
        // postear el requst en el server para algun dato adicional
        /*
        const img = document.createElement("img");
        img.src = imageUrl;
        document.body.appendChild(img);*/
  }

  async getImangenes(e) {
    e.preventDefault();
    const imagenes = await fetch("http://localhost:8080/api/s3Url2").then((res) =>
      res.json()
    );
    console.log(imagenes.length);
    //var objects= null;
    var preUrl = "https://store4me.s3.us-west-2.amazonaws.com/";
    imagenes.forEach((elemento) => {
      // recoremos el elemento
      var k = preUrl + elemento.Key;
      elemento.Key = k;
    });
    //console.log(imagenes);

    return imagenes;
  }

  //onSubmit={this.submitFormHandler.bind(this)}>
  /*<form id="imageForm" onSubmit={this.submitFormHandler.bind(this)}>
                                <input id="imageInput" type="file" accept="image/*" onChange={this.nameHandler.bind(this)} />
                                <button type="submit">Up</button>
                            </form>*/

  render() {
    return (
      <div class="form-group" onSubmit={this.submitFormHandler.bind(this)}>
        <label for="exampleInputFile">Archivo</label>
        <div class="input-group">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="exampleInputFile"
              accept="image/*"
              onChange={this.nameHandler.bind(this)}
            />
            <label class="custom-file-label" for="exampleInputFile" id="nombre">
              Choose file
            </label>
          </div>
          <div class="input-group-append">
            <span
              class="input-group-text"
              id=""
              style={{ cursor: "pointer" }}
              onClick={this.submitFormHandler.bind(this)}
            >
              Upload
            </span>
          </div>
        </div>
      </div>
    );
  }
}
