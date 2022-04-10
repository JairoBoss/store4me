import { User } from "../models/User";
import httpClient from "./HttpClient";

const prefix = "trabajador";

export default class UserService {
  static async create(user: User) {
    return (await httpClient.post(`${prefix}/`, user)).data;
  }

  static async update(user: User) {
    return (await httpClient.put(`${prefix}/${user.id}`, user)).data;
  }

  static async remove(id: number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async login(data: any) {
    return (await httpClient.post(`${prefix}/login`, data)).data;
  }

  static async getAll() {
    return (await httpClient.get(`${prefix}/`)).data;
  }
  
}