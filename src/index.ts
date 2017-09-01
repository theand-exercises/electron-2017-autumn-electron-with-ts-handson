import {app, BrowserWindow} from 'electron';
import * as firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: 'AIzaSyA9B5I-kb1feALwDhpn4-W18BxbG2CEGfU',
    authDomain: 'elects-seminar.firebaseapp.com',
    databaseURL: 'https://elects-seminar.firebaseio.com',
    projectId: 'elects-seminar',
    storageBucket: 'elects-seminar.appspot.com',
    messagingSenderId: '880959694204'
};
const firebaseApp = firebase.initializeApp(config);

const auth = firebase.auth();
auth.onAuthStateChanged((user: { email: string; }) => {
    console.log(user.email);
});

app.on('ready', () => {
    console.log('app ready');

    auth.signInWithEmailAndPassword('email', 'password');
});
