import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExtensionSlot } from '@openmrs/esm-framework';

const ReportsDashboard: React.FC = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        const redirectUrl = 'https://ssemr.intellisoftkenya.com/openmrs/module/reporting/dashboard/index.form';

        navigate(redirectUrl);
    }, []);

    return null;
};

export default ReportsDashboard;