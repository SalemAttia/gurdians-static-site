import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import MainContent from "../components/MainContent/MainContent"
import OpenSourceComponent from '../components/OpenSource/OpenSource'

const OpenSource = () => (
  <Layout>
    <SEO title="Open Source" />
    <MainContent>
      <OpenSourceComponent></OpenSourceComponent>
    </MainContent>
  </Layout>
)

export default OpenSource
