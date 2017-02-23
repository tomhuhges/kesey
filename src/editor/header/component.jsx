import React from 'react'
import { Link } from 'react-router'

const Header = props =>
  <div className="header code flex items-center justify-between fl w-100 o-10 glow">
    <Link to="/menu" className="red link">☰</Link>
    <p>{props.currentFile}</p>
    <Link to="/logout" className="red link">Logout</Link>
  </div>

Header.defaultProps = {
  currentFile: '',
}

Header.propTypes = {
  currentFile: React.PropTypes.string,
}

export default Header
