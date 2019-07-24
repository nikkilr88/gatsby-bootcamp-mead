import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const { header, title, navItem, navList, activeNavItem } = headerStyles

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={header}>
      <Link to="/" className={title} activeClassName={activeNavItem}>
        <h2>{data.site.siteMetadata.title}</h2>
      </Link>
      <nav>
        <ul className={navList}>
          <li>
            <Link to="/" className={navItem} activeClassName={activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={navItem}
              activeClassName={activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={navItem}
              activeClassName={activeNavItem}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={navItem}
              activeClassName={activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
