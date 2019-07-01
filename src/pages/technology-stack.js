import React from "react"

import Layout from "../components/layouts/layout"
import MainContent from "../components/MainContent/MainContent"
import TechStack from "../components/TechStack/TechStack"
import SEO from "../components/seo"

const TechnologyStack = () => (
  <Layout>
    <SEO title="Technology Stack" />
    <MainContent>
        <TechStack></TechStack>
    </MainContent>
  </Layout>
)

export default TechnologyStack
