import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ autoComplete, label, name, id = name, onChange, size, type, value}) => {
    return (
        <div className={`input-field col ${size}`}>
            <input id={id} type={type} name={name} onChange={onChange} value={value} autoComplete={autoComplete} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

Input.propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
}

Input.defaultProps = {
    autoComplete: 'off',
    size: 's12',
    type: 'text'
}

export default Input;
