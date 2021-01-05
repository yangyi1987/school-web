import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Authorization"] = "12132";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// get 方法
export function get(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return axios.get(url, config);
}

// post 方法
export function post(
  url: string,
  params?: Record<string, any> | number | string,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return axios.post(url, params, config);
}

// patch 方法
export function update(
  url: string,
  params: any,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return axios.patch(url, params, config);
}

// delete 方法
export function remove(url: string, config?: AxiosRequestConfig) {
  return axios.delete(url, config);
}
