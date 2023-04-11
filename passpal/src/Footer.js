import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaInstagram, FaGithub, FaFacebook, FaAppStore, FaGoogle } from 'react-icons/fa';



function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">

      <div className="text-center p-3" style={{ backgroundColor: "rgb(86, 186, 236)" }}>
        © {new Date().getFullYear()} PassPal
        <a href="https://twitter.com/yourtwitterhandle" className="text-light mx-3 fs-3"><FaTwitter /></a>
        <a href="https://www.instagram.com/yourinstagramhandle/" className="text-light mx-3 fs-3"><FaInstagram /></a>
        <a href="https://github.com/yourgithubusername" className="text-light mx-3 fs-3"><FaGithub /></a>
        <a href="https://www.facebook.com/" className="text-light mx-3 fs-3"><FaFacebook /></a>
        <a href="https://www.apple.com/app-store/" className="text-light mx-3 fs-3"><FaAppStore /></a>
        <a href="https://www.google.com/" className="text-light mx-3 fs-3"><FaGoogle /></a>
        
      </div>
    </footer>
  );
  
}

export default Footer;
