import React from "react"

import Layout from "../components/layouts/layout"
import MainContent from "../components/MainContent/MainContent"
import MindSetComponent from '../components/MindSetComponent/MindSetComponent'
import SEO from "../components/seo"

const MindSet = () => (
  <Layout>
    <SEO title="mind set" />
    <MainContent>
      <MindSetComponent></MindSetComponent>
    </MainContent>
  </Layout>
)

export default MindSet
