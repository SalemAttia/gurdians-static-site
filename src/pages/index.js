import React from "react"

import Layout from "../components/layouts/layout"
import Banner from "../components/Banner/Banner"
import TechStack from "../components/TechStack/TechStack"
import MindSet from '../components/MindSetComponent/MindSetComponent.js'
import Blog from "../components/Blog/Blog"
import OpenSource from "../components/OpenSource/OpenSource.js"
import Contact from "../components/Contact/Contact.js"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Banner></Banner>
    <TechStack></TechStack>
    <Blog title="recent blog"></Blog>
    <MindSet title="Mind Set"></MindSet>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
