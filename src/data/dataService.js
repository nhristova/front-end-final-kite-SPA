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
            .then((snapshot) => {
                const postsData = snapshot.val();
                console.log(postsData);
                return postsData;
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
