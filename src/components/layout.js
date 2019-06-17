import React from 'react'
import { Link } from 'gatsby'
import layoutStyles from './layout.module.css'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({children}) => (
  <div className={layoutStyles.container}>
    <header>
      <Link className={layoutStyles.h3style}>
        <h3>My Sweet Sites</h3>
      </Link>
      <ul>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/about/'>About</ListLink>
        <ListLink to='/contact/'>Contact</ListLink>
        <li>#</li>
      </ul>
    </header>
    {children}
  </div>
)
