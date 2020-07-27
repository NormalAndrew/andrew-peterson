import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ siteTitle }) => {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
            <h4 className="is-size-4">{siteTitle}</h4>
          </Link>
          {/* Hamburger menu */}
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
              </Link>
            <Link className="navbar-item" to="/portfolio">
              Portfolio
              </Link>
            <Link className="navbar-item" to="/contact">
              Contact
              </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
