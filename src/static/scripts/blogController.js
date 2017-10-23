/* globals $ */
import { htmlHelper } from './utils/htmlHelper';
import { dataService } from './../../data/dataService';

const viewBag = {
    name: 'Blog',
    info: 'Find out about our interesting events',
};

// TODO Rename to events
const blogController = {
    load() {
        htmlHelper.getHtml('inner-page')
            .then((html) => {
                htmlHelper.changeTitle('short', viewBag);
                htmlHelper.insert('#main-content', html);
            })
            .then(() => {
                // get posts and load
            });
    },
};

export { blogController };
