import React from "react";
import { useNavigate } from "react-router-dom";

const ReportsDashboard: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const redirectUrl =
      "https://ssemr.intellisoftkenya.com/openmrs/module/reporting/dashboard/index.form";

    navigate(redirectUrl);
  }, [navigate]);

  return null;
};

export default ReportsDashboard;
