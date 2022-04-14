import { Producto } from "../models/Producto";
import httpClient from "./HttpClient";

const prefix = "producto";

export default class ProductoService {
  static async create(producto: Producto) {
    return (await httpClient.post(`${prefix}/`, producto)).data;
  }

  static async update(producto: Producto) {
    return (await httpClient.put(`${prefix}/${producto._id}`, producto)).data;
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
