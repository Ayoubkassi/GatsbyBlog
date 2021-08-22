import * as React from "react"
import { Link , graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Ayoub's thoughts</h1>
      <h4>{ data.allMarkdownRemark .totalCount }</h4>
      { data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <span><h2>{node.frontmatter.title}  -  {node.frontmatter.date}</h2></span>
          <p>{node.excerpt}</p>
        </div>
      )) }
    </div>
  </Layout>
)


export const query = graphql`
  query {
  allMarkdownRemark {
    totalCount

    edges {
      node {
        id
        frontmatter {
          description
          title
          date
        }
        excerpt
      }
    }
  }
}
`
