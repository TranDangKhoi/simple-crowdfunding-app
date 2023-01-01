import StartrCampaignPage from "pages/StartrCampaignPage";
import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen bg-white dark:bg-darkBg"></div>
      }
    >
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/start-campaign"
          element={<StartrCampaignPage></StartrCampaignPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
