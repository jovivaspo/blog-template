import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <div>
        <h3>Not Found 404</h3>
        <p>
          Siga esta enlace para volver: <Link to="/">home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default Error
