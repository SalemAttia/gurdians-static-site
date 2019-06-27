/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={
        [
          {name:'description', content:'this guardins site'},
          {name:'keywords', content:'web development'},
        ]
      }
    />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          {` `}
          <div className="copy">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>© {new Date().getFullYear()}, Guardians-labs</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
