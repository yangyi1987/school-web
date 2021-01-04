import { Router } from "./index";

export default [
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "Index" */ "@/views/home/Index.vue"),
    meta: {
      layout: "header"
    }
  }
] as Array<Router>;
