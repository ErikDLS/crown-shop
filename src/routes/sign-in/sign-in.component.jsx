import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDoc 
} from '../../utils/firebase/firebase.utils'
import { async } from '@firebase/util';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    useEffect(() => {
        async function fetchRedirect() {
        const response = await getRedirectResult(auth);
        console.log(response);
        if(response){
            const userDocRef = await createUserDoc(response.user);
        }
        };
        fetchRedirect();
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDoc(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default SignIn;