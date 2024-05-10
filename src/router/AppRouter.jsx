import { Fragment } from "react";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        {/* <Route path="login" element={<LoginPage />} /> */}

        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />

        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </Fragment>
  );
};
