import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common['Authorization'] = "12132";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.request({
//   url: "http://localhost:3000",
//   timeout: 1000,
//   // 跨域请求 需要带凭证
//   withCredentials: true
// });

export function get(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return axios.get(url, config);
}
export function post(
  url: string,
  params?: Record<string, any> | number | string,
  config?: AxiosRequestConfig
): Promise<AxiosPromise> {
  return axios.post(url, params, config);
}
