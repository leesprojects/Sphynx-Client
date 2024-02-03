import { Injectable } from "@angular/core";
import { API_URL } from "./global-values";

@Injectable({ providedIn: 'root' })
export class APIService {

  apiUrl = API_URL;

  constructor() {
    this.apiHandshake();
  }

  private apiHandshake(): Promise<void> {
    return fetch(this.apiUrl).then(response => {
      if (response.status === 200) {
        console.info('API handshake: success');
      } else if (!response.ok) {
        throw new Error('API handshake failed');
      }
    });
  }

  get(endpoint: string): Promise<any> {
    const getUrl = `${this.apiUrl}${endpoint}`;
    return fetch(getUrl).then(res => {
      console.info(`GET ${endpoint}: success`);
      return Promise.resolve(res.json())
    }).catch(() => {
      console.info(`GET ${endpoint}: failed`);
    });
  }

}
