import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDSy1f_Ll_S45CiklOvuKHCWlnECPQBisI",
    authDomain: "ukciowy.firebaseapp.com",
    databaseURL: "https://ukciowy.firebaseio.com",
    projectId: "ukciowy",
    storageBucket: "ukciowy.appspot.com",
    messagingSenderId: "495454655156"
};
firebase.initializeApp(config);

export const database = firebase.database
