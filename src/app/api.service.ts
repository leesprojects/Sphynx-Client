import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({ providedIn: 'root' })
export class APIService {
  apiUrl = environment.API_URL as string;
  envName = environment.ENV_NAME as string;
  apiAvailable = false;

  constructor() {
    this.apiHandshake();
  }

  private apiHandshake(): Promise<void> {
    return fetch(this.apiUrl).then(response => {
      this.apiAvailable = response.status === 200;
      console.info('API:', this.apiUrl, `\nENV: ${this.envName}\nHandshake: ${response.status}\nAPI Available: ${this.apiAvailable ? 'Yes' : 'No'}`);
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
