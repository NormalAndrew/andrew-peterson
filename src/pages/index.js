import React from "react"
import "../styles/styles.scss"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

export default function Home() {
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
    <Layout siteTitle={site.siteMetadata.title}>
      <SEO />
      <h1 className="title">Andrew</h1>
    </Layout>
  )
}
