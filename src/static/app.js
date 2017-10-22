/* globals $ */
import { initRoutes } from './router';

console.log('--- got to app.js ---');

$(() => {
    console.log('--- starting initRoutes ---');

    initRoutes();
});
