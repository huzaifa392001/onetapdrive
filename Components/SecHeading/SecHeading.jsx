import React from 'react'
import "./SecHeading.scss"

function SecHeading(props) {
    return (
        <h2 className={`secHeading ${props.className}`}>{props?.heading}</h2>
    )
}

export default SecHeading