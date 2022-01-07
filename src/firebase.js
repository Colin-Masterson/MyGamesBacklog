import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

// Config
const firebaseConfig = {
    apiKey: 'AIzaSyDMgzn47UXRiTH9cFqWfaVmc2rcYNNlhTU',
    authDomain: 'gamelogger-403ff.firebaseapp.com',
    projectId: 'gamelogger-403ff',
    storageBucket: 'gamelogger-403ff.appspot.com',
    messagingSenderId: '183886134775',
    appId: '1:183886134775:web:33251f2de74b1700f482f2',
    measurementId: 'G-BLXN1RZ4M0',
};

// initialize firebase app, auth and db
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Firebase functions
const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signin = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signout = () => {
    signOut(auth);
};

export { auth, db, signin, signup, signout };
