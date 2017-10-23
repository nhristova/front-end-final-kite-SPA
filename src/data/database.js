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
        const key = firebase.database().ref().child(path).key;
        console.log(key);
        return firebase.database().ref(`/${path}`).once('value');
    },

    updateChild(path = '', data) {
        return firebase.database().ref(`/${path}`).update(data);
    },

    addChild(path = '', data) {
        const newKey = firebase.database().ref().child(path).push().key;

        return firebase.database().ref(`/${path}/${newKey}`).update(data);
    },

};

export { database };
