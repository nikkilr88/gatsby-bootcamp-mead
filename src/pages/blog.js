import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import BlogStyles from '../styles/blog.module.scss'
import Head from '../components/head'


const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            slug
            title
            publishedDate(fromNow:true)
          }
        }
      }
    }
  `)

  const postsList = posts.allContentfulBlogPost.edges.map(edge => (
    <li className={BlogStyles.post}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>


        <p>Published {edge.node.publishedDate}</p>
      </Link>
    </li>
  ))
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ul className={BlogStyles.posts}>{postsList}</ul>
    </Layout>
  )
}

export default BlogPage
