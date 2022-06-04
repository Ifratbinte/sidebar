import React, { useState } from 'react'
import {FaAngleDown} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const SubMenu = ({item}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
        <div className="submenu menu-toggle" onClick ={toggleMenu}>
            <div className="submenu-item">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
            </div>
            <div><FaAngleDown/></div>
        </div>
        {isMenuOpen && (
            <div>
              {
                item.submenu.map((subItem, i) => {
                  return <div>
                      <NavLink to={subItem.path} key={i} className="link" activeClassName="active">
                        <div className="icon">{subItem.icon}</div>
                        <div className="link_text">{subItem.name}</div>
                      </NavLink> 
                  </div>
                })
              }
            </div>
         )}
    </>
  )
}
export default SubMenu;