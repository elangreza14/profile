import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    let { title } = props
    return (
        <header>{title}</header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
