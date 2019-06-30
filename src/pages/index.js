import React from "react"

import Layout from "../components/layouts/layout"
import Banner from "../components/Banner/Banner"
import TechStack from "../components/TechStack/TechStack"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Banner></Banner>
    <TechStack></TechStack>
  </Layout>
)

export default IndexPage
