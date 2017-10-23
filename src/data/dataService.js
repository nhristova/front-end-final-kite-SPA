import { database } from './database';

const posts = [
    { title: 'Blabla', content: 'Alabala' },
    { title: 'Another', content: 'Funny' },
];

const videos = [
    { date: 'today', title: 'happy', src: '/src/static/images/kite-flying-flying-disc.jpg' },
    { date: 'tomorrow', title: 'quick', src: '/src/static/images/kite-flying.jpg' },
    { date: 'yesterday', title: 'cute', src: '/src/static/images/kite-green.jpg' },
    { date: 'future', title: 'lovely', src: '/src/static/images/kite-flying-beach.jpg' },
    { date: 'passed', title: 'amazing', src: '/src/static/images/kite-beautiful-rainbow-bird.jpg' },
];

const dataService = {
    getFiveVideos() {
        // TODO move to firebase
        return Promise.resolve(videos);
    },

    getPagedRecentPosts(pageSize = 6, pageNumber = 1) {
        // TODO order by date, slice 5
        return database.getSnapshot('posts')
            .then((snapshot) => {
                const postsData = snapshot.val();
                const start = pageSize * (pageNumber - 1);
                const end = start + pageSize;
                return postsData.slice(start, end);
            });
    },

    add(post) {

    },

    update() {

    },

    getById(id) {
        return database.getSnapshot(`posts/${id}`)
            .then((snapshot) => {
                const post = snapshot.val();
                post.id = snapshot.key;

                return post;
            });
    },
};

export { dataService };
