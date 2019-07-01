import React from "react"

import Layout from "../components/layouts/layout"
import MainContent from "../components/MainContent/MainContent"
import BlogComponent from "../components/Blog/Blog"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <MainContent>
        <BlogComponent title='all blogs'></BlogComponent>
    </MainContent>
  </Layout>
)

export default Blog
