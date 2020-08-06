import React, { useState } from 'react'
import { Link } from 'gatsby'

const Navbar = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="container">
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <h4 className="is-size-4">{siteTitle}</h4>
          </Link>
          {/* Hamburger menu */}
          <div
            onClick={() => setIsActive(!isActive)}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
              </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/portfolio">
                Portfolio
                </Link>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/engineer">
                  Engineer
                </Link>
                <Link className="navbar-item" to="/developer">
                  Developer
                </Link>
                <Link className="navbar-item" to="/adventure">
                  Adventure
                </Link>
              </div>

            </div>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
