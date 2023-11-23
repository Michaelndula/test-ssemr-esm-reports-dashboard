import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportsDashboard from "./dashboard/reports-dashboard.component";

const RootComponent: React.FC = () => {
  const basename = window.getOpenmrsSpaBase() + "home/patient-lists";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<ReportsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootComponent;
