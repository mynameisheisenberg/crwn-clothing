import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  auth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import "../sigin-in/sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const { user } = await signInUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Received error message while logging in:", errorMessage);
      console.log("Received error code while logging in:", errorCode);
    }
  };

  const signInWithGoogle = async () => {
    console.log("Inside sign with google");
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="click" onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
      {/* <button type="button" onClick={signInWithGoogle} >Sign In With Google</button> */}
        </div>
      </form>

    </div>
  );
};

export default SignIn;
