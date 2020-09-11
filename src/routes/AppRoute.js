import { Cart, TokoDua, TokoSatu } from "../shared/components/pages/App";

export const AppRoute = [
  {
    component: Cart,
    name: "Cart",
    path: "/",
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
];
