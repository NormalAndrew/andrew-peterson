import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'

const Layout = ({ children, siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div>
      <Navbar siteTitle={site.siteMetadata.title} />
      {children}
    </div>
  )
}

export default Layout
