export interface IPaypal {
  _id?: number;
  Nombres: string;
  NombreProducto: string;
  cantidad: string;
  IdPaypal: string;
  Pagado: boolean;
}

export class Paypal implements IPaypal {
  _id?: number;
  Nombres: string;
  NombreProducto: string;
  cantidad: string;
  IdPaypal: string;
  Pagado: boolean;

  constructor(data: IPaypal) {
    this._id = data._id || 0;
    this.Nombres = data.Nombres || "";
    this.cantidad = data.cantidad || "";
    this.IdPaypal = data.IdPaypal || "";
    this.Pagado = data.Pagado || false;
  }
}
