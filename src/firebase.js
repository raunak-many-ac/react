import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
     apiKey: "AIzaSyAXQnCFFTKMfekX-2vgtd41IkkvRMFD9CY",
     authDomain: "react-70577.firebaseapp.com",
     databaseURL: "https://react-70577.firebaseio.com",
     projectId: "react-70577",
     storageBucket: "react-70577.appspot.com",
     messagingSenderId: "601422739425",
     appId: "1:601422739425:web:9449999810a1b0bed884a0",
     measurementId: "G-FC9W590WP6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;