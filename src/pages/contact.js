import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const ContactPage = () => {
  return (
    <Layout>
      <SEO />
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="title">
              Contact
            </h1>
            <p>Feel free to reach out to me at:</p>
            <a href="mailto:andrew@andrewpeterson.ca">andrew@andrewpeterson.ca</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
