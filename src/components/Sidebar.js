import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import "../assets/css/sidebar.css"

const Sidebar = () => {
  const result = useStaticQuery(query)
  console.log(result)
  const lastPosts = result.allContentfulPost.nodes
  return (
    <div className="sidebar">
      <h3>Últimos posts</h3>
      {lastPosts.map((post, index) => {
        return (
          <h4 key={index}>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </h4>
        )
      })}
    </div>
  )
}

export default Sidebar

const query = graphql`
  query lastPost {
    allContentfulPost(limit: 10, sort: { order: DESC, fields: createdAt }) {
      nodes {
        title
        slug
        createdAt(fromNow: true)
      }
    }
  }
`
