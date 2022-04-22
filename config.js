import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCWA27HuQ7KiC9zgPKy-ZTMeyG2KUywNoE",
    authDomain: "classtest-83fa7.firebaseapp.com",
    databaseURL: "https://classtest-83fa7-default-rtdb.firebaseio.com",
    projectId: "classtest-83fa7",
    storageBucket: "classtest-83fa7.appspot.com",
    messagingSenderId: "201598798219",
    appId: "1:201598798219:web:24208b735d8c58ea62878e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();