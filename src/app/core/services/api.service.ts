import axios from 'axios';
import { environment } from '../../environments/environment';

export class ApiService {

  private static readonly instance = axios.create({
    baseURL: environment.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  });


  static get<T>(endpoint: string, url: string = '') {
    return this.instance.get<T>(`/${endpoint}${url}`).then(res => res.data);
  }

  static post<T>(endpoint: string, url: string, data: any) {
    return this.instance.post<T>(`/${endpoint}${url}`, data).then(res => res.data);
  }

  static put<T>(endpoint: string, url: string, data: any) {
    return this.instance.put<T>(`/${endpoint}${url}`, data).then(res => res.data);
  }

  static delete<T>(endpoint: string, url: string) {
    return this.instance.delete<T>(`/${endpoint}${url}`).then(res => res.data);
  }
}
