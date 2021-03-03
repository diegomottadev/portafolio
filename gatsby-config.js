/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Diego Motta",
    description: "Este sitio web muestra mis experiencias y proyectos trabajando como desarrollador fullstack web",
    author: "Diego Motta",
    twitterUsername: "",
    image: "",//"/twitter-img.png",
    siteUrl: "https://diegomotta.com.ar",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`,`projects`,`freelances`], //`blogs`
        singleTypes:[`about`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    // },




    // allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
    //   nodes {
    //     slug
    //     description
    //     desc
    //     date(formatString: "MMMM Do, YYYY")
    //     id
    //     title
    //     category
    //     image {
    //       childImageSharp {
    //         fluid {
    //         ...GatsbyImageSharpFluid
    //         }
    //       }
    //     }
    //   }
    // }
  ],
}
