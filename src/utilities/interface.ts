import { ComponentType, LazyExoticComponent } from "react";

export type IProducts = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  desc?: string;
  status: boolean;
};

export interface BaseRouteConfig {
  title: string;
  path: string;
  component: ComponentType<any> | LazyExoticComponent<any>;
}
