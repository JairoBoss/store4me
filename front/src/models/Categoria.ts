export interface ICategoria {
    _id?: number;
    Nombre: string;
    Descripcion: string;    
  }
  
  export class Categoria implements ICategoria {
    [x: string]: any;
    id?: number;
    Nombre: string;
    Descripcion: string;
      
    constructor(data: ICategoria) {
      this.id = data._id || 0;
      this.Nombre = data.Nombre || "";
      this.Descripcion = data.Descripcion || '';      
    }
  }
  