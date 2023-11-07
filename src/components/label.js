import React from 'react'

import PropTypes from 'prop-types'

import './label.css'

const Label = (props) => {
  return (
    <div className={`label-container ${props.rootClassName} `}>
      <div className="label-container1">
        <div className="label-container2">
          <span id="fillHeader" className="label-text Content">
            {props.mainLabel}
          </span>
          <p id="fillList" className="label-text1 Content">
            {props.listLabel}
          </p>
        </div>
      </div>
    </div>
  )
}

Label.defaultProps = {
  mainLabel: 'Label:',
  listLabel: '<Description>',
  rootClassName: '',
}

Label.propTypes = {
  mainLabel: PropTypes.string,
  listLabel: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Label
