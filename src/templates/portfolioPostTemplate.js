import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

function PortfolioPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImage = frontmatter.featuredImage.childImageSharp.fluid
  console.log(frontmatter.tools)

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <section className="section">
        <div className="container content">
          <div className="columns is-flex is-centered is-vcentered">
            <div className="column is-10 is-offset-1">
              <Img
                fluid={featuredImage}
                alt={frontmatter.title}
              />
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{frontmatter.title}</h1>
              <h2 className="subtitle">Date: {frontmatter.date}</h2>
              {frontmatter.company &&
                <h2 className="subtitle">Company: {frontmatter.company}</h2>}
              <hr />
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {frontmatter.tools[0] && (
               <>
               <h2 className="subtitle">Tools Used:</h2>
               <ul>
                {frontmatter.tools.map((tool) => (
                  <li>{tool}</li>
                ))}
               </ul>
                </>
              )}
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
        excerpt
        tools
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
