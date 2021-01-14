import { get } from "@/http/axiox";

export async function getApplications() {
  return get("/applications");
}
