/*MODULES*/
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
/*COMPONENTS*/
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
/*CSS*/
import "../assets/css/postTemplate.css"

const postTemplate = ({ data }) => {
  console.log("DATA", data)
  const { title, description, tag, image, body } =
    data.allContentfulPost.nodes[0]

  const content = JSON.parse(body.raw)

  const img = getImage(image)
  const content_images = data.allContentfulPost.nodes[0].body.references

  const renderOptions = content_images => {
    const assetMap = new Map()

    for (const asset of content_images) {
      assetMap.set(asset.contentful_id, asset)
    }

    return {
      renderMark: {
        [MARKS.BOLD]: text => <strong>{text}</strong>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          const asset = assetMap.get(node.data.target.sys.id)
          const imageToRender = getImage(asset.gatsbyImageData)
          return (
            <div className="img-container">
              <GatsbyImage image={imageToRender} alt={asset.description} />
            </div>
          )
        },
        [INLINES.HYPERLINK]: (node, children) => {
          return <a href={node.data.uri}>{children}</a>
        },
      },
    }
  }

  return (
    <Layout>
      <Header title={title} img={img} description={description} tag={tag} />
      <div className="full-content">
        <section>
          {" "}
          {documentToReactComponents(content, renderOptions(content_images))}
        </section>
        <Sidebar />
      </div>
    </Layout>
  )
}

export default postTemplate

export const query = graphql`
  query getAPost($title: String) {
    allContentfulPost(filter: { title: { eq: $title } }) {
      nodes {
        body {
          references {
            file {
              url
            }
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              cropFocus: CENTER
            )
            contentful_id
            description
          }
          raw
        }
        description
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 648, height: 458)
        }
        tag
        title
      }
    }
  }
`
