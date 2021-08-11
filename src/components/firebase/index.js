import firebase from 'firebase/app';
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDKGyV45Tj93O-jbWeX_7tpo6V_ClkT73Y",
    authDomain: "fir-16910-e-commerce.firebaseapp.com",
    projectId: "fir-16910-e-commerce",
    storageBucket: "fir-16910-e-commerce.appspot.com",
    messagingSenderId: "133215821446",
    appId: "1:133215821446:web:78a5638eea591ee34ffb07"
};

//Inicializacion Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();