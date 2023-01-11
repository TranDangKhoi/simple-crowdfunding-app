import LayoutCampaignDetails from "layout/LayoutCampaign";
import LayoutDashboard from "layout/LayoutDashboard";
import React, { lazy } from "react";
import Modal from "react-modal";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken } from "utils/auth";
const CampaignDetailsPage = lazy(() => import("pages/CampaignDetailsPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));

Modal.setAppElement("#root");
function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(authUpdateUser({ user: user, accessToken: access_token }));
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen bg-white dark:bg-darkBg"></div>
      }
    >
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
        </Route>
        <Route element={<LayoutCampaignDetails></LayoutCampaignDetails>}>
          <Route
            path="/campaign/:slug"
            element={<CampaignDetailsPage></CampaignDetailsPage>}
          ></Route>
        </Route>
        <Route path="/" element></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
