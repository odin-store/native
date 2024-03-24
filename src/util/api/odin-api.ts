import axios, { AxiosPromise } from "axios";

export class OdinAPI {
  private readonly backend = `http://${import.meta.env.VITE_APP_BACKEND_URL}`;

  private async refresh() {
    const res = await this.request("POST", "/auth/refresh", null);

    localStorage.setItem("access_token", res.data.access_token);
  }

  private async request(
    method: string,
    path: string,
    body: any | null
  ): Promise<AxiosPromise> {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    const res = await axios.request({
      method: method,
      url: this.backend + path,
      data: body,
      headers: {
        Authorization: `Bearer ${[access_token, refresh_token]}`,
      },
    });

    return res;
  }

  public async login(email: string, password: string): Promise<AxiosPromise> {
    const res = await axios.request({
      method: "POST",
      url: this.backend + "/auth/login",
      withCredentials: true,
      data: {
        email,
        password,
      },
    });

    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    return res;
  }

  public async logout() {
    localStorage.clear();
  }

  public async post(path: string, body: any): Promise<AxiosPromise> {
    let res;

    try {
      res = await this.request("POST", path, body);
    } catch (e) {
      await this.refresh();
      res = await this.request("POST", path, body);
    }

    return res;
  }

  public async get(path: string): Promise<AxiosPromise> {
    let res;

    try {
      res = await this.request("GET", path, null);
    } catch (e) {
      await this.refresh();
      res = await this.request("GET", path, null);
    }

    return res;
  }

  public async patch(path: string, body: any): Promise<AxiosPromise> {
    let res;

    try {
      res = await this.request("PATCH", path, body);
    } catch (e) {
      await this.refresh();
      res = await this.request("PATCH", path, body);
    }

    return res;
  }
}
