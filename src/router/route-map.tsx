import { lazy } from "react";
import  paths  from "./paths";
const Home = lazy(() => import("../pages/home/home"));
const About = lazy(() => import("../pages/about/about"));

export const map = [
  {
    path: paths.home,
    element: <Home />,
    exact: true,
  },
  {
    path: paths.about,
    element: <About />,
    exact: true,
  },
];
