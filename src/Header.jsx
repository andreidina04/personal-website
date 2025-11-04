import React from "react";
import profilePic from './assets/me.jpg'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import {IoIosMail} from "react-icons/io"
import { IoLogoVercel } from "react-icons/io5";


function Header() {
return(

    <div id="container">
    <div id="imagine">
    <img src={profilePic} alt="Photo" style={{ width: "450px", height: "450px" }}/>
    </div>
    <div id="text-content">
    <div id="name">&lt;Hi, I'm Andrei/&gt;</div>
    <div id="social-links">
    <a href="https://github.com/andreidina04" target="_blank" rel="noopener noreferrer">
    <FaGithub className="github" size={42}/></a>
    <a href="https://www.linkedin.com/in/andrei-constantin-dina-54a232239/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="linkedin" size={42}/></a>
    <a href="https://www.facebook.com/andreidinaconstantin" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="facebook" size={42}/></a>
    <a href="https://www.instagram.com/andreidina.24/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="instagram" size={42}/></a>
    <a href="mailto: andreidina04@gmail.com" target="_blank" rel="noopener noreferrer">
    <IoIosMail className="mail" size={42}/></a>
    <a href="https://vercel.com/andreidina04s-projects" target="_blank" rel="noopener noreferrer">
    <IoLogoVercel className="vercel" size={42}/></a>
    </div>
    </div>
    </div>
    );
}
    export default Header;