import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
//reactMarkdown
import ReactMarkdown from "react-markdown"

const ComponentName = ({data}) => {
  const {description} = data.blog;
  return (
    
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={description}/>
          </article>
          <Link to="/blog" className="btn center-btn">blog</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      description
    }
  }
`

export default ComponentName
