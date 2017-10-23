/* globals firebase */

// import * as firebase from 'firebase';
// import 'firebaseAuth';
// import 'firebaseDb';

// import { firebase } from 'firebase';
// import 'firebaseAuth';
// import 'firebaseDb';
// import config from './../config/firebase-config';

const config = {
    apiKey: 'AIzaSyBEsyMKyLWmLd-FKuWg3FcNUfNd-B2wbuY',
    authDomain: 'front-end-final-kite.firebaseapp.com',
    databaseURL: 'https://front-end-final-kite.firebaseio.com',
    projectId: 'front-end-final-kite',
    storageBucket: 'front-end-final-kite.appspot.com',
    messagingSenderId: '12981733475',
};


firebase.initializeApp(config);
// firebase.database.enableLogging(true);

const database = {

    getSnapshot(path = '') {
        console.log(`--- getSnapshot ${path} ---`);
        // TODO change path
        return firebase.database().ref(`/${path}`).once('value');
    },

    updateChild(path = '', data) {
        return firebase.database().ref(`/${path}`).update(data);
    },

    addChild(path = '', data) {
        const newKey = firebase.database().ref().child(path).push().key;

        return firebase.database().ref(`/${path}/${newKey}`).update(data);
    },

    // FROM FIREBASE GUIDES
    // writeNewPost(uid, username, picture, title, body) {
    //     // A post entry.
    //     const postData = {
    //         author: username,
    //         uid: uid,
    //         body: body,
    //         title: title,
    //         starCount: 0,
    //         authorPic: picture,
    //     };

    //     // Get a key for a new Post.
    //     const newPostKey = firebase.database().ref().child('posts').push().key;

    //     // Write the new post's data simultaneously in the posts list and the user's post list.
    //     const updates = {};
    //     updates['/posts/' + newPostKey] = postData;
    //     updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    //     return firebase.database().ref().update(updates);
    // },

    // writeUserData(userId, name, email, imageUrl) {
    //     firebase.database().ref('users/' + userId).set({
    //         username: name,
    //         email: email,
    //         profile_picture: imageUrl,
    //     });
    // },

    // getCurrentUserData() {
    //     const userId = firebase.auth().currentUser.uid;
    //     return firebase.database().ref('/users/' + userId).once('value')
    //         .then((snapshot) => {
    //             const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //             // ...
    //         });
    // },
};

export { database };
