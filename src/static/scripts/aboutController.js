import { htmlHelper } from './utils/htmlHelper';

const aboutController = {
    load() {
        console.log('--- got to aboutController ---');

        htmlHelper
            .getHtml('about')
            .then((html) => htmlHelper.insert('#main-content', html));
    },
};

export { aboutController };
