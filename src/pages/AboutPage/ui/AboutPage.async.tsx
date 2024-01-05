import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Это исскуственная задержка,так делать не надо. Надо просто () => import('./AboutPage') в lazy
    setTimeout(() => resolve(import('./AboutPage')), 2000);
}));
