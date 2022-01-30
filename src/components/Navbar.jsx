import React from 'react'
import PropTypes  from "prop-types"

export default function Navbar(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <hr />
        </div>
    )
}

Navbar.propType=
{
    title: PropTypes.string.isRequired
}

Navbar.defaultProps=
{
    title: "Hiç bir şey yazmıyor title da ondan ben geldim."
}