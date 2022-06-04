import React, { useState } from 'react';
import {FaBars} from "react-icons/fa";
import Menu from './Menu'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    return (
        <div className="container">
           <div style={{width: isOpen ? "50px" : "200px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "none" : "block"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "-5px" : "50px"}} className="bars">
                       <h2 style={{display: isOpen ? "block" : "none"}}>M</h2>
                   </div>
               </div>
               {
                   Menu.map((item, index)=> {
                       return (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className="link_text">{item.name}</div>
                        </NavLink>
                       )
                   })
               }
           </div>
           <main><FaBars onClick={toggle}/>{children}</main>
        </div>
    );
};

export default Sidebar;