/* globals $ */
import { htmlHelper } from './utils/htmlHelper';

const viewBag = {
    name: 'About',
    info: 'Meet our wonderful team',
};

const aboutController = {
    load() {
        console.log('--- got to aboutController ---');

        htmlHelper
            .getHtml('about')
            .then((html) => {
                htmlHelper.changeTitle('short', viewBag);
                htmlHelper.insert('#main-content', html);
            });
    },
};

export { aboutController };
