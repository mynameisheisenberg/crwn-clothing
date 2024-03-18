import "../../components/sign-up-form/sign-up-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sigin-in/sign-in.component";
import "../sign-in-page/sign-in-page.styles.scss"
const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <SignIn/>
      <SignUpForm/>
    </div>
  );
};

export default SignInPage;
