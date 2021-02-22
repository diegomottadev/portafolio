import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" description="oops it's a dead end"/>
      <main className="error-page">
        <div className="error-container">
          <h1>Página no encontrada</h1>\
          <Link to="/" className="btn">Volver al home</Link>
        </div>
      </main>
    </Layout>

  )
}

export default Error
