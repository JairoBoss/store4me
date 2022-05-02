export interface IPaypal {
  _id?: number;
  Nombres: string;
  Apellidos: string;
  Email: string;
  Telefono: string;
  Calle: string;
  Colonia: string;
  Pais: string;
  Ciudad: string;
  Estado: string;
  CodigoPostal: string;
  Productos: string[];
  Indicacion: string;  
  cantidad: string;
  IdPaypal: string;
  Pagado: boolean;
}

export class Paypal implements IPaypal {
  _id?: number;
  Nombres: string;
  Apellidos: string;
  Email: string;
  Telefono: string;
  Calle: string;
  Colonia: string;
  Pais: string;
  Ciudad: string;
  Estado: string;
  CodigoPostal: string;
  Productos: string[];
  Indicacion: string;
  cantidad: string;
  IdPaypal: string;
  Pagado: boolean;

  constructor(data: IPaypal) {
    this._id = data._id || 0;
    this.Nombres = data.Nombres || "";
    this.Apellidos = data.Apellidos || "";
    this.Email = data.Email || "";
    this.Telefono = data.Telefono || "";
    this.Calle = data.Calle || "";
    this.Colonia = data.Colonia || "";
    this.Pais = data.Pais || "";
    this.Ciudad = data.Ciudad || "";
    this.Estado = data.Estado || "";
    this.CodigoPostal = data.CodigoPostal || "";
    this.Productos = data.Productos || [];
    this.Indicacion = data.Indicacion || "";
    this.cantidad = data.cantidad || "";
    this.IdPaypal = data.IdPaypal || "";
    this.Pagado = data.Pagado || false;
  }
}  