import React from 'react';
import PropTypes from 'prop-types';
import '../css/textInput.scss';

function TextInput (props) {
    let wrapperClass = "form__input__container";
    if(props.error.length > 0) {
        wrapperClass += " has error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    className="form__input"
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
            {props.error && <div className="">{props.error}</div>}
        </div>
    );
}
TextInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};
TextInput.defaultProps = {
    error: ''
}
export default TextInput;