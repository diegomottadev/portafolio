import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiProjects(filter: {feature: {eq: true}}) {
      nodes {
        title
        github
        description
        id
        site
        stack {
          id
          skill
        }
      }
    }
  }
`
const Projects = () => {
  return <h2>projects list</h2>
}

export default Projects
