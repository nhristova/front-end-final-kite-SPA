import Navigo from 'navigo';
import { homeController } from './scripts/homeController';
import { aboutController } from './scripts/aboutController';

const router = new Navigo(null, true, '#');

const initRoutes = () => {
    console.log('--- in router.js executing initRoutes ---');

    router
        .on(() => homeController.load())
        .on('home', () => homeController.load())
        .on('about', () => aboutController.load())
        .resolve();
    // router
    //     .notFound(() => notFoundController.init())
    //     .resolve();
};

export { router, initRoutes };
