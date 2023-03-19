import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCARg6RNAiDBznNh8frcKUvH1tCNJjotSs",
  authDomain: "shoe-website-877a3.firebaseapp.com",
  projectId: "shoe-website-877a3",
  storageBucket: "shoe-website-877a3.appspot.com",
  messagingSenderId: "814343256680",
  appId: "1:814343256680:web:828ea71a2fbf75f32899dd",
  measurementId: "G-2R31VX52NZ"
});


const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
