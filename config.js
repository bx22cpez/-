import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCJFR508p6D_6JN3QQJDiASQeZA-raU7QY",
    authDomain: "teamvotings.firebaseapp.com",
    projectId: "teamvotings",
    storageBucket: "teamvotings.appspot.com",
    messagingSenderId: "692038713383",
    appId: "1:692038713383:web:6c3cace0577ee239fd0e02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();