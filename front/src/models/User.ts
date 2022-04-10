export interface IUser {
    id?: number;
    Nombres: string;
    Apellido_Paterno: string;
    Apellido_Materno: string;
    Rol?: string;
    Foto: string;
    Domicilio: String;
    Email: String;
    Telefono: Number;
    Dia_Entrada: Date;
    Contraseña: String;
  }
  
  export class User implements IUser {
    id?: number;
    Nombres: string;
    Apellido_Paterno: string;
    Apellido_Materno: string;
    Rol?: string;
    Foto: string;
    Domicilio: String;
    Email: String;
    Telefono: Number;
    Dia_Entrada: Date;
    Contraseña: String;
  
    constructor(data: IUser) {
      this.id = data.id || 0;
      this.Nombres = data.Nombres || "";
      this.Apellido_Paterno = data.Apellido_Paterno || '';
      this.Apellido_Materno = data.Apellido_Materno || '';
      this.Rol = data.Rol || '';
      this.Foto = data.Foto || '';
      this.Domicilio = data.Domicilio || '';
      this.Email = data.Email || '';
      this.Telefono = data.Telefono || 0;
      this.Dia_Entrada = data.Dia_Entrada || null;
      this.Contraseña = data.Contraseña || '';
    }
  }
  