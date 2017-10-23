import Navigo from 'navigo';
import { homeController } from './scripts/homeController';
import { aboutController } from './scripts/aboutController';
import { eventController } from './scripts/eventController';

const router = new Navigo(null, true, '#');

const initRoutes = () => {
    router
        .on(() => homeController.load())
        .on('home', () => homeController.load())
        .on('blog', () => eventController.load())
        .on('blog/:postId', (param) => eventController.loadPost(param.postId))
        .on('about', () => aboutController.load())
        .resolve();
    // TODO implement
    // router
    //     .notFound(() => notFoundController.load())
    //     .resolve();
};

export { router, initRoutes };
