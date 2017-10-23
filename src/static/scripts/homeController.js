/* globals $ */
import { htmlHelper } from './utils/htmlHelper';
import { dataService } from './../../data/dataService';
import { sideController } from './sideController';

const viewBag = {
    name: 'Flying Kites Has Never Been Easier',
    info: 'Join today and gift your family and loved ones with an unique experience',
};

const homeController = {

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
