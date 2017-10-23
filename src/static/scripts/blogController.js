/* globals $ */
import { htmlHelper } from './utils/htmlHelper';
import { dataService } from './../../data/dataService';
import { sideController } from './sideController';

const viewBag = {
    name: 'Events',
    info: 'Find out about interesting kite events',
};

// TODO Rename to events
const blogController = {
    load() {
        htmlHelper.getHtml('inner-page')
            .then((html) => {
                htmlHelper.changeTitle('short', viewBag);
                htmlHelper.insert('#main-content', html);
                sideController.loadTitles('aside');
            })
            .then(() => dataService.getSixRecentPosts())
            .then((data) => {
                console.log('=== data ===');
                console.log(data);
                // TODO implement paging with query params
                return htmlHelper.getHtml('posts-list', { model: { posts: data.slice(0, 2) } })
            })
            .then((postsHtml) => htmlHelper.insert('#post-list', postsHtml))
            .then(() => {
                this.changeAsideHeight();
            });
    },

    loadPost(id) {
        console.log(`--- what is this ${id} ----`);

        htmlHelper.getHtml('inner-page')
            .then((html) => {
                htmlHelper.insert('#main-content', html);
                sideController.loadTitles('aside');
            })
            .then(() => dataService.getById(id))
            .then((post) => {
                const bag = {
                    name: post.title,
                    info: `Posted by <em>${post.username}</em> in <em>${post.category}</em> on ${post.date} | 0 Comments`,
                };

                htmlHelper.changeTitle('short', bag);
                const test = { model: post };
                console.log(test);
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

export { blogController };
