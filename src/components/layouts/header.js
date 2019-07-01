import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  console.log(window.location.pathname);
  var color = 'none'
  var position = 'absolute'
  if(window.location.pathname !== '/'){
    color = '#3A3C44'
    position = 'relative'
  }
  
  return (<header className="header_area animated" style={{
    background: color,
    position: position,
  }}>
  <div className="container-fluid">
      <div className="row align-items-center">

          <div className="col-12">
              <div className="menu_area">
                  <nav className="navbar navbar-expand-lg navbar-light">

                      <a className="navbar-brand" href="/">
                           <img src="/assets/img/core-img/logo.png" className="l"alt="logo" />
                      </a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                      <div className="collapse navbar-collapse" id="ca-navbar">
                          <ul className="navbar-nav ml-auto" id="nav">
                              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/technology-stack/">Technology Stack</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/open-source">Open Source</Link></li>
                              <li className="nav-item"><Link className="nav-link "to="/blog">Blog</Link></li>
                              <li className="nav-item"><Link className="nav-link "to="/mind-set">Mind Set</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/contactus">Contact Us</Link></li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>

      </div>
  </div>
</header>
);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
