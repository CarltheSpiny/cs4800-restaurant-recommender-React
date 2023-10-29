import React from 'react'

import PropTypes from 'prop-types'

import './form-input-field.css'

const FormInputField = (props) => {
  return (
    <div className={`form-input-field-user-name-field ${props.rootClassName} `}>
      <span htmlFor="inputIn" className="form-input-field-text">
        {props.text}
      </span>
      <input
        type="text"
        id="inputIn"
        required
        placeholder={props.textinput_placeholder}
        className="form-input-field-textinput input"
      />
    </div>
  )
}

FormInputField.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Field Input',
  text: 'text',
}

FormInputField.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default FormInputField
