import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAbdSuElkUp-RMVmyUfqgCRS9vGTvtFjiQ",
    authDomain: "crown-shop-db-c2a25.firebaseapp.com",
    projectId: "crown-shop-db-c2a25",
    storageBucket: "crown-shop-db-c2a25.appspot.com",
    messagingSenderId: "813068462696",
    appId: "1:813068462696:web:2718c849fe397570e9a9dd"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')

}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})

    return categoryMap;
}

export const createUserDoc = async (userAuth, 
    aditional = {}
    ) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

/*     console.log(userDocRef); */

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

export const signOutUser = async () => {
    signOut(auth)
    console.log('logged off')
}

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}