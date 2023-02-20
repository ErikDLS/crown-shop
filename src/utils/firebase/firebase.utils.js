import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAbdSuElkUp-RMVmyUfqgCRS9vGTvtFjiQ",
    authDomain: "crown-shop-db-c2a25.firebaseapp.com",
    projectId: "crown-shop-db-c2a25",
    storageBucket: "crown-shop-db-c2a25.appspot.com",
    messagingSenderId: "813068462696",
    appId: "1:813068462696:web:2718c849fe397570e9a9dd"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot)
}