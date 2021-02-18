import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {


  return (<Layout>
            <SEO title="Blog" description="latest articles"/>
            <section className="blog-page">
              <Blogs blogs={blogs} title="blog"></Blogs>
            </section>
          </Layout>
        )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        description
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Blog
