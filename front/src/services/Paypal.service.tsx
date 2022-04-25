import { Paypal } from "../models/Paypal";
import httpClient from "./HttpClient";

const prefix = "pagos";

export default class PaypalService {
  static async create(paypal: Paypal) {
    return (await httpClient.post(`${prefix}/creando-orden`, paypal)).data;
  }
}
