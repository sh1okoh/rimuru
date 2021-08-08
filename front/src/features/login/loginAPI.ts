import type { HttpClient } from '../../common/HttpClient';

export class LoginAPI {
  constructor(private httpClient: HttpClient) {}
  post() {
    this.httpClient.post<number>();
  }
}