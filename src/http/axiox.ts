import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const server = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${user.token || ""}`
  }
});

// get 方法
export function get(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return server.get(url, config);
}

// post 方法
export function post(
  url: string,
  params?: Record<string, any> | number | string,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return server.post(url, params, config);
}

// patch 方法
export function update(
  url: string,
  params: any,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return server.patch(url, params, config);
}

// delete 方法
export function remove(url: string, config?: AxiosRequestConfig) {
  return server.delete(url, config);
}
