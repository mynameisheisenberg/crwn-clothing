import "../../components/sign-up-form/sign-up-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sigin-in/sign-in.component";

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignIn/>
      <SignUpForm/>
    </div>
  );
};

export default SignInPage;
