import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const DeveloperPage = ({ data }) => {
  const { allMarkdownRemark } = useStaticQuery(allDeveloperQuery)
  const { edges: portfolios } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Developer Work Portfolio" />
      <section className="section">
        {portfolios.map(({ node: portfolio }) => {
          const featuredImage = portfolio.frontmatter.featuredImage.childImageSharp.fixed

          return (
            <div className="container" key={portfolio.id}>
              <Link to={portfolio.frontmatter.path}>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <Img
                        fixed={featuredImage}
                        alt="Sample Image"
                      />
                    </div>
                  </div>

                  <div className="column">
                    <div className="content">
                      <h1 className="title">{portfolio.frontmatter.title}</h1>
                      <h2 className="subtitle is-size-5">{portfolio.frontmatter.date}</h2>
                      <p className="subtitle">{portfolio.frontmatter.excerpt}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export const allDeveloperQuery = graphql`
  query allDeveloperQuery {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: "developer"}}},sort:{fields:frontmatter___date, order:DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM-DD-YYYY")
            path
            tags
            excerpt
            featuredImage {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default DeveloperPage
