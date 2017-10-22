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
            .then((data) => htmlHelper.getHtml('footer-recent', data))
            .then((html) => htmlHelper.insert('#footer-recent', html));

        // TODO check this
        return dataService.getSixRecentPosts()
            .then((data) => htmlHelper.getHtml('footer-recent', data))
            .then((html) => htmlHelper.insert('#footer-archive', html));
    },

    load() {
        // get data
        // get template
        // compile
        console.log('--- homeController.load() ---');

        htmlHelper.getHtml('home')
            .then((html) => {
                htmlHelper.changeTitle('tall', viewBag);
                htmlHelper.insert('#main-content', html);
            })
            .then(() => {
                dataService.getFiveVideos()
                    .then((data) => htmlHelper.getHtml('home-videos', data))
                    .then((html) => htmlHelper.insert('#home-videos', html));
            });
    },
};

export { homeController };
