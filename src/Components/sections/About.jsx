import React from 'react'
import profile from "../../assets/wanofi-profile.png";

import CV from "../../assets/Wanofi Israel Resume_2026.pdf"
function About() {
  return (
    <section className="section-about" id="about">
        <h1 className="section-title">About</h1>
        <div className="section-main">
          <img src={profile} alt="" className="profile" id="profile" />
          <div className="about">
            <p className="about-description">
            I’m a Computer Science graduate and Full-Stack Developer passionate about building practical, reliable, and user-friendly digital solutions. My experience covers both frontend and backend development, IT systems, and software solutions.
I have developed a variety of projects, including company websites, e-commerce platforms, landing pages, restaurant menu systems, personal portfolios, internal business applications, and custom management systems. I enjoy turning ideas and business requirements into functional applications and taking projects from planning and development through testing and deployment.
</p>
            <p className="about-description">

I also have experience in IT support and ERP systems, giving me a broader understanding of how technology can improve business processes and support daily operations. I am continuously learning new technologies, solving technical challenges, and looking for opportunities to create solutions that deliver real value.
            </p>
            <a href={CV} download="Wanofi_Israel.pdf" className='download-cv'>Download CV</a>
            {/* <p className="about-description">
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
            </p> */}
          </div>
        </div>
      </section>
  )
}

export default About
