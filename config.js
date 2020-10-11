import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyATzR0yRYFfP67UpkBqKnInXUOsJ0rM8wA",
    authDomain: "story-hu.firebaseapp.com",
    databaseURL: "https://story-hu.firebaseio.com",
    projectId: "story-hu",
    storageBucket: "story-hu.appspot.com",
    messagingSenderId: "821942616212",
    appId: "1:821942616212:web:8bc39abedac344efd6f481",
    measurementId: "G-ZE76SL0F0F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();