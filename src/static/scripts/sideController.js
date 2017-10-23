/* globals $ */
import { htmlHelper } from './utils/htmlHelper';
import { dataService } from './../../data/dataService';


const sideController = {
    loadTitles(location) {
        dataService.getPagedRecentPosts()
            .then((data) => htmlHelper
                .getHtml('posts-titles', { model: { posts: data } }))
            .then((html) => htmlHelper.insert(`#${location}-recent`, html));

        // TODO change to load archive posts
        return dataService.getPagedRecentPosts()
            .then((data) => htmlHelper
                .getHtml('posts-titles', { model: { posts: data.reverse() } }))
            .then((html) => htmlHelper.insert(`#${location}-archive`, html));
    },
};

export { sideController };
