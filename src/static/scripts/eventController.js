/* globals $ */
import { htmlHelper } from './utils/htmlHelper';
import { dataService } from './../../data/dataService';
import { sideController } from './sideController';

const viewBag = {
    name: 'Events',
    info: 'Find out about interesting kite events',
};

// TODO Rename to events
const eventController = {
    load() {
        htmlHelper.getHtml('inner-page')
            .then((html) => {
                htmlHelper.changeTitle('short', viewBag);
                htmlHelper.insert('#main-content', html);
                sideController.loadTitles('aside');
            })
            .then(() => dataService.getPagedRecentPosts(2, 1))
            .then((data) => {
                // TODO implement paging with query params
                return htmlHelper
                    .getHtml('posts-list', { model: { posts: data } });
            })
            .then((postsHtml) => htmlHelper.insert('#post-list', postsHtml))
            .then(() => {
                this.changeAsideHeight();
            });
    },

    loadPost(id) {
        htmlHelper.getHtml('inner-page')
            .then((html) => {
                htmlHelper.insert('#main-content', html);
                sideController.loadTitles('aside');
            })
            .then(() => dataService.getById(id))
            .then((post) => {
                const bag = {
                    name: post.title,
                    info: `Posted by <em>${post.username}</em> in <em>
                    ${post.category}</em> on ${post.date} | 0 Comments`,
                };

                htmlHelper.changeTitle('short', bag);
                return htmlHelper.getHtml('post', { model: post });
            })
            .then((postHtml) => htmlHelper.insert('#inner-content', postHtml))
            .then(() => this.changeAsideHeight());
    },

    changeAsideHeight() {
        const parentHeight = $('#inner-content').height();
        const elHeight = $('#aside-content').height();
        const newHeight = (parentHeight > elHeight) ? parentHeight : elHeight;
        $('#aside-content').css('height', newHeight);
    },
};

export { eventController };
