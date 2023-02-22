import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { map } from "./route-map";
import Loading from "components/loading/loading";


const RouterProvider = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          {map.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterProvider;
