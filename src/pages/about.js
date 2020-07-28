import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="content">
                <h1 className="title is-1">
                  About me
                </h1>
                <h2 className="subtitle">
                  Hi
                </h2>
                <p>I'm a creative mechanical design engineer who has worked in the biotech, greentech, consumer product and industrial automation space. I strive to deliver elegant, simple and effective design solutions to challenging problems. I have a passion for green design, and a personal drive for positive impact on the world around me. I’m a fan of being pushed and challenged in my work, as well as my personal life.</p>
                <p>I spend a lot of my spare time participating in endurance sports. I’m a navigator for an adventure racing team in the Bay Area, taking part in longer 24hr + adventure races. My skills as a design engineer have certainly carried over into navigating in meaningful ways. My ability to quickly associate 2D drawings with the 3D world around me keeps me from getting lost, and helps me to make intelligent route decisions along the way. I enjoy pushing myself to the limits, challenging my body and mind.</p>
                <h2 className="subtitle">What I can do</h2>
                <p>Mechatronics Design, Top-down Modeling Techniques (Master Model, Skeleton), Large Assembly Management, Design for Manufacturability, Design for Assembly</p>
                <p>Website Design (Frontend), smartphone App Design</p>
                <h2 className="subtitle">
                  Tools I use
                </h2>
                <h3 className="subtitle is-6">CAD</h3>
                <p>Solidworks, OnShape, Creo, Inventor, PDMWorks, Wildfire</p>
                <h3 className="subtitle is-6">Fabrication</h3>
                <p>CNC Mill (Tormach), CAM, Lathe, Laser Cutter, 3D Printers, shop tools</p>
                <h3 className="subtitle is-6">Coding</h3>
                <p>VSCode, React, React Native, GraphQL, Gatsby, Next</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
