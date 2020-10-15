import React from 'react'
import Preview from '../../src/components/Preview/Preview'

const index = () => {
    return (
        <main className="main">
        <div className="container">
          <div className="inner">
            <div className="inner__headings">
              <h5 className="inner__sub">Our Capabilities</h5>
              <h2 className="inner__head">Having attractive
                services has never
                been <span className="inner__clr">easier.</span></h2>
            </div>
            <div className="inner__content">
              <p className="inner__text">We're brand strategy and digital design agency, building brands that
                matter in culture with more than ten years of knowledge e and in to do expertise and digital design agency or brands.</p>
            </div>
          </div>
          <div className="cards-grid">
            <div className="card">
              <img className="card__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-ux.svg" alt="ux-design" />
              <div className="card__body">
                <h4 className="card__head">UI/UX Design</h4>
                <p className="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
              </div>
            </div>
            <div className="card">
              <img className="card__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-dev.svg" alt="development" />
              <div className="card__body">
                <h4 className="card__head">UI/UX Design</h4>
                <p className="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
              </div>
            </div>
            <div className="card">
              <img className="card__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-brand.svg" alt="brand" />
              <div className="card__body">
                <h4 className="card__head">UI/UX Design</h4>
                <p className="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default index
