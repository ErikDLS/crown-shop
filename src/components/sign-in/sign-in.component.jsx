import { useState } from "react";

import Button from '../button/button.component'
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'

import { signInAuthUserWithEmailAndPassword, createUserDoc, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const defFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defFormFields);

    const { email, password } = formFields;

    const reset = () => {
        setFormFields(defFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDoc(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            reset();
        } catch (err) {
            switch (err.code) {
                case 'auth/user-not-found':
                    alert('User not registered');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break;
                default:
                    console.log(err)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    inputOptions={{
                        type: "email",
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email
                    }}
                ></FormInput>
                <FormInput
                    label={"Password"}
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        name: "password",
                        value: password
                    }}
                ></FormInput>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;