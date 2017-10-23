/* globals $ */
import { initRoutes } from './router';
import { homeController } from './scripts/homeController';

$(() => {
    console.log('--- starting initRoutes ---');

    homeController.init()
        .then(() => initRoutes());
});
