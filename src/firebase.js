import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

firebase.initializeApp({
    apiKey: "AIzaSyAT2Zj4U1kKoFuUmF4ppx1gMePl_dZdJwU",
    authDomain: "teambuilder-4261-75cbd.firebaseapp.com",
    databaseURL: "https://teambuilder-4261-75cbd-default-rtdb.firebaseio.com",
    projectId: "teambuilder-4261-75cbd",
    storageBucket: "teambuilder-4261-75cbd.appspot.com",
    messagingSenderId: "200356541137",
    appId: "1:200356541137:web:b79fe48b682d03b4c50bf0",
    measurementId: "G-DQK2V22JCF"
});

let db = firebase.firestore()

export default {
    firebase, db
}