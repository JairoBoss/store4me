export interface IProducto {
  _id?: number;
  Nombre: string;
  Precio: string;
  Stock: string;
  Descripcion: string;
  Categorias: Array<string>;
  Imagenes: Array<string>;
}

export class Producto implements IProducto {
  [x: string]: any;
  id?: number;
  Nombre: string;
  Precio: string;
  Stock: string;
  Descripcion: string;
  Categorias: Array<string>;
  Imagenes: Array<string>;

  constructor(data: IProducto) {
    this.id = data._id || 0;
    this.Nombre = data.Nombre || "";
    this.Precio = data.Precio || "";
    this.Stock = data.Stock || "";
    this.Descripcion = data.Descripcion || "";
    this.Categorias = data.Categorias || [];
    this.Imagenes = data.Imagenes || [];
  }
}
