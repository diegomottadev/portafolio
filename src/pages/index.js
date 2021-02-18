import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({data}) => {

  //imagenes optimizads cloudinary

  const {allStrapiProjects:{nodes:projects},allStrapiBlogs:{nodes:blogs}} = data;

  return (<Layout>
            <SEO title="HOME"/>
            <Hero/>
            <Services/>
            <Jobs/>
            <Projects projects={projects} title="featured projects" showLink/>
            <Blogs blogs={blogs} title="latest articles" showLink/>
          </Layout>
        )
}

export const query = graphql`{
  allStrapiProjects(filter: {feature: {eq: false}}) {
    nodes {
      github
      id
      title
      description
      site
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stack {
        id
        skill
      }
    }
  }
  
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  
}
`;