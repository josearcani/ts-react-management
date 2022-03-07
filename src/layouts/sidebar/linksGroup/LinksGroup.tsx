import React from 'react'
import { NavLink } from 'react-router-dom'
import './linksGroup.css'

const LinksGroup = ({ link, iconName, header }:any) => {
  return (
    <li className="app__sidebar-links-group">
      <NavLink
        to={ link }
        // activeClassName={s.headerLinkActive}
        // exact={true}
        className="app__sidebar-links-item"
      >
        { iconName }
        <span>
        { header }
        </span>
      </NavLink>
    </li>
  )
}

export default LinksGroup