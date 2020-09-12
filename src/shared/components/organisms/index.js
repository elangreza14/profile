import { lazy } from "react";
const Header = lazy(() => import("./Header"));
const HeroSection = lazy(() => import("./HeroSection"));
const CardItem = lazy(() => import("./CardItem"));
const Cards = lazy(() => import("./Cards"));

export { Header, HeroSection, CardItem, Cards };
