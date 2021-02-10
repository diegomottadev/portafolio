import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) =>{
  return (
      <Layout>
        <section className="projects-page">
          <Projects projects={projects} title="All projects"/>
        </section>
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
}
`;
export default ProjectsPage
