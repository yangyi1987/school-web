import { post } from "@/http/axiox";
import { AxiosPromise } from "axios";

export function login(param: any): Promise<AxiosPromise> {
  return post("/login", param);
}
