import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

function PortfolioPostTemplate({ data }) {
  console.log(data)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImage = frontmatter.featuredImage.childImageSharp.fluid
  console.log(frontmatter.tools)
  const toolImages = data.allFile.edges
  console.log(toolImages)

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
              {toolImages.length>0 && (
                <>
                  <h2 className="subtitle">Tools Used:</h2>
                  <div className="level">
                    <div className="level-left">
                      {toolImages.map(({node: tool}) => {
                        console.log(tool)
                        
                        return (
                          <div className="level-item" key={tool.name}>
                            <div className="container">
                              <h3 className="subtitle is-size-5 has-text-centered">{tool.name}</h3>
                              <Img fixed={tool.childImageSharp.fixed} alt={tool.name} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
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
  query($path: String!, $tools: [String]) {
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
    allFile(filter: {name: {in: $tools}}) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 128, height: 128) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth:128) {
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
