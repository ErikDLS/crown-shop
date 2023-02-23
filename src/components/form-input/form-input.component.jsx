import './form-input.styles.scss'

const FormInput = ({ label, inputOptions }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions}></input>
            {label &&
                (
                    <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )}
        </div>
    )
}

export default FormInput;