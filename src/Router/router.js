import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "../Constants/routes";
import { CreateProfilePage } from "../Pages/CreateProfilePage";
import { ViewProfilePage } from "../Pages/ViewProfilePage";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<ViewProfilePage />} />
        <Route path={ROUTES.viewProfile} element={<ViewProfilePage />} />
        <Route path={ROUTES.createProfile} element={<CreateProfilePage />} />
        <Route path={ROUTES.editProfile} element={<CreateProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};
