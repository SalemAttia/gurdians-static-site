import React from "react"

import Layout from "../components/layouts/layout"
import Contact from '../components/Contact/Contact'
import MainContent from "../components/MainContent/MainContent"
import SEO from "../components/seo"

const Contactus = () => (
  <Layout>
    <SEO title="contact us" />
    <MainContent>
      <Contact></Contact>
    </MainContent>
  </Layout>
)

export default Contactus
