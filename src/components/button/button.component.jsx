import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

export const Button_Types_Classes = {
    base: 'base',
    google: 'google-authentication',
    inverted: 'inverted'
}

const getButton = (buttonType = Button_Types_Classes.base) =>
    ({
        [Button_Types_Classes.base]: BaseButton,
        [Button_Types_Classes.google]: GoogleSignInButton,
        [Button_Types_Classes.inverted]: InvertedButton
    }[buttonType])

const Button = ({ children, buttonType, ...props }) => {

    const CustomButton = getButton(buttonType)

    return (
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}

export default Button;