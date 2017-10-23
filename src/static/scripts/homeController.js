/* globals $ */
import { htmlHelper } from './utils/htmlHelper';
import { dataService } from './../../data/dataService';

const viewBag = {
    name: 'Flying Kites Has Never Been Easier',
    info: 'Join today and gift your family and loved ones with an unique experience',
};

const homeController = {

    init() {
        console.log('--- homeController.init() ---');

        dataService.getSixRecentPosts()
            .then((data) => htmlHelper
                .getHtml('footer-recent', { model: { posts: data } }))
            .then((html) => htmlHelper.insert('#footer-recent', html));

        // TODO change to load archive posts
        return dataService.getSixRecentPosts()
            .then((data) => htmlHelper
                .getHtml('footer-recent', { model: { posts: data } }))
            .then((html) => htmlHelper.insert('#footer-archive', html));
    },

    load() {
        htmlHelper.getHtml('home')
            .then((html) => {
                htmlHelper.changeTitle('tall', viewBag);
                htmlHelper.insert('#main-content', html);
            })
            .then(() => {
                dataService.getFiveVideos()
                    .then((data) => htmlHelper.getHtml('home-videos', { model: { videos: data } }))
                    .then((html) => htmlHelper.insert('#home-videos', html));
            });
    },
};

export { homeController };
