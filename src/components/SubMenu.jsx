import React from 'react'
import {FaAngleDown} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const SubMenu = ({item, isOpen}) => {
  return (
    <>
        <div className="submenu">
            <div className="submenu-item">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "none" : "block"}} className="link_text">{item.name}</div>
            </div>
            <div><FaAngleDown/></div>
        </div>
        {
          item.submenu.map((subItem, index) => {
            return <NavLink to={subItem.path} key={index} className="link" activeClassName="active">
                <div className="icon">{subItem.icon}</div>
                <div style={{display: isOpen ? "none" : "block"}} className="link_text">{subItem.name}</div>
            </NavLink>
          })
        }
    </>
  )
}
export default SubMenu;