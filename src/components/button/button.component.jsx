import './button.styles.scss'

const Button_Types_Classes = {
    google: 'google-authentication',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...props}) => {
    return(
        <button className={`button-container ${Button_Types_Classes[buttonType]}`} {...props}>
            {children}
        </button>
    )
}

export default Button;