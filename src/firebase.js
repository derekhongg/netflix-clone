import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDL2wQ5oFkympxQfD1_Zii39rz0dEYJDII",
    authDomain: "netflix-clone-7a7ef.firebaseapp.com",
    projectId: "netflix-clone-7a7ef",
    storageBucket: "netflix-clone-7a7ef.appspot.com",
    messagingSenderId: "654713606378",
    appId: "1:654713606378:web:881df03ecdad056fc20793"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // the database
const auth = firebase.auth(); // Authentication

export { auth }
export default db; // only can have one default export