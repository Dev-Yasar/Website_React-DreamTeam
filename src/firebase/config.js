import firebase from 'firebase';
import 'firebase/auth'
// import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// import {  Firestore } from "firebase/firestore";



var firebaseConfig = {
//firsebase config
};

// Initialize Firebase

const app= firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export  { projectStorage ,projectFirestore,timestamp,app};