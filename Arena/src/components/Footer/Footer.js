import React from "react";
import "./Footer.css"
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-text">
                <p>Copyright &copy; {new Date().getFullYear()} by Safar</p>
            </div>
            <div class="footer-iconTop">
                <ScrollLink to="home" smooth={true} duration={500}><i class="bi bi-chevron-up"></i></ScrollLink>
            </div>
        </footer>
    )
}

export default Footer;