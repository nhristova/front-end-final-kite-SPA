/* globals $ */
import { initRoutes } from './router';
import { homeController } from './scripts/homeController';

console.log('--- got to app.js ---');

$(() => {
    console.log('--- starting initRoutes ---');

    homeController.init()
        .then(() => initRoutes());
});
