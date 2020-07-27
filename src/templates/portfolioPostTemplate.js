import React from 'react'
import { graphql } from 'gatsby'

function PortfolioPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <h1 className="title">{frontmatter.title}</h1>
      <h2 className="subtitle">{frontmatter.date}</h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
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
      }
    }
  }
`

export default PortfolioPostTemplate
