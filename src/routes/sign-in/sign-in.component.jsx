import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.util";
import "../../components/sign-up-form/sign-up-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const getResult = async() => { 
      const response = await getRedirectResult(auth);
      if(response){
        const {user} = response;
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    }
    getResult();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("User doc from sign in component", userDocRef);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
