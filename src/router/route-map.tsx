import  paths  from "./paths";
import Home from "../pages/home/home";
import About from "../pages/about/about";

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
