import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    updateDoc,
    arrayUnion,
} from 'firebase/firestore';

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

        await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
            games: [],
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signout = () => {
    signOut(auth);
};

const addgame = async (name, system, status, user) => {
    try {
        await updateDoc(doc(db, 'users', user.uid), {
            games: arrayUnion({
                name,
                system,
                status,
            }),
        });
    } catch (err) {
        console.error(err);
    }
};

export { auth, db, signin, signup, signout, addgame };
