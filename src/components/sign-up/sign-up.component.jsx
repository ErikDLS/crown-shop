import { useState } from "react";

import Button from '../button/button.component'
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'

import { createAuthUserWithEmailAndPassword, createUserDoc } from "../../utils/firebase/firebase.utils";

const defFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

/*     console.log(formFields) */

    const reset = () => {
        setFormFields(defFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(" Passwords don't match.")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDoc(user, { displayName });

            reset();

/*             console.log(user, displayName); */
        } catch (err) {

            switch (err.code) {
                case 'auth/email-already-in-use':
                    alert('Cannot create user. Email already in use');
                    break;
                case 'auth/weak-password':
                    alert('Password must have 6 or more characters');
                    break;
                default:
                    console.log('User creation with email & password error.', err)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Display Name"}
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName
                    }}
                ></FormInput>
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
                <FormInput
                    label={"Confirm Password"}
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        name: "confirmPassword",
                        value: confirmPassword
                    }}
                ></FormInput>
                <Button
                    type="submit"
                >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;