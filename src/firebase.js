import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAZT8_7yBFBi-9-0W7sE927v5IifqOlrK4",
    authDomain: "todolist-d62bc.firebaseapp.com",
    databaseURL: "https://todolist-d62bc.firebaseio.com",
    projectId: "todolist-d62bc",
    storageBucket: "todolist-d62bc.appspot.com",
    messagingSenderId: "667436992439"
};
firebase.initializeApp(config);

export const database = firebase.database
