import React from 'react'

import PropTypes from 'prop-types'
import './href-label.css'
const LinkLabel = (props) => {
return (
    <div className={`link-label-div ${props.rootClassName} `}>
        <div className="link-label-container1">
        <div className="link-label-content">
            <span id="fillHeader" className="label-text Content">
            {props.mainLabel}
            </span>
            <a href={props.href_label} className='link-label-text1 Content' target="_blank">
            Click to go to Website.
            </a>
        </div>
        </div>
    </div>
    )
}

LinkLabel.defaultProps = {
mainLabel: 'Label:',
href_label: '<Website>',
rootClassName: 'link-label',
}

LinkLabel.propTypes = {
mainLabel: PropTypes.string,
href_label: PropTypes.string,
rootClassName: PropTypes.string,
}

export default LinkLabel