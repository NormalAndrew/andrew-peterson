import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

function PortfolioPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImage = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <section className="section">
        <div className="container content">
          <div className="columns is-flex is-centered is-vcentered">
            <div className="column is-10 is-offset-1">
              <Img
                fluid={featuredImage}
                alt="Sample Image"
              />
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{frontmatter.title}</h1>
              <h2 className="subtitle">{frontmatter.date}</h2>
              <h2 className="subtitle">{frontmatter.company}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const portfolioPageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        company
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

PortfolioPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default PortfolioPostTemplate
