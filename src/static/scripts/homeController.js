/* globals $ */
import { htmlHelper } from './utils/htmlHelper';

const posts = [
    { title: 'Blabla', content: 'Alabala' },
    { title: 'Another', content: 'Funny' },
];

const videos = [
    { date: 'today', title: 'happy' },
    { date: 'tomorrow', title: 'quick' },
];

const homeController = {
    load() {
        // get data
        // get template
        // compile
        console.log('--- got to homeController ---');

        this.getFiveVideos()
            .then((data) => htmlHelper.getHtml('home-videos', data))
            .then((html) => htmlHelper.insert('#home-videos', html));

        this.getSixRecentPosts()
            .then((data) => htmlHelper.getHtml('footer-recent', data))
            .then((html) => htmlHelper.insert('#footer-recent', html));

        this.getSixRecentPosts()
            .then((data) => htmlHelper.getHtml('footer-recent', data))
            .then((html) => htmlHelper.insert('#footer-archive', html));
    },

    // TODO extract to data layer
    getFiveVideos() {
        const data = { model: { videos } };

        return Promise.resolve(data);
    },

    getSixRecentPosts() {
        // TODO order by date, slice 5
        const data = { model: { posts } };

        return Promise.resolve(data);
    },
};

export { homeController };
