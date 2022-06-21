import React, { useState } from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaShoppingBasket,
    FaThList,
    FaImages,
    FaHome,
    FaTag,
    FaPeopleArrows,
    FaParagraph,
    FaDoorOpen
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon: <FaHome/>
        },
        {
            path:"/about",
            name:"Pos",
            icon: <FaTag/>
        },
        {
            path:"/analytics",
            name:"Orders",
            icon: <FaShoppingBasket />
        },
        {
            path:"/comment",
            name:"Order Status Screen",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Expense",
            icon:<FaShoppingBasket/>
        },
        {
            path:"/productList",
            name:"Customer Services",
            icon: <FaPeopleArrows/>
        },
        {
            path: "/report",
            name: "Report",
            icon: <FaTag />
        },
        {
            path: "/services",
            name: "Services",
            icon: <FaParagraph />
        },
        {
            path: "/logout",
            name: "Logout",
            icon: <FaDoorOpen />
        }
    ]
    return (
        <div className="container-nav">
           <div style={{width: isOpen ? "200px" : "70px"}} className="sidebar">
               <div className="top_section">
                    <h1 className="logo"><div><FaImages/></div></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"} } className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;