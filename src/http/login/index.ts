import { post } from "@/http/axiox";

export async function login(params: any): Promise<any> {
  const { data } = await post("/login", params);
  return data;
}
