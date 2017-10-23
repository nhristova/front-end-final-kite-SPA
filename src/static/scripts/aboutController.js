import { htmlHelper } from './utils/htmlHelper';
import { sideController } from './sideController';

const viewBag = {
    name: 'About',
    info: 'Learn about the wonderful world of kite flying',
};

const aboutController = {
    load() {
        htmlHelper
            .getHtml('inner-page')
            .then((html) => {
                htmlHelper.changeTitle('short', viewBag);
                htmlHelper.insert('#main-content', html);
                sideController.loadTitles('aside');
            })
            .then(() => htmlHelper.getHtml('about'))
            .then((aboutHtml) => htmlHelper
                .insert('#inner-content', aboutHtml));
    },
};

export { aboutController };
