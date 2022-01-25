import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

        const body = { authuser_id: user.uid, username: name, email, password };
        await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
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
    return;
};

const addgame = async (name, system, status, user) => {
    try {
        const body = {
            authuser_id: user.uid,
            gamename: name,
            gamesystem: system,
            gamestatus: status,
        };
        await fetch('http://localhost:5000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    } catch (err) {
        console.error(err);
    }
};

const getGames = async (user) => {
    try {
        const response = await fetch(
            `http://localhost:5000/games/${user.uid}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
    }
};

export { auth, db, signin, signup, signout, addgame, getGames };
