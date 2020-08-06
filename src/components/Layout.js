import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'

const Layout = ({ children, siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  return (
    <div>
      <Navbar siteTitle={site.siteMetadata.author} />
      {children}
    </div>
  )
}

export default Layout
