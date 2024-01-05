import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div style={{ padding: '20px' }}>{`${t('Загрузка')}...`}</div>}>
            <Routes>
                {Object.values(RouteConfig).map(({ path, element }) => (
                    <Route
                        path={path}
                        key={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
