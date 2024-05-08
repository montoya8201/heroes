import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { Fragment } from "react";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <Fragment>
     
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
      
      </Routes>
    </Fragment>
  );
};
