import React from 'react'

import PropTypes from 'prop-types'

import './form-country-field.css'

const FormCountryField = (props) => {
  return (
    <div
      className={`form-country-field-user-name-field ${props.rootClassName} `}
    >
      <label htmlFor="countryIn" className="form-country-field-text">
        {props.text}
      </label>
      <select id="countryIn" required className="form-country-field-select">
        <option value="default" selected>
          United States
        </option>
        <option value="Option 1">Not United States</option>
      </select>
    </div>
  )
}

FormCountryField.defaultProps = {
  rootClassName: '',
  text: 'text',
  textinput_placeholder1: 'example@email.com',
  text1: 'Label',
  textinput_placeholder: 'Field Input',
}

FormCountryField.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default FormCountryField
