import { Paypal } from "../models/Paypal";
import httpClient from "./HttpClient";

const prefix = "pagost";

export default class PagosService {
  static async remove(id: any) {
    return (await httpClient.delete(`/${prefix}/${id}`)).data;
  }

  static async getID(id: any) {
    return (await httpClient.get(`/${prefix}/${id}`)).data;
  }

  static async getAll() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async getAllPaid() {
    return (await httpClient.get(`${prefix}/paid`)).data;
  }
}
