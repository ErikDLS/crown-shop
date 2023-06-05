import { useState } from "react";
import { useDispatch } from "react-redux";

import Button, { Button_Types_Classes } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, H2, ButtonContainer } from "./sign-in.styles";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defFormFields);

  const { email, password } = formFields;

  const reset = () => {
    setFormFields(defFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      reset();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("User not registered");
          break;
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        default:
          alert("User sign in error.", err);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <H2>Already have an account?</H2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        ></FormInput>
        <FormInput
          label={"Password"}
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        ></FormInput>
        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={Button_Types_Classes.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
