import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCP4r7nmOB9-keAoTCkdLzfJxRR9YSmZvs",
    authDomain: "synk-dev.firebaseapp.com",
    databaseURL: "https://synk-dev.firebaseio.com",
    projectId: "synk-dev",
    storageBucket: "synk-dev.appspot.com",
    messagingSenderId: "747159204675",
    appId: "1:747159204675:web:a0866a49937907a8f2f5f6",
    measurementId: "G-ZBN50S4WNQ"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;


