/* globals firebase */

// import * as firebase from 'firebase';

import config from './../config/firebase-config';

firebase.initializeApp(config);
// firebase.database.enableLogging(true);

const database = {

    getSnapshot(path = '') {
        // const key = firebase.database().ref().child(path).key;
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
