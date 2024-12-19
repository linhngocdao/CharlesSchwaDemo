import { lazy } from "react";
import { BaseRouteConfig } from "~/utilities/interface";

export const clientRoutes: BaseRouteConfig[] = [
  {
    path: "/about",
    title: "About",
    component: lazy(() => import("~/pages/client/about/about")),
  },
];
export const adminRoutes: BaseRouteConfig[] = [

];
