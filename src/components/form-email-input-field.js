import React from 'react'

import PropTypes from 'prop-types'

import './form-email-input-field.css'

const FormEmailInputField = (props) => {
  return (
    <div
      className={`form-email-input-field-user-name-field ${props.rootClassName} `}
    >
      <span id="textLabel" className="form-email-input-field-text">
        {props.text}
      </span>
      <input
        type="email"
        id="emailIn"
        required
        placeholder={props.textinput_placeholder}
        className="form-email-input-field-textinput input"
      />
    </div>
  )
}

FormEmailInputField.defaultProps = {
  text: 'Email:',
  rootClassName: '',
  textinput_placeholder: 'example@email.com',
}

FormEmailInputField.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default FormEmailInputField
