import { Categoria } from "../models/Categoria";
import httpClient from "./HttpClient";

const prefix = "categoria";

export default class CategoriaService {
  static async create(categoria: Categoria) {
    return (await httpClient.post(`${prefix}/`, categoria)).data;
  }

  static async update(categoria: Categoria) {
    return (await httpClient.put(`${prefix}/${categoria._id}`, categoria)).data;
  }

  static async remove(id: any) {
    return (await httpClient.delete(`/${prefix}/${id}`)).data;
  }

  static async getID(id: any) {
    return (await httpClient.get(`/${prefix}/${id}`)).data;
  }

  static async getAll() {
    return (await httpClient.get(`${prefix}/`)).data;
  }
  
}