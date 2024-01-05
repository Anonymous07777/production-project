import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Это исскуственная задержка, так делать не надо. Надо просто () => import('./MainPage') в lazy
    setTimeout(() => resolve(import('./MainPage')), 2000);
}));
