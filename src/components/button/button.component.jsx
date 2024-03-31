import "../button/button.styles.scss";
export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
const buttonClass = `button-container ${BUTTON_TYPE_CLASSES[buttonType]}`;
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {buttonClass.includes("google-sign-in") ? (
        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
