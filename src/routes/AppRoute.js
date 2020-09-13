import { Cart, Home, TokoDua, TokoSatu } from "../shared/components/pages/App";
import { NotFound } from "../shared/components/pages/NotFound";

export const AppRoute = [
  {
    component: Home,
    name: "Home",
    path: "/",
    exact: true,
  },
  {
    component: Cart,
    name: "Cart",
    path: "/Cart",
    exact: true,
  },
  {
    component: TokoSatu,
    name: "Toko Satu",
    path: "/tokosatu",
    exact: true,
  },
  {
    component: TokoDua,
    name: "Toko Dua",
    path: "/tokodua",
    exact: true,
  },
  {
    component: NotFound,
    name: "Not Found",
    path: "*",
    exact: false,
  },
];
