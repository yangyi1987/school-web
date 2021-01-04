import { Router } from "./index";

export default [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/Index.vue"),
    meta: {}
  }
] as Array<Router>;
