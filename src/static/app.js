/* globals $ */
import { initRoutes } from './router';
import { sideController } from './scripts/sideController';

$(() => {
    sideController.loadTitles('footer')
        .then(() => initRoutes());
});
