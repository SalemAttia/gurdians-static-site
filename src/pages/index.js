import React from "react"

import Layout from "../components/layouts/layout"
import Banner from "../components/Banner/Banner"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner></Banner>
  </Layout>
)

export default IndexPage
