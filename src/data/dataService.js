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
        const data = { model: { videos } };

        return Promise.resolve(data);
    },

    getSixRecentPosts() {
        // TODO order by date, slice 5
        const data = { model: { posts } };

        return Promise.resolve(data);
    },
};

export { dataService };
