import React, { useState } from "react";
import "./Header.css"
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    const [showNav,setShowNav] = useState(false)

    const nav_links = [
        {
            path:'home',
            display:'Home'
        },
        {
            path:'about',
            display:'About'
        },
        {
          path:'games',
          display:'Games'
        },
        {
            path:'contact',
            display:'Contact'
        }
    ]

    function handleNavbar (){
       setShowNav(!showNav)
    }

    return <>
        <div className="header">
            <ScrollLink to='home' className="logo" smooth={true} duration={500} ><span>A</span>rena</ScrollLink>
            <i id="menu-icon"  class={!showNav ? 'bi bi-list' : 'bi bi-x'} onClick={handleNavbar} ></i>
            <div className={`navbar ${showNav ? 'active' : ''}`}>
            {nav_links.map((item)=>{
                return (
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={500}
                key={item.path}
                onClick={handleNavbar}
                activeClass="active-link"
                spy={true}
              >
                {item.display}
              </ScrollLink>
            );
            })}
            </div>
        </div>
    </>
}

export default Header