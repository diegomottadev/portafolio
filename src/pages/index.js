import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import Freelances from "../components/Freelances"

export default ({data}) => {


  //imagenes optimizads cloudinary

  const {allStrapiProjects:{nodes:projects},allStrapiBlogs:{nodes:blogs},allStrapiFreelances:{nodes:freelances}} = data;

  return (<Layout>
            <SEO title="HOME"/>
            <Hero></Hero>
            <Services/>
            <Jobs/>
            <Freelances projects={freelances} title="Proyectos Freelances" showLink/>
            <Projects projects={projects} title="Proyectos Personales" showLink/>
            {/* <Blogs blogs={blogs} title="latest articles" showLink/> */}
        </Layout>)
}
// ...GatsbyImageSharpFluid
export const query = graphql`{
  allStrapiProjects(filter: {feature: {eq: false}},limit: 3) {
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
    
  allStrapiFreelances(filter: {feature: {eq: false}}, limit: 3) {
    nodes {
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