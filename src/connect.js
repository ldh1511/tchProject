import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDXPLduefu6MLOF9pRsmqhdZJn5mF8PE2w",
    authDomain: "tcfweb-ef85c.firebaseapp.com",
    databaseURL: "https://tcfweb-ef85c-default-rtdb.firebaseio.com",
    projectId: "tcfweb-ef85c",
    storageBucket: "tcfweb-ef85c.appspot.com",
    messagingSenderId: "495890483627",
    appId: "1:495890483627:web:7430e875d125041b4daaee",
    measurementId: "G-GEF21FLKVM"
};
// Initialize Firebase
export const firebaseConnect= firebase.initializeApp(firebaseConfig);
