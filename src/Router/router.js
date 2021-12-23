import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "../Constants/routes";
import { HomePage } from "../Pages/Dashboard";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<HomePage/>} />
        <Route path={ROUTES.dashboard} element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};
