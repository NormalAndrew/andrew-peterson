import React from "react"
import "../styles/styles.scss"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hello, I'm Andrew Peterson.</h1>
            <h1 className="title">I'm a Mechanical Design Engineer in San Francisco.</h1>
            <h1 className="title">
              Here is what I like to{" "}
              <Link to={`/portfolio/`}>
                work
                </Link>{" "}
                on.
              </h1>
          </div>
        </div>
      </section>
    </Layout>
  )
}
