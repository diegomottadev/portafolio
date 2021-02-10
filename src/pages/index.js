import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {


  const {allStrapiProjects:{nodes:projects}} = data;

  return (<Layout>
    <Hero></Hero>
    <Services/>
    <Jobs/>
    <Projects projects={projects} title="featured projects" showLink/>
  </Layout>)
}
// ...GatsbyImageSharpFluid
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
}
`;