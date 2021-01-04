import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

export type Layout = "header" | "menu";
export interface Router {
  path: string;
  name: string;
  component: any;
  children?: Array<Router>;
  meta?: {
    layout?: Layout;
  };
}
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [];
const Routes: any = require.context("/", true, /\.router$/);
Routes.keys().forEach((fileName: string) => {
  routes.push(...Routes(fileName).default);
});
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
