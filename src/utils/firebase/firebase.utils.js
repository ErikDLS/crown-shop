import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    snapshotEqual
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDoc = async (userAuth, 
    aditional = {}
    ) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createDate = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createDate,
                ...aditional
            });
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)

}