import React from 'react'

function Work({card}) {
  return (
    <section className="work" id="work">
        <h1 className="section-title workafter">Work</h1>
        <div className="section-main">
          <div className="work_list">{card}</div>
        </div>
      </section>
  )
}

export default Work
