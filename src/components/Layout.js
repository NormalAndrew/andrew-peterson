import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, siteTitle }) => {
  return (
    <div>
      <Navbar siteTitle={siteTitle} />
      {children}
    </div>
  )
}

export default Layout
