import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => (
  <Layout>
    <Head title="404" />
    <h1>404 - Not Found</h1>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default NotFound