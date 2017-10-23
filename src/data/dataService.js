import { database } from './database';

const posts = [
    { title: 'Blabla', content: 'Alabala' },
    { title: 'Another', content: 'Funny' },
];

const videos = [
    { date: 'today', title: 'happy' },
    { date: 'tomorrow', title: 'quick' },
];

const dataService = {
    getFiveVideos() {
        return Promise.resolve(videos);
    },

    getSixRecentPosts() {
        // TODO order by date, slice 5
        return database.getSnapshot('posts')
            .then((snapshot) => snapshot.val());
    },

    add(post) {

    },

    update() {

    },

    getById(id) {
        return database.getSnapshot(`posts/${id}`)
            .then((snapshot) => snapshot.val());
    },
};

export { dataService };
