import React from 'react'

function About() {
  return (
    <section className="section-about" id="about">
        <h1 className="section-title">About</h1>
        <div className="section-main">
          {/* <img src={profile} alt="" className="profile" id="profile" /> */}
          <div className="about">
            <h1 className="about-header">I'm Wanofi</h1>
            <p className="about-description">
              I’m a passionate full-stack developer focused on building
              practical, scalable, and user-friendly web applications. I work
              across both frontend and backend development, turning ideas and
              business requirements into reliable digital solutions.
            </p>
            <p className="about-description">
              My experience includes modern technologies such as React, Node.js,
              REST APIs, and databases, with a strong focus on creating systems
              that solve real business problems. From company websites and
              internal business applications to ERP integrations and custom
              management systems, I enjoy taking projects from concept to
              deployment.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About
