import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDhTKZ2zRISN_aizeB4_FTTwTqoYTkCNnQ",
  authDomain: "be-informed-nz.firebaseapp.com",
  databaseURL: "https://be-informed-nz.firebaseio.com",
  projectId: "be-informed-nz",
  storageBucket: "be-informed-nz.appspot.com",
  messagingSenderId: "273032128139"
};

firebase.initializeApp(config);

firebase.firestore();

export const storage = firebase.storage();

export default firebase;
