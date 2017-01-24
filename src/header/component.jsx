import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <div className="header flex items-center justify-between fl w-100 o-10 glow">
        <Link to="/menu" className="code red link">Menu</Link>
        <p className="code">Kesey</p>
        <Link to="/logout" className="code red link">Logout</Link>
      </div>
    )
  }
}

export default Header
